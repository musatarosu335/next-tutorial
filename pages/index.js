import React from 'react';
import Layout from '../components/MyLayout';
import PostLink from '../components/PostLink';

const Index = () => (
  <div>
    <Layout>
      <h1>My Blog</h1>
      <ul>
        <PostLink id="hello-nextjs" title="Hello Next.js" />
        <PostLink id="learn-nextjs" title="Learn Next.js is awesome" />
        <PostLink id="deploy-nextjs" title="Deploy apps with Zeit" />
      </ul>
    </Layout>
  </div>
);

export default Index;
