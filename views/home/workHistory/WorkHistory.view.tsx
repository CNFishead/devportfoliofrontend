import React from 'react';
import styles from './WorkHistory.module.scss';
import type { DataNode } from 'antd/es/tree';
import { Tree, Switch } from 'antd';
import { GoDotFill } from 'react-icons/go';
import workhistory from '@/data/workhistory.js';
import moment from 'moment';

const WorkHistory = () => {
  return (
    <div className={styles.container}>
      <div className={styles.sectionHeader}>
        <h1 className={styles.sectionTitle}>
          Education & <span className={styles.textFlair}>Expierence</span>
        </h1>
      </div>
      <div className={styles.sectionBody}>
        {workhistory?.map((history, index) => {
          return (
            <div key={history.id} className={styles.historyContainer}>
              <div className={styles.historyItem}>
                <h3>
                  {history.jobTitle} @ {history.company}
                </h3>
                <p className={styles.dates}>
                  {moment(history.startDate).format('MM/DD/YYYY')} -{' '}
                  {history?.endDate ? history.endDate : 'Present'}
                </p>

                <ul>
                  {history.points.map((point, index) => {
                    return (
                      <li key={index} className={styles.point}>
                        <span className={styles.pointText}>{point}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default WorkHistory;
