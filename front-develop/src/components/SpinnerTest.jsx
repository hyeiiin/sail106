import { useState, useEffect } from 'react';
import LoadingSpinner from './LoadingSpinner.jsx';

const SpinnerTest = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      // 3초간 대기 (비동기 작업 시뮬레이션)
      await new Promise(resolve => setTimeout(resolve, 3000));

      // 작업이 완료되면 로딩 상태를 false로 변경
      setLoading(false);
    };

    fetchData();
  }, []); // useEffect의 두 번째 인자인 빈 배열은 컴포넌트가 처음 렌더링될 때만 실행되도록 합니다.

  return (
    <div>
      {/* 다른 컴포넌트 내용 */}
      
      {loading ? <LoadingSpinner /> : <div>로딩이 완료되었습니다.</div>}
    </div>
  );
};

export default SpinnerTest;