import React from 'react';
import styles from './NavigationPane.module.scss';
import pages from '@/data/pages';

interface NavigationPaneProps {}

/**
 * @description - Navigational pane for the application, contains links to all pages
 * @returns {JSX.Element}
 */
const NavigationPane = (props: NavigationPaneProps) => {
  return (
    <div className={styles.container}>
      {/* map over pages and render icons */}
      {pages.map((page) => (
        <div key={page.title} className={styles.navigationItem}>
          <a href={page.url}>{page.icon}</a>
        </div>
      ))}
    </div>
  );
};

export default NavigationPane;
