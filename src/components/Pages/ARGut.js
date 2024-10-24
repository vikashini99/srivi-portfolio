// src/components/Pages/Ethnography.js
import React from 'react';
import styled from 'styled-components';

// Static imports for project images
import Image1 from '../ProjectInfoImage/ARGut/1.png';
import Image2 from '../ProjectInfoImage/ARGut/3.png';

import Image4 from '../ProjectInfoImage/ARGut/4.png';
import Image5 from '../ProjectInfoImage/ARGut/5.png';
import Image6 from '../ProjectInfoImage/ARGut/6.png';

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
`;

const Description = styled.p`
  font-size: 16px;
  color: ${({ theme }) => theme.gray_one};
  max-width: 600px;
  margin-bottom: 20px;
`;
const Iframe = styled.iframe`
  width: 1100px; /* Set to a fixed width to see if it changes */
  height: 550px; /* Adjust the height accordingly */
  display: block;
  margin-left: auto;
  margin-right: auto;
  border: none; /* Remove border */
`;
const Image = styled.img`
  width: 100%;
  max-width: 1140px;
  margin: 0;
`;

// Main component
const Ethnography = () => (
  <Container>
    <Title>Ethnography</Title>
    <Description>This is a detailed description of the Ethnography project...</Description>
    
    {/* Render Ethnography project images */}
    <Image src={Image1} alt="g Image 1" />
    <Image src={Image2} alt="g Image 2" />
    
    <Image src={Image4} alt="g Image 4" />
    <Image src={Image5} alt="g Image 5" />
    <Image src={Image6} alt="g Image 6" />
    <Iframe 
        src="https://www.youtube.com/embed/SoY2LsFyDnI"
        
        title="GUT"
        allowFullScreen
      />
  </Container>
);

export default Ethnography;
