import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

// Sample project data with numeric IDs
const projects = [
  {
    id: 1,
    title: 'Ethnography',
    description: 'A deep dive into ethnographic research methods.',
  },
  {
    id: 2,
    title: 'Cacophonic Cadence',
    description: 'An immersive soundscape experience reflecting on anthropogenic noise pollution.',
  },
  {
    id: 3,
    title: 'Pose',
    description: 'A project exploring the interaction between art and technology.',
  },
  {
    id: 10,
    title: 'Creative Coding',
    description: 'A collection of creative coding projects showcasing innovative approaches to art and technology.',
  },
];

// Styled components
const Container = styled.div`
  padding: 20px;
  background-color: ${({ theme }) => theme.bg || '#000'};
`;

const ProjectCard = styled.div`
  border: 1px solid ${({ theme }) => theme.text_primary || '#fff'};
  border-radius: 8px;
  margin-bottom: 20px;
  padding: 15px;
  background-color: ${({ theme }) => theme.card || '#333'};
`;

const ProjectTitle = styled.h2`
  color: ${({ theme }) => theme.text_primary || '#fff'};
`;

const ProjectDescription = styled.p`
  color: ${({ theme }) => theme.text_desc || '#aaa'};
`;

// Main ProjectsPage component
const ProjectsPage = () => {
  return (
    <Container>
      <h1 style={{ color: 'white' }}>Projects</h1>
      {projects.map((project) => (
        <ProjectCard key={project.id}>
          <ProjectTitle>{project.title}</ProjectTitle>
          <ProjectDescription>{project.description}</ProjectDescription>
          <Link to={`/projects/${project.id}`} style={{ color: '#1FA6A6', textDecoration: 'none' }}>
            View Details
          </Link>
        </ProjectCard>
      ))}
    </Container>
  );
};

export default ProjectsPage;
