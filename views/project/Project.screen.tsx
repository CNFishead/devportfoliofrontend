import Error from '@/components/error/Error.component';
import Loader from '@/components/loader/Loader.component';
import useGetFeaturedProjects from '@/state/actions/portfolio/useGetFeaturedProjects';
import ProjectType from '@/types/ProjectType';
import React, { useEffect } from 'react';
import { Empty } from 'antd';
import ProjectItem from '@/components/projectItem/ProjectItem.component';
import { useQueryClient } from '@tanstack/react-query';

const Project = () => {
  const queryClient = useQueryClient();
  const {
    data: projectData,
    isLoading,
    isError,
    error,
  } = useGetFeaturedProjects({ pageLimit: 10 });
  useEffect(() => {
    // refetch the data
    queryClient.invalidateQueries({ queryKey: ['portfolio'] });
  }, []);

  // these go last
  if (isLoading) {
    return <Loader />;
  }
  if (isError) {
    return <Error error={error} />;
  }
  if (!projectData) {
    return <Empty />;
  }

  return (
    <div style={{ padding: '2%' }}>
      {projectData?.projects?.map((project: ProjectType) => {
        return <ProjectItem key={project._id} project={project} />;
      })}
    </div>
  );
};

export default Project;
