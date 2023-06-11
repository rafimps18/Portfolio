
import ProjectCard from '../project-card/ProjectCard';
import './Projects.css';

const Projects = () => {
    return (
        <div id="my_projects" className="projects-container-main">
            <div className="projects-header">
                <h1>My Projects</h1>
            </div>
            <div className="projects-catalog">
                <ProjectCard 
                imgsrc=".\src\components\assets\SW-PIMS.png"
                projectName="Product Inventory Management System for a Shoe store" 
                projectDetails="A product inventory management that has basic CRUD functions and a Database"
                />
                <ProjectCard 
                imgsrc=".\src\components\assets\SW-PIMS.png"
                projectName="Product Inventory Management System for a Shoe store" 
                projectDetails="A product inventory management that has basic CRUD functions and a Database"
                />
                <ProjectCard 
                imgsrc=".\src\components\assets\SW-PIMS.png"
                projectName="Product Inventory Management System for a Shoe store" 
                projectDetails="A product inventory management that has basic CRUD functions and a Database"
                />
            </div>
        </div>
    );
};

export default Projects;