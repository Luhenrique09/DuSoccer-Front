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

  function handleSubmit(e) {
    e.preventDefault();
    setIsLoading(true);
    const promise = api.signUp(body);

    promise.then(() => {
      setIsLoading(false);
      navigate("/");
    });
    promise.catch((error) => {
      setIsLoading(false);
      console.log(error)
    });
  }


  return (
    <Container>
      <LeftLoging>
        <h1> Venha fazer parte do nosso time</h1>

      </LeftLoging>
      <RightLogin>
        <CardLogin>
          <h1>CADASTRE-SE</h1>
          <Form>
            <TextField fullWidth variant="standard" label="Nome" type="text" value={name} onChange={e => setName(e.target.value)} disabled={isLoading} required />
            <TextField fullWidth variant="standard" label="E-mail" type="text" value={email} onChange={e => setEmail(e.target.value)} disabled={isLoading} required />
            <TextField fullWidth variant="standard" label="Senha" type="password" value={password} onChange={e => setPassword(e.target.value)} disabled={isLoading} required />
            <TextField fullWidth variant="standard" label="Repita sua senha" type="password" value={repeatPassword} onChange={e => setRepeatPassword(e.target.value)} disabled={isLoading} required />
            <Button onClick={handleSubmit} type="submit">Cadastrar</Button>
          </Form>
          <Link to="/"><A>Já está inscrito? Faça login</A></Link>
        </CardLogin>
      </RightLogin>

    </Container >

  );
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #201b2c;
  width: 100vw;
  height: 100%;
`
const LeftLoging = styled.div`
  width: 50vw;
  height: 100vh;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h1{
    color: #77ffc0;
    font-size: 40px;
  }
`

const RightLogin = styled.div`
  width: 50vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`
const CardLogin = styled.div`
  width: 60%;
  display: flex;
  justify-content: center;
  align-items: center;

  flex-direction: column;
  padding: 30px 35px ;
  background-color: #2f2841;
  border-radius: 20px;
  box-shadow: 0 10px 40px #00000056;

  h1{
    color: #00ff88;
    font-weight: 800;
    margin: 0;
  }
`
const Form = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  input{
    width: 25vw;
  }
`

const A = styled.div`
  text-decoration: none;
  color: #201b3c;
  font-size: 18px;
  &:hover {
    text-decoration: underline;
    cursor: pointer;
  }
`;

const Button = styled.button`
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
`;
