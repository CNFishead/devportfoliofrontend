import type { NextPage } from 'next';
import Home from '@/views/home/Home.view';
import Page from '@/layout/page/Page.layout';
import Project from '@/views/project/Project.screen';

const HomePage: NextPage = () => {
  return (
    <Page>
      <Project />
    </Page>
  );
};

export default HomePage;
