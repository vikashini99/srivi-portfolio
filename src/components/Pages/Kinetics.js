

import React, { useEffect } from 'react';
import styled from 'styled-components';

// Static imports for project images
import Image1 from '../ProjectInfoImage/Kinetics/1.webp';
import Image2 from '../ProjectInfoImage/Kinetics/2.webp';
import Image3 from '../ProjectInfoImage/Kinetics/3.webp';
import Image4 from '../ProjectInfoImage/Kinetics/4.webp';
import Image5 from '../ProjectInfoImage/Kinetics/5.webp';
import Image6 from '../ProjectInfoImage/Kinetics/6.webp';
import Image7 from '../ProjectInfoImage/Kinetics/7.webp';
import Image8 from '../ProjectInfoImage/Kinetics/8.webp';
import Image9 from '../ProjectInfoImage/Kinetics/9.webp';
import Image10 from '../ProjectInfoImage/Kinetics/10.webp';
import Image11 from '../ProjectInfoImage/Kinetics/11.webp';
import CacoImage from '../ProjectInfoImage/CardImage/cacophonic-cadence.gif'
import PoseImage from '../ProjectInfoImage/CardImage/pose.png'

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

const Image = styled.img`
  width: 100%;
  max-width: 1100px;
  display: block;
  margin: 0;
  padding: 0;
`;

const Iframe = styled.iframe`
  width: 100%;
  max-width: 1100px;
  height: 600px;
  display: block;
  margin: 20px auto;
  border: none;
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

const Kinetics = () => {
  const sectionIds = ['Introduction', 'Prototypes', 'Mechanism', 'Final Installation'];
  const activeSection = useActiveSection(sectionIds);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const nextProjects = [
    {
      id: 2,
      title: 'Cacophonic Cadence',
      date: '2024',
      description: 'A Sound installation aimed at raising awareness on the effects of environmental noise pollution on birds',
      image: CacoImage,
      tags: ['Light Art', 'Interactive Experience', 'Design Research'],
    },
    {
      id: 7,
      title: 'Creative Coding',
      date: '2024',
      description: 'Exploring the fusion of sound and code.',
      image: Image9,
      tags: ['Sound Art', 'Interactive', 'Speculative Design'],
    }
  ];

  return (
    <Container>
      <PageStamps>
        {sectionIds.map((id) => (
          <PageStampLink key={id} href={`#${id}`}>
            <IndicatorCircle active={activeSection === id} />
            {id.replace('-', ' ')}
          </PageStampLink>
        ))}
      </PageStamps>

      <Title>Kinetics</Title>
      <Description>
        A kinetic sculpture exploring the relationship between movement and sound, providing a multi-sensory immersive experience.
      </Description>

      <section id="Introduction">
        <Image src={Image1} alt="Kinetics Image 1" />
        <Image src={Image2} alt="Kinetics Image 2" />
      </section>

      <section id="Prototypes">
        <Iframe src="https://www.youtube.com/embed/Q7LXvlW7oMk" title="Kinetics Video" allowFullScreen />
        <Image src={Image3} alt="Kinetics Image 3" />
        <Image src={Image4} alt="Kinetics Image 4" />
        <Image src={Image5} alt="Kinetics Image 5" />
        <Image src={Image6} alt="Kinetics Image 6" />
        
      </section>

      <section id="Mechanism">
      <Image src={Image7} alt="Kinetics Image 7" />
        <Iframe src="https://www.youtube.com/embed/0wHZbXmliJY" title="Kinetics Mechanism" allowFullScreen />
        <Image src={Image8} alt="Kinetics Image 8" />
        <Image src={Image9} alt="Kinetics Image 9" />
        <Image src={Image10} alt="Kinetics Image 10" />
      </section>

      <section id="Final Installation">
      <Image src={Image11} alt="Kinetics Image 11" />
        <Iframe src="https://youtube.com/embed/ch8T4qYIbnw" title="Final Installation" allowFullScreen />
        
      </section>

      <NextProjects projects={nextProjects} />
    </Container>
  );
};

export default Kinetics;

