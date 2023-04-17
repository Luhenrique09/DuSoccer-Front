import { useEffect, useState } from "react";
import { FaArrowRight, FaPlus, FaTrash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import MyMenu from "../../components/menu";
import useAuth from "../../hooks/useAuth";
import api from "../../services/api";

export function PageUserChampionship() {
  const { auth } = useAuth();
  const [championship, setChampionship] = useState([]);
  const [name, setName] = useState('');
  const [selectedCard, setSelectedCard] = useState(null);
  const [hiddenAdd, setHiddenAdd] = useState(false);
  const navigate = useNavigate();
  if(hiddenAdd){
    navigate("/home")
  }
  useEffect(() => {
    const promise = api.getChampoionshipUser(auth.token);
    promise.then((response) => {
      setChampionship(response.data);

    });
    promise.catch((error) => {
      console.log(error.response.data);
    });

  }, []);

  function handleCardClick(card) {
    if (selectedCard && selectedCard.id === card.id) {

    } else {
      setSelectedCard(card);
    }
  }

  function createdTeam(event, { id }) {
    event.preventDefault();
    const body = {
      name,
      championshipsId: id
    }

    console.log(body)
    const promise = api.postTeams(body, auth.token);

    promise
      .then((resp) => {
        setSelectedCard(null);
        window.location.reload();
      })
      .catch((err) => {
        console.log(err.response.data);
      });

  }

  function deleteChampionship(championshipId) {
    const promise = api.deleteChampionship(championshipId, auth.token);

    promise
      .then((resp) => {
        window.location.reload();
        console.log(resp)
      })
      .catch((err) => {
        console.log(err.response.data);
      });
  }

  return (
    <>
      <MyMenu hiddenAdd={hiddenAdd} setHiddenAdd={setHiddenAdd} />
      <PageWrapper>
        {championship.map((card) => (
          <Card onClick={() => handleCardClick(card)} key={card.id}>
            <CardTitle>{card.name}</CardTitle>
            <CardImage src={card.image} alt={card.title} />
            <CardContent>{card.teams.length}/{card.numTeam} Times</CardContent>

            <DeleteButton onClick={() => deleteChampionship(card.id)}>
              <FaTrash />
            </DeleteButton>
            {card.teams.length < card.numTeam ? (
              selectedCard && selectedCard.id === card.id ? (
                <AddTeamForm>
                  <AddTeamInput
                    onChange={e => setName(e.target.value)}
                    value={name}
                    id="nome"
                    name='nome' type='text'
                    placeholder="Digite o nome da equipe" />
                  <SubmitButton onClick={(e) => createdTeam(e, card)}>
                    <FaArrowRight />
                  </SubmitButton>
                </AddTeamForm>
              ) : (
                <AddButton onClick={() => setSelectedCard(card.id)}>
                  <FaPlus /> Add Equipes
                </AddButton>
              )
            ) : null}

          </Card>
        ))}
      </PageWrapper>
    </>
  )
}

const AddButton = styled.button`
  position: absolute;
  bottom: 8px;
  right: 8px;
  background-color: transparent;
  color: white;
  border: none;
  cursor: pointer;
  font-size: 20px;
`;

const AddTeamForm = styled.form`
  position: absolute;
  bottom: 8px;
  right: 8px;
  display: flex;
  align-items: center;
`;

const AddTeamInput = styled.input`
  border: none;
  border-bottom: 1px solid white;
  background-color: transparent;
  color: white;
  margin-right: 8px;
  width: 100px;
`;

const SubmitButton = styled.button`
  background-color: transparent;
  color: white;
  border: none;
  cursor: pointer;
  font-size: 20px;
`;


const DeleteButton = styled.button`
  position: absolute;
  top: 5px;
  right: 5px;
  background-color: transparent;
  color: white;
  border: none;
  cursor: pointer;
  font-size: 20px;
`;

const PageWrapper = styled.div`
margin-top:50px ;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  background-color: #201b2c;
  padding: 24px;
`;

const Card = styled.div`
  background-color: #201b2c;
  color: white;
  border-radius: 4px;
  box-shadow: 10px 25px 15px 15px rgba(0, 0, 0, 0.25);
  padding: 16px;
  width: calc(33.33% - 16px);
  margin-bottom: 24px;
  position: relative;

  @media screen and (max-width: 768px) {
    width: calc(50% - 16px);
  }

  @media screen and (max-width: 480px) {
    width: 100%;
  }
`;

const CardTitle = styled.h2`
  font-size: 24px;
  margin-top: 0;
`;

const CardContent = styled.p`
  font-size: 16px;
`;

const CardImage = styled.img`
  max-width: 100px;
  height: auto;
  margin-bottom: 16px;
`;

