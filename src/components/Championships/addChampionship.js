import styled from "styled-components"
import { Button, Checkbox, FormControlLabel, Radio, RadioGroup, TextField } from "@material-ui/core";
import { useState } from "react";
import useAuth from "../../hooks/useAuth";
import api from "../../services/api";
import { useNavigate } from "react-router-dom";

export function AddChampionshipComp() {
  const [value, setValue] = useState("");
  const [name, setName] = useState("");
  const [numTeam, setNumTeam] = useState("");
  const { auth } = useAuth();
  const navigate = useNavigate();
 
  const body = {
    name, 
    numTeam, 
    returnPlay: value,
  }

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  function handleSave (e)  {
    e.preventDefault();
   
    const promise = api.createChampionship(body, auth.token)
    
    promise.then((resp) => {
      navigate("/home")
     
      console.log(body);

    });
    promise.catch((err) => {
     console.log(err.response.data);
    });

  };

  return (
    <Container>

      <Form>
        <TextField fullWidth variant="standard" label="Nome do Campeonato" type="text"
          value={name}
          onChange={e => setName(e.target.value)}
          required />
        <TextField fullWidth variant="standard" label="Quantos times" type="number"
          value={numTeam}
          onChange={e => setNumTeam(e.target.value)}
          required />


        <RadioGroup
          value={value}
          onChange={handleChange}
        >
          <FormControlLabel
            value="true"
            control={<Radio />}
            label="Jogos de ida e volta"
          />
          <FormControlLabel
            value="false"
            control={<Radio />}
            label="Jogos somente ida"
          />
        </RadioGroup>
        <Button 
        variant="contained" 
        style={{ backgroundColor: "#00ff88" }} 
        onClick={handleSave}>
          Criar Campeonato
        </Button>
      </Form>
    </Container>
  )
}


const Container = styled.div`

  height: 100%;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`

const Form = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
 
  align-items: flex-start;
  input{
    width: 25vw;
  }
`

/* const Button = styled.button`
  width: 100%;
  padding: 16px 0px;
  margin: 25px 0;
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
`; */