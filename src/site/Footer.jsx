import React from 'react';
import styled from 'styled-components';

const FooterWrapper = styled.div`
    width: 100%;
    max-width: 1000px;
    margin: 0 auto;
    padding: 1rem;
`;

const FooterContainer = styled.footer`
    width: 100%;
    background-color: #fff;
    padding: 1rem 2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media (max-width: 768px) {
        flex-direction: column;
        text-align: center;
        gap: 1rem;
    }
`;

const LeftSection = styled.div`
    display: flex;
    align-items: center;
`;

const RightSection = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    text-align: right;

    @media (max-width: 768px) {
        align-items: center;
        text-align: center;
    }
`;

const GitHubButton = styled.button`
    background: none;
    border: none;
    font-family: 'GmarketSansMedium', sans-serif;
    font-size: 1rem;
    color: #333;
    cursor: pointer;
    padding: 0;
    margin: 0;
`;

const InfoText = styled.p`
    font-family: 'GmarketSansMedium', sans-serif;
    font-size: 0.875rem;
    color: #666;
    margin: 0;
`;

function Footer() {
    const handleGitHubClick = () => {
        window.open('https://github.com/yeochan-UL', '_blank');
    };

    return (
        <FooterWrapper>
            <FooterContainer>
                <LeftSection>
                    <GitHubButton onClick={handleGitHubClick}>
                        개발자 GitHub 이동
                    </GitHubButton>
                </LeftSection>
                <RightSection>
                    <InfoText>이메일 ducks1077@gmail.com</InfoText>
                    <InfoText>
                        언제든지 구독을 취소할 수 있어요. Copyright © 2025 오늘, 내일
                    </InfoText>
                </RightSection>
            </FooterContainer>
        </FooterWrapper>
    );
}

export default Footer;
