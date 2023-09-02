import React from 'react';
import styles from './Page.module.scss';
import Sidebar from '../sidebar/Sidebar.layout';
import { Col, Row } from 'antd';

interface PageProps {
  children: React.ReactNode;
}

const Page = (props: PageProps) => {
  return (
    <>
      <div className={styles.videoContainer}>
        <video src="/videos/video3.mp4" autoPlay loop muted />
      </div>
      <div className={styles.container}>
        <Sidebar />
        <div className={styles.childrenContainer}>{props.children}</div>
      </div>
    </>
  );
};

export default Page;
