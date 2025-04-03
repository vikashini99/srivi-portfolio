import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import Typewriter from 'typewriter-effect';
import { Bio } from '../../data/constants';

const SectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  position: relative;
  overflow: hidden;
  background: linear-gradient(135deg, #1a1a1a, #232323);
  padding: 60px;
  text-align: center;
  width: 100%;
  @media (max-width: 768px) {
    padding: 30px;
  }
`;

const Canvas = styled.canvas`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 0;
`;

const Content = styled.div`
  color: white;
  max-width: 800px;
  text-align: center;
  position: relative;
  z-index: 1;
  @media (max-width: 768px) {
    max-width: 100%;
  }
`;

const Title = styled.h1`
  font-size: 3rem;
  font-weight: 700;
  font-family: 'Yeseva One', cursive;
  margin-bottom: 10px;
  text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.6);
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const TypewriterText = styled.span`
  font-size: 4rem;
  font-weight: 700;
  font-family: 'Yeseva One', cursive;
  color: ${({ theme }) => theme.secondary};
  display: inline-block;
  margin-bottom: 10px;
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const Description = styled.p`
  font-size: 1.55rem;
  font-family: 'Georgia', serif;
  font-style: italic;
  color: white;
  margin-top: 20px;
  line-height: 1.5;
  text-shadow: 1px 1px 4px rgba(0, 0, 0, 0.3);
  text-align: center;
  @media (max-width: 768px) {
    font-size: 1rem;
    margin-top: 10px;
  }
`;

const ButtonContainer = styled.div`
  margin-top: 40px;
  display: flex;
  gap: 20px;
  justify-content: center;
`;

const Button = styled.a`
  border: 2px solid ${({ theme }) => theme.secondary};
  color: ${({ theme }) => theme.secondary};
  padding: 12px 35px;
  border-radius: 25px;
  font-weight: 600;
  text-decoration: none;
  font-size: 1rem;
  transition: all 0.3s ease-in-out;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.3);
  &:hover {
    background: ${({ theme }) => theme.secondary};
    color: white;
    transform: scale(1.05);
  }
`;

const AboutContainer = styled(SectionContainer)`
  padding-top: 0;
  position: relative;
`;

const AboutText = styled.p`
  font-size: 1rem;
  line-height: 1.6;
  opacity: 0.9;
  font-family: 'Georgia', serif;
  transition: transform 0.3s ease-out;
`;

const Highlight = styled.span`
  font-weight: bold;
  color: ${({ theme }) => theme.secondary};
`;

function InteractiveCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    let mouseX = canvas.width / 2;
    let mouseY = canvas.height / 2;

    const drawParticles = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = 'rgba(255, 255, 255, 0.5)';
      for (let i = 0; i < 20; i++) {
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height;
        const size = Math.abs(Math.sin(mouseX * 0.001 + i) * 5);
        ctx.beginPath();
        ctx.arc(x, y, size, 0, Math.PI * 2);
        ctx.fill();
      }
    };

    const onMouseMove = (event) => {
      mouseX = event.clientX;
      mouseY = event.clientY;
      drawParticles();
    };

    window.addEventListener('mousemove', onMouseMove);
    drawParticles();

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
    };
  }, []);

  return <Canvas ref={canvasRef} />;
}

function HeroSection() {
  return (
    <>
      <SectionContainer>
        <InteractiveCanvas /> {/* Added interactive effect here */}
        <Content>
          <TypewriterText>
            <Typewriter
              options={{ strings: ['Hello', 'नमस्ते', 'வணக்கம்'], autoStart: true, loop: true }}
            />
          </TypewriterText>
          <Title>I am {Bio.name}</Title>
          <Description>
            a Design Technologist
            <br />
            working at the intersection of Art, Science, and Technology.
          </Description>
          <ButtonContainer>
            <Button href="/projects">Portfolio</Button>
            <Button href="https://drive.google.com/file/d/1IJP6aGDhrcJwU-u0psY-QFURaQ3C1j7w/view?usp=sharing" target="_blank" rel="noopener noreferrer">Resume</Button>
          </ButtonContainer>
        </Content>
      </SectionContainer>
      <AboutContainer>
        <InteractiveCanvas /> {/* Effect in About Section */}
        <Content>
          <Title>About Me</Title>
          <AboutText>I explore how design shapes the way we see, feel, and engage with the world.</AboutText>
          <AboutText>As a <Highlight>designer, creative technologist, and researcher</Highlight>, I craft experiences that blur the lines between the digital and the physical, the speculative and the real.</AboutText>
        </Content>
      </AboutContainer>
    </>
  );
}

export default HeroSection;
