import React from 'react';
import PropTypes from 'prop-types';
import Layout from '../components/MyLayout';
import Content from '../components/Content';

const post = props => (
  <Layout>
    <Content url={props.url} />
  </Layout>
);

post.propTypes = {
  url: PropTypes.object.isRequired,
};

export default post;
