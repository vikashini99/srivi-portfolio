import React, { useState } from 'react';
import { Container, Wrapper, Title, Desc, CardContainer, ToggleButtonGroup, ToggleButton, Divider } from './ProjectsStyle';
import ProjectCard from '../Cards/ProjectCards';
import { projects } from '../../data/constants';

const Projects = ({ openModal, setOpenModal }) => {
  const [toggle, setToggle] = useState('all');

  return (
    <Container id="projects">
      <Wrapper>
        <Title>My work explores diverse domains</Title>
        <Desc>
        Through my work, I strive to combine my imagination with analytical thinking and rigorous research to dive deeper into the topic to derive valuable insights and solutions Here are some of my projects.
        </Desc>
        <ToggleButtonGroup>
          <ToggleButton
            active={toggle === 'all'}
            onClick={() => setToggle('all')}
          >
            All
          </ToggleButton>
          <Divider />
          <ToggleButton
            active={toggle === 'web app'}
            onClick={() => setToggle('web app')}
          >
            UI/UX
          </ToggleButton>
          <Divider />
          <ToggleButton
            active={toggle === 'android app'}
            onClick={() => setToggle('android app')}
          >
            ANDROID APP'S
          </ToggleButton>
          <Divider />
          <ToggleButton
            active={toggle === 'machine learning'}
            onClick={() => setToggle('machine learning')}
          >
            Design Research
          </ToggleButton>
        </ToggleButtonGroup>
        <CardContainer>
          {(toggle === 'all' ? projects : projects.filter((item) => item.category === toggle))
            .map((project) => (
              <ProjectCard key={project.id} project={project} openModal={openModal} setOpenModal={setOpenModal} />
            ))}
        </CardContainer>
      </Wrapper>
    </Container>
  );
};

export default Projects;
