import styled from 'styled-components';
import { TextField } from "@material-ui/core";
import { Link, useNavigate } from 'react-router-dom';
import api from '../../services/api';
import { useState } from 'react';
import useAuth from '../../hooks/useAuth';
import { useEffect } from 'react';


export default function SignIn() {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { auth, login } = useAuth();
  const body = {
    email,
    password
  }
 
    useEffect(() => {
      if(localStorage.getItem('auth')){
        navigate("/home");
      } 
    }, [navigate]);
   
  function handleSubmit(e) {
    e.preventDefault();

    setIsLoading(true);
    const promise = api.login(body);
    
    promise.then((response) => {
      setIsLoading(false);

      login(response.data);
      navigate("/home")
    });
    promise.catch((err) => {
      setIsLoading(false);

      console.log(err);
    });
  }


  return (
    <Container>
      <LeftLoging>
        <h1> Venha fazer parte do nosso time</h1>
       
      </LeftLoging>
      <RightLogin>
        <CardLogin>
          <h1>LOGIN</h1>
          <Form>
            <TextField fullWidth variant="standard"  label="E-mail" type="text" value={email} onChange={e => setEmail(e.target.value)} disabled={isLoading} required />
            <TextField fullWidth variant="standard"  label="Senha" type="password" value={password} onChange={e => setPassword(e.target.value)} disabled={isLoading} required />

            <Button onClick={handleSubmit} type="submit">Entrar</Button>
          </Form>
          <Link to="/sign-up"><A>Não possui login? Inscreva-se</A></Link>
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

  @media (max-width: 650px) {
      flex-direction: column;  
      justify-content: flex-start;   
    }
`
const LeftLoging = styled.div`
  width: 50vw;
  height: 100vh;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: 650px) {
      height: 10vh;
      margin-top: 50px;
      
    }

  h1{
    color: #77ffc0;
    font-size: 40px;

    @media (max-width: 650px) {
     font-size: 20px;
    }
  }
`

const RightLogin = styled.div`
  width: 50vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 650px) {
      width: 100vw;
    }

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
