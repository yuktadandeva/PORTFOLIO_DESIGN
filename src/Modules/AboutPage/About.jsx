import './About.css'
import profileImage from '/utils/pictures/profile.jpg'
export const About = () => {
  const mystyle = {
    "margin":"5px",
    "textAlign": "center"
  }
  return (

       <div className='aboutContainer'>
      <div className='topImage'>
      <img src={profileImage} alt="" />
      </div>
      
      <div className='title'>
        <h3 style={mystyle}>Yukta Dandeva</h3>
        <p>Motivated Web Development student with a passion for building responsive and secure web applications. Proficient 
in both front-end and back-end technologies, with a keen focus on creativity, functionality, and user experience. 
Actively developing skills in data structures and problem-solving to enhance web development practices.</p>
      </div>

      <div className='education'>
      <h3 style={mystyle}>Education</h3>
      <p>
    Maharaja Surajmal Institute of Technology, Delhi  <br />
    Bachelor of Technology in Computer Science  <br />  CGPA: 8.7  | <i>2022-2026</i>

    <br /><br />
    Siddharatha Public School, Delhi <br />
    12th CBSE                                  <br />  96.6%      | <i> 2021-2022 </i>

    <br /><br />
    Bal Bharti School, Bahadurgarh <br />
    10th CBSE                               <br />      98.2%      | <i> 2019-2020 </i>
      </p>
      </div>

      <div className='skills'>
      <h3 style={mystyle}>Skills</h3>
      <p>
      Technical Skills  <br />
Frontend: HTML, CSS, JavaScript, React, Responsive Design (Bootstrap, Material UI)  <br />
Backend: Node.js (Express), MongoDB, REST API Integration  <br />
Programming: C++ (Intermediate), Java, Python(familiar) <br />
Tools: GitHub/Git, Postman, Figma (Wireframes, Mock-ups, Prototypes), Wix  <br />
Web Design: User Interface (UI), User Experience (UX), Wireframing  <br />
<br />
Soft Skills  <br />
Excellent communication (written & verbal)  <br />
Problem-solving with attention to detail  <br />
              Teamwork and critical thinking <br />
      </p>
      </div>
        </div>

  )
}
