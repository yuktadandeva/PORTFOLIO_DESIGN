import { useEffect, useState } from 'react'
import './Aside.css'
import {slides} from './data.json'
import config from '../../config.json'
import { Link } from 'react-router-dom'

export const Aside = () => {
const [slide , setSlide] = useState(0);
const path3 = config.path3;

useEffect(() => {
  const interval = setInterval(() => {
      setSlide((prevSlide) => (prevSlide + 1) % slides.length); // Loop back to 0
  }, 2000);

  return () => clearInterval(interval); // Cleanup on unmount
}, []);


const prevSlide = ()=>{
  if(slide>0){
    setSlide(slide-1);
  }

}

const nextSlide = ()=>{
if(slide<slides.length - 1){
  setSlide(slide+1);
}
}

  return (
    // <div className='aside'>
     
    //  {/* <div>
    //   <h1>Skills</h1>
    //  </div>
    //  <ul>
    //   <li><h4>Prog. Languages </h4>C, C++(efficient), Java, Python, SQL</li>
    //   <li><h4>Web Development </h4>
    //       Frontend - HTML, CSS, JavaScript, React, Bootstrap, Tailwind <br />
    //       Backend - NodeJS(ExpressJS) <br />
    //       Database - MongoDB, MySql
    //   </li>
    //   <li><h4>Soft Skills </h4>Communication, Presentation skills, Discipline, TeamWork </li>
    //   <li><h4>Other </h4> Postman, Figma(Wireframes , Prototypes), Git, Github</li>
    //   <li><p> Currently learning Data Structures!</p></li>
    //  </ul> */}
     
    // </div>
    <div className='aside'>
    <div className='carousel'>
      <div className='card'>
    {slides.map((slideImage, idx)=>{
      return (
      <img src={slideImage.src}  key={idx} alt={slideImage.alt} className={slide===idx?"slide":"slide-hidden"}/>
      )
    })}
  
    </div>
    </div>
    <div className='footnote'>
       <p>Take a Look at <br />My Projects</p>

       <a href="https://github.com/yuktadandeva?tab=repositories" target='blank'>
         <svg width="20" height="20" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
           <path fillRule="evenodd" clipRule="evenodd" d={path3} fill="black"/>
         </svg>
       </a>

    </div>
    </div>
  )
}
