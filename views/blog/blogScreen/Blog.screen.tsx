import Error from '@/components/error/Error.component';
import Loader from '@/components/loader/Loader.component';
import ProjectType from '@/types/ProjectType';
import React, { useEffect } from 'react';
import { Empty } from 'antd';
import { useQueryClient } from '@tanstack/react-query';
import useGetBlogData from '@/state/actions/blog/useGetBlogData';
import BlogItem from '@/components/blogItem/BlogItem.component';
import BlogType from '@/types/BlogType';

const Blog = () => {
  const queryClient = useQueryClient();
  const {
    data: blogData,
    isLoading,
    isError,
    error,
  } = useGetBlogData({ pageLimit: 10 });
  useEffect(() => {
    // refetch the data
    queryClient.invalidateQueries({ queryKey: ['featuredBlogs'] });
  }, []);

  // these go last
  if (isLoading) {
    return <Loader />;
  }
  if (isError) {
    return <Error error={error} />;
  }
  if (!blogData) {
    return <Empty />;
  }

  return (
    <div style={{ padding: '2%' }}>
      {blogData?.blogs?.map((blog: BlogType) => {
        return <BlogItem key={blog._id} blog={blog} />;
      })}
    </div>
  );
};

export default Blog;
