import styled from "styled-components"
import api from "../../services/api";
import useAuth from "../../hooks/useAuth";
import { useState } from "react";
import { useEffect } from "react";


export function Content() {
  const { auth } = useAuth();
  const [championship, setChampionship] = useState([]);

  useEffect(() => {
    const promise = api.getChampoionshipAll(auth.token);
    promise.then((response) => {
      setChampionship(response.data);

    });
    promise.catch((error) => {
      console.log(error.response);
    });

  }, []);
  console.log(championship)
  return (
    <Container>
      {championship.map(e => (
        <Card key={e.id}>
          <p>Nome: {e.name}</p><br/>
          <p>Organizador: {e.owner.name}</p><br/>
          <p>Contato: {e.owner.email}</p><br/>
          <p>Quantidade de times: {e.numTeam}</p><br/>
        </Card>
      ))}
    </Container>
  )
}

const Card = styled.div`
  padding: 5px;
  transition: background-color 0.2s ease-in-out;
 
  display: flex;
    justify-content: center;
    flex-direction: column;

    width: 190px;
    height:  190px;
    background: #fff;
    margin: 10px;
    border-radius: 20px;
    opacity: 0.1;
   

    cursor:pointer;
    :hover {
  background-color: #6147a3;
  color: #252526;
  }

  p{
  font-size:10px;
  font-weight: 800;
  color:  #2b124b;
}
  
`

const Container = styled.div`

  height: 100%;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`