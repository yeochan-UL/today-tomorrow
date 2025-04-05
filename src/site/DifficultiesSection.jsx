import React from 'react';
import styled from 'styled-components';
import DevImageSrc from '../assets/dev_difficulties.png';

const OuterSection = styled.section`
    width: 100%;
    height: 754px;
    background-color: #60B5FF;
    padding: 3rem 0;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Container = styled.div`
    width: 100%;
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
`;

const DevImage = styled.img`
    width: 100%;
    max-width: 500px;
    border-radius: 12px;
    object-fit: cover;
`;

const TopicsContainer = styled.div`
    display: flex;
    gap: 1.5rem;
    flex-wrap: wrap;
    justify-content: center;
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
`;

function DifficultiesSection() {
    return (
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
    );
}

export default DifficultiesSection;
