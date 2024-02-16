//리액트를 사용하기 위한 리액트 라이브러리 호출 - 리액트 기능 및 컴포넌트 사용 가능
import React from 'react'; 

//App 이라는 이름의 상수를 선언하고, 화살표 함수로 정의된 함수형 컴포넌트
const App = () => {
  return (
    <div>
      App
    </div>
  );
};

//App 컴포넌트를 다른 파일에서 재사용할 수 있도록 내보내기 설정
export default App;