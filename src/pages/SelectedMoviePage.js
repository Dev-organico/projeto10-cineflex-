import { hover } from "@testing-library/user-event/dist/hover"
import axios from "axios"
import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import styled from "styled-components"

export default function SelectedMoviePage() {
    const { movieId } = useParams()
    const [sessions, setSessions] = useState(undefined)

    useEffect(() => {
        const URL = `https://mock-api.driven.com.br/api/v8/cineflex/movies/${movieId}/showtimes`
        const promise = axios.get(URL)
        promise.then(res => {
            setSessions(res.data)
            console.log(res.data)
        })
        promise.catch(err => console.log(err.response.data))
    }, [])


    if (sessions === undefined) {
        return <DivLoading>Carregando...</DivLoading>
    }


    return (
        <Conteiner>
            <Title>
                <p>
                    Selecione o Horário
                </p>
            </Title>
            <Sessions>
                {sessions.days.map(el => (

                    <Session key={el.id}>
                        <Day>
                            <p>{`${el.weekday} - ${el.date}`}</p>
                        </Day>
                        <SessionTime>
                        {el.showtimes.map(i => (
                            <Link key={i.id} style={{textDecoration: 'none'}} to={`/`}>
                                <Button>{i.name}</Button>
                            </Link>
                        ))}
                        </SessionTime>
                    </Session>
                )
                )}
            </Sessions>
            <Footer>
                <FooterImage>
                    <img src={sessions.posterURL} />
                </FooterImage>
                <p>{sessions.title}</p>
            </Footer>
        </Conteiner>
    )
}

const Conteiner = styled.div`
    padding-top: 67px;
    width: 375px;
    height: auto;
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
const DivLoading = styled.div`
    padding-top: 67px;
`

const Sessions = styled.div`
    margin-top: 50px;
    width: 375px;
    height: auto;
    padding-bottom: 117px;


`
const Session = styled.div`
    width: 242px;
    height: 110px;
    margin-left: 23px;
    margin-top: 27px;
    

`
const Day = styled.div`
    width: 250px;
    display: flex;
    flex-direction: row;
    p{
        font-family: 'Roboto', sans-serif;
        font-size: 20px;
        color: #293845;
    }
`

const Button = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 82px;
    height: 43px;
    background-color: #E8833A;
    margin-right: 10px;
    border: none;
    border-radius: 3px;
    font-family: 'Roboto', sans-serif;
    font-size: 18px;
    text-decoration:none;
    color: #FFFFFF;
    cursor: pointer;
    p{
        text-decoration: none;
    }

`
const SessionTime = styled.div`
    margin-top:35px;
    display: flex;
    flex-direction: row;
    width: 250px;
    
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