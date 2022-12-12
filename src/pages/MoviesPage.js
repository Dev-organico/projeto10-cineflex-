import axios from "axios"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import styled from "styled-components"


export default function MoviesPage() {
    const [movies, setMovies] = useState(undefined)

    useEffect(() => {
        const URL = "https://mock-api.driven.com.br/api/v8/cineflex/movies"
        const promise = axios.get(URL)
        promise.then(res => setMovies(res.data))            
        promise.catch(err => console.log(err.response.data))
    }, [])


    if (movies === undefined) {
        return <DivLoading>Carregando...</DivLoading>
    }



    return (
        <Conteiner>
            <Title>
                <p>
                    Selecione o Filme
                </p>
            </Title>
            <Movies>
                {movies.map(el => (
                    <Movie key={el.id} >
                        <Link to={`/SelectedMoviePage/${el.id}`} data-test="movie">
                            <img src={el.posterURL} alt={el.title} />
                        </Link>
                    </Movie>
                ))}
            </Movies>
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

const Movies = styled.div`
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    width:375px ;
    height: auto;
`
const DivLoading = styled.div`
    padding-top: 67px;
`
const Movie = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 27px;
    width: 145px;
    height: 209px;
    box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.1);
    border-radius: 3px;
    img{
        width: 129px;
    }
`