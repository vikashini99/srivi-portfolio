import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import NextProjects from '../NextProjects';
import KineticImage from '../ProjectInfoImage/CardImage/kinetics.gif';
import EthnoImage from '../ProjectInfoImage/CardImage/ethnography.png';


// SECTION: Importing WebP images dynamically
const imageArray = [
  require('../ProjectInfoImage/Pose/1.webp'), require('../ProjectInfoImage/Pose/2-1.webp'), require('../ProjectInfoImage/Pose/3.webp'), require('../ProjectInfoImage/Pose/4.webp'),
  require('../ProjectInfoImage/Pose/5.webp'), require('../ProjectInfoImage/Pose/6.webp'), require('../ProjectInfoImage/Pose/7.webp'), require('../ProjectInfoImage/Pose/8.webp'),
  require('../ProjectInfoImage/Pose/9.webp'), require('../ProjectInfoImage/Pose/10.webp'), require('../ProjectInfoImage/Pose/11.webp'), require('../ProjectInfoImage/Pose/12.webp'),
  require('../ProjectInfoImage/Pose/13.webp'), require('../ProjectInfoImage/Pose/14.webp'), require('../ProjectInfoImage/Pose/15.webp'), require('../ProjectInfoImage/Pose/16.webp'),
  require('../ProjectInfoImage/Pose/17.webp'), require('../ProjectInfoImage/Pose/18.webp'), require('../ProjectInfoImage/Pose/19.webp'), require('../ProjectInfoImage/Pose/20.webp'),
  require('../ProjectInfoImage/Pose/21.webp'), require('../ProjectInfoImage/Pose/22.webp'), require('../ProjectInfoImage/Pose/23.webp'), require('../ProjectInfoImage/Pose/24.webp'),
  require('../ProjectInfoImage/Pose/25.webp'), require('../ProjectInfoImage/Pose/26.webp'), require('../ProjectInfoImage/Pose/27.webp')
];

// SECTION: Preload the First Image for Better LCP
const preloadImage = new Image();
preloadImage.src = imageArray[0];

// SECTION: Styled Components
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 20px;
`;

const SectionWrapper = styled.div`
  width: 100%;
  max-width: 1100px;
`;

const StyledImage = styled.img`
  width: 100%;
  max-width: 1100px;
  height: auto;
  display: block;
`;

const Title = styled.h1`
  margin: 20px 0;
  font-size: 32px;
  color: ${({ theme }) => theme.secondary};
  text-align: center;
`;

const Description = styled.p`
  margin-bottom: 20px;
  color: ${({ theme }) => theme.gray_one};
  text-align: center;
`;

const PageStamps = styled.div`
  position: fixed;
  top: 50%;
  right: 20px;
  transform: translateY(-50%);
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: flex-start;
`;

const PageStampLink = styled.a`
  color: ${({ theme }) => theme.gray_one};
  cursor: pointer;
  text-decoration: none;
  font-size: 14px;
  display: flex;
  align-items: center;

  &:hover {
    color: ${({ theme }) => theme.secondary};
  }
`;

const IndicatorCircle = styled.div`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: ${({ active, theme }) => (active ? theme.secondary : theme.gray_one)};
  margin-right: 8px;
`;

// SECTION: Pose Component Logic
const Pose = () => {
  const [activeSection, setActiveSection] = useState('Introduction');
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const nextProjects = [
    {
      id: 5,
      title: 'Kinetic Sculpture',
      date: '2024',
      description: 'An interactive kinetic sculpture installation.',
      image: KineticImage,
      tags: ['Speculative Design', 'Interaction', 'Design Research'],
    },
    {
      id: 1,
      title: 'Ethnography Research',
      date: '2024',
      description: 'Ethnographic research with tiffin service group in Ahmedabad.',
      tags: ["Governance", "Human-Centered Design", "User Research"],
      image: EthnoImage,
    }
  ];

  return (
    <Container>
      <Title>Pose</Title>
      <Description>Pose is an innovative smart wearable solution that addresses the need for healthy hand posture in smartphone usage.</Description>
      
      <PageStamps>
        {["Introduction", "Secondary Research", "Primary Research", "Problem Statement", "Prototyping", "Solution"].map((section) => (
          <PageStampLink key={section} href={`#${section}`}>
            <IndicatorCircle active={activeSection === section} />
            {section}
          </PageStampLink>
        ))}
      </PageStamps>

      <SectionWrapper id="Introduction">
        {[imageArray[0], imageArray[1], imageArray[2], imageArray[3]].map((image, index) => (
          <StyledImage key={index} src={image} alt={`Pose Image ${index + 1}`} />
        ))}
      </SectionWrapper>
      <SectionWrapper id="Secondary Research">
        {[imageArray[4], imageArray[5], imageArray[6], imageArray[7], imageArray[8], imageArray[9]].map((image, index) => (
          <StyledImage key={index} src={image} alt={`Pose Image ${index + 5}`} />
        ))}
      </SectionWrapper>
      <SectionWrapper id="Primary Research">
        {[imageArray[10], imageArray[11]].map((image, index) => (
          <StyledImage key={index} src={image} alt={`Pose Image ${index + 11}`} />
        ))}
      </SectionWrapper>
      <SectionWrapper id="Problem Statement">
        <StyledImage src={imageArray[12]} alt="Pose Problem Statement" />
      </SectionWrapper>
      <SectionWrapper id="Prototyping">
        {[imageArray[13], imageArray[14], imageArray[15], imageArray[16], imageArray[17], imageArray[18]].map((image, index) => (
          <StyledImage key={index} src={image} alt={`Pose Prototyping ${index + 14}`} />
        ))}
      </SectionWrapper>
      <SectionWrapper id="Solution">
        {[imageArray[19], imageArray[20], imageArray[21], imageArray[22], imageArray[23], imageArray[24], imageArray[25], imageArray[26]].map((image, index) => (
          <StyledImage key={index} src={image} alt={`Pose Solution ${index + 20}`} />
        ))}
      </SectionWrapper>
      {/* SECTION: Next Projects */}
      <SectionWrapper>
        <NextProjects projects={nextProjects} />
      </SectionWrapper>
    </Container>
  );
};

export default Pose;

