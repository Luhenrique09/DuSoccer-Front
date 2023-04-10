import { useState } from "react";
import styled from "styled-components";
import { Cards } from "../../components/cardsChampionship";
import { AddChampionshipComp } from "../../components/createChampionship.js";
import MyMenu from "../../components/menu";

export function Home(){
  const [hiddenAdd, setHiddenAdd] = useState(false);
  return(
    <>
   <MyMenu hiddenAdd={hiddenAdd} setHiddenAdd={setHiddenAdd} />
   <PageWrapper>
    <Cards/>
    {hiddenAdd ? <AddChampionshipComp setHiddenAdd={setHiddenAdd}/> : null}
    </PageWrapper>
    </>
  )
}


const PageWrapper = styled.div`
margin-top:50px ;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  background-color: #201b2c;
  padding: 24px;
`;

