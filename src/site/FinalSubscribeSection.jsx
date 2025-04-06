import React from 'react';
import styled, { keyframes } from 'styled-components';

const Container = styled.section`
    width: 100%;
    height: 500px;
    background-color: #60B5FF;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 1rem;

    @media (max-width: 768px) {
        height: auto;
        padding: 2rem 1rem;
    }
`;

const Heading = styled.h2`
    font-family: 'GmarketSansMedium', sans-serif;
    font-size: 1.6rem;
    color: #fff;
    text-align: center;
    margin: 0 1rem 2rem;
    line-height: 1.4;

    @media (max-width: 768px) {
        font-size: 1.4rem;
        margin: 0 0.5rem 1.5rem;
    }
`;

const ButtonContainer = styled.div`
    margin-top: 1rem;
`;

const blink = keyframes`
    0% { opacity: 1; }
    50% { opacity: 0.6; }
    100% { opacity: 1; }
`;

const ActionButton = styled.button`
    font-family: 'GmarketSansMedium', sans-serif;
    font-size: 1.1rem;
    font-weight: 500;
    color: #60B5FF;
    background-color: #fff;
    padding: 0.8rem 1.6rem;
    border: none;
    border-radius: 6px;
    cursor: pointer;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);

    &:hover {
        animation: ${blink} 1s infinite;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
        transform: translateY(-2px);
    }

    @media (max-width: 768px) {
        font-size: 1rem;
        padding: 0.7rem 1.2rem;
    }
`;

function FinalSubscribeSection() {
    const scrollToTop = () => {
        const duration = 1000;
        const start = window.pageYOffset;
        const startTime = performance.now();

        const easeInOutQuad = (t) =>
            t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;

        const scroll = (currentTime) => {
            const timeElapsed = currentTime - startTime;
            const progress = Math.min(timeElapsed / duration, 1);
            const ease = easeInOutQuad(progress);
            window.scrollTo(0, start * (1 - ease));
            if (timeElapsed < duration) {
                requestAnimationFrame(scroll);
            }
        };

        requestAnimationFrame(scroll);
    };

    return (
        <Container>
            <Heading>
                100일 후에 나의 실력 향상을 <br />
                위해서 구독해보세요! 기초부터 응용까지
            </Heading>
            <ButtonContainer>
                <ActionButton onClick={scrollToTop}>
                    오늘, 내일 문제 풀기
                </ActionButton>
            </ButtonContainer>
        </Container>
    );
}

export default FinalSubscribeSection;
