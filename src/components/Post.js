import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import PostHeader from './PostHeader';

class Post extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const {
      post: { author, picture, date },
    } = this.props;

    return (
      <Fragment>
        <PostHeader author={author} picture={picture} date={date} />
      </Fragment>
    );
  }
}

Post.propTypes = {
  post: PropTypes.object.isRequired,
};

export default Post;
