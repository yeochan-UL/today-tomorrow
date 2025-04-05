import React from 'react';
import styled from 'styled-components';
import Logo from '../assets/logo.png';

const NavBarWrapper = styled.nav`
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    background-color: rgba(255, 255, 255, 0.95); /* 흰색 95% 불투명 */
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    z-index: 1000;
`;

const NavBarContainer = styled.div`
    width: 100%;
    max-width: 1000px;
    margin: 0 auto;
    display: flex;
    align-items: center;
`;

const LogoImage = styled.img`
    height: 90px;
`;

function Navbar() {
    return (
        <NavBarWrapper>
            <NavBarContainer>
                <LogoImage src={Logo} alt="Logo" />
            </NavBarContainer>
        </NavBarWrapper>
    );
}

export default Navbar;
