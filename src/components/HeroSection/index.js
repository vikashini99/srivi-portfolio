import React from 'react';
import styled, { keyframes } from 'styled-components';
import Typewriter from 'typewriter-effect';
import { Bio } from '../../data/constants'; // Ensure your Bio data is imported correctly

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
  background: #232323; /* Keep original background color */
  padding: 60px; /* Adjust this padding */

  @media (max-width: 768px) {
    padding: 30px; /* Reduce padding for mobile */
  }
`;

const HeroContent = styled.div`
  text-align: left; /* Keep text left-aligned */
  z-index: 1;
  color: white;
  max-width: 600px; /* Set a max width to control the content's width */
  margin-left: 50px; /* Move content horizontally */
  margin-top: -100px; /* Move content vertically */

  @media (max-width: 768px) {
    max-width: 100%; /* Full width on mobile */
    margin-left: 20px; /* Reduce margin for mobile */
    margin-top: 0; /* Reset margin on mobile */
  }
`;

const Title = styled.h1`
  font-size: 4rem;
  font-weight: 700;
  font-family: 'Yeseva One', cursive; /* Keep Yeseva One font */
  margin-bottom: 0; /* Remove bottom margin */
  display: inline; /* Ensures the text flows inline */
  text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.6); /* Add a subtle shadow for depth */

  @media (max-width: 768px) {
    font-size: 2.5rem; /* Adjust font size for mobile */
  }
`;

const TypewriterText = styled.span`
  font-size: 4rem;
  color: ${({ theme }) => theme.secondary}; /* Use theme's secondary color */
  display: inline; /* Ensures the typewriter text stays inline */
  margin-right: 10px; /* Add a small space between the Typewriter text and the "I am" text */

  @media (max-width: 768px) {
    font-size: 2.5rem; /* Adjust font size for mobile */
  }
`;

const Description = styled.p`
  font-size: 1.25rem; /* Adjust font size for better visibility */
  font-family: 'Georgia', serif; /* Change font to Georgia */
  font-style: italic; /* Make the text italic */
  color: white; /* Keep the original color */
  margin-top: 20px; /* Space above the description */
  line-height: 1.5; /* Improve line spacing for readability */
  text-shadow: 1px 1px 4px rgba(0, 0, 0, 0.3); /* Add shadow for depth */

  @media (max-width: 768px) {
    font-size: 1rem; /* Adjust font size for mobile */
    margin-top: 10px; /* Reduce top margin for mobile */
  }
`;

const Break = styled.br`
  content: '';
  display: block;
  margin: 10px 0; /* Adjust spacing between lines */
`;

// Container for concentric circles
const CirclesContainer = styled.div`
  position: absolute;
  right: 250px; /* Adjust position as needed */
  top: 150px; /* Adjust position as needed */
  width: 400px; /* Increase container size for more circles */
  height: 400px;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    right: 50px; /* Adjust position for mobile */
    top: 100px; /* Adjust position for mobile */
    width: 200px; /* Reduce size for mobile */
    height: 200px; /* Reduce size for mobile */
  }
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

  @media (max-width: 768px) {
    width: 150px; /* Reduce circle size for mobile */
    height: 150px; /* Reduce circle size for mobile */
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
        <Description>
          a New media designer<Break />
          working at the intersection of Art, Science, and Technology.
        </Description>
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
