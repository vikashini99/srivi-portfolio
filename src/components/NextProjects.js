

import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

// Styled components
const ProjectsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  padding: 40px 0;
`;
const SectionTitle = styled.h2`
  font-size: 32px;
  font-weight: 700;
  color: ${({ theme }) => theme.text_primary};
  font-family: 'Yeseva One', cursive;
  text-align: center;
`;

const ProjectsGrid = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  flex-wrap: nowrap; /* Prevent wrapping */
  overflow-x: auto; /* Allows horizontal scrolling if necessary */
  padding-bottom: 10px; /* Ensures no cut-off */
`;


const ProjectCard = styled.div`
  width: 80%;
  max-width: 500px;
  cursor: pointer;
  border: 2px solid rgba(151, 151, 151, 0.6);
  border-radius: 10px;
  box-shadow: 0 0 12px 4px rgba(0, 0, 0, 0.4);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  gap: 14px;
  transition: all 0.5s ease-in-out;
  padding: 15px;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 0 50px 4px rgba(249, 116, 42, 0.6);
  }
`;

const ProjectImage = styled.img`
  width: 100%;
  height: 260px;
  object-fit: cover;
  box-shadow: 0 0 16px 2px rgba(0, 0, 0, 0.3);
`;

const ProjectDetails = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0;
  padding: 0 2px;
  text-align: left;
`;

const ProjectTitle = styled.h3`
  font-size: 25px;
  font-weight: 600;
  color: ${({ theme }) => theme.secondary};
  font-family: 'Yeseva One', cursive;
`;

const ProjectDate = styled.p`
  font-size: 12px;
  font-weight: 400;
  color: ${({ theme }) => theme.gray_one + 80};
`;

const ProjectDescription = styled.p`
  font-size: 16px;
  color: ${({ theme }) => theme.gray_one};
  font-family: 'Poppins', sans-serif;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const ProjectTags = styled.div`
  display: flex;
  gap: 8px;
  margin-top: 4px;
`;

const Tag = styled.span`
  font-size: 14px;
  background-color: ${({ theme }) => theme.secondary + 55};
  padding: 2px 8px;
  border-radius: 10px;
  color: ${({ theme }) => theme.white + 85};
`;

const NextProjects = ({ projects }) => {
  const navigate = useNavigate();

  return (
    <ProjectsContainer>
      <SectionTitle>Next Projects</SectionTitle>
      <ProjectsGrid>
      {projects.map((project) => (
        <ProjectCard key={project.id} onClick={() => navigate(`/projects/${project.id}`)}>
          <ProjectImage src={project.image} alt={project.title} />
          <ProjectDetails>
            <ProjectTitle>{project.title}</ProjectTitle>
            <ProjectDate>{project.date}</ProjectDate>
            <ProjectDescription>{project.description}</ProjectDescription>
            <ProjectTags>
              {project.tags?.map((tag, index) => (
                <Tag key={index}>{tag}</Tag>
              ))}
            </ProjectTags>
          </ProjectDetails>
        </ProjectCard>
      ))}</ProjectsGrid>
    </ProjectsContainer>
  );
};

export default NextProjects;

