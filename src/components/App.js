import { BrowserRouter, Route, Routes } from "react-router-dom";
import styled from "styled-components";
import MoviesPage from "../pages/MoviesPage";
import GlobalStyles from "../GlobalStyles";
import Header from "./Header";
import SelectedMoviePage from "../pages/SelectedMoviePage";
import SelectedSessionPage from "../pages/SelectedSessionPage";
import { useState } from "react";
import SuccessPage from "../pages/SuccessPage";

function App() {
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [seats, setSeats] = useState(undefined)
  const [nome , setNome] = useState("")
  const [cpf , setCpf] = useState("")
  const [seatsName , setSeatsName] = useState([])
  const [movieTitle , setMovieTitle] = useState("")
  const [movieDay , setMovieDay] = useState("")
  const [movieTime , setMovieTime] = useState("")
  const [finalInfo, setFinalInfo] = useState([])

  function handleSeat(seat){

    if(!selectedSeats.includes(seat)){
      setSelectedSeats([...selectedSeats,seat])
    }
    else{
      const filteredSeats = selectedSeats.filter((s) => !(s === seat));
      setSelectedSeats([...filteredSeats])
    }

  }


  return (
    <BrowserRouter>
      <Conteiner>
      <GlobalStyles/>
      <Header/>
      <Routes>
        <Route path="/" element={<MoviesPage />} /> 
        <Route path="/SelectedMoviePage/:movieId" element={<SelectedMoviePage/>}/>
        <Route 
        path="/SelectedSessionPage/:showtimesId" 
        element={<SelectedSessionPage selectedSeats = {selectedSeats}
        handleSeat = {handleSeat}
        nome = {nome}
        setNome = {setNome}
        cpf = {cpf}
        setCpf = {setCpf}
        setSeatsName={setSeatsName}
        setMovieTitle={setMovieTitle}
        seats={seats}
        setSeats={setSeats}
        setMovieDay = {setMovieDay}
        setMovieTime = {setMovieTime}
        />} 
        />
        <Route path="/SuccessPage" element={<SuccessPage
        seatsName = {seatsName}
        movieTitle = {movieTitle}
        movieDay = {movieDay}
        movieTime = {movieTime}
        nome = {nome}
        cpf = {cpf}
        setCpf = {setCpf}
        setNome = {setNome}
        setSelectedSeats = {setSelectedSeats}
        
        />} /> 
      </Routes>
      </Conteiner>
    </BrowserRouter>
  )
}

export default App;

const Conteiner = styled.div`
  display: flex;
  flex-direction: column;
`
