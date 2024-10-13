// src/components/Pages/Ethnography.js
import React from 'react';
import styled from 'styled-components';

// Static imports for project images
import Image1 from '../ProjectInfoImage/Ethno/1.png';
import Image2 from '../ProjectInfoImage/Ethno/2.png';
import Image3 from '../ProjectInfoImage/Ethno/3.png';
import Image4 from '../ProjectInfoImage/Ethno/4.png';
import Image5 from '../ProjectInfoImage/Ethno/5.png';
import Image6 from '../ProjectInfoImage/Ethno/6.png';
import Image7 from '../ProjectInfoImage/Ethno/7.png';
import Image8 from '../ProjectInfoImage/Ethno/8.png';
import Image9 from '../ProjectInfoImage/Ethno/9.png';
import Image10 from '../ProjectInfoImage/Ethno/10.png';
import Image11 from '../ProjectInfoImage/Ethno/11.png';

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
    <Image src={Image1} alt="Ethnography Image 1" />
    <Image src={Image2} alt="Ethnography Image 2" />
    <Image src={Image3} alt="Ethnography Image 3" />
    <Image src={Image4} alt="Ethnography Image 4" />
    <Image src={Image5} alt="Ethnography Image 5" />
    <Image src={Image6} alt="Ethnography Image 6" />
    <Image src={Image7} alt="Ethnography Image 7" />
    <Image src={Image8} alt="Ethnography Image 8" />
    <Image src={Image9} alt="Ethnography Image 9" />
    <Image src={Image10} alt="Ethnography Image 10" />
    <Image src={Image11} alt="Ethnography Image 11" />
  </Container>
);

export default Ethnography;
