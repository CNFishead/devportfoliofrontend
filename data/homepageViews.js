import Introduction from '@/views/home/introduction/Introduction.view';
import { FaBlog, FaHome } from 'react-icons/fa';
import styles from '../views/home/Home.module.scss';
import { BsBriefcase, BsColumnsGap, BsGripVertical, BsPerson } from 'react-icons/bs';
import AboutMe from '@/views/home/aboutme/AboutMe.view';
import WorkHistory from '@/views/home/workHistory/WorkHistory.view';
import Blog from '@/views/home/blog/Blog.view';
import Portfolio from '@/views/home/portfolio/Porfolio.view';
import { IoIosMail } from 'react-icons/io';
import ContactForm from '@/views/home/contact/ContactForm.view';

/**
 * @description: Holds the json data for the views that go on the homepage
 *
 */
export default [
  {
    _id: 1,
    title: 'Introduction',
    description: 'A brief introduction of the developer',
    link: 'introduction',
    icon: <FaHome className={styles.icon} />,
    component: <Introduction />,
    tooltip: 'Introduction'
  },
  {
    _id: 2,
    title: 'About Me',
    description: 'A brief description of the developer',
    link: 'aboutme',
    icon: <BsPerson className={styles.icon} />,
    component: <AboutMe />,
    tooltip: 'About'
  },
  {
    _id: 3,
    title: 'Work History',
    description: 'Developer work history',
    link: 'work-history',
    icon: <BsBriefcase className={styles.icon} />,
    component: <WorkHistory />,
    tooltip: 'About'
  },
  {
    _id: 4,
    title: 'Portfolio',
    description: 'Developer portfolio',
    link: 'portfolio',
    icon: <BsColumnsGap className={styles.icon} />,
    component: <Portfolio />,
    tooltip: 'About'
  },
  {
    _id: 5,
    title: 'Blog Posts',
    description: 'Blog posts that are featured on the homepage',
    link: 'blog',
    icon: <FaBlog className={styles.icon} />,
    component: <Blog />,
    tooltip: 'Blog'
  },
  {
    _id: 6,
    title: 'Contact Me',
    description: 'Contact the developer',
    link: 'contact',
    icon: <IoIosMail className={styles.icon} />,
    component: <ContactForm />,
    tooltip: 'Contact'
  },
];
