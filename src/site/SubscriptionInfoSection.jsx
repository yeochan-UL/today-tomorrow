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
        padding: 3rem 1rem;
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
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    margin: 0 5%;  /* 좌우 각각 5% 여백 추가 */
  
    &:hover {
        transform: translateY(-5px);
        box-shadow: 0 8px 16px rgba(0, 0, 0, 0.15);
    }
  
    @media (max-width: 768px) {
        padding: 1.5rem;
        width: 100%;
        margin: 0;  /* 모바일에서는 여백 제거 */
    }
`;

const Emoji = styled.div`
    font-size: 64px;
    margin-bottom: 1rem;
  
    @media (max-width: 768px) {
        font-size: 48px;
    }
  
    @media (max-width: 480px) {
        font-size: 36px;
    }
`;

const TitleText = styled.h2`
    font-family: 'GmarketSansMedium', sans-serif;
    font-size: 1.5rem;
    color: #333;
    margin-bottom: 1rem;
    line-height: 1.4;
  
    strong {
        color: #60B5FF;
    }
  
    @media (max-width: 768px) {
        font-size: 1.3rem;
    }
  
    @media (max-width: 480px) {
        font-size: 1.1rem;
    }
`;

const Description = styled.p`
    font-family: 'GmarketSansMedium', sans-serif;
    font-size: 1rem;
    color: #AFDDFF;
    white-space: pre-line;
    line-height: 1.6;
    max-width: 90%;
  
    @media (max-width: 768px) {
        font-size: 0.9rem;
    }
  
    @media (max-width: 480px) {
        font-size: 0.8rem;
    }
`;

function BenefitDoubleColumnSection() {
    return (
        <Section>
            <Column>
                <Emoji>📧</Emoji>
                <TitleText>
                    <strong>오늘</strong> 구독하면
                    <br />
                    <strong>내일</strong>부터 총 <strong>100일</strong> 동안
                </TitleText>
                <Description>
                    Javascript 문제 100개가 메일로 도착해요!{"\n"}
                    아침마다 출근 길에 풀어보며,{"\n"}
                    확인 후 개인 스킬을 향상시킬 수 있어요!
                </Description>
            </Column>
  
            <Column>
                <Emoji>📖</Emoji>
                <TitleText>
                    <strong>오늘</strong> 푼 문제로 인해
                    <br />
                    <strong>내일</strong> 실력이 늘어가는게 느껴져요
                </TitleText>
                <Description>
                    실력은 한 번에 쌓이지 않아요.{"\n"}
                    꾸준한 연습과 공부로 늘어가는 나의 실력을 확인하고,{"\n"}
                    자신감을 만들어보세요! 당신의 노력은 배신하지 않아요!
                </Description>
            </Column>
        </Section>
    );
}

export default BenefitDoubleColumnSection;
