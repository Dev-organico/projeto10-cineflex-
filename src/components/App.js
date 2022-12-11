import { BrowserRouter, Route, Routes } from "react-router-dom";
import styled from "styled-components";
import MoviesPage from "../pages/MoviesPage";
import GlobalStyles from "../GlobalStyles";
import Header from "./Header";
import SelectedMoviePage from "../pages/SelectedMoviePage";

function App() {
  return (
    <BrowserRouter>
      <Conteiner>
      <GlobalStyles/>
      <Header/>
      <Routes>
        <Route path="/" element={<MoviesPage />} /> 
        <Route path="/SelectedMoviePage/:movieId" element={<SelectedMoviePage/>}/>
        <Route/>
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
