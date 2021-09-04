import React, { useState, useEffect } from 'react';
import LargePhoto from '../../components/LargePhoto/index';
import largeImagesData from '../../adapters/imagesData';
import useWindowDimensions from '../../adapters/useWindowDimensions';

export default function Home() {
  const { width } = useWindowDimensions();
  const [windowType, setWindowType] = useState('desktop');

  useEffect(() => {
    if (width < 800) {
      setWindowType('mobile');
    } else {
      setWindowType('desktop');
    }
  }, [width]);

  return (
    <div>
      <LargePhoto imageLink={largeImagesData[windowType].acropolisbw} />
      <LargePhoto imageLink={largeImagesData[windowType].albaiuliabw} />
    </div>
  );
}
