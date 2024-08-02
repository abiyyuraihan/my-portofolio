// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { CssBaseline, Box } from '@mui/material';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Business from './pages/Business';
import Projects from './pages/Projects';
import Blogs from './pages/Blogs';
import About from './pages/About';
import Contact from './pages/Contact';
import NeuralBackground from './components/NeuralBackground';
import ArduinoWokwi from './components/blogs/ArduinoWokwi';

function App() {
  return (
    <Router>
      <CssBaseline />
      <Box display="flex" flexDirection="column" minHeight="100vh" className="bg-black overflow-hidden">
        <NeuralBackground/>
        <Header />
        <Box component="main" flexGrow={1}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/business" element={<Business />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/arduinowokwi" element={<ArduinoWokwi />} />
          </Routes>
        </Box>
        <Footer />
      </Box>
    </Router>
  );
}


export default App;