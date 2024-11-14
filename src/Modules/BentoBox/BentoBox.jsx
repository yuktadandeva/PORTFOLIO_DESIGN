import './BentoBox.css'
import { Link } from 'react-router-dom'
import { Contact } from '../ContactPage/Contact'
import { About } from '../AboutPage/About'

export const BentoBox = ({path,text,subtext,bst,desc,bd,texttop,textrighttop,path2,subtextrighttop,path3,linkto}) => {

  return (
    <div className="bento">
     
      <div className="label">
       <h1>{text}</h1>
        <h3 style={bst}>{subtext}</h3>
        
      </div>
        <div className='svg'>
        <svg width="119" height="120" viewBox="0 0 119 120" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d={path} fill="rgb(62, 171, 207)"/>
        </svg>
        </div>
        <div className="svg2">
          <svg width="119" height="120" viewBox="0 0 119 120" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d={path2} fill="rgb(62, 171, 207)"/>
        </svg>
        </div>
        <div className='textrighttop'>
        <p>{textrighttop}</p>
        <p>{subtextrighttop}</p>
        </div>
        
        <div className='texttop'>
           <h2>{texttop}</h2>
        </div>
        <div className="desc">
        <br />
        <h4 style={bd}>{desc}</h4>
        </div>

       <div className='toprightsvg'>
       <Link to={linkto}>
       <svg width="20" height="20" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
       <path fillRule="evenodd" clipRule="evenodd" d={path3} fill="black"/>
       </svg>
       </Link>
       </div>

       <div className='toprightsvg'>
       <Link to={linkto}>
       <svg width="20" height="20" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
       <path fillRule="evenodd" clipRule="evenodd" d={path3} fill="black"/>
       </svg>
       </Link>
       </div>
    </div>
  )
}
 