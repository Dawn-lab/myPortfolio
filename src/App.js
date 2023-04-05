import { Routes, Route } from 'react-router-dom';
// import Layout from './pages/Layout/layout';
import About from './pages/About/about';
import Contact from './pages/contact';
import Project from './pages/projects';
import { Container } from 'react-bootstrap';
import NavBar from './components/navBar';
import Footer from './components/footer';
// import './App.css';

function App() {
  return ( 
      <>
        <NavBar/>
        <Container className="mb-4"> 
            <Routes>
              <Route path="/" element={<About/>}/>
              <Route path="/About" element={<About/>}/>
              <Route path="/contact" element={<Contact/>}/>
              <Route path="/projects" element={<Project/>}/>
            </Routes>
          </Container>
          {/* <footer>
            my name is JULIEUS
          </footer> */}
          <Footer/>
      </>
    );
}

export default App;
