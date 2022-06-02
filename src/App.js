
import './App.css';
import MyNavbar from './components/navbar';
import MyFooter from './components/footer';

import Home from './components/pages/home';
import Education from './components/pages/education';
import Work from './components/pages/work';
import Projects from './components/pages/projects';
import { Container } from "react-bootstrap";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";


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
</Routes>
</div>
    </Router>

    
    
      

    <MyFooter style={{left:'0',right:'0',bottom:'0'}}/>
    
  </div>);
}

export default App;
