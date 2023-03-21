import styled from 'styled-components';
import { TextField } from "@material-ui/core";
import { Link } from 'react-router-dom';

export default function SignIn() {

  return (
    <Page>
      <Row>
        <img />
        <Title>DuSoccer</Title>
      </Row>
      <Row>
        <Label>Entrar</Label>
        <form>
          <TextField label="E-mail" type="text" fullWidth/*  value={email}  onChange={e => setEmail(e.target.value)} */ />
          <TextField label="Senha" type="text" fullWidth />

          <Button variant="contained">Entrar</Button>
        </form>
      </Row>
      <Row>
        <Link to="/sign-up"><A>Não possui login? Inscreva-se</A></Link>
      </Row>
    </Page>
  );
}



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
  font-size: 18px;
  padding: 8px 16px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;