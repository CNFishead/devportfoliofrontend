import React from 'react';
import styles from './Portfolio.module.scss';
// import projectData from '@/data/projectData.js';
import { Button, Image } from 'antd';
import { FaExternalLinkAlt } from 'react-icons/fa';
import { useMediaQuery } from 'react-responsive';
import useGetFeaturedProjects from '@/state/actions/portfolio/useGetFeaturedProjects';
import Loader from '@/components/loader/Loader.component';
import { Empty } from 'antd';
import Error from '@/components/error/Error.component';

const Portfolio = () => {
  const {
    data: projectData,
    isLoading,
    isError,
    error,
  } = useGetFeaturedProjects();

  const isMobile = useMediaQuery({ query: '(max-width: 768px)' });

  if (isLoading) {
    return <Loader />;
  }

  if (isError) {
    return <Error error={error} />;
  }
  if (!projectData || projectData?.length === 0) {
    return <Empty />;
  }

  return (
    <div className={styles.container}>
      <div className={styles.sectionHeader}>
        <h1 className={styles.sectionTitle}>
          Featured <span className={styles.textFlair}>Projects</span>
        </h1>
      </div>
      <div className={styles.projectContainer}>
        {projectData?.projects?.map((project) => (
          <div
            style={{
              backgroundImage: `url("${isMobile ? project.photo : ''}")`,
            }}
            className={styles.projectCard}
            key={project.id}
          >
            {!isMobile && (
              <div className={styles.projectImageContainer}>
                <Image
                  className={styles.projectImage}
                  src={project.photo}
                  alt={project.title}
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
                {project.liveProjectUrl && (
                  <Button
                    type="primary"
                    href={project.liveProjectUrl}
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
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
