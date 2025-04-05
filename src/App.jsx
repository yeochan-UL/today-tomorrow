import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from '@/site/HomePage';       // 랜딩 페이지
import ProblemPage from '@/ProblemPage'; // 문제 풀이 페이지

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/question/:id" element={<ProblemPage />} />
      </Routes>
    </BrowserRouter>
  );
}
