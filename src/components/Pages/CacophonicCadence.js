import React from 'react';
import styled from 'styled-components';

// Static imports for project images and video
import Image1 from '../ProjectInfoImage/Cacophonic/1.png';
import Image2 from '../ProjectInfoImage/Cacophonic/2.gif';
import Image3 from '../ProjectInfoImage/Cacophonic/3.png';
import Image4 from '../ProjectInfoImage/Cacophonic/4.png';
import Image5 from '../ProjectInfoImage/Cacophonic/7.png';
import Image6 from '../ProjectInfoImage/Cacophonic/5.png';
import Image7 from '../ProjectInfoImage/Cacophonic/6.png';

import Image8 from '../ProjectInfoImage/Cacophonic/8.png';
import Image9 from '../ProjectInfoImage/Cacophonic/9.png';
import MimicryBirdVideo from '../ProjectInfoImage/Cacophonic/Mimicry bird video.mp4';
import StagingVideo from '../ProjectInfoImage/Cacophonic/Srivikashini-2.mp4';
// Styled components
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  width: 100%; /* Allow full width */
  max-width: 100%; /* Ensure max-width is not limiting */
`;


const Image = styled.img`
  width: 100%;
  max-width: 1100px; /* Adjust max-width as needed */
  margin: 0px 0;
  display: block;
  margin-left: auto;
  margin-right: auto; /* Centers the image */
`;

const Video = styled.video`
  width: 100%;
  max-width: 800px; /* Adjust max-width as needed */
  margin: 10px 0;
  display: block;
  margin-left: auto;
  margin-right: auto;
`;



const Iframe = styled.iframe`
  width: 1100px; /* Set to a fixed width to see if it changes */
  height: 550px; /* Adjust the height accordingly */
  display: block;
  margin-left: auto;
  margin-right: auto;
  border: none; /* Remove border */
`;



const Title = styled.h1`
  margin: 20px 0;
  font-size: 32px; /* You can adjust the size as needed */
  color: ${({ theme }) => theme.primary};
  text-align: center; /* Centers the title */
`;

const Description = styled.p`
  margin-bottom: 20px;
  color: ${({ theme }) => theme.gray_one};
  text-align: center; /* Centers the description */
`;

// Stamps Container and Links
const PageStamps = styled.div`
  position: fixed;
  top: 50%; /* Position from the top */
  right: 20px; /* Keep it from the right side */
  transform: translateY(-50%); /* Center it vertically */
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: flex-start; /* Align the items to the left */
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

// Helper function to check which section is currently in view
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
  // Section IDs
  const sectionIds = ['Introduction', 'Prototypes', 'Final Installation'];
  const activeSection = useActiveSection(sectionIds);

  return (
    <Container>
      {/* Page Stamps for navigating between sections */}
      <PageStamps>
        {sectionIds.map((id) => (
          <PageStampLink href={`#${id}`} key={id}>
            <IndicatorCircle active={activeSection === id} />
            {id.replace('-', ' ')}
          </PageStampLink>
        ))}
      </PageStamps>

      {/* Title and Description for the entire project */}
      <Title>Cacophonic Cadence</Title>
      <Description>
        An immersive soundscape experience reflecting on the effects of anthropogenic noise pollution on our current acoustic environment through the voices of birds.
      </Description>

      {/* Images Section */}
      <section id="Introduction">
        <Image src={Image1} alt="Cacophonic Cadence Image 1" />
        <Image src={Image2} alt="Cacophonic Cadence Image 2" />
      </section>

      <section id="Prototypes">
        <Image src={Image3} alt="Cacophonic Cadence Image 3" />
        
        <Video controls>
          <source src={MimicryBirdVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </Video>
       
       
      </section>
      <Image src={Image4} alt="Cacophonic Cadence Image 4" />
      {/* Iframe Section for the p5.js sketch */}
      <section id="iframe">
        <Iframe 
          src="https://editor.p5js.org/srivikashini_k/full/F-CWKsGED" 
          title="Cacophonic Cadence p5.js Sketch"
          allowFullScreen
        />
      </section>
      
     
      <Image src={Image5} alt="Cacophonic Cadence Image 7" />
      <Image src={Image6} alt="Cacophonic Cadence Image 5" />
        <Image src={Image7} alt="Cacophonic Cadence Image 6" />
        

        <section id="FInal Installation">
        <Image src={Image8} alt="Cacophonic Cadence Image 1" />
        <Image src={Image9} alt="Cacophonic Cadence Image 2" />
      </section>

      <Video controls>
          <source src={StagingVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </Video>

    </Container>
  );
};

export default CacophonicCadence;
