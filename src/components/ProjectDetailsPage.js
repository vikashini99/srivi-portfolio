import React, { useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

// Dummy data for the example; replace with actual project data fetching logic
const projectsData = [
  {
    id: '1',
    title: 'Ethnography',
    description: 'This is a detailed description of Project 1.',
    images: Array.from({ length: 11 }, (_, i) => require(`./ProjectInfoImage/Ethno/${i + 1}.png`)), // Load images dynamically
    date: 'February 2024',
    tags: ['Code', 'Tech'],
  },
  {
    id: '2',
    title: 'Cacophonic Cadence',
    description: 'This is a detailed description of Project 2.',
    images: [
      require('./ProjectInfoImage/Cacophonic/1.png'), // 1.png
      require('./ProjectInfoImage/Cacophonic/2.gif'), // 2.gif
      require('./ProjectInfoImage/Cacophonic/3.png'), // 3.png
      require('./ProjectInfoImage/Cacophonic/4.png'), // 4.png
      require('./ProjectInfoImage/Cacophonic/5.png'), // 5.png
      require('./ProjectInfoImage/Cacophonic/6.png'), // 6.png
      require('./ProjectInfoImage/Cacophonic/7.png'), // 7.png
      require('./ProjectInfoImage/Cacophonic/8.png'), // 8.png
      require('./ProjectInfoImage/Cacophonic/9.png'), // 9.png
    ],
    video: require('./ProjectInfoImage/Cacophonic/Srivikashini-2.mp4'), // Main project video path (this will be placed at the end)
    mimicryBirdVideo: require('./ProjectInfoImage/Cacophonic/Mimicry bird video.mp4'), // Mimicry bird video path
    date: 'March 2024',
    tags: ['Sound', 'Immersive'],
  },
  {
    id: '3',
    title: 'Pose',
    description: 'This is a detailed description of Project 3.',
    images: Array.from({ length: 27 }, (_, i) => require(`./ProjectInfoImage/Pose/${i + 1}.png`)), // Load images dynamically
    date: 'January 2024',
    tags: ['Design', 'Art'],
  },
  {
    id: '4',
    title: 'Kurio',
    description: 'This is a detailed description of Project 4.',
    images: Array.from({ length: 3 }, (_, i) => require(`./ProjectInfoImage/Kurio/${i + 1}.png`)), // Load images dynamically
    date: 'February 2024',
    tags: ['Code', 'Tech'],
  },
  // Add more projects as needed
];

// Styled components for center-aligned text


const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  width: 100%; /* Ensure the container allows full width */
  max-width: 1200px; /* Optional: Limit max width of container */
`;

const Title = styled.h1`
  font-size: 36px;
  font-weight: bold;
  color: ${({ theme }) => theme.secondary};
  font-family: 'Yeseva One', sans-serif; /* Apply Yesava One font */
  margin-bottom: 20px;
`;

const Description = styled.p`
  font-size: 16px;
  color: ${({ theme }) => theme.gray_one};
  max-width: 600px; /* Optional to limit text width */
  font-family: 'Poppins', sans-serif; /* Apply Poppins font */
  margin-bottom: 20px;
`;

const Image = styled.img`
  width: 100%;
  max-width: 1140px;
  border-radius: 0px;
  margin: 0; /* Remove margin to eliminate spaces */
`;

const Date = styled.p`
  font-size: 14px;
  color: ${({ theme }) => theme.text_secondary + 80};
  margin-bottom: 20px;
`;

const Tags = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-bottom: 20px;
`;

const Tag = styled.span`
  font-size: 12px;
  font-weight: 400;
  color: ${({ theme }) => theme.primary};
  background-color: ${({ theme }) => theme.primary + 15};
  padding: 5px 10px;
  border-radius: 10px;
`;

const Video = styled.video`
  width: 100%;
  max-width: 1140px;
  margin: 0; /* Remove margin to eliminate spaces */
  border-radius: 0px;
`;



const Iframe = styled.iframe`
  width: 100%; /* Allow iframe to take up full width */
  max-width: 1200px; /* Optional: Set a maximum width if you want */
  height: 600px; /* Adjust the height accordingly */
  display: block;
  margin-left: auto;
  margin-right: auto;
  border: none; /* Remove border */
`;

// Main component
const ProjectDetailsPage = () => {
  const { id } = useParams(); // Extract the project ID from the URL params
  const project = projectsData.find((proj) => proj.id === id); // Find the project by ID
  const iframeRef = useRef(null); // Create a ref for the iframe

  // Resize function
  const resizeSketch = (iframe, parentId, aspectRatio) => {
    let parent = document.getElementById(parentId);
    let w = parent.clientWidth;
    iframe.width = w;
    iframe.height = w * aspectRatio;
    iframe.contentWindow.addEventListener('resize', () => {
      let w = parent.clientWidth;
      iframe.width = w;
      iframe.height = w * aspectRatio;
    });
  };

  useEffect(() => {
    if (iframeRef.current) {
      resizeSketch(iframeRef.current, 'iframeContainer', 0.75); // Call the resize function
    }
  }, [iframeRef]); // Run the effect when the component mounts

  if (!project) {
    return <Container>Project not found</Container>;
  }

  return (
    <Container>
      <Title>{project.title}</Title>
      <Tags>
        {project.tags.map((tag, index) => (
          <Tag key={index}>{tag}</Tag>
        ))}
      </Tags>
      <Description>{project.description}</Description>
      <Date>{project.date}</Date>

      {/* Render images, videos, and iframe in the specified order */}
      {project.images.map((image, index) => {
        // Display the mimicry bird video after the third image
        if (index === 2) {
          return (
            <React.Fragment key={index}>
              <Image src={image} alt={`Project Image ${index + 1}`} />
              <Video controls>
                <source src={project.mimicryBirdVideo} type="video/mp4" />
                Your browser does not support the video tag.
              </Video>
            </React.Fragment>
          );
        }
        
        // Display the fourth image followed by the iframe
        if (index === 3) {
          return (
            <React.Fragment key={index}>
              <Image src={image} alt={`Project Image ${index + 1}`} />
              <IframeContainer id="iframeContainer">
                <iframe
                  ref={iframeRef} // Set the ref for the iframe
                  src="https://editor.p5js.org/srivikashini_k/full/F-CWKsGED"
                  title="Cacophonic Cadence Sketch"
                  width="100%"
                  height="100%"
                  frameBorder="0"
                />
              </IframeContainer>
            </React.Fragment>
          );
        }

        // Display the image after the iframe (7.png)
        if (index === 6) {
          return (
            <React.Fragment key={index}>
              <Image src={image} alt={`Project Image ${index + 1}`} />
            </React.Fragment>
          );
        }

        // Display 8.png
        if (index === 7) {
          return (
            <React.Fragment key={index}>
              <Image src={image} alt={`Project Image ${index + 1}`} />
            </React.Fragment>
          );
        }

        // Display 9.png
        if (index === 8) {
          return (
            <React.Fragment key={index}>
              <Image src={image} alt={`Project Image ${index + 1}`} />
            </React.Fragment>
          );
        }

        // Display all other images normally
        return (
          <Image key={index} src={image} alt={`Project Image ${index + 1}`} />
        );
      })}

      {/* Render the 'Srivikashini-2.mp4' video at the end */}
      {project.video && (
        <Video controls>
          <source src={project.video} type="video/mp4" />
          Your browser does not support the video tag.
        </Video>
      )}
    </Container>
  );
};

export default ProjectDetailsPage;
