import './ProjectCard.css'

type ProjectCardProps = {
    imgsrc: string;
    projectName: string;
    projectDetails: string;
}

const ProjectCard = ({ imgsrc, projectName, projectDetails }: ProjectCardProps) => {
    return (
        <>
        <div className="project-card-main">
            <div className="project-card">
                <div className="project-image">
                    <a href='https://github.com/rafimps18/ShoeWare-PIMS'>
                        <img src={imgsrc}/>
                    </a>
                </div>
                <h2>{projectName}</h2>
                <p>{projectDetails}</p>
            </div>
        </div>
        </>
    );
};

export default ProjectCard;