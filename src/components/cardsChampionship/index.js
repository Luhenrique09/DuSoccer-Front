import { useEffect } from "react";
import { useState } from "react";
import styled from "styled-components";
import useAuth from "../../hooks/useAuth";
import api from "../../services/api";

export function Cards(){
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

  function teste({id}){
   
  }

  return(
    <>
      {championship.map((card) => (
        <Card onClick={() => teste(card)} key={card.id}>
          <CardTitle>{card.name}</CardTitle>
          <CardImage src={card.image} alt={card.title} />
          <CardContent>Organizador: {card.owner.name}</CardContent>
          <CardContent>{card.numTeam} Times</CardContent>
          <CardContent>Contato: {card.owner.email} </CardContent>
        </Card>
      ))}
    </>
  )
}


const Card = styled.div`
  background-color: #201b2c;
  color: white;
  border-radius: 4px;
  box-shadow: 10px 25px 15px 15px rgba(0, 0, 0, 0.25);
  padding: 16px;
  width: calc(33.33% - 16px);
  margin-bottom: 24px;

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

