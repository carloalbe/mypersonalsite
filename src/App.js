
import './App.css';
import MyNavbar from './components/navbar';
import MyFooter from './components/footer';

import Home from './components/pages/home';
import Education from './components/pages/education';
import Work from './components/pages/work';
import Projects from './components/pages/projects';
import Certification from './components/pages/certification';
import { Container } from "react-bootstrap";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

function shuffle(array) {
  let currentIndex = array.length,  randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex != 0) {

    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }
  return array;
};

function App() {
  return (<div style={{}}>

    
  <MyNavbar/>
    <Router>
<div className="App" style={{minHeight:"70vh"}}>
<Routes>
  <Route exact path="/" element={<Home/>} />
  <Route path="/education" element={<Education/>}/>
  <Route path="/work" element={<Work/>}/>
  <Route path="/projects" element={<Projects/>}/>
  <Route path="/certification" element={<Certification/>}/>
</Routes>
</div>
    </Router>

    
    
      

    <MyFooter style={{left:'0',right:'0',bottom:'0'}}/>
    
  </div>);
}

export default App;
