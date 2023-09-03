import Introduction from '@/views/home/introduction/Introduction.view';
import { FaHome } from 'react-icons/fa';
import styles from '../views/home/Home.module.scss';
import { BsBriefcase, BsColumnsGap, BsGripVertical, BsPerson } from 'react-icons/bs';
import AboutMe from '@/views/home/aboutme/AboutMe.view';
import WorkHistory from '@/views/home/workHistory/WorkHistory.view';
import { BiSolidShapes } from 'react-icons/bi';
import Portfolio from '@/views/home/portfolio/Porfolio.view';

/**
 * @description: Holds the json data for the views that go on the homepage
 *
 */
export default [
  {
    id: 1,
    title: 'Introduction',
    description: 'A brief introduction of the developer',
    link: 'introduction',
    icon: <FaHome className={styles.icon} />,
    component: <Introduction />,
    tooltip: 'Introduction'
  },
  {
    id: 2,
    title: 'About Me',
    description: 'A brief description of the developer',
    link: 'aboutme',
    icon: <BsPerson className={styles.icon} />,
    component: <AboutMe />,
    tooltip: 'About'
  },
  {
    id: 3,
    title: 'Work History',
    description: 'Developer work history',
    link: 'work-history',
    icon: <BsBriefcase className={styles.icon} />,
    component: <WorkHistory />,
    tooltip: 'About'
  },
  {
    id: 4,
    title: 'Portfolio',
    description: 'Developer portfolio',
    link: 'portfolio',
    icon: <BsColumnsGap className={styles.icon} />,
    component: <Portfolio />,
    tooltip: 'About'
  },
  // {
  //   id: 4,
  //   title: 'Skills',
  //   description: 'Developer skills',
  //   link: 'skills',
  //   icon: <BiSolidShapes className={styles.icon} />,
  //   component: <Skills />,
  //   tooltip: 'Skills'
  // },
];
