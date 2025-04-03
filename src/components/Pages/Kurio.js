// src/components/Pages/Ethnography.js
import React, { useEffect } from 'react';
import styled from 'styled-components';

// Static imports for project images
import Image1 from '../ProjectInfoImage/Kurio/1.png';
import Image2 from '../ProjectInfoImage/Kurio/2.png';
import Image3 from '../ProjectInfoImage/Kurio/3.png';
import KinImage from '../ProjectInfoImage/CardImage/kinetics.gif';
import PoseImage from '../ProjectInfoImage/CardImage/pose.png';

import NextProjects from '../NextProjects';

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

const Kurio = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Define next projects
  const nextProjects = [
    
    {
      id: 3, // Match the ID in App.js
      title: 'Pose',
      date: '2024',
      description: 'Pose is an immersive experience blending motion and digital storytelling.',
      image: PoseImage,
      tags: ["Immersive Experience", "Motion Design", "Storytelling"],
    },
    {
      id: 5, // Match the ID in App.js
      title: 'Kinetic Sculpture',
      date: '2024',
      description: 'An interactive kinetic sculpture installation',
      image: KinImage,
      tags: ["Speculative Design", "Interaction", "Design Research"],
    }
  ];

  return (
    <Container>
      <Title>Kurio</Title>
      <Description>AI companion that encourages children to think critically and explore, fostering a love for learning that lasts a lifetime</Description>
      
      {/* Render Ethnography project images */}
      <Image src={Image1} alt="Ethnography Image 1" />
      <Image src={Image2} alt="Ethnography Image 2" />
      <Image src={Image3} alt="Ethnography Image 3" />

      {/* Render Next Projects */}
      <NextProjects projects={nextProjects} />
    </Container>
  );
};

export default Kurio;
