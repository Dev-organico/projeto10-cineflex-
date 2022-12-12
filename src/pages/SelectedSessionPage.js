import axios from "axios"
import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import styled from "styled-components"

export default function SelectedSessionPage({ selectedSeats, handleSeat, nome, setNome, cpf, setCpf,setSeatsName,setMovieTitle,setMovieDay,setMovieTime, seats,setSeats }) {
    const { showtimesId } = useParams()
    console.log(selectedSeats)
    const navigate = useNavigate()

    useEffect(() => {
        const URL = `https://mock-api.driven.com.br/api/v8/cineflex/showtimes/${showtimesId}/seats`
        const promise = axios.get(URL)
        promise.then(res => {
            setSeats(res.data)
            console.log(res.data)
        })
        promise.catch(err => console.log(err.response.data))
    }, [])

    function sendInfo(event) {
        event.preventDefault();
        const listId = selectedSeats.map((el) => el.id)
        const listName = selectedSeats.map((el) => el.name)
        setSeatsName(listName)
        setMovieTitle(seats.movie.title)
        setMovieDay(seats.day.date)
        setMovieTime(seats.name)
        console.log(nome, cpf, listId, listName)
        const obj = {
        ids: listId,
        name:nome,
        cpf:cpf
        }
        const request = axios.post("https://mock-api.driven.com.br/api/v8/cineflex/seats/book-many", obj)

		request.then(() => navigate("/SuccessPage"))
        request.catch((i)=> alert(i.data))

        
    }

    function notAvailable() {
        alert("Esse assento não está disponível")
    }

    if (seats === undefined) {
        return <DivLoading>Carregando...</DivLoading>
    }

    return (


        <><Conteiner>
            <Title>
                <p>
                    Selecione o(s) assento(s)
                </p>
            </Title>
            <Seats>
                {seats.seats.map((el) => {
                    if (el.isAvailable === true) {
                        if (!selectedSeats.includes(el)) {
                            return (
                                <Seat data-test="seat" onClick={() => handleSeat(el)} key={el.id}>
                                    {el.name}
                                </Seat>
                            )
                        }
                        else {
                            return (
                                <SeSeat data-test="seat" onClick={() => handleSeat(el)} key={el.id}>
                                    {el.name}
                                </SeSeat>

                            )
                        }
                    }
                    else {
                        return (
                            <NoSeat data-test="seat" key={el.id} onClick={notAvailable}>
                                {el.name}
                            </NoSeat>
                        )

                    }
                })}
            </Seats>
            <Info>
                <SelectedInfo>
                    <Green />
                    <p>Selecionado</p>
                </SelectedInfo>
                <SelectedInfo>
                    <Blue />
                    <p>Disponível</p>
                </SelectedInfo>
                <SelectedInfo>
                    <Orange />
                    <p>Indisponível</p>
                </SelectedInfo>
            </Info>
            <Form>
                <form onSubmit={sendInfo}>
                    <DivInput>
                        <label htmlFor="nome">Nome do comprador:</label>
                        <input
                            data-test="client-name"
                            placeholder="Digite seu nome..."
                            type="text"
                            id="nome"
                            value={nome}
                            onChange={(e) => setNome(e.target.value)}
                            required />
                    </DivInput>
                    <DivInput>
                        <label htmlFor="cpf">CPF do comprador:</label>
                        <input
                            data-test="client-cpf"
                            placeholder="Digite seu CPF..."
                            type="text"
                            id="cpf"
                            value={cpf}
                            onChange={(e) => setCpf(e.target.value)}
                            required />
                    </DivInput>
                    <button data-test="book-seat-btn" type="submit">
                        Reservar Assento(s)
                    </button>
                </form>
            </Form>

        </Conteiner>
        <Footer data-test="footer">
            <FooterImage>
                <img src={seats.movie.posterURL} />
            </FooterImage>
            <p>{seats.movie.title}<br/>{seats.day.weekday} - {seats.name}</p>
        </Footer></>




    )


}

const Conteiner = styled.div`
    display: flex;
    flex-direction:column;
    justify-content: center;
    align-items: center;
    padding-top: 67px;
    width: 375px;
    height: auto;
    padding-bottom:117px;
`

const Title = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: auto;
    height: auto;
    margin-top:50px;
    margin-bottom: 23px;
    p{
        color:#293845;
        font-family: 'Roboto', sans-serif;
        font-size: 24px;
    }
`
const Seats = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 375px;
    height: 120px;
    padding-left: 25px;
    padding-bottom: 117px;

`
const DivLoading = styled.div`
    padding-top: 67px;
`

const Seat = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 26px;
    width: 26px;
    margin:10px 5px;
    border-radius: 50%;
    border: 1px solid #7B8B99;
    background-color:#C3CFD9;
    box-sizing:border-box;
    font-size: 11px;
    font-family: 'Roboto', sans-serif;
    cursor: pointer;

`
const NoSeat = styled(Seat)`
    border: 1px solid #F7C52B;
    background-color:#FBE192;

`
const SeSeat = styled(Seat)`
    border: 1px solid #0E7D71;
    background-color:#1AAE9E;

`

const Info = styled.div`
    display:flex;
    justify-content: space-evenly;
    width: 375px;
    height: 50px;
    font-family: 'Roboto', sans-serif;
    font-size: 13px;
    color:#4E5A65;
    p{
        margin-top: 10px;
    }
`

const SelectedInfo = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

`

const Blue = styled.div`
    height: 26px;
    width: 26px;
    border-radius: 50%;
    border: 1px solid #7B8B99;
    background-color:#C3CFD9;
`

const Green = styled(Blue)`
    border: 1px solid #0E7D71;
    background-color:#1AAE9E;
`

const Orange = styled(Blue)`
    border: 1px solid #F7C52B;
    background-color:#FBE192;
`

const Form = styled.div`
    font-family: 'Roboto', sans-serif;
    font-size: 18px;
    font-weight: 400;
    margin-top: 40px;
    margin-left: 25px;
    color:#293845;
    input{
        width: 327px;
        height: 51px;
        border:1px solid #D4D4D4;
        color:#AFAFAF;
        font-size: 18px;
        font-style:italic;
        border-radius:3px;
        ::placeholder{
            padding-left: 18px;
        }  
    } 
    
    button{
        width: 225px;
        height: 42px;
        border-radius:3px;
        background-color:#E8833A;
        font-size:18px;
        color:white;
        border: none;
        margin-left: 48px;
        margin-top:60px;
        margin-bottom:30px;
    }
`

const DivInput = styled.div`
    margin-top: 8px;
`
const Footer = styled.footer`
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 375px;
    height: 117px;
    position: fixed;
    bottom: 0;
    background-color: #DFE6ED;
    p{
        font-family: 'Roboto', sans-serif;
        font-size:26px;
        color: #293845;
        font-weight:400;
        margin-left: 15px;
        line-height: 30px;

    }
`
const FooterImage = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 64px;
    height: 89px;
    background-color: #FFFFFF;
    margin-left: 10px;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
    border-radius: 2px;
    img{
        width: 48px;
    }
 
`