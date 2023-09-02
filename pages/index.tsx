import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Home from '@/views/home/Home.view';
import Page from '@/layout/page/Page.layout';

const HomePage: NextPage = () => {
  return (
    <Page >
      <Home />
    </Page>
  );
};

export default HomePage;
