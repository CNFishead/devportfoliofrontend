import ProjectType from '@/types/ProjectType';
import React from 'react';
import styles from './ProjectItem.module.scss';
import { Button, Image } from 'antd';
import { FaExternalLinkAlt } from 'react-icons/fa';
import { useMediaQuery } from 'react-responsive';

interface ProjectItemProps {
  project: ProjectType;
}

const ProjectItem = (props: ProjectItemProps) => {
  const { project } = props;
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' });
  return (
    <div className={styles.projectContainer}>
      <div
        style={{
          backgroundImage: `url("${isMobile ? project.photo : ''}")`,
        }}
        className={styles.projectCard}
        key={project._id}
      >
        {!isMobile && (
          <div className={styles.projectImageContainer}>
            <Image
              className={styles.projectImage}
              src={project.photo}
              alt={project.name}
              preview={false}
            />
          </div>
        )}
        <div className={styles.projectInfo}>
          <h2 className={styles.projectTitle}>{project.name}</h2>
          <p className={styles.projectDescription}>
            {project.description.length > 300
              ? project.description.substring(0, 300) + '...'
              : project.description}
          </p>
          <div className={styles.projectLinks}>
            {project.liveProjectURL && (
              <Button
                type="primary"
                href={project.liveProjectURL}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.projectLink}
              >
                See Live <FaExternalLinkAlt className={styles.icon} />
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
                See Repository <FaExternalLinkAlt className={styles.icon} />
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
    </div>
  );
};

export default ProjectItem;
