import React from "react";
import MyComponent from "./components/study/MyComponent";
import YourComponent from "./components/study/YourComponent";
import Say from "./components/study/Say";
import ArrayChange from "./components/study/ArrayChange";
import EventPractice from "./components/eventhandling/EventPractice";
import IterationSample from "./components/iteration/IterationSample";
import IterationSample2 from "./components/iteration/IterationSample2";
import Counter from "./components/Hooks/Counter";
import Info from "./components/Hooks/Info";
import Average from "./components/Hooks/Average";
import CSSModule from "./components/cssmodule/CSSModule";


function App() {
  return (
      <>
          {/* propertie명은 자유롭게 지정해주시면 됩니다.
           다만 받는 쪽에서도 전달해줄때 사용해준 명칭을 사용해야 연결됩니다.*/}
        {/*<MyComponent>사이에 적은 내용</MyComponent>*/}
        {/*<YourComponent country="ROK"/>*/}
        {/*<Say msg="안녕하세요"/>*/}
        {/*<ArrayChange/>*/}
          {/*4강까지 완료*/}
        {/*<EventPractice/>*/}

          {/*6강까지 완료*/}
        {/*<IterationSample/>*/}
        {/*<IterationSample2/>*/}

          {/*8강*/}
          {/*<Counter/>*/}
          {/*<Info/>*/}
          {/*<Average/>*/}
          <CSSModule/>
      </>
  );
}

export default App;