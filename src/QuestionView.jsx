// React의 상태 관리 훅. Vue 3에서는 ref() 또는 reactive()에 해당
import React, { useState } from 'react';
// 스타일드 컴포넌트로 CSS-in-JS 방식 구현
import styled from 'styled-components';
// Monaco 코드 에디터 (VS Code 편집기와 동일한 기반)
import Editor from '@monaco-editor/react';
// 상단 로고/타이틀 컴포넌트
import Top from './Top';

// 전체 페이지 스타일 (Vue에서는 <style scoped>에 해당)
const PageWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    min-height: 100vh;
    background-color: #f0f2f5;
    padding: 16px;
`;

// 내용 박스 스타일
const Wrapper = styled.div`
    width: 100%;
    max-width: 720px;
    padding: 24px;
    border-radius: 16px;
    background-color: #f9f9f9;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.06);
    box-sizing: border-box;
    margin-top: 32px;
`;

// 제목 스타일
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
    white-space: pre-wrap;
`;

const EditorWrapper = styled.div`
    margin-top: 24px;
    border: 1px solid #444;
    border-radius: 8px;
    overflow: hidden;
`;

const ButtonWrapper = styled.div`
    display: flex;
    justify-content: flex-end;
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

const AnswerBox = styled.div`
    margin-top: 20px;
    padding: 16px;
    background-color: #fff3cd;
    border-left: 5px solid #ffc107;
    color: #856404;
    border-radius: 8px;
    white-space: pre-wrap;
`;

const Overlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: rgba(0, 0, 0, 0.4);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 999;
`;

const Dialog = styled.div`
    background: white;
    padding: 24px;
    border-radius: 16px;
    max-width: 90%;
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
    text-align: center;
`;

const DialogButton = styled.button`
    margin: 12px 8px 0;
    padding: 10px 16px;
    font-weight: bold;
    border: none;
    border-radius: 8px;
    cursor: pointer;
`;

const ConfirmButton = styled(DialogButton)`
    background-color: #0070f3;
    color: white;
`;

const CancelButton = styled(DialogButton)`
    background-color: #e0e0e0;
    color: #333;
`;

export default function QuestionView({ title, description, initialCode, solution, explanation }) {
    const [code, setCode] = useState(initialCode || ''); // 사용자의 코드 입력값
    const [result, setResult] = useState(null); // 코드 실행 결과 저장
    const [showAnswer, setShowAnswer] = useState(false); // 정답/해설 보여줄지 여부
    const [showDialog, setShowDialog] = useState(false); // 제출 확인 모달
    const [submitted, setSubmitted] = useState(false); // 제출 완료 상태

    const handleActualSubmit = () => {
        try {
            let capturedLogs = '';
            const originalLog = console.log;

            console.log = (...args) => {
                capturedLogs += args.map(String).join(' ') + '\n';
                originalLog(...args);
            };

            eval(code); // 위험하므로 실제 서비스에서는 sandbox 방식 필요

            console.log = originalLog;

            const trimmed = capturedLogs.trim();
            if (trimmed && trimmed !== 'undefined') {
                setResult(trimmed);
            } else {
                setResult('⚠️ 작성된 내용이 없어요. console.log()를 사용해 결과를 출력해주세요.');
            }

            setShowAnswer(true);
            setSubmitted(true);
        } catch (err) {
            console.error('❌ 오류:', err);
            setResult('오류: ' + err.message);
            setShowAnswer(true);
            setSubmitted(true);
        }
    };

    const handleSubmit = () => {
        setShowDialog(true);
    };

    const handleDialogConfirm = () => {
        setShowDialog(false);
        handleActualSubmit();
    };

    const handleDialogCancel = () => {
        setShowDialog(false);
    };

    const handleRetry = () => {
        setCode(initialCode || '');
        setResult(null);
        setShowAnswer(false);
        setSubmitted(false);
    };

    return (
        <PageWrapper>
            <Top />
            <Wrapper>
                <Title>{title}</Title>
                <Description>{description}</Description>
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
                <ButtonWrapper>
                    {!submitted ? (
                        <Button onClick={handleSubmit}>제출하기</Button>
                    ) : (
                        <Button onClick={handleRetry}>다시 풀기</Button>
                    )}
                </ButtonWrapper>
                {result !== null && <Result>결과: {result}</Result>}
                {showAnswer && (
                    <AnswerBox>
                        <strong>✅ 정답 코드:</strong>
                        {'\n'}{solution}
                        {'\n\n'}<strong>💡 해설:</strong>
                        {'\n'}{explanation}
                    </AnswerBox>
                )}
            </Wrapper>

            {showDialog && (
                <Overlay>
                    <Dialog>
                        <p style={{ marginBottom: '12px', fontWeight: 'bold' }}>정말 제출하시겠어요?</p>
                        <p style={{ fontSize: '14px' }}>제출하면 <strong>정답과 해설</strong>이 바로 공개됩니다.</p>
                        <div>
                            <CancelButton onClick={handleDialogCancel}>취소</CancelButton>
                            <ConfirmButton onClick={handleDialogConfirm}>제출하기</ConfirmButton>
                        </div>
                    </Dialog>
                </Overlay>
            )}
        </PageWrapper>
    );
}
