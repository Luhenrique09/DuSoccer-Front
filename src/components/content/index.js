import styled from "styled-components"

export function Content (){
  return(
    <Container>
        <div>a</div>
        <div>a</div>
        <div>a</div>
        <div>a</div>
        <div>a</div>
        <div>a</div>
        <div>a</div>
        <div>a</div>
        <div>a</div>
        <div>a</div>
        <div>a</div>
    </Container>
  )
}

const Container = styled.div`
  height: 100%;
  width: 100%;
 


  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  div{
    width: 180px;
    height:  200px;
    background: #fff; /* radial-gradient(circle at center, #0077dd, #1a237e ); */
    margin: 10px;
    border-radius: 20px;
    opacity: 0.1;

    display: flex;
    justify-content: center;
    align-items: center;
  }

`