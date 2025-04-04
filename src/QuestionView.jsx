import React, { useState } from 'react';
import styled from 'styled-components';
import Top from './Top';
import Editor from '@monaco-editor/react';

const PageWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
    background-color: #f0f2f5;
`;

const Wrapper = styled.div`
    width: 100%;
    max-width: 720px;
    padding: 24px;
    border-radius: 16px;
    background-color: #f9f9f9;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.06);
`;

const Title = styled.h1`
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 16px;
    color: #222;
`;

const Description = styled.p`
    font-size: 16px;
    line-height: 1.6;
    color: #555;
`;

const EditorWrapper = styled.div`
    margin-top: 24px;
    border: 1px solid #444;
    border-radius: 8px;
    overflow: hidden;
`;

const Button = styled.button`
    margin-top: 16px;
    padding: 10px 20px;
    background-color: #0070f3;
    color: white;
    font-weight: 600;
    border: none;
    border-radius: 8px;
    cursor: pointer;

    &:hover {
        background-color: #0059c1;
    }
`;

const Result = styled.div`
    margin-top: 20px;
    padding: 16px;
    background-color: #e8f5e9;
    border-left: 5px solid #4caf50;
    color: #2e7d32;
    border-radius: 8px;
    white-space: pre-wrap;
`;

export default function QuestionView() {
    const [code, setCode] = useState('// 여기에 코드를 입력하세요');
    const [result, setResult] = useState(null);

    const handleSubmit = () => {
        try {
            let capturedLogs = '';
            const originalLog = console.log;
            console.log = function (...args) {
                capturedLogs += args.join(' ') + '\n';
                originalLog.apply(console, args);
            };

            const output = eval(code);

            console.log = originalLog;
            setResult(capturedLogs || String(output) || '⚠️ 출력이 없습니다');
        } catch (err) {
            console.error('❌ 오류:', err);
            setResult('오류: ' + err.message);
        }
    };

    return (
        <PageWrapper>
            <Top />
            <Wrapper>
                <Title>문제 1. 배열에서 중복을 제거하세요</Title>
                <Description>
                    주어진 배열에서 중복된 값을 제거하여 반환하는 함수를 작성하세요.
                    예: [1,2,2,3] → [1,2,3]
                </Description>
                <EditorWrapper>
                    <Editor
                        height="200px"
                        defaultLanguage="javascript"
                        theme="vs-dark"
                        value={code}
                        onChange={(value) => setCode(value || '')}
                        options={{
                            minimap: { enabled: false },
                            fontSize: 14,
                            scrollBeyondLastLine: false,
                            wordWrap: 'on',
                        }}
                    />
                </EditorWrapper>
                <Button onClick={handleSubmit}>제출하기</Button>
                {result !== null && <Result>{result}</Result>}
            </Wrapper>
        </PageWrapper>
    );
}