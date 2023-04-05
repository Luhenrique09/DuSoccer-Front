import { useNavigate } from "react-router-dom";
import styled from "styled-components"
import api from "../../services/api";
import useAuth from "../../hooks/useAuth";


export function Dashboard() {
  const navigate = useNavigate();
  const { auth } = useAuth();

  function logout(token) {
    const promise = api.logout(token)
    promise.then((resp) => {

      localStorage.removeItem('auth')
      navigate("/")
    })
    promise.catch((err) => {
      console.log(err);
    });
  }

  function home() {
    navigate("/")
  }

  function addChampionship() {
    navigate("/addChampionship")
  }

  return (
    <Container>
      <Box onClick={home}>
        <a>Inicio</a>
      </Box>
      <Box onClick={addChampionship}>
        <a> + Crie seu Campeonato</a>
      </Box>
      <Box >
        <a>Meus Campeonatos</a>
      </Box>

      <Box onClick={() => logout(auth.token)}>
        <a>Sair</a>
      </Box>
    </Container>
  )
}

const Container = styled.div`

height: 100vh;

  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`

const Box = styled.div`
  margin: 22px 10px 0 13px;
  padding: 10px;
  text-decoration: none;
  transition: background-color 0.2s ease-in-out;

  display: block;

  overflow: hidden;
  text-overflow: ellipsis;

  border: none;
  border-radius: 8px;
  outline: none;
  text-transform: uppercase;
  font-weight: 800;
  font-size: 15px;
  color: #2b124b;
  background-color: #00ff88;
  cursor:pointer;
  box-shadow: 0px 10px 40px -12px #00ff8052;
  
  :hover {
  background-color: #6147a3;
  color: #252526;
  }
`