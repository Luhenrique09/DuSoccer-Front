import styled from 'styled-components';
import { Content } from '../../components/content';
import { Dashboard } from '../../components/dashboard';
import { SideBar } from '../../components/sidebar';

export default function Home() {
  return (
    <Container>
     
      <Page>
      <Dashboard/>
      <Content/>
      <SideBar/>
      </Page>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
  justify-content: center;
  align-items: center;
` 

const Page = styled.div`
  display: flex;
  justify-content:  center;
  align-items: center;
  height: 700px;
  width: 1200px;
  border-radius: 60px;

  border: 1px none #000;
  box-shadow: 0 0 10px 0px #000;
 
`