export default function AboutPage() {
    return (
      <div className="container">
        <div className="content">
            <h2>About Me</h2>
            <div className="card pt-4">
              <div className="card-image">
                <figure className="image is-4by3 mt-4">
                  <img src="../../images/aboutme.jpg" alt="Placeholder image"/>
                </figure>
              </div>
              <div className="card-content">
                <div className="content">
                  Hi there! My name is Abe and I am a full-stack web developer. I build apps using the MERN stack. I have a strong creative background which helps with not only visual design aspects of projects, but the creative problem solving and engineering as well.
                  <br/>
                  <br/>
                  Check out some of my recent projects in my <a href="/projects">portfolio</a>, or <a href="/contact">get in touch!</a>
                </div>
              </div>
            </div>
        </div>
      </div>
    );
  }
  