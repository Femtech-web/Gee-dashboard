/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import { Fragment, useState } from 'react';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import MobileSidebar from './components/MobileSidebar';
import LeftSection from './components/LeftSection';
import RightSection from './components/RightSection';
import styles from './components/styles';

function App() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const getMode = () => {
    if(localStorage.getItem('themeMode')){
        return localStorage.getItem('themeMode')
    } else{
        return 'light'
    }
  };

  const setMode = (value) => {
    setCurrentMode(value);

    localStorage.setItem('themeMode', value);
    };

  const [currentMode, setCurrentMode] = useState(getMode());
  const[ currentBar, setCurrentBar] = useState(0)

  return (
    <div className={currentMode === "dark" && "dark"}>
      <Sidebar 
        isNavOpen={isNavOpen} 
        setIsNavOpen={setIsNavOpen} 
        setCurrentMode={setCurrentMode} 
        currentMode={currentMode}
        setMode={setMode} 
      />
      {isNavOpen && <MobileSidebar 
      setIsNavOpen={setIsNavOpen} 
      currentMode={currentMode} 
      setMode={setMode} 
       />}
      <main className={styles.pageContainer}>
        <Navbar currentMode={currentMode} setIsNavOpen={setIsNavOpen} isNavOpen={isNavOpen}/>
        <div className={styles.bodyContainer}>
          <LeftSection currentMode={currentMode} />
          <RightSection />
        </div>
      </main>
    </div>
  )
}

export default App
