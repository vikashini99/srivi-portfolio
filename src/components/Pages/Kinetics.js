import React from 'react';
import styled from 'styled-components';

// Static imports for project images
import Image1 from '../ProjectInfoImage/Kinetics/1.png';
import Image2 from '../ProjectInfoImage/Kinetics/2.png';
import Image3 from '../ProjectInfoImage/Kinetics/3.png';
import Image4 from '../ProjectInfoImage/Kinetics/4.png';
import Image5 from '../ProjectInfoImage/Kinetics/5.png';
import Image6 from '../ProjectInfoImage/Kinetics/6.png';
import Image7 from '../ProjectInfoImage/Kinetics/7.png';
import Image8 from '../ProjectInfoImage/Kinetics/8.png';
import Image9 from '../ProjectInfoImage/Kinetics/9.png';
import Image10 from '../ProjectInfoImage/Kinetics/10.png';
import Image11 from '../ProjectInfoImage/Kinetics/11.png';

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

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  // Scroll to the top when the component mounts
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Container>
      {/* Page Stamps for navigating between sections */}
      <PageStamps>
        {sectionIds.map((id) => (
          <PageStampLink key={id} onClick={() => scrollToSection(id)}>
            <IndicatorCircle active={activeSection === id} />
            {id.replace('-', ' ')}
          </PageStampLink>
        ))}
      </PageStamps>

      {/* Title and Description */}
      <Title>Kinetics</Title>
      <Description>
        A kinetic sculpture exploring the relationship between movement and sound, providing a multi-sensory immersive experience.
      </Description>

      {/* Images Section */}
      <section id="Introduction">
        <Image src={Image1} alt="Kinetics Image 1" />
        <Image src={Image2} alt="Kinetics Image 2" />
      </section>

      <section id="Prototypes">
        <Iframe 
          src="https://www.youtube.com/embed/Q7LXvlW7oMk" 
          title="Kinetics Video"
          allowFullScreen
        />
        <Image src={Image3} alt="Kinetics Image 3" />
      </section>

      <Image src={Image4} alt="Kinetics Image 4" />
      <Image src={Image5} alt="Kinetics Image 5" />
      <Image src={Image6} alt="Kinetics Image 6" />

      <section id="Mechanism"> 
        <Image src={Image7} alt="Kinetics Image 7" />
        <Iframe 
          src="https://www.youtube.com/embed/0wHZbXmliJY" 
          title="Kinetics mec"
          allowFullScreen
        />
        <Image src={Image8} alt="Kinetics Image 8" />
        <Image src={Image9} alt="Kinetics Image 9" />
        <Image src={Image10} alt="Kinetics Image 10" />
      </section>

      <section id="Final Installation">
        <Image src={Image11} alt="Kinetics Image 11" />
        <Iframe 
          src="https://youtube.com/embed/ch8T4qYIbnw" 
          title="Kinetics mec"
          allowFullScreen
        />
        <Iframe 
          src="https://www.youtube.com/embed/Q7LXvlW7oMk" 
          title="Kinetics Video"
          allowFullScreen
        />
      </section>
    </Container>
  );
};

export default Kinetics;
