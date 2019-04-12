import React from 'react';
import PropTypes from 'prop-types';
import PostHeader from './PostHeader';

const styles = {
  headerStyle: {
    height: 43,
    display: 'flex',
    width: '100%',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  containerStyle: {
    padding: 16,
    display: 'flex',
    borderRadius: '2px',
    flexDirection: 'column',
    alignItems: 'flex-start',
    backgroundColor: '#FFFFFF',
    margin: '30px 0px 30px 0px',
    boxShadow: '1px 1px 3px 1px #9E9E9E',
  },
  textStyle: {
    fontSize: 14,
    marginTop: 14,
    color: 'black',
  },
};

const Post = ({ post }) => {
  const {
    author, picture, date, text,
  } = post;
  const { textStyle, containerStyle } = styles;

  return (
    <div style={containerStyle}>
      <PostHeader author={author} picture={picture} date={date} />
      <div style={textStyle}>{text}</div>
    </div>
  );
};

Post.propTypes = {
  post: PropTypes.object.isRequired,
};

export default Post;
