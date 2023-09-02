import React from 'react';
import styles from './AboutMe.module.scss';

const AboutMe = () => {
  return (
    <div className={styles.container}>
      <div className={styles.sectionHeader}>
        <h1 className={styles.header}>
          From <span className={styles.title}>Passion</span> to{' '}
          <span className={styles.title}>Profession</span>:
        </h1>
        <h2 className={styles.subtitle}>My <span className={styles.jobTitle}>Software Development</span> Journey</h2>
      </div>
      <div className={styles.sectionBody}>
        I am a proactive senior software developer with a solid foundation and a
        deep passion for coding. Over the course of more than six years, I have
        dedicated myself to self-study and professional education, allowing me
        to gain proficiency in various full-stack languages, frameworks, and
        libraries. My journey into technology began at an early age, and it's
        been fueled by a natural aptitude for technology. This initial spark,
        coupled with my commitment to simplifying life through automation,
        drives me to work towards changing the world through code.
      </div>
    </div>
  );
};

export default AboutMe;
