import type { NextPage } from 'next';
import Page from '@/layout/page/Page.layout';
import Blog from '@/views/blog/blogScreen/Blog.screen';

const HomePage: NextPage = () => {
  return (
    <Page>
      <Blog />
    </Page>
  );
};

export default HomePage;
