import React, { useState } from 'react';
import { 
  Container, 
  Wrapper, 
  Title, 
  Desc, 
  CardContainer, 
  ToggleButtonGroup, 
  ToggleButton, 
  Divider 
} from './ProjectsStyle';
import ProjectCard from '../Cards/ProjectCards';
import { projects } from '../../data/constants';

const Projects = ({ openModal, setOpenModal }) => {
  const [toggle, setToggle] = useState('all');

  // Function to filter projects based on the selected type
  const filteredProjects = toggle === 'all' 
    ? projects 
    : projects.filter((project) => project.categories.includes(toggle));

  return (
    <Container id="projects">
      <Wrapper>
        <Title>My Portfolio</Title>
        <Desc>
          Through my work, I strive to combine my imagination with analytical thinking and rigorous research to dive deeper into the topic to derive valuable insights and solutions. Here are some of my projects.
        </Desc>
        <ToggleButtonGroup>
          <ToggleButton active={toggle === 'all'} onClick={() => setToggle('all')}>
            All
          </ToggleButton>
          <Divider />
          <ToggleButton active={toggle === 'human-centered design'} onClick={() => setToggle('human-centered design')}>
            Human-Centered Design
          </ToggleButton>
          <Divider />
          <ToggleButton active={toggle === 'immersive experience design'} onClick={() => setToggle('immersive experience design')}>
            Immersive Experience Design
          </ToggleButton>
          <Divider />
          <ToggleButton active={toggle === 'design research'} onClick={() => setToggle('design research')}>
            Design Research
          </ToggleButton>
        </ToggleButtonGroup>
        <CardContainer>
          {filteredProjects.map((project) => (
            <ProjectCard 
              key={project.id} 
              project={project} 
              openModal={openModal} 
              setOpenModal={setOpenModal} 
            />
          ))}
        </CardContainer>
      </Wrapper>
    </Container>
  );
};

export default Projects;
