import React from 'react';
import styles from './Blog.module.scss';
import { Button, Image, Empty, Row } from 'antd';
import { FaExternalLinkAlt } from 'react-icons/fa';
import { useMediaQuery } from 'react-responsive';
import Error from '@/components/error/Error.component';
import Loader from '@/components/loader/Loader.component';
import useGetBlogData from '@/state/actions/blog/useGetBlogData';
import BlogItem from '@/components/blogItem/BlogItem.component';
import Link from 'next/link';

const Blog = () => {
  const {
    data: blogData,
    isLoading,
    isError,
    error,
  } = useGetBlogData({
    pageLimit: 2,
    sort: 'createdAt;-1',
    filter: 'isFeatured;true,isPrivate;false',
  });

  const isMobile = useMediaQuery({ query: '(max-width: 768px)' });

  if (isLoading) {
    return <Loader />;
  }

  if (isError) {
    return <Error error={error} />;
  }
  if (!blogData || blogData?.blogs?.length === 0) {
    return <Empty />;
  }
  return (
    <div className={styles.container}>
      <div className={styles.sectionHeader}>
        <h1 className={styles.sectionTitle}>
          Featured <span className={styles.textFlair}>Blogs</span>
        </h1>
      </div>
      <div className={styles.projectContainer}>
        {blogData?.blogs?.map((blog) => (
          <BlogItem key={blog._id} blog={blog} />
        ))}
      </div>{' '}
      <Row justify={'end'}>
        <Button type="primary">
          <Link href="/blogs">See All Featured Projects</Link>
        </Button>
      </Row>
    </div>
  );
};

export default Blog;
