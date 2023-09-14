import React from 'react';
import styles from './Blog.module.scss';
import { Button, Image, Empty } from 'antd';
import { FaExternalLinkAlt } from 'react-icons/fa';
import { useMediaQuery } from 'react-responsive';
import Error from '@/components/error/Error.component';
import Loader from '@/components/loader/Loader.component';
import useGetBlogData from '@/state/actions/blog/useGetBlogData';

const Blog = () => {
  const { data: blogData, isLoading, isError, error } = useGetBlogData();

  const isMobile = useMediaQuery({ query: '(max-width: 768px)' });

  if (isLoading) {
    return <Loader />;
  }

  if (isError) {
    return <Error error={error} />;
  }
  if (!blogData || blogData?.length === 0) {
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
        {blogData?.map((blog) => (
          <div
            className={styles.projectCard}
            key={blog.id}
            style={{
              backgroundImage: `url("${blog.blogImageUrl}")`,
            }}
          >
            {!isMobile && (
              <div className={styles.projectImageContainer}>
                <Image
                  className={styles.projectImage}
                  src={blog.blogImageUrl}
                  alt={blog.blogTitle}
                  preview={false}
                />
              </div>
            )}
            <div className={styles.projectInfo}>
              <h2 className={styles.projectTitle}>{blog.blogTitle}</h2>
              <p className={styles.projectDescription}>
                {blog.description.length > 300
                  ? blog.description.substring(0, 300) + '...'
                  : blog.description}
              </p>
              <div className={styles.projectLinks}>
                <Button
                  type="primary"
                  href={blog.liveProjectUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.projectLink}
                >
                  Read more <FaExternalLinkAlt className={styles.icon} />
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
