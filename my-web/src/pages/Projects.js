import React from 'react';
import { useTranslation } from 'react-i18next';
import './Projects.css';
import githubLogo from '../assets/images/git.png';
import resume from '../assets/resume/Pranjal-Sharma.Resume.pdf';

const Projects = () => {
    const { t } = useTranslation("global");

    const projects = [
        {
            category: t("projects.webDevelopment"),
            items: t("projects.web", { returnObjects: true })
        },
        {
            category: t("projects.ML"),
            items: t("projects.data", { returnObjects: true })
        },
        {
            category: t("projects.backendDevelopment"),
            items: t("projects.mobile", { returnObjects: true })
        }
    ];

    const openGitHub = () => {
        window.open('https://github.com/PranjalSharma13', '_blank'); 
    };

    return (
        <div className="projects-container">
            <h1>{t("projects.title")}</h1>
            {projects.map((category, index) => (
                <div key={index}>
                    <br/>
                    <h2>{category.category}</h2>
                    {category.items.map((project, idx) => (
                        <div key={idx} className="project">
                            <h3>{project.title}</h3>
                            <p>{project.description}</p>
                            <div className="github-logo" onClick={openGitHub}>
                                <img src={githubLogo} alt="GitHub Logo" />
                            </div>
                        </div>
                    ))}
                </div>
            ))}
             <button className="download-cv-button" ><a href={resume} download="Resume">Download CV</a>
             </button>
        </div>
    );
};

export default Projects;
