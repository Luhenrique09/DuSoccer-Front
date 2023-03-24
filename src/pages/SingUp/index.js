import styled from 'styled-components';
import { TextField } from "@material-ui/core";
import { Link, useNavigate } from 'react-router-dom';
import api from '../../services/api';
import { useState } from 'react';

export default function Signup() {
  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState(false);
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [repeatPassword, setRepeatPassword] = useState('')
  const body = {
    name: name,
    email: email,
    password: password
  }

  function handleSubmit() {
    
    
      setIsLoading(true);
       const promise = api.signUp(body);
   
       promise.then(() => {
         setIsLoading(false);
         navigate("/");
       });
       promise.catch((error) => {
         setIsLoading(false);
         console.log(error)
         alert('Erro, tente novamente');
       });  
  }


  return (
    <Page>
      <Row>
        <img />
        <Title>DuSoccer</Title>
      </Row>
      <Row>
        <Label>Inscrição</Label>
        <Form >
          <TextField label="Nome" type="text" value={name} onChange={e => setName(e.target.value)} disabled={isLoading} required />
          <TextField label="E-mail" type="text" value={email} onChange={e => setEmail(e.target.value)} disabled={isLoading} required />
          <TextField label="Senha" type="password" value={password} onChange={e => setPassword(e.target.value)} disabled={isLoading} required />
          <TextField label="Repita sua senha" type="password" value={repeatPassword} onChange={e => setRepeatPassword(e.target.value)} disabled={isLoading} required />

          <Button onClick={handleSubmit} type="submit" >Entrar</Button>
        </Form>
      </Row>
      <Row>
        <Link to="/"><A>Já está inscrito? Faça login</A></Link>
      </Row>
    </Page>
  );
}
const Form = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 500px;
  height: 300px;
`

const Page = styled.div`

  background-size: cover;
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-size: 48px;

  & > *:not(:last-child) {
    margin-bottom: 24px;
  }

  & > * {
    text-align: center;
  }

  @media (max-width: 600px) {
    padding: 0;
  }
`;

const Title = styled.h1`
  font-size: 32px;
  margin-top: 10px;
`;

const Label = styled.h1`
  font-size: 24px;
  margin-bottom: 10px;
`;

const Row = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
`;


const A = styled.div`
  text-decoration: none;
  color: black;
  font-size: 18px;
  &:hover {
    text-decoration: underline;
    cursor: pointer;
  }
`;

const Button = styled.button`
background-color: rgb(21, 101, 192);
  color: white;
  font-size: 16px;
  padding: 8px 16px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;