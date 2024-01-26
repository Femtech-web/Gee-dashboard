import { useState, useEffect } from 'react';

export const useCustomState = () => {
  const [screenSize, setScreenSize] = useState(window.innerWidth)
  const [mobile, setMobile] = useState(null)

  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth);
    window.addEventListener('resize', handleResize);
    handleResize();
    
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if(screenSize <= 912){
        setMobile(true);
      } else{
      setMobile(false);
    }
  }, [screenSize])

  return [mobile]
}
