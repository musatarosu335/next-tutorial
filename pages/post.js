import React from 'react';
import PropTypes from 'prop-types';
import Layout from '../components/MyLayout';

const post = props => (
  <Layout>
    <h1>{props.url.query.title}</h1>
    <p>This is the blog post content.</p>
  </Layout>
);

post.propTypes = {
  url: PropTypes.shape({
    query: PropTypes.shape({
      title: PropTypes.string,
    }),
  }).isRequired,
};

export default post;
