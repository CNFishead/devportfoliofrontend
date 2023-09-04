import React from 'react';
import styles from './Home.module.scss';
import { FaHome } from 'react-icons/fa';
import homepageViews from '@/data/homepageViews.js';
//@ts-ignore
import { motion, Variants } from 'framer-motion';

const Home = () => {
  const cardVariants: Variants = {
    offscreen: {
      y: 300,
      opacity: 0,
    },
    onscreen: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        bounce: 0.4,
        duration: 0.8,
      },
    },
  };
  return (
    <div className={styles.container}>
      <motion.div
        className={styles.section}
        viewport={{ amount: 0.8 }}
      >
        {homepageViews.map((view, index) => {
          return (
            <motion.div
              className="card"
              initial="offscreen"
              whileInView="onscreen"
              variants={cardVariants}
              key={view.id}
              id={view.link}
            >
              <div className={styles.sectionHeader}>
                <p className={styles.sectionTitle}>
                  {view.icon} {view.title}
                </p>
              </div>
              {view.component}
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
};

export default Home;
