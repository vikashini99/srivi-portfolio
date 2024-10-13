import React from 'react';
import styled from 'styled-components';

// Styled component for the iframe
const Iframe = styled.iframe`
  width: 100%; /* Allow iframe to take up full width */
  max-width: 1200px; /* Optional: Set a maximum width */
  height: 800px; /* Adjust the height as needed */
  display: block;
  margin-left: auto;
  margin-right: auto;
  border: none; /* Remove border */
`;

const CreativeCoding = () => {
  return (
    <div>
      <h1>Creative Coding</h1>
      <p>
        Here is an embedded webpage showcasing creative coding projects.
      </p>
      <Iframe 
        src="http://192.168.1.102:9966/" 
        title="Creative Coding Projects" 
        allowFullScreen
      />
    </div>
  );
};

export default CreativeCoding;
