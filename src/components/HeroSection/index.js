import React from 'react';
import Sketch from '../Sketch'; // Ensure this import points to your Sketch component
import styled, { keyframes } from 'styled-components';
import Typewriter from 'typewriter-effect';
import { Bio } from '../../data/constants'; // Ensure your Bio data is imported correctly
import HeroImg from '../../images/HeroImage.jpg';

// Keyframe animation for concentric circles
const expandAnimation = keyframes`
  0% {
    transform: scale(0.5);
    opacity: 1;
  }
  100% {
    transform: scale(2.5);
    opacity: 0;
  }
`;

// Styled components for the hero section
const HeroContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center; /* Vertically center the content */
  align-items: flex-start; /* Keep items aligned to the left */
  height: 100vh;
  position: relative;
  overflow: hidden;
  background: #232323; /* Background color */
  padding: 60px; /* Adjust this padding */
`;

const HeroContent = styled.div`
  text-align: left; /* Keep text left-aligned */
  z-index: 1;
  color: white;
  max-width: 600px; /* Set a max width to control the content's width */
  margin-left: 50px; /* Move content horizontally */
  margin-top: -100px; /* Move content vertically */
`;

const Title = styled.h1`
  font-size: 4rem;
  font-weight: 700;
  font-family: 'Yeseva One', cursive; /* Apply Yeseva One font */
  margin-bottom: 0; /* Remove bottom margin */
  display: inline; /* Ensures the text flows inline */
`;

const TypewriterText = styled.span`
  font-size: 4rem;
  color: ${({ theme }) => theme.secondary}; /* Adjust the color with theme */
  display: inline; /* Ensures the typewriter text stays inline */
  margin-right: 10px; /* Add a small space between the Typewriter text and the "I am" text */
`;

// Container for concentric circles
const CirclesContainer = styled.div`
  position: absolute;
  right: 300px; /* Adjust position as needed */
  top: 150px; /* Adjust position as needed */
  width: 300px; /* Increase container size for more circles */
  height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

// Styling for each concentric circle
const Circle = styled.div`
  position: absolute;
  width: 200px;
  height: 200px;
  border: 2px solid ${({ theme }) => theme.secondary}; /* Circle border color */
  border-radius: 50%;
  animation: ${expandAnimation} 4s infinite ease-out;
  opacity: 0;

  /* Adjust delay for each circle */
  &:nth-child(2) {
    animation-delay: 0.5s;
  }
  
  &:nth-child(3) {
    animation-delay: 1s;
  }

  &:nth-child(4) {
    animation-delay: 1.5s;
  }

  &:nth-child(5) {
    animation-delay: 2s;
  }

  &:nth-child(6) {
    animation-delay: 2.5s;
  }

  &:nth-child(7) {
    animation-delay: 3s;
  }
`;

function HeroSection() {
  return (
    <HeroContainer>
      <HeroContent>
        {/* Rotating Greetings */}
        <Title>
          <TypewriterText>
            <Typewriter
              options={{
                strings: ['Hello', 'नमस्ते', 'வணக்கம்'], // 'Namaste' in Hindi and 'Vanakkam' in Tamil
                autoStart: true,
                loop: true,
              }}
            />
          </TypewriterText>
          I am {Bio.name} {/* Bio name displayed inline with the Typewriter */}
        </Title>
      </HeroContent>

      {/* Concentric Circles Animation */}
      <CirclesContainer>
        <Circle />
        <Circle />
        <Circle />
        <Circle />
        <Circle />
        <Circle />
        <Circle />
      </CirclesContainer>
    </HeroContainer>
  );
}

export default HeroSection;
