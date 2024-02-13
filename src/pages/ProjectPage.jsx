export default function ProjectPage() {

const projects = [
  {
    name: 'Create Lab',
    image: '../../images/createlab-sc.jpg',
    deployedLink: 'https://project-too-82a944373894.herokuapp.com/login',
    repoLink: '',
    description: 'Create Labs is a prototype social networking app for creatives. This is a full-stack application using Node, Express, and MySQL.'
  },
  {
    name: 'Spirit Labs',
    image: '../../images/spiritlabs-sc.jpg',
    deployedLink: 'https://abealberts.github.io/spirit-labs/',
    repoLink: 'https://github.com/abealberts/spirit-labs',
    description: 'A cocktail recipe finder (prototype) that displays cocktail varieties based on user inputs. Also includes a random drink generator and a drink of the day feature. Basic front-end app using vanilla JS.'
  },
  {
    name: 'Project 3',
    image: '../../images/project-placeholder3.png',
    deployedLink: 'https:/www.google.com',
    repoLink: 'https://www.github.com/abealberts',
    description: 'This project is really cool and you should totally check it out!!!'
  },
  {
    name: 'Project 4',
    image: '../../images/project-placeholder4.png',
    deployedLink: 'https:/www.google.com',
    repoLink: 'https://www.github.com/abealberts',
    description: 'This project is really cool and you should totally check it out!!!'
  },
  {
    name: 'Project 5',
    image: '../../images/project-placeholder5.png',
    deployedLink: 'https:/www.google.com',
    repoLink: 'https://www.github.com/abealberts',
    description: 'This project is really cool and you should totally check it out!!!'
  },
  {
    name: 'Project 6',
    image: '../../images/project-placeholder6.png',
    deployedLink: 'https:/www.google.com',
    repoLink: 'https://www.github.com/abealberts',
    description: 'This project is really cool and you should totally check it out!!!'
  },
]

    return (
      <div className="container">
        <div className="content">
            <h2>My Projects</h2>
            {projects.map((project, index) => (
              <div className='box' key={index}>
                <div className="columns">
                  <div className="column is-two-thirds">
                    <figure className="image is-16by9">
                      <img src={project.image} alt={`Image of ${project.name}`}/>
                    </figure>
                  </div>
                  <div className="column">
                    <div className="content">
                      <h2><strong>{project.name}</strong></h2>
                      <h4>
                        <a href={project.deployedLink}>Deployed App</a> // <a href={project.repoLink}>GitHub Repo</a>
                      </h4>
                      <p>{project.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    );
  }