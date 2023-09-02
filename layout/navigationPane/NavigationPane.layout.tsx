import React from 'react';
import styles from './NavigationPane.module.scss';
import pages from '@/data/pages';
import { Tooltip } from 'antd';

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
        <Tooltip key={page.title} title={page.title} placement="left">
          <div className={styles.navigationItem}>
            <a href={page.url}>{page.icon}</a>
          </div>
        </Tooltip>
      ))}
    </div>
  );
};

export default NavigationPane;
