import React from 'react';
import styles from './Page.module.scss';
import Sidebar from '../sidebar/Sidebar.layout';
import NavigationPane from '../navigationPane/NavigationPane.layout';
import Meta from '@/components/meta/Meta.component'

interface PageProps {
  children: React.ReactNode;
}

const Page = (props: PageProps) => {
  return (
    <>
      <Meta />
      <div className={styles.videoContainer}>
        <video src="https://res.cloudinary.com/wulfdev/video/upload/v1715257457/18324-291012885_large_sjnfy1.mp4" autoPlay loop muted />
      </div>
      <div className={styles.container}>
        <div className={styles.sidebarContainer}>
          <Sidebar />
        </div>
        <div className={styles.childrenContainer}>{props.children}</div>
        <div className={styles.navigationPaneContainer}>
          <NavigationPane />
        </div>
        {/* create a side bar thats hidden offscreen visible on mobile */}
        
      </div>
    </>
  );
};

export default Page;
