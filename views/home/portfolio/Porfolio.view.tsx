import React from 'react';
import styles from './Portfolio.module.scss';
// import projectData from '@/data/projectData.js';
import { Button, Image, Row } from 'antd';
import { FaExternalLinkAlt } from 'react-icons/fa';
import { useMediaQuery } from 'react-responsive';
import useGetFeaturedProjects from '@/state/actions/portfolio/useGetFeaturedProjects';
import Loader from '@/components/loader/Loader.component';
import { Empty } from 'antd';
import Error from '@/components/error/Error.component';
import ProjectItem from '@/components/projectItem/ProjectItem.component';
import Link from 'next/link';
import { useQueryClient } from '@tanstack/react-query';

const Portfolio = () => {
  const queryClient = useQueryClient();
  const {
    data: projectData,
    isLoading,
    isError,
    error,
  } = useGetFeaturedProjects({ pageLimit: 3, sort: 'createdAt;1' });

  React.useEffect(() => {
    // refetch the data
    queryClient.invalidateQueries({ queryKey: ['portfolio'] });
  }, []);

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
          <ProjectItem key={project._id} project={project} />
        ))}
      </div>
      <Row justify={'end'}>
        <Button type="primary">
          <Link href="/projects">See All Featured Projects</Link>
        </Button>
      </Row>
    </div>
  );
};

export default Portfolio;
