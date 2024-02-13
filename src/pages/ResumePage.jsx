export default function ResumePage() {
  const skills = [
    'MongoDB',
    'Express',
    'React',
    'Node',
    'JS, HTML, CSS',
    'Digital Design',
    'Creative Problem Solving',
    'Content Creation: Audio, Videography, Photography',
    'Adobe Creative Suite: Illustrator, Photoshop, Indesign, Premiere, Lightroom',
    'Microsoft Office'
  ]
    return (
      <div className="container">
        <div className="content">
            <h2>My Resume</h2>
            <div className="box hero">
              <h4>Download my resume:</h4>
              <a href="../../aa-resume.pdf" download>
                <button className="button is-link">Resume Download</button>
              </a>
              
            </div>
            <div className="box hero">
              <h4>My Skillset:</h4>
              <div className="content">
                <ul>
                  {skills.map((skill, index) => (<li key={index}>{skill}</li>))}
                </ul>
              </div>
            </div>
        </div>
      </div>
    );
  }