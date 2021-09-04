import React, { useLayoutEffect, useState, useEffect } from 'react';
import LargePhoto from '../../components/LargePhoto/index';
import imagesData from '../../adapters/imagesData';

export default function Home() {
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });
  const [windowType, setWindowType] = useState('desktop');

  useLayoutEffect(() => {
    function updateSize() {
      setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    }
    window.addEventListener('resize', updateSize);
    updateSize();
    return () => window.removeEventListener('resize', updateSize);
  }, []);

  useEffect(() => {
    console.log('+++ 19: src/pages/Home/Home.jsx - windowSize.width: ', windowSize.width);
    console.log('+++ 20: src/pages/Home/Home.jsx - windowType: ', windowType);

    if (windowSize.width < 800) {
      setWindowType('mobile');
    }
  });

  return (
    <div className="h-screen">
      <LargePhoto imageLink={imagesData[windowType].merzougabw} />
      <LargePhoto imageLink={imagesData[windowType].halongbaybw} />
    </div>
  );
}
