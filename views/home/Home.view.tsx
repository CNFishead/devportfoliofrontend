import React from 'react';
import styles from './Home.module.scss';
import { FaHome } from 'react-icons/fa';

const Home = () => {
  return (
    <div className={styles.container}>
      <div className={styles.sectionHeader}>
        <p className={styles.sectionTitle}>
          <FaHome className={styles.icon} /> Introduction
        </p>
      </div>
      <div className={styles.section}>
        <h1 className={styles.title}>
          Hello, I am <span className={styles.name}>Austin Howard</span>
        </h1>
        <h2 className={styles.subtitle}>
          An <span className={styles.subtitle1}>Innovation Pioneer</span>,{' '}
          <span className={styles.subtitle3}>Optimization Virtuoso</span>, and{' '}
          <span className={styles.subtitle2}>Software Enginner</span>
        </h2>
        <p className={styles.descriptor}>
          I am a Software Engineer with a strong dedication to crafting
          high-quality, user-friendly applications that prioritize simplicity
          and reliability. Currently, I hold the position of Sr. Systems
          Engineer at SaltShaker Media, where I channel my expertise into
          developing top-notch applications tailored to assist churches and
          ministries in their digital endeavors.
        </p>
      </div>
      <div className={styles.section}>
        <h1 className={styles.title}>
          Hello, I am <span className={styles.name}>Austin Howard</span>
        </h1>
        <h2 className={styles.subtitle}>
          An <span className={styles.subtitle1}>Innovation Pioneer</span>,{' '}
          <span className={styles.subtitle3}>Optimization Virtuoso</span>, and{' '}
          <span className={styles.subtitle2}>Software Enginner</span>
        </h2>
        <p className={styles.descriptor}>
          I am a Software Engineer with a strong dedication to crafting
          high-quality, user-friendly applications that prioritize simplicity
          and reliability. Currently, I hold the position of Sr. Systems
          Engineer at SaltShaker Media, where I channel my expertise into
          developing top-notch applications tailored to assist churches and
          ministries in their digital endeavors.
        </p>
      </div>
      <div className={styles.section}>
        <h1 className={styles.title}>
          Hello, I am <span className={styles.name}>Austin Howard</span>
        </h1>
        <h2 className={styles.subtitle}>
          An <span className={styles.subtitle1}>Innovation Pioneer</span>,{' '}
          <span className={styles.subtitle3}>Optimization Virtuoso</span>, and{' '}
          <span className={styles.subtitle2}>Software Enginner</span>
        </h2>
        <p className={styles.descriptor}>
          I am a Software Engineer with a strong dedication to crafting
          high-quality, user-friendly applications that prioritize simplicity
          and reliability. Currently, I hold the position of Sr. Systems
          Engineer at SaltShaker Media, where I channel my expertise into
          developing top-notch applications tailored to assist churches and
          ministries in their digital endeavors.
        </p>
      </div>
    </div>
  );
};

export default Home;
