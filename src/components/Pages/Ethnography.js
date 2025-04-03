import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

// Static imports for project images
import Image1 from '../ProjectInfoImage/Ethno/1.png';
import Image2 from '../ProjectInfoImage/Ethno/2.png';
import Image3 from '../ProjectInfoImage/Ethno/3.png';
import Image4 from '../ProjectInfoImage/Ethno/4.png';
import Image5 from '../ProjectInfoImage/Ethno/5.png';
import Image6 from '../ProjectInfoImage/Ethno/6.png';
import Image7 from '../ProjectInfoImage/Ethno/7.png';
import Image8 from '../ProjectInfoImage/Ethno/8.png';
import Image9 from '../ProjectInfoImage/Ethno/9.png';
import Image10 from '../ProjectInfoImage/Ethno/10.png';
import Image11 from '../ProjectInfoImage/Ethno/11.png';
import PoseImage from '../ProjectInfoImage/CardImage/pose.png';
import KurioImage from '../ProjectInfoImage/CardImage/kurio.png'; 
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
  width: 80%;
  height: auto;
  display: block;
  margin: 0;
  padding: 0;
`;

const NextTitle = styled.h2`
  font-size: 24px;
  color: ${({ theme }) => theme.secondary};
  margin-bottom: 20px;
`;

const ProjectLinks = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
`;

const ProjectLink = styled(Link)`
  font-size: 18px;
  color: ${({ theme }) => theme.primary};
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

// Main component
const Ethnography = () => {
  const nextProjects = [
    {
      id: 4,
      title: 'Kurio',
      date: '2024',
      description: 'Kurio is an exploratory project focusing on speculative design and interaction.',
      image: KurioImage,
      tags: ["Governance", "Human-Centered Design", "User Research"],
    },
    {
      id: 3,
      title: 'Pose',
      date: '2024',
      description: 'Pose is an immersive experience blending motion and digital storytelling.',
      tags: [ "Human-Centered Design", "User Research"],
      image: PoseImage,
    }
  ];

  return (
    <Container>
      <Title>Ethnography</Title>
      <Description>
        Conducted a Qualitative Research with a group of women involved in Tiffin service business in Ahmedabad, Gujarat.
      </Description>

      {/* Render Ethnography project images */}
      {[Image1, Image2, Image3, Image4, Image5, Image6, Image7, Image8, Image9, Image10, Image11].map((img, index) => (
        <Image key={index} src={img} alt={`Ethnography Image ${index + 1}`} width={1140} height={640} />
      ))}

      {/* Next Projects Section */}
      <NextProjects projects={nextProjects} />
    </Container>
  );
};

export default Ethnography;
