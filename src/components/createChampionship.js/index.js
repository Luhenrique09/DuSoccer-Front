import { useState } from "react";
import useAuth from "../../hooks/useAuth";
import api from "../../services/api";
import styled from "styled-components";
import { Button, FormControlLabel, Radio, RadioGroup, TextField } from "@material-ui/core";

export function AddChampionshipComp({setHiddenAdd}) {
  const [value, setValue] = useState("");
  const [name, setName] = useState("");
  const [numTeam, setNumTeam] = useState("");
  const [image, setImage] = useState("");
  const { auth } = useAuth();
  const body = {
    name,
    numTeam,
    returnPlay: value,
    image,
  };

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  function handleSave(e) {
    e.preventDefault();

    const promise = api.createChampionship(body, auth.token);

    promise
      .then((resp) => {
        console.log(body);
      })
      .catch((err) => {
        console.log(err.response.data);
      });
  }

  function cancel(){
    setHiddenAdd(false);
  }

  return (
    <Overlay>
      <Form>
        <TextField
          fullWidth
          variant="standard"
          label="Nome do Campeonato"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <TextField
          fullWidth
          variant="standard"
          label="Url da logo"
          type="text"
          value={image}
          onChange={(e) => setImage(e.target.value)}
          required
        />
        <TextField
          fullWidth
          variant="standard"
          label="Quantos times"
          type="number"
          value={numTeam}
          onChange={(e) => setNumTeam(e.target.value)}
          required
        />

        <RadioGroup value={value} onChange={handleChange}>
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
        <Button variant="contained" color="primary" onClick={handleSave}>
          Criar Campeonato
        </Button>
        <Button variant="contained" onClick={cancel}>
          Cancelar
        </Button>
      </Form>
    </Overlay>
  );
}

const Overlay = styled.div`
  background-color: rgba(0, 0, 0, 0.6);
  position: absolute;
  z-index: 10;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Form = styled.div`
  padding: 30px;
  background-color: #fff;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;
