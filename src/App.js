import logo from './logo.svg';
import './App.css';
import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
import {
  BrowserRouter,
  Routes,
  Route,
  Redirect,
} from "react-router-dom";
import Home from './pages/Home';
import About from './pages/About';
import Users from './pages/Users';
import { Navbars } from './Navbar';


function App() {


  return (
    <div className="App">
     <BrowserRouter>
     <Navbars/>

      <Routes>
      <Route index path="/"  element={ <Home/>} />
        <Route exact path="/user" element={<Users/>} />
        <Route path="/about" element={<About/>}  />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
