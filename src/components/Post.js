import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Post extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { post } = this.props;
    return <div />;
  }
}

Post.propTypes = {
  post: PropTypes.object.isRequired,
};

export default Post;
