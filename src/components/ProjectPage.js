import React from 'react';
import Projects from './Projects'; // Ensure this import is correct

const ProjectsPage = ({ openModal, setOpenModal }) => {
  return (
    <div>
      <Projects openModal={openModal} setOpenModal={setOpenModal} />
    </div>
  );
};

export default ProjectsPage;
