import 'bootstrap/dist/css/bootstrap.min.css'
import Container from 'react-bootstrap/Container';
import './App.css'
import NavBarEdunova from './components/NavBarEdunova';
import { Route, Routes } from 'react-router-dom';
import { RouteNames } from './constants';
import Pocetna from './pages/Pocetna';
import KonobariPregled from './pages/konobari/KonobariPregled';
import KonobariDodaj from './pages/konobari/KonobariDodaj';
import KonobariPromjena from './pages/konobari/KonobariPromjena';


function App() {

  return (
    <>
    <Container>
      <NavBarEdunova />
      <Routes>
        <Route path={RouteNames.HOME} element={<Pocetna/>} />

        <Route path={RouteNames.KONOBAR_PREGLED} element={<KonobariPregled/>}/>
        <Route path={RouteNames.KONOBAR_NOVI} element={<KonobariDodaj/>}/>
        <Route path={RouteNames.KONOBAR_PROMJENA} element={<KonobariPromjena/>}/>

      </Routes>
      <hr/>
      &copy; Edunova
    </Container>
    
    </>
  )
}

export default App
