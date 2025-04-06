import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import DevImageSrc from '../assets/dev_difficulties.png';

const GlobalStyle = createGlobalStyle`
    *, *::before, *::after {
        box-sizing: border-box;
    }
  
    body {
        font-family: 'GmarketSansMedium', sans-serif;
        margin: 0;
        padding: 0;
        background-color: #fff;
    }
`;

const OuterSection = styled.section`
    width: 100%;
    min-height: 754px;
    background-color: #60B5FF;
    padding: 3rem 0;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow-x: hidden;

    @media (max-width: 768px) {
        background-color: #60B5FF;
        padding: 2rem 0;
    }
`;

const Container = styled.div`
    width: 90%;
    max-width: 1000px;
    background: #e6f3ff;
    border-radius: 16px;
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.15);
    padding: 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
`;

const Title = styled.h2`
    font-family: 'GmarketSansMedium', sans-serif;
    font-size: 2.2rem;
    color: #333;
    text-align: center;
    margin: 0;

    @media (max-width: 768px) {
        font-size: 1.8rem;
    }

    @media (max-width: 480px) {
        font-size: 1.6rem;
    }
`;

const DevImage = styled.img`
    width: 100%;
    max-width: 500px;
    border-radius: 12px;
    object-fit: cover;

    @media (max-width: 768px) {
        max-width: 90%;
    }
`;

const TopicsContainer = styled.div`
    display: flex;
    gap: 1.5rem;
    flex-wrap: wrap;
    justify-content: center;

    @media (max-width: 480px) {
        gap: 1rem;
    }
`;

const Topic = styled.span`
    font-family: 'GmarketSansMedium', sans-serif;
    font-size: 1.1rem;
    color: #60B5FF;
    background-color: #fff;
    padding: 0.6rem 1.2rem;
    border-radius: 20px;
    transition: transform 0.3s ease, background-color 0.3s ease;
  
    &:hover {
        transform: scale(1.05);
        background-color: #d0e9ff;
    }

    @media (max-width: 768px) {
        font-size: 1rem;
        padding: 0.5rem 1rem;
    }
`;

function DifficultiesSection() {
    return (
        <>
            <GlobalStyle />
            <OuterSection>
                <Container>
                    <Title>기초에 어려움을 겪는 개발자들 😱</Title>
                    <DevImage src={DevImageSrc} alt="고민하는 개발자" />
                    <TopicsContainer>
                        <Topic>Closure 😱</Topic>
                        <Topic>Promise 😰</Topic>
                        <Topic>Event Loop 🫣</Topic>
                    </TopicsContainer>
                </Container>
            </OuterSection>
        </>
    );
}

export default DifficultiesSection;
