import React from 'react';
import PropTypes from 'prop-types';

const Content = ({ url }) => (
  <div>
    <h1>{url.query.title}</h1>
    <p>This is the blog post content.</p>
  </div>
);

Content.propTypes = {
  url: PropTypes.object.isRequired,
};

export default Content;
