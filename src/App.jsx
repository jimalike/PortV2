import { useEffect, useState } from 'react'

import './App.css'
import LeftSection from './sections/LeftSection'
import RightSection from './sections/RightSection'
import Navbar from './sections/Navbar';


function App() {

  const [sectionIds, setSetionsIds] = useState([]);
  const [navBarItems, setNavBarItems] = useState([]);
  const [currentSection, setCurrentSection] = useState("")

  const addSectionIds = (sectionId) => {
    const elementId = document.getElementById(sectionId).id;
    setSetionsIds((prev) => [...new Set([...prev, elementId])]);

    const elementTitle = document.getElementById(sectionId).childNodes[0].textContent

    const obj = { title: elementTitle, sectionId: elementId }
    setNavBarItems((prev) => {
      if (prev.findIndex(e => e.title === obj.title) < 0) {
        return [...prev, obj];

      }
      return prev;

    });
  }

const handleScroll = () => {
  for (let index = 0; index < sectionIds.length; index++) {
    const element = sectionIds[index];
    console.log('scroll', element);
    const elementOffsetTop = document.getElementById(element).getClientRects()[0].y;
    const height = document.getElementById(element).getClientRects()[0].height;
    const viewHeight = window.innerHeight * 0.3


    if(elementOffsetTop <= 0){
      if ((elementOffsetTop + height) > viewHeight) {
        setCurrentSection(element)
      }
      setCurrentSection(element)
    } else if (elementOffsetTop > 0 && elementOffsetTop < viewHeight){
      setCurrentSection(element)
    }
  }
}



  useEffect(() => {
    if (sectionIds.length > 0) {
      setCurrentSection(sectionIds[0]);
    }
  }, [sectionIds])

  useEffect(() => {
    window.addEventListener('scroll',handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    }
  }, [sectionIds])


  return (
    <div className='mt-14 mx-auto max-w-6xl gap-y-5 grid lg:grid-cols-[40%_60%]'>
      <LeftSection navBarItems={navBarItems} currentSection={currentSection} />
      <RightSection onInitial={addSectionIds} />
    </div>
  )
}


export default App
