// src/components/Pages/BioRythm.js
import React, { useEffect } from 'react';
import styled from 'styled-components';

// Static imports for project images if needed
//import Image1 from '../ProjectInfoImage/BioRythm/1.png'; // Example
//import Image2 from '../ProjectInfoImage/BioRythm/2.png'; // Example

// Styled components
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 20px;
`;

const Title = styled.h1`
  font-size: 36px;
  color: ${({ theme }) => theme.secondary};
  font-family: 'Yeseva One', sans-serif;
  margin-bottom: 20px; // Add margin for better spacing
`;

const Description = styled.p`
  font-size: 16px;
  color: ${({ theme }) => theme.gray_one};
  max-width: 1000px;
  margin-bottom: 20px; // Spacing after description
`;

const AdditionalInfo = styled.p`
  font-size: 16px;
  color: ${({ theme }) => theme.gray_one};
  max-width: 1000px;
  margin-bottom: 20px; // Spacing for additional info
`;

const Iframe = styled.iframe`
  width: 1100px; 
  height: 550px; 
  display: block;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 30px; // Space below each iframe
  border: none; // Remove border for cleaner look
`;

// Main component
const BioRythm = () => {
  useEffect(() => {
    // Scroll to the top of the page when the component mounts
    window.scrollTo(0, 0);
  }, []);

  return (
    <Container>
      <Title>BioRythm</Title>
      <Description>
        Bio Rhythm is an immersive audio-visual exploration at the intersection of art, science, and technology, inviting audiences to see and hear the mesmerizing dynamics of brain neuron activity.
        This speculative ASMR experience fuses intricate visualizations with ambient sounds to simulate the sensation of neuron firing and the delicate rhythms of brain activity.
      </Description>
      


      {/* Render Iframes for videos */}
      <Iframe 
        src="https://www.youtube.com/embed/MH8sucJWHoE"  
        title="Bio Rhythm Overview"
        allowFullScreen
      />
      <Iframe 
        src="https://www.youtube.com/embed/CR5e8lLYpdE"  
        title="Bio Rhythm Explanation"
        allowFullScreen
      />

      <AdditionalInfo>
        Behind the scenes 
      </AdditionalInfo>
      <Iframe 
        src="https://www.youtube.com/embed/Zk7ph0QXrJ0" 
        title="Behind the Scenes"
        allowFullScreen
      />
    </Container>
  );
};

export default BioRythm;
