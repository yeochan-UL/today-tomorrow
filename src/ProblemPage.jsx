import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import QuestionView from './QuestionView';
// src/assets/json 폴더 내의 JSON 파일을 직접 import 함
import questionsData from './assets/json/javascript_questions_upgrade.json';

export default function ProblemPage() {
  // URL에서 문제 ID (id)를 가져옴
  const { id } = useParams();
  const [question, setQuestion] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // 이미 import된 데이터를 사용하여 문제를 찾음
    const foundQuestion = questionsData.find((item) => item.id === parseInt(id, 10));
    setQuestion(foundQuestion);
    setLoading(false);
    console.log(foundQuestion, '문제 데이터');
  }, [id]);

  if (loading) {
    return <div>로딩 중...</div>;
  }

  if (!question) {
    return <div>문제를 찾을 수 없습니다.</div>;
  }

  return (
    <div>
      <QuestionView {...question} />
    </div>
  );
}
