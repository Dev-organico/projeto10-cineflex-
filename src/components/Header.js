import styled from "styled-components"

export default function Header(){
    return(

        <Conteiner>
            <p>CINEFLEX</p>

        </Conteiner>
    )
}


const Conteiner = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 375px;
  height: 67px;
  background-color: #C3CFD9;
  position: fixed;
  p{
    font-family: 'Roboto', sans-serif;
    font-weight:400;
    font-size:34px;
    color:#E8833A;

  }


  

`