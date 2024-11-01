import React from 'react';
import styled from 'styled-components';

// Static imports for project images
import Image1 from '../ProjectInfoImage/Pose/1.png';
import Image2 from '../ProjectInfoImage/Pose/2-1.png';
import Image3 from '../ProjectInfoImage/Pose/3.png';
import Image4 from '../ProjectInfoImage/Pose/4.png';
import Image5 from '../ProjectInfoImage/Pose/5.png';
import Image6 from '../ProjectInfoImage/Pose/6.png';
import Image7 from '../ProjectInfoImage/Pose/7.png';
import Image8 from '../ProjectInfoImage/Pose/8.png';
import Image9 from '../ProjectInfoImage/Pose/9.png';
import Image10 from '../ProjectInfoImage/Pose/10.png';
import Image11 from '../ProjectInfoImage/Pose/11.png';
import Image12 from '../ProjectInfoImage/Pose/12.png';
import Image13 from '../ProjectInfoImage/Pose/13.png';
import Image14 from '../ProjectInfoImage/Pose/14.png';
import Image15 from '../ProjectInfoImage/Pose/15.png';
import Image16 from '../ProjectInfoImage/Pose/16.png';
import Image17 from '../ProjectInfoImage/Pose/17.png';
import Image18 from '../ProjectInfoImage/Pose/18.png';
import Image19 from '../ProjectInfoImage/Pose/19.png';
import Image20 from '../ProjectInfoImage/Pose/20.png';
import Image21 from '../ProjectInfoImage/Pose/21.png';
import Image22 from '../ProjectInfoImage/Pose/22.png';
import Image23 from '../ProjectInfoImage/Pose/23.png';
import Image24 from '../ProjectInfoImage/Pose/24.png';
import Image25 from '../ProjectInfoImage/Pose/25.png';
import Image26 from '../ProjectInfoImage/Pose/26.png';
import Image27 from '../ProjectInfoImage/Pose/27.png';
import Image28 from '../ProjectInfoImage/Pose/27-1.png';

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
  display: block; /* Ensures image is centered */
  margin-left: auto;
  margin-right: auto; /* Centers the image */
`;

const Title = styled.h1`
  margin: 20px 0;
  font-size: 32px; /* You can adjust the size as needed */
  color: ${({ theme }) => theme.secondary};
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

const Pose = () => {
  // Section IDs
  const sectionIds = ['Introduction', 'Secondary Research', 'Primary Research', 'Problem Statement' , 'Prototyping' , 'Solution' , ];
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
      <Title>Pose </Title>
      <Description>
      Pose is a innovative smart wearable solution that addresses the need for healthy hand posture in smartphone usage.

      </Description>

      {/* Images Section */}
      <section id="Introduction">
        {[Image1, Image2, Image3, Image4].map((image, index) => (
            <Image src={image} alt={`Pose Image ${index + 1}`} key={index} />
        ))}
      </section>

      <section id="Secondary Research">
        {[Image5, Image6, Image7, Image8 ,Image9 , Image10 ].map((image, index) => (
            <Image src={image} alt={`Pose Image ${index + 21}`} key={index} />
        ))}
      </section>

      <section id="Primary Research">
        {[ Image11 , Image12].map((image, index) => (
            <Image src={image} alt={`Pose Image ${index + 21}`} key={index} />
        ))}
      </section> 

      <section id="Problem Statement">
        {[ Image13 ].map((image, index) => (
            <Image src={image} alt={`Pose Image ${index + 21}`} key={index} />
        ))}
      </section> 

      <section id="Prototyping">
        {[ Image14 ,Image15 , Image16 , Image17 , Image18 , Image19  ].map((image, index) => (
            <Image src={image} alt={`Pose Image ${index + 21}`} key={index} />
        ))}
      </section> 

      <section id="Solution">
        {[  Image20 , Image21 , Image22 ,Image23 , Image24 , Image25 , Image26 , Image27 ].map((image, index) => (
            <Image src={image} alt={`Pose Image ${index + 21}`} key={index} />
        ))}
      </section> 

    </Container>
  );
};

export default Pose;
