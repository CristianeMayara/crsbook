import React from 'react';

const styles = {
  containerStyle: {
    height: 43,
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: '#4267b2',
    borderBottom: '1px solid #29487d',
  },
  textStyle: {
    fontSize: 14,
    color: 'white',
    fontWeight: 'bold',
  },
};

const Header = () => {
  const { containerStyle, textStyle } = styles;
  return (
    <div style={containerStyle}>
      <p style={textStyle}>Face App</p>
    </div>
  );
};

export default Header;
