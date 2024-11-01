import { ThemeProvider } from "styled-components";
import { useState } from "react";
import { darkTheme, lightTheme } from './utils/Themes.js';
import Navbar from "./components/Navbar";
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HeroSection from "./components/HeroSection";
import ProjectsPage from "./components/ProjectPage";
import CacophonicCadence from './components/Pages/CacophonicCadence';
import Pose from './components/Pages/Pose';
import Ethnography from './components/Pages/Ethnography'; // Ensure you create this component
import CreativeCoding from './components/Pages/CreativeCoding'; // Import the new component
import Kinetics from './components/Pages/Kinetics'; // Import the new component
import ARGut from './components/Pages/ARGut.js'; 
import styled from "styled-components";
import BioRythm from "./components/Pages/BioRythm.js";
import Kurio from "./components/Pages/Kurio.js";
import Samagra from "./components/Pages/Samagra.js";

// Styled components
const Body = styled.div`
  background-color: ${({ theme }) => theme.bg};
  width: 100%;
  overflow-x: hidden;
`;

const Wrapper = styled.div`
  background: linear-gradient(38.73deg, rgba(204, 0, 187, 0.15) 0%, rgba(201, 32, 184, 0) 50%), 
  linear-gradient(141.27deg, rgba(0, 70, 209, 0) 50%, rgba(0, 70, 209, 0.15) 100%);
  width: 100%;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 30% 98%, 0 100%);
`;

function App() {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <Router>
        <Body>
          <Navbar />
          <Routes>
            <Route 
              path="/" 
              element={
                <>
                  <HeroSection />
                  <Wrapper>
                    {/* Include other components you want on the main page */}
                  </Wrapper>
                </>
              } 
            />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/projects/0" element={<Samagra />} />
            <Route path="/projects/1" element={<Ethnography />} />
            <Route path="/projects/2" element={<CacophonicCadence />} />
            <Route path="/projects/3" element={<Pose />} />
            <Route path="/projects/4" element={<Kurio />} />
            <Route path="/projects/5" element={<Kinetics/>} /> {/* Add the new route */}
            <Route path="/projects/7" element={<CreativeCoding />} /> {/* Add the new route */}
            <Route path="/projects/10" element={<ARGut />} />
            <Route path="/projects/6" element={<BioRythm />} />
            {/* Add other routes for more projects if needed */}
          </Routes>
        </Body>
      </Router>
    </ThemeProvider>
  );
}

export default App;
