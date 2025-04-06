import React, { useState } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import axios from 'axios';
import JsLogo from '../assets/js_logo.svg';

const GlobalStyle = createGlobalStyle`
    @font-face {
        font-family: 'GmarketSansMedium';
        src: url('https://fastly.jsdelivr.net/gh/projectnoonnu/noonfonts_2001@1.1/GmarketSansMedium.woff') format('woff');
        font-weight: normal;
        font-style: normal;
    }
  
    body {
        font-family: 'GmarketSansMedium', sans-serif;
        margin: 0;
        padding: 0;
        background-color: #fff;
    }
`;

const Container = styled.section`
    width: 100%;
    max-width: 1000px;
    min-height: 60vh;
    margin: 90px auto 0; /* 데스크탑: 상단 90px 마진 (네비 높이만큼) */
    padding: 2rem;
    background-color: #fff;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    @media (max-width: 768px) {
        margin-top: 70px; /* 모바일: 상단 70px 마진 (네비 높이만큼) */
    }
`;

const LogoImage = styled.img`
    margin-bottom: 1rem;
`;

const Title = styled.h2`
    font-size: 1.8rem;
    color: #60B5FF;
    margin: 0 0 0.5rem;
    text-align: center;
    line-height: 1.3;
`;

const Subtitle = styled.p`
    font-size: 1rem;
    color: #AFDDFF;
    margin: 0 0 2rem;
    text-align: center;
    line-height: 1.5;
    white-space: pre-line;
`;

const FormWrapper = styled.form`
    display: flex;
    width: 100%;
    max-width: 400px;
    align-items: center;
    gap: 8px;
  
    @media (max-width: 480px) {
        flex-direction: column;
        gap: 0.5rem;
    }
`;

const EmailInput = styled.input`
    flex: 1;
    padding: 0.8rem;
    border: 1px solid #60B5FF;
    border-radius: 4px;
    font-size: 1rem;
  
    &::placeholder {
        color: #AFDDFF;
    }
  
    &:focus {
        outline: none;
        border-color: #60B5FF;
    }
`;

const SubscribeButton = styled.button`
    padding: 0.8rem 1.5rem;
    font-size: 1rem;
    color: #fff;
    background-color: #60B5FF;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  
    &:hover {
        background-color: #60B5FF;
    }
`;

const MessageOverlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 9999;
`;

const MessageBox = styled.div`
    background: #fff;
    padding: 24px;
    width: 25vw;
    border-radius: 12px;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
    text-align: center;
`;

const ConfirmButton = styled.button`
    margin-top: 20px;
    padding: 10px 20px;
    background-color: #0070f3;
    color: white;
    font-weight: bold;
    border: none;
    border-radius: 8px;
    cursor: pointer;
  
    &:hover {
        background-color: #0059c1;
    }
`;

export default function SubscribeSection() {
    const [email, setEmail] = useState('');
    const [showMessage, setShowMessage] = useState(false);
    const [message, setMessage] = useState('');

    const handleSubscribe = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('https://api.todaytomorrow.today/api/subscribe', { email });
            setMessage(response.data.message || '🎉 구독 완료!\n이제 매일 오전 9시에 문제를 보내드릴게요!');
            setShowMessage(true);
            setEmail('');
        } catch (err) {
            console.error(err);
            setMessage('❌ 구독에 실패했습니다. 다시 시도해주세요.');
            setShowMessage(true);
        }
    };

    return (
        <>
            <GlobalStyle />
            <Container>
                <LogoImage src={JsLogo} alt="JS Logo" />
                <Title>
                    자바스크립트 문제를 기초부터
                    <br />
                    응용까지 구독해보세요
                </Title>
                <Subtitle>
                    따로 시간 내지 않아도,
                    <br />
                    하나씩 풀다 보면 어느새 실력이 쌓일 거예요.
                </Subtitle>
                <FormWrapper onSubmit={handleSubscribe}>
                    <EmailInput
                        type="email"
                        placeholder="이메일 주소를 입력하세요"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    <SubscribeButton type="submit">구독</SubscribeButton>
                </FormWrapper>
                {showMessage && (
                    <MessageOverlay>
                        <MessageBox>
                            <p>{message}</p>
                            <ConfirmButton onClick={() => setShowMessage(false)}>확인</ConfirmButton>
                        </MessageBox>
                    </MessageOverlay>
                )}
            </Container>
        </>
    );
}
