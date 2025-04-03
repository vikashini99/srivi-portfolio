import { ThemeProvider } from "styled-components";
import { useState } from "react";
import { darkTheme, lightTheme } from './utils/Themes.js';
import Navbar from "./components/Navbar";
import './App.css';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import HeroSection from "./components/HeroSection";
import ProjectsPage from "./components/ProjectPage";
import CacophonicCadence from './components/Pages/CacophonicCadence';
import Pose from './components/Pages/Pose';
import Ethnography from './components/Pages/Ethnography'; 
import CreativeCoding from './components/Pages/CreativeCoding'; 
import Kinetics from './components/Pages/Kinetics'; 
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

function Layout({ children }) {
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  return (
    <>
      {!isHomePage && <Navbar />}
      {children}
    </>
  );
}

function App() {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <Router>
        <Body>
          <Layout>
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
              <Route path="/projects/5" element={<Kinetics />} />
              <Route path="/projects/7" element={<CreativeCoding />} />
              <Route path="/projects/10" element={<ARGut />} />
              <Route path="/projects/6" element={<BioRythm />} />
            </Routes>
          </Layout>
        </Body>
      </Router>
    </ThemeProvider>
  );
}

export default App;
