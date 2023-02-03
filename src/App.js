import { Routes, Route } from 'react-router-dom';
import Layout from './pages/layout';
import Home from './pages/home';
import Contact from './pages/contact';
import Project from './pages/projects';
import './App.css';

function App() {
  return (
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={<Home/>}/>
          <Route path='/contacts' element={<Contact/>}/>
          <Route path='/projects' element={<Project/>}/>
        </Route>
      </Routes>
  );
}

export default App;
