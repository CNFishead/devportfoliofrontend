import React from 'react';
import styles from './Home.module.scss';
import { FaHome } from 'react-icons/fa';
import homepageViews from '@/data/homepageViews.js';

const Home = () => {
  return (
    <div className={styles.container}>
      {homepageViews.map((view, index) => {
        return (
            <div key={view.id} className={styles.section} id={view.link}>
              <div className={styles.sectionHeader}>
                <p className={styles.sectionTitle}>
                  {view.icon} {view.title}
                </p>
              </div>
              {view.component}
            </div>
        );
      })}
    </div>
  );
};

export default Home;
