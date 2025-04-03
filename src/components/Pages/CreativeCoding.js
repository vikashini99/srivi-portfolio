import React, { lazy, Suspense, memo } from 'react';
import styled from 'styled-components';
import Image1 from '../ProjectInfoImage/CardImage/cacophonic-cadence.gif';
import Image2 from '../ProjectInfoImage/CardImage/cc1.gif';

// Lazy load NextProjects to improve initial load time
const NextProjects = lazy(() => import('../NextProjects'));

// Styled Components
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

const IframeWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
`;

const Iframe = styled.iframe`
  width: 100%;
  height: 800px;
  border: none;
`;

const Image = styled.img`
  width: 100%;
  max-width: 1100px;
  display: block;
  margin: 20px auto;
  loading: lazy;
`;

// Memoized Functional Component to prevent unnecessary re-renders
const CreativeCoding = memo(() => {
  const nextProjects = [
    {
      id: 1,
      title: 'Generative Art Exploration',
      date: '2024',
      description: 'Exploring generative algorithms for abstract compositions.',
      image: Image1,
      tags: ['Generative Art', 'Creative Coding', 'p5.js'],
    },
    {
      id: 2,
      title: 'Data-Driven Visuals',
      date: '2024',
      description: 'Transforming data into mesmerizing visuals.',
      image: Image2,
      tags: ['Data Visualization', 'Interactive Design', 'Creative Coding'],
    },
  ];

  return (
    <div>
      <Title>Creative Coding</Title>
      <Description>An interactive code exploration using Perlin noise</Description>

      {/* Wrapping iframe for better layout handling */}
      <IframeWrapper>
        <Iframe
          src="https://editor.p5js.org/vikashini.dxb/full/9MQUYdnSg"
          title="Creative Coding Projects"
          loading="lazy"
          allowFullScreen
        />
      </IframeWrapper>

      {/* Lazy Load NextProjects */}
      <Suspense fallback={<div>Loading projects...</div>}>
        <NextProjects projects={nextProjects} />
      </Suspense>
    </div>
  );
});

export default CreativeCoding;
