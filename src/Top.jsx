import React from 'react';
import styled from 'styled-components';
import logo from './assets/logo.png';

const TopWrapper = styled.div`
  width: 100%;
  padding: 40px 0 20px;
  display: flex;
  justify-content: center;
`;

const Logo = styled.img`
  height: 180px;
`;

export default function Top() {
  return (
    <TopWrapper>
      <Logo src={logo} alt="오늘내일 로고" />
    </TopWrapper>
  );
}
