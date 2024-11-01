import React from 'react';
import styled from 'styled-components';

// Styled component for the iframe

const Title = styled.h1`
  margin: 20px 0;
  font-size: 32px; /* You can adjust the size as needed */
  color: ${({ theme }) => theme.secondary};
  text-align: center; /* Centers the title */
`;

const Description = styled.p`
  margin-bottom: 20px;
  color: ${({ theme }) => theme.gray_one};
  text-align: center; /* Centers the description */
`;
const Iframe = styled.iframe`
  width: 100%; /* Allow iframe to take up full width */
  max-width: 1200px; /* Optional: Set a maximum width */
  height: 800px; /* Adjust the height as needed */
  display: block;
  margin-left: auto;
  margin-right: auto;
  border: none; /* Remove border */
`;

const CreativeCoding = () => {
  return (
    <div>
      <Title>Creative Coding</Title>
      <Description>
        An interactive code exploration using Perlin noise 
      </Description>
      <Iframe 
        src="https://editor.p5js.org/srivikashini_k/full/lcmW57vsW" 
        title="Creative Coding Projects" 
        allowFullScreen
      />
    </div>
  );
};

export default CreativeCoding;
