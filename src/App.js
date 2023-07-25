import React from "react";
import MyComponent from "./MyComponent";
import YourComponent from "./YourComponent";
import Say from "./Say";

function App() {
  return (
      <>
          {/* propertie명은 자유롭게 지정해주시면 됩니다.
           다만 받는 쪽에서도 전달해줄때 사용해준 명칭을 사용해야 연결됩니다.*/}
        <MyComponent>사이에 적은 내용</MyComponent>
        <YourComponent country="ROK"/>
        <Say msg="안녕하세요"/>
      </>
  );
}

export default App;
