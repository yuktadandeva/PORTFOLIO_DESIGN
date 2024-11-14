import { Header } from "../../Shared/Components/Header/Header"
import { BentoBox } from "../BentoBox/BentoBox"
import { Footer } from "../../Shared/Components/Footer/Footer"
import { Aside } from "../Aside/Aside"
import './Dashboard.css'
import config from '../../config.json'
import { useState ,useEffect } from "react"
import profileImage from '/utils/pictures/profile.jpg';



export const Dashboard = () => {
const [animationComplete , setAnimation] = useState(false);

useEffect(() => {
  const screenWidth = window.innerWidth;

  if (screenWidth <= 600) {
    // If screen size is small, skip the animation
    setAnimation(true);
  } else {
    // Set a timer for larger screens to trigger the animation
    const timer = setTimeout(() => {
      setAnimation(true);
    }, 1600);

    // Cleanup the timer
    return () => clearTimeout(timer);
  }
}, []);

    const path= config.path;
    const path2 = config.path2;
    const path3 = config.path3;
    const path4 = path3;

    const b1st={
      fontWeight: "100",
    }
    const b1d={
        fontWeight: "200",
        fontSize:"16px"
    }
    const b3d={
      fontWeight:"200"
    }
  return (
    <div className="dashboard">
        <div >
          <div className={`header ${animationComplete ? 'visible' : ''}`}><Header></Header></div>
        

        <div className="grid">
        
        <div className="grid1">
           <div className={`gridbox1 ${animationComplete ? 'visible' : ''}`} >
           <BentoBox path={path} text={"Full Stack Developer"}  bst={b1st} subtext={"Turning ideas into interactive experiences"} bd={b1d} desc={""} ></BentoBox>
           </div>
           <div className="gridbox2"><BentoBox></BentoBox></div>
           <div className="profileImage"><img src={profileImage} alt="" /></div>
           <div className={`gridbox3 ${animationComplete ? 'visible' : ''}`}><BentoBox path2={path2} path3={path3} linkto={'/about'} desc={"Hi, I'm Yukta Dandeva, a third-year computer science student with a knack for coding and design. I enjoy crafting both functional and visually appealing projects, merging my technical skills with creative flair."} bd={b3d}/></div>
           <div className={`gridbox4 ${animationComplete ? 'visible' : ''}`}><BentoBox path3={path3} text={"Contact"} linkto={'/contact'} textrighttop={"Have some "} subtextrighttop={"questions ?"} ></BentoBox></div>
           
        </div>
 
        <div className="grid2">
           <div className={`gridbox5 ${animationComplete ? 'visible' : ''}`}><Aside path3={path3}></Aside> </div>
           <div className={`gridbox6 ${animationComplete ? 'visible' : ''}`}><Footer></Footer></div>
        </div>

        </div>
        </div>
        
    </div>
  )
}
