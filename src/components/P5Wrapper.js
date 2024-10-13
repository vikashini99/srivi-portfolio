// src/components/P5Wrapper.js
//import React, { useEffect } from 'react';

const P5Wrapper = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.4.0/p5.js';
    script.async = true;
    script.onload = () => {
      const sketch = document.createElement('script');
      sketch.src = '/sketch.js';
      sketch.async = true;
      document.body.appendChild(sketch);
    };
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
      const existingSketch = document.querySelector(`script[src="/sketch.js"]`);
      if (existingSketch) {
        document.body.removeChild(existingSketch);
      }
    };
  }, []);

  return null; // Return null since we're not using a div for canvas
};

//export default P5Wrapper;
