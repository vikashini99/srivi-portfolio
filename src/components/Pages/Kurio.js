// src/components/Pages/Ethnography.js
import React from 'react';
import styled from 'styled-components';

// Static imports for project images
import Image1 from '../ProjectInfoImage/Kurio/1.png';
import Image2 from '../ProjectInfoImage/Kurio/2.png';
import Image3 from '../ProjectInfoImage/Kurio/3.png';

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
    margin-bottom: 20px;
`;

const Description = styled.p`
  font-size: 16px;
  color: ${({ theme }) => theme.gray_one};
  max-width: 1000px;
  margin-bottom: 20px;
`;

const Image = styled.img`
  width: 100%;
  max-width: 1140px;
  margin: 0;
`;

// Main component
const Kurio = () => (
  <Container>
    <Title>Kurio</Title>
    <Description>AI companion that encourages children to think critically and explore, fostering a love for learning that lasts a lifetime</Description>
    
    {/* Render Ethnography project images */}
    <Image src={Image1} alt="Ethnography Image 1" />
    <Image src={Image2} alt="Ethnography Image 2" />
    <Image src={Image3} alt="Ethnography Image 3" />
    
  </Container>
);

export default Kurio;
