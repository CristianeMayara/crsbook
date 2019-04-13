import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Header = styled.div`
  height: 43;
  display: flex;
  width: 100%;
  align-items: center;
  flex-direction: row;
  justify-content: flex-start;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  aligni-items: flex-start;
`;

const Title = styled.div`
  color: black;
  font-size: 14;
  font-weight: bold;
`;

const Date = styled.div`
  font-size: 14;
  color: gray;
`;

const Avatar = styled.div`
  width: 40px;
  height: 40px;
  margin-right: 8px;
  border-radius: 50%;
  background: ${props => `url(${props.picture}) no-repeat center`};
`;

const PostHeader = ({ author, picture, date }) => (
  <Header>
    <Avatar picture={picture} />
    <Container>
      <Title>{author}</Title>
      <Date>{date}</Date>
    </Container>
  </Header>
);

PostHeader.propTypes = {
  author: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
};

export default PostHeader;
