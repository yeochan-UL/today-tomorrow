import React from 'react';
import styled, { keyframes } from 'styled-components';

// 배경 전체 컨테이너
const Container = styled.section`
    width: 100%;
    height: 500px;
    background-color: #60B5FF;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    /* 지마켓 산스 미디엄 폰트 사용 가정 */
`;

const Heading = styled.h2`
    font-family: 'GmarketSansMedium', sans-serif;
    font-size: 1.6rem;
    color: #fff;
    text-align: center;
    margin: 0 1rem 2rem; /* 여백 조절 */
    line-height: 1.4;
`;

const ButtonContainer = styled.div`
    margin-top: 1rem;
`;

/* 깜빡임 애니메이션 */
const blink = keyframes`
    0% { opacity: 1; }
    50% { opacity: 0.6; }
    100% { opacity: 1; }
`;

// 버튼 스타일
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
    transition: box-shadow 0.3s ease;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);

    &:hover {
        animation: ${blink} 1s infinite;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
    }
`;

function FinalSubscribeSection() {
    const scrollToTop = () => {
        // 1초 동안 스크롤
        const duration = 1000;
        const start = window.pageYOffset;
        const startTime = performance.now();

        // easeInOutQuad 함수: 부드러운 가속/감속 효과
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
