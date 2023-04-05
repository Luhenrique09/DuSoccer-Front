import styled from 'styled-components';
import { Content } from '../../components/content';
import { Dashboard } from '../../components/dashboard';

export default function Home() {

  return (
    <Container>
      <Page>
      <Dashboard />
      <Content/>
      </Page>
    </Container>
  )
}

 const Container = styled.div`
  background:#191426;
  display: flex;
  height: 100vh;
  width: 100vw;
  justify-content: center;
  align-items: center;

` 

 const Page = styled.div`
 background: #201B2C;
  display: flex;
  justify-content:  center;
  align-items: center;
  height: 100vh;
  width: 90vw;
  border-radius: 60px;

  border: 1px none #000;
  box-shadow: 0 0 10px 0px #000;


 
`