import './Header.css'
import { Link } from 'react-router-dom'
import { Projects } from '../../../Modules/ProjectsPage/Projects'
import { Contact } from '../../../Modules/ContactPage/Contact'
import { useEffect,useState } from 'react'
export const Header = () => {

    const myStyle={
     fontStyle : "italic",
     fontWeight : "100"
    }
  return (
    <div className="headerbox flex">
        <div className='flexName'>
         <h2 >Yukta</h2> &nbsp;
         <h2 style={myStyle}>Dandeva</h2>
        </div>
        <div className='nav'>
            <ul className='flex'>
                <li><Link to="/about" >About</Link></li>
                <li><a href='https://github.com/yuktadandeva?tab=repositories' target='blank'>Projects</a></li>
                <li><Link to="/contact" >Contact</Link></li>
            </ul>
        </div>
    </div>
  )
}
