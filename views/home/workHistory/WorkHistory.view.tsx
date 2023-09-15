import React from 'react';
import styles from './WorkHistory.module.scss';
import moment from 'moment';
import Loader from '@/components/loader/Loader.component';
import Error from '@/components/error/Error.component';
import { Empty } from 'antd';
import uesGetWorkHistory from '@/state/actions/workhistory/uesGetWorkHistory';
import WorkExperienceType from '@/types/WorkExperienceType';

const WorkHistory = () => {
  const { data: workhistory, isLoading, isError, error } = uesGetWorkHistory();

  if (isLoading) {
    return <Loader />;
  }

  if (isError) {
    return <Error error={error} />;
  }
  if (!workhistory || workhistory?.length === 0) {
    return <Empty />;
  }

  return (
    <div className={styles.container}>
      <div className={styles.sectionHeader}>
        <h1 className={styles.sectionTitle}>
          Education & <span className={styles.textFlair}>Expierence</span>
        </h1>
      </div>
      <div className={styles.sectionBody}>
        {workhistory?.data?.map((history: WorkExperienceType, index) => {
          return (
            <div key={history._id} className={styles.historyContainer}>
              <div className={styles.historyItem}>
                <h3>
                  {history.jobTitle} @ {history.name}
                </h3>
                <p className={styles.dates}>
                  {moment(history.startDate).format('MM/DD/YYYY')} -{' '}
                  {history?.endDate
                    ? moment(history.endDate).format('MM/DD/YYYY')
                    : 'Present'}
                </p>

                <ul>
                  {history.jobDescription.map((point, index) => {
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
