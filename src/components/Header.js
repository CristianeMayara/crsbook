import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  height: 43;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  background-color: #4267b2;
  border-bottom: 1px solid #29487d;
`;

const Title = styled.p`
  color: white;
  font-size: 14px;
  font-weight: bold;
`;

const Header = () => (
  <Container>
    <Title>CRSbook</Title>
  </Container>
);

export default Header;
