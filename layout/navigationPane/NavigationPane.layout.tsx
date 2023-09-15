import React from 'react';
import styles from './NavigationPane.module.scss';
import pages from '@/data/pages';
import { Tooltip } from 'antd';
import Link from 'next/link';

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
            <Link href={page.url}>{page.icon}</Link>
          </div>
        </Tooltip>
      ))}
    </div>
  );
};

export default NavigationPane;
