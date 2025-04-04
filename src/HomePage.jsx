import React from 'react';
import styled from 'styled-components';
import logo from './assets/logo.png';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    padding: 60px 16px;
    min-height: 100vh;
    background-color: #f5f8ff;
`;

const Logo = styled.img`
    height: 180px;
    margin-bottom: 40px;
`;

const Title = styled.h1`
    font-size: 32px;
    font-weight: bold;
    color: #222;
    margin-bottom: 16px;
`;

const Subtitle = styled.p`
    font-size: 18px;
    color: #555;
    margin-bottom: 32px;
    text-align: center;
`;

const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    max-width: 400px;
`;

const Input = styled.input`
    width: 100%;
    padding: 14px;
    font-size: 16px;
    border: 1px solid #ccc;
    border-radius: 8px;
    margin-bottom: 16px;
`;

const Button = styled.button`
    padding: 14px;
    font-size: 16px;
    background-color: #0070f3;
    color: white;
    font-weight: bold;
    border: none;
    border-radius: 8px;
    width: 100%;
    cursor: pointer;

    &:hover {
        background-color: #0059c1;
    }
`;

const Footer = styled.footer`
    margin-top: 60px;
    font-size: 12px;
    color: #888;
    text-align: center;
`;

const GitHubButton = styled.button`
    margin-top: 12px;
    padding: 10px 16px;
    font-size: 14px;
    background-color: #24292e;
    color: #fff;
    font-weight: 500;
    border: none;
    border-radius: 6px;
    cursor: pointer;

    &:hover {
        background-color: #1b1f23;
    }
`;

export default function LandingPage() {
    const goToGitHub = () => {
        window.open('https://github.com/yeochan-UL', '_blank');
    };

    return (
        <Container>
            <Logo src={logo} alt="오늘내일 로고" />
            <Title>오늘, 내일</Title>
            <Subtitle>
                매일 아침 9시, 자바스크립트 문제 하나가 이메일로 도착합니다.
                <br /> 지금 구독하고 1일차 문제부터 시작해보세요!
            </Subtitle>
            <Form onSubmit={(e) => e.preventDefault()}>
                <Input type="email" placeholder="이메일 주소를 입력하세요" required />
                <Button type="submit">구독하기</Button>
            </Form>
            <Footer>
                언제든지 구독을 취소할 수 있어요. <br />
                Copyright © 2025 오늘, 내일
            </Footer>
            <GitHubButton onClick={goToGitHub}>개발자 GitHub 이동</GitHubButton>
        </Container>
    );
}