import React from 'react';
import PropTypes from 'prop-types';

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
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  titleStyle: {
    fontSize: 14,
    color: 'black',
    fontWeight: 'bold',
  },
  dateStyle: {
    fontSize: 14,
    color: 'gray',
  },
  avatarStyle: {
    width: 40,
    height: 40,
    marginRight: 8,
    borderRadius: '50%',
  },
};

const PostHeader = ({ author, picture, date }) => {
  const {
    headerStyle, containerStyle, titleStyle, dateStyle, avatarStyle,
  } = styles;

  return (
    <div style={headerStyle}>
      <div
        style={{
          width: 40,
          height: 40,
          marginRight: 8,
          borderRadius: '50%',
          background: `url(${picture}) no-repeat center`,
        }}
      />
      <div style={containerStyle}>
        <div style={titleStyle}>{author}</div>
        <div style={dateStyle}>{date}</div>
      </div>
    </div>
  );
};

PostHeader.propTypes = {
  author: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
};

export default PostHeader;
