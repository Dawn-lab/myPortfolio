import { Routes, Route } from 'react-router-dom';
// import Layout from './pages/Layout/layout';
import Home from './pages/Home/home';
import Contact from './pages/Contact/contact';
import Project from './pages/projects';
import { Container } from 'react-bootstrap';
import NavBar from './components/navBar';
// import './App.css';

function App() {
  return ( 
      <>
        <NavBar/>
        <Container className="mb-4"> 
            <Routes>
              <Route path="/" element={<Home/>}/>
              <Route path="/contact" element={<Contact/>}/>
              <Route path="/projects" element={<Project/>}/>
            </Routes>
          </Container>
      </>
    );
}

export default App;
