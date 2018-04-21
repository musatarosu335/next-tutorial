import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';

const PostLink = props => (
  <li>
    <Link href={`/post?title=${props.title}`}>
      <a>{props.title}</a>
    </Link>
  </li>
);

PostLink.propTypes = {
  title: PropTypes.string.isRequired,
};

export default PostLink;
