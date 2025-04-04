import QuestionView from './QuestionView';

export default function App() {
    const 문제 = {
        title: '문제 1. 배열 중복 제거',
        description: `주어진 배열에서 중복된 값을 제거하여 반환하는 함수를 작성하세요.\n예: [1,2,2,3] → [1,2,3]`,
        initialCode: `function removeDuplicates(arr) {
  // 여기에 작성
}

console.log(removeDuplicates([1, 2, 2, 3]));`,
        solution: `function removeDuplicates(arr) {
  return [...new Set(arr)];
}`,
        explanation: `Set 객체는 중복된 값을 허용하지 않기 때문에,
배열을 Set으로 변환한 후 다시 배열로 변환하면 중복이 제거됩니다.`,
    };

    return (
        <div>
            <QuestionView {...문제} />
        </div>
    );
}
