import React from 'react';
import styles from './Portfolio.module.scss';
import projectData from '@/data/projectData.js';
import { Button, Image } from 'antd';
import { FaExternalLinkAlt } from 'react-icons/fa';

const Portfolio = () => {
  return (
    <div className={styles.container}>
      <div className={styles.sectionHeader}>
        <h1 className={styles.sectionTitle}>
          Featured <span className={styles.textFlair}>Projects</span>
        </h1>
      </div>
      <div className={styles.projectContainer}>
        {projectData.map((project) => (
          <div className={styles.projectCard} key={project.id}>
            <div className={styles.projectImageContainer}>
              <Image
                className={styles.projectImage}
                src={project.photo}
                alt={project.title}
                preview={false}
              />
            </div>
            <div className={styles.projectInfo}>
              <h2 className={styles.projectTitle}>{project.name}</h2>
              <p className={styles.projectDescription}>{project.description}</p>
              <div className={styles.projectLinks}>
                {project.liveProjectUrl && (
                  <Button
                    type="primary"
                    href={project.liveProjectUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.projectLink}
                  >
                    See Live <FaExternalLinkAlt className={styles.icon}/>
                  </Button>
                )}
                {project.githubUrl && (
                    <Button
                    type="primary"
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.projectLink}
                  >
                    See Repository <FaExternalLinkAlt className={styles.icon}/>
                  </Button>
                )}
              </div>
            </div>
            <div className={styles.projectTechStack}>
              {project.languages.map((language) => (
                <span className={styles.projectTech} key={language}>
                  {language}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
