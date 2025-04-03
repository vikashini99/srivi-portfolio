import React from 'react';
import styled from 'styled-components';
import { useEffect } from 'react';

// Static imports for project images
import Image1 from '../ProjectInfoImage/Samagra/sa.png';
import EthnoImage from '../ProjectInfoImage/CardImage/ethnography.png'; 
import PoseImage from '../ProjectInfoImage/CardImage/pose.png';

import NextProjects from '../NextProjects'; // Import NextProjects component

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
  object-fit: cover;
  border-radius: 10px;
  margin: 0;
`;

const Samagra = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Ensures page scrolls to top when navigating
  }, []);

  // Define next projects
  const nextProjects = [
    {
      id: 3, // Match the ID in App.js
      title: 'Pose',
      date: '2024',
      description: 'Pose is an immersive experience blending motion and digital storytelling.',
      tags: ["Governance", "Human-Centered Design", "User Research"],
      image: PoseImage,
    },
    {
      id: 1, // Match the ID in App.js
      title: 'Ethnographic Research',
      date: '2024',
      description: 'Ethnographic research with tiffin service group in Ahmedabad.',
      tags: ["Governance", "Human-Centered Design", "User Research"],
      image: EthnoImage,
    }
  ];

  return (
    <Container>
      <Title>Samagra</Title>
      <Description>
        Designed intuitive and accessible user experiences for digital government products that enhanced usability and citizen engagement.
      </Description>
      
      {/* Render Samagra project image */}
      <Image src={Image1} alt="Samagra Image" />

      {/* Render Next Projects */}
      <NextProjects projects={nextProjects} />
    </Container>
  );
};

export default Samagra;
