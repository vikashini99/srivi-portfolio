import React, { useEffect } from 'react';
import styled from 'styled-components';

// Static imports for project images
import Image1 from '../ProjectInfoImage/Cacophonic/1.webp';
import Image2 from '../ProjectInfoImage/Cacophonic/2.gif';
import Image3 from '../ProjectInfoImage/Cacophonic/3.webp';
import Image4 from '../ProjectInfoImage/Cacophonic/4.webp';
import Image5 from '../ProjectInfoImage/Cacophonic/7.webp';
import Image6 from '../ProjectInfoImage/Cacophonic/5.webp';
import Image7 from '../ProjectInfoImage/Cacophonic/6.webp';
import Image8 from '../ProjectInfoImage/Cacophonic/8.webp';
import Image9 from '../ProjectInfoImage/Cacophonic/9.webp';
import KinImage from '../ProjectInfoImage/CardImage/kinetics.gif'; 
import PoseImage from '../ProjectInfoImage/CardImage/pose.png';

import NextProjects from '../NextProjects';

// Styled components
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  width: 100%;
  max-width: 100%;
`;

const StyledImage = styled.img`  /* Renamed from 'Image' */
  width: 100%;
  max-width: 1100px;
  margin: 0px 0;
  display: block;
  margin-left: auto;
  margin-right: auto;
`;

const Iframe = styled.iframe`
  width: 1100px;
  height: 550px;
  display: block;
  margin-left: auto;
  margin-right: auto;
  border: none;
`;

// 🔥 Page Stamps fixed to the right, text left-aligned
const PageStamps = styled.div`
  position: fixed;
  top: 50%;
  right: 20px;
  transform: translateY(-50%);
  display: flex;
  flex-direction: column;
  gap: 12px;
  align-items: flex-start;
  z-index: 1000;
`;

const PageStampLink = styled.a`
  color: ${({ theme }) => theme.gray_one};
  cursor: pointer;
  text-decoration: none;
  font-size: 14px;
  display: flex;
  align-items: center;
  padding: 5px 0;
  transition: all 0.2s ease-in-out;

  &:hover {
    color: ${({ theme }) => theme.secondary};
    transform: scale(1.05);
  }
`;

const IndicatorCircle = styled.div`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: ${({ active, theme }) => (active ? theme.secondary : theme.gray_one)};
  margin-right: 8px;
`;

const useActiveSection = (sectionIds) => {
  const [activeSection, setActiveSection] = React.useState('');

  React.useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      for (let i = 0; i < sectionIds.length; i++) {
        const section = document.getElementById(sectionIds[i]);
        if (section) {
          const offsetTop = section.offsetTop;
          const offsetHeight = section.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(sectionIds[i]);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, [sectionIds]);

  return activeSection;
};

const CacophonicCadence = () => {
  const sectionIds = ['Introduction', 'Prototypes', 'Final Installation'];
  const activeSection = useActiveSection(sectionIds);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const nextProjects = [
    {
      id: 5,
      title: 'Kinetic Sculpture',
      date: '2024',
      description: 'An interactive kinetic sculpture installation',
      image: KinImage,
      tags: ["Speculative Design", "Interaction", "Design Research"],
    },
    {
      id: 3,
      title: 'Pose',
      date: '2024',
      description: 'Pose is an immersive experience blending motion and digital storytelling.',
      image: PoseImage,
      tags: ["Immersive Experience", "Motion Design", "Storytelling"],
    }
  ];

  return (
    <Container>
      <PageStamps>
        {sectionIds.map((id) => (
          <PageStampLink href={`#${id}`} key={id}>
            <IndicatorCircle active={activeSection === id} />
            {id.replace('-', ' ')}
          </PageStampLink>
        ))}
      </PageStamps>

      <StyledImage src={Image1} alt="Cacophonic Cadence Image 1" loading="lazy" />
      <StyledImage src={Image2} alt="Cacophonic Cadence Image 2" loading="lazy" />

      <section id="Prototypes">
        <StyledImage src={Image3} alt="Cacophonic Cadence Image 3" loading="lazy" />
        <Iframe 
          src="https://www.youtube.com/embed/AqPUCWfuJRY" 
          title="Mimicry Bird Video"
          allowFullScreen
          loading="lazy"
        />
      </section>

      <StyledImage src={Image4} alt="Cacophonic Cadence Image 4" loading="lazy" />

      <section id="iframe">
        <Iframe 
          src="https://editor.p5js.org/srivikashini_k/full/F-CWKsGED" 
          title="Cacophonic Cadence p5.js Sketch"
          allowFullScreen
          loading="lazy"
        />
      </section>

      <StyledImage src={Image5} alt="Cacophonic Cadence Image 5" loading="lazy" />
      <StyledImage src={Image6} alt="Cacophonic Cadence Image 6" loading="lazy" />
      <StyledImage src={Image7} alt="Cacophonic Cadence Image 7" loading="lazy" />

      <section id="Final Installation">
        <StyledImage src={Image8} alt="Cacophonic Cadence Image 8" loading="lazy" />
        <StyledImage src={Image9} alt="Cacophonic Cadence Image 9" loading="lazy" />
      </section>

      <Iframe 
        src="https://www.youtube.com/embed/UZoyuw0YdVc" 
        title="Staging Video"
        allowFullScreen
        loading="lazy"
      />

      <NextProjects projects={nextProjects} />
    </Container>
  );
};

export default CacophonicCadence;
