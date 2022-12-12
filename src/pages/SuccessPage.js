import { Link, useNavigate } from "react-router-dom"
import styled from "styled-components"

export default function SuccessPage({setSelectedSeats,seatsName,movieTitle ,movieDay,movieTime,nome,cpf , setNome, setCpf}){
    console.log(seatsName)
    console.log(nome)
    const navigate = useNavigate()

    function clear(){
        setCpf("")
        setNome("")
        setSelectedSeats([])
        navigate("/")
    }


    return (
        <Conteiner>
            <Title>
                <p>Pedido feito</p>
                <p>com sucesso!</p>
            </Title>
            <Movie>
                <p> Filmes e sessão </p>
                <h1>{movieTitle}<br/>{movieDay} {movieTime}</h1>
            </Movie>
            <Tickets>
                <p>Ingressos</p>
                <Ticket>
                {seatsName.map(i => (
                    <h1>Assento {i}</h1>
                ))}
                </Ticket>
            </Tickets>
            <Buyer>
                <p>Comprador</p>
                <h1>Nome: {nome}<br/>
                Cpf: {cpf}</h1>
            </Buyer>
            
            <button onClick={clear}>Volte para home</button>
            
            

        </Conteiner>
    )
}

const Conteiner = styled.div`
    display: flex;
    flex-direction:column;
    padding-top: 67px;
    width: 375px;
    height: auto;
    font-family: 'Roboto', sans-serif;

    button{
        color:white;
        background-color: #E8833A;
        width:225px;
        height: 42px;
        border: none;
        border-radius: 3px;
        margin-left: 90px;
        margin-top: 62px;
        margin-bottom: 200px;
        cursor: pointer;

    }

`



const Title = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: auto;
    height: auto;
    margin-top:50px;
    margin-bottom: 23px;
    p{
        color:#247A6B;
        font-weight:700;
        font-family: 'Roboto', sans-serif;
        font-size: 24px;
    }
`
const Movie =  styled.div`
    margin-top: 20px;
    margin-left: 30px;
    color:#293845;
    p{
        font-size: 24px;
        font-weight: 700;
        
    }
    h1{
        margin-top: 10px;
        font-size: 22px;
        font-weight: 400;
    }
`
const Tickets = styled.div`
    margin-top: 20px;
    margin-left: 30px;
    color:#293845;
    p{
        font-size: 24px;
        font-weight: 700;
        
    }
    h1{
        margin-top: 10px;
        font-size: 22px;
        font-weight: 400;
    }
`

const Ticket = styled.div`


`

const Buyer = styled.div`
    margin-top: 20px;
    margin-left: 30px;
    color:#293845;
    p{
        font-size: 24px;
        font-weight: 700;
        
    }
    h1{
        margin-top: 10px;
        font-size: 22px;
        font-weight: 400;
    }
`