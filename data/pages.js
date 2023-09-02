import { BsColumnsGap, BsPerson } from 'react-icons/bs';
import { FaBlog, FaBriefcase, FaComment, FaHome } from 'react-icons/fa';
import { BiServer } from 'react-icons/bi';
import { IoIosMail } from 'react-icons/io';
/**
 * @description list of pages available to the navigation pane
 */
export default [
  {
    title: 'Home',
    url: '#introduction',
    icon: <FaHome />,
  },
  {
    title: 'About',
    url: '#about',
    icon: <BsPerson />,
  },
  {
    title: 'Work History',
    url: '#work-history',
    icon: <FaBriefcase />,
  },
  {
    title: 'Skills',
    url: '#skills',
    icon: <BsColumnsGap />,
  },
  {
    title: 'Services',
    url: '#services',
    icon: <BiServer />,
  },
  {
    title: 'Testimonials',
    url: '#testimonials',
    icon: <FaComment />,
  },
  {
    title: 'Blog',
    url: '#blog',
    icon: <FaBlog />,
  },
{
    title: 'Contact',
    url: '#contact',
    icon: <IoIosMail />,
}
];
