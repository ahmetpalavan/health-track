'use client';

import React, { useEffect, useState } from 'react';
import Confetti from 'react-confetti';

const ConfettiPage = () => {
  const [windowSize, setWindowSize] = useState<{ width: number; height: number }>({ width: 0, height: 0 });

  useEffect(() => {
    setWindowSize({ width: window.innerWidth, height: window.innerHeight });
  }, []);

  return <Confetti colors={['#2ECC71', '#27AE60', '#1ABC9C']} width={windowSize.width} height={windowSize.height} recycle={false} />;
};

export default ConfettiPage;
