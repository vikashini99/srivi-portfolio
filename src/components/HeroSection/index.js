// src/components/HeroSection.js

import React from 'react';
import Sketch from '../Sketch'; // Adjust this according to your folder structure
// Ensure this import points to your Sketch component
import styled from 'styled-components';
import Typewriter from 'typewriter-effect';
import HeroImg from '../../images/HeroImage.jpg';
import { Bio } from '../../data/constants';

// Styled components for the hero section
const HeroContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  position: relative;
  overflow: hidden;
  background: #000; /* Add a background color if needed */
`;

const HeroContent = styled.div`
  position: absolute;
  text-align: center;
  z-index: 1;
  color: white;
`;

const Title = styled.h1`
  font-size: 4rem;
  font-weight: 700;
`;

const Subtitle = styled.h2`
  font-size: 2rem;
  font-weight: 400;
`;

const TypewriterText = styled.div`
  font-size: 2rem;
  color: ${({ theme }) => theme.primary};
`;

const Img = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  border: 2px solid ${({ theme }) => theme.primary};
`;

function HeroSection() {
  return (
    <HeroContainer>
      <Sketch />
      <HeroContent>
        <Img src={HeroImg} alt="Profile Image" />
        <Title>Hi, I am {Bio.name}</Title>
        <Subtitle>I am a <TypewriterText>
          <Typewriter
            options={{
              strings: Bio.roles,
              autoStart: true,
              loop: true,
            }}
          />
        </TypewriterText></Subtitle>
      </HeroContent>
    </HeroContainer>
  );
}

export default HeroSection;
