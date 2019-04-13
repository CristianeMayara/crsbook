import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import PostHeader from './PostHeader';

const Container = styled.div`
  display: flex;
  padding: 26px;
  border-radius: 2px;
  flex-direction: column;
  align-items: flex-start;
  background-color: #ffffff;
  margin: 30px 0px 30px 0px;
  box-shadow: 1px 1px 3px 1px #9e9e9e;
`;

const Divider = styled.hr`
  width: 100%;
  margin: 20px 0px;
  border-top: 1px solid #fafafb;
`;

const Text = styled.div`
  color: #9e9e9e;
  font-size: 13px;
`;

const Post = ({ post }) => {
  const { author, picture, date, text } = post;

  return (
    <Container>
      <PostHeader author={author} picture={picture} date={date} />
      <Divider />
      <Text>{text}</Text>
    </Container>
  );
};

Post.propTypes = {
  post: PropTypes.object.isRequired,
};

export default Post;
