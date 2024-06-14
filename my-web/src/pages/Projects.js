import React from 'react';
import { useTranslation } from 'react-i18next';
import './Projects.css';
import githubLogo from '../assets/images/git.png';
import resume from '../assets/resume/Pranjal-Sharma.Resume.pdf';
import download from '../assets/images/download.png';

const Projects = () => {
    const { t } = useTranslation("global");

    const projects = [
        {
            category: t("projects.webDevelopment"),
            items: [
                {
                    title: t("projects.web.0.title"),
                    description: t("projects.web.0.description"),
                    link: "https://github.com/PranjalSharma13/my-website"
                },
                {
                    title: t("projects.web.1.title"),
                    description: t("projects.web.1.description"),
                    link: "https://github.com/Sudean11/Moomin-Realstates-Frontend-React"
                }
            ]
        },
        {
            category: t("projects.ML"),
            items: [
                {
                    title: t("projects.data.0.title"),
                    description: t("projects.data.0.description"),
                    link: "https://github.com/PranjalSharma13/dr-dermo"
                },
                {
                    title: t("projects.data.1.title"),
                    description: t("projects.data.1.description"),
                    link: "https://www.ijariit.com/manuscripts/v7i4/V7I4-1407.pdf"
                }
            ]
        },
        {
            category: t("projects.backendDevelopment"),
            items: [
                {
                    title: t("projects.mobile.0.title"),
                    description: t("projects.mobile.0.description"),
                    link: "https://github.com/PranjalSharma13/badge-system"
                }
            ]
        }
    ];

    const openGitHub = (link) => {
        window.open(link, '_blank'); 
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
                            <div className="github-logo" onClick={() => openGitHub(project.link)}>
                                <img src={githubLogo} alt="GitHub Logo" />
                            </div>
                        </div>
                    ))}
                </div>
            ))}
            <button className="download-cv-button">
                <img src={download} alt="Download Icon" />
                <a href={resume} download="Resume">Download CV</a>
            </button>
        </div>
    );
};

export default Projects;
