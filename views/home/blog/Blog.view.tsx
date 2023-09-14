import React from 'react';
import styles from './Blog.module.scss';
import blogData from '@/data/blogData.js';
import { Button, Image } from 'antd';
import { FaExternalLinkAlt } from 'react-icons/fa';
import { useMediaQuery } from 'react-responsive';

const Blog = () => {
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' });
  return (
    <div className={styles.container}>
      <div className={styles.sectionHeader}>
        <h1 className={styles.sectionTitle}>
          Featured <span className={styles.textFlair}>Blogs</span>
        </h1>
      </div>
      <div className={styles.projectContainer}>
        {blogData.map((blog) => (
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
