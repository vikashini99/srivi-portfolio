// src/components/Pages/Ethnography.js
import React from 'react';
import styled from 'styled-components';

// Static imports for project images
import Image1 from '../ProjectInfoImage/Samagra/CSoon.png';


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
const Samagra = () => (
  <Container>
    <Title>Samagra</Title>
    <Description>Designed  intuitive and accessible user experiences for digital government products that enhanced usability and citizen engagement.</Description>
    
    {/* Render Ethnography project images */}
    <Image src={Image1} alt="g Image 1" />
    
      
  </Container>
);

export default Samagra;
