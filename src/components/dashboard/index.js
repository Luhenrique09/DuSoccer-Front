import styled from "styled-components"

export function Dashboard() {
  return (
    <Container>
      <div>
        logo do projeto
      </div>

      <div>
        <div>
          Pesquisar
        </div>
        <div>
          Crie seu Campeonato
        </div>
        <div>
          Campeonatos
        </div>
      </div>
      
      <div>
        Façar Login
      </div>
    </Container>
  )
}

const Container = styled.div`
 
  height: 100%;
  width: 200px;
  border-radius: 60px 0 0 60px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`