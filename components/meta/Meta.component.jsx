import React from 'react';
import Head from 'next/head';

const Meta = ({ title, description, keywords, url, image }) => (
  <Head>
    {/* Favicon */}
    <link rel="icon" href="/favicon.ico" />
    {/* <!-- Primary Meta Tags --> */}
    <title>{title}</title>
    <meta name="description" content={description} />
    <meta name="keyword" content={keywords} />
    {/* <!-- Open Graph / Facebook --> */}
    <meta property="og:type" content="website" />
    <meta property="og:url" content={url} />
    <meta property="og:title" content={title} />
    <meta property="og:description" content={description} />
    <meta property="og:image" content={image} />

    {/* <!-- Twitter --> */}
    <meta property="twitter:card" content="summary_large_image" />
    <meta property="twitter:url" content={url} />
    <meta property="twitter:title" content={title} />
    <meta property="twitter:description" content={description} />
    <meta property="twitter:image" content={image} />

    {/* VideoJs CSS link */}
  </Head>
);

Meta.defaultProps = {
  title: 'Austin Howard',
  description:
    'Austin Howard is a full stack developer from the United States. He specializes in React, Node, and Next.js.',
  keywords:
    'Software Developer, Software Engineer, Web Developer, Application Developer, Full Stack Developer, Front-End Developer, Back-End Developer, Mobile App Developer, Coding Expert, Programming Specialist, UI/UX Designer, System Architect, Technical Innovator, Problem Solver, Software Optimization, High-Quality Code, User-Friendly Apps, Innovative Solutions, Software Development Portfolio, Morristown, TN Developer',
  url: 'https://austinhoward.dev',
  image: '/logo512.png',
};

export default Meta;
