import React from 'react';
import styled from 'styled-components';

const Section = styled.section`
    width: 100%;
    max-width: 1000px;
    margin: 0 auto;
    padding: 4rem 2rem;
    display: flex;
    justify-content: space-between;
    gap: 2rem;
  
    @media (max-width: 768px) {
        flex-direction: column;
        text-align: center;
        align-items: center;
    }
`;

const Column = styled.div`
    flex: 1;
    background-color: rgba(255, 255, 255, 0.1);
    padding: 2rem;
    border-radius: 12px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    display: flex;
    flex-direction: column;
    align-items: center;
    transition: transform 0.3s ease;
  
    &:hover {
        transform: translateY(-5px);
    }
`;

const Emoji = styled.div`
    font-size: 64px;
    margin-bottom: 1rem;
`;

const Title = styled.h2`
    font-family: 'GmarketSansMedium', sans-serif;
    font-size: 1.5rem;
    color: #333;
    margin-bottom: 1rem;
    line-height: 1.4;
  
    strong {
        color: #60B5FF;
    }
`;

const Description = styled.p`
    font-family: 'GmarketSansMedium', sans-serif;
    font-size: 1rem;
    color: #AFDDFF;
    white-space: pre-line;
    line-height: 1.6;
    max-width: 90%;
`;

function BenefitDoubleColumnSection() {
    return (
        <Section>
            {/* 왼쪽 컬럼 */}
            <Column>
                <Emoji>📧</Emoji>
                <Title>
                    <strong>오늘</strong> 구독하면
                    <br />
                    <strong>내일</strong>부터 총 <strong>100일</strong> 동안
                </Title>
                <Description>
                    Javascript 문제 100개가 메일로 도착해요!
                    아침마다 출근 길에 풀어보며,
                    확인 후 개인 스킬을 향상시킬 수 있어요!
                </Description>
            </Column>
  
            {/* 오른쪽 컬럼 */}
            <Column>
                <Emoji>📖</Emoji>
                <Title>
                    <strong>오늘</strong> 푼 문제로 인해
                    <br />
                    <strong>내일</strong> 실력이 늘어가는게 느껴져요
                </Title>
                <Description>
                    실력은 한 번에 쌓이지 않아요.
                    꾸준한 연습과 공부로 늘어가는 나의 실력을 확인하고,
                    자신감을 만들어보세요! 당신의 노력은 배신하지 않아요!
                </Description>
            </Column>
        </Section>
    );
}

export default BenefitDoubleColumnSection;
