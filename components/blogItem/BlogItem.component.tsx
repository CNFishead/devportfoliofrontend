import BlogType from '@/types/BlogType';
import styles from '../projectItem/ProjectItem.module.scss';
import React from 'react';
import { Button, Image } from 'antd';
import { FaExternalLinkAlt } from 'react-icons/fa';
import { useMediaQuery } from 'react-responsive';

interface blogItemProps {
  blog: BlogType;
}
const blogItem = (props: blogItemProps) => {
  const { blog } = props;
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' });
  return (
    <div className={styles.projectContainer}>
      <div
        className={styles.projectCard}
        style={{
          backgroundImage: `url("${isMobile ? blog.blogImageUrl : ''}")`,
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
              href={`/blogs/${blog.slug}`}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.projectLink}
              disabled
            >
              Read more <FaExternalLinkAlt className={styles.icon} />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default blogItem;
