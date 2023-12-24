import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Company from './components/pages/Company';
import Contact from './components/pages/Contact';
import Home from './components/pages/Home';
import NewProject from './components/pages/NewProject';
import NavBar from './components/layouts/NavBar';
import Footer from './components/layouts/Footer'
import Projects from './components/pages/Projects';
import Container from './components/layouts/Container';
import Project from './components/pages/Project';

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route exact path='/' element={
          <Container customClass="min-height">
            <Home />
          </Container>
        } />
        <Route path='/company' element={
          <Container customClass="min-height">
            <Company />
          </Container>
        } />
        <Route path='/Projects' element={
          <Container customClass="min-height">
            <Projects />
          </Container>
        } />
        <Route path='/contact' element={
          <Container customClass="min-height">
            <Contact />
          </Container>
        } />
        <Route path='/newproject' element={
          <Container customClass="min-height">
            <NewProject />
          </Container>
        } />
        <Route path='/project/:id' element={
          <Container customClass="min-height">
            <Project />
          </Container>
        } />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
