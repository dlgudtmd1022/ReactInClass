import React, {useState} from "react";

const YourComponent = (props) => {
    // 함수를 만들어서 country 변수의 상태관리를 선언해주세요, (useState()를 써라)
    // 초기값은 'ROK"입니다.
    const [country, setCountry] =  useState(props.country);

    const onClickEvent = () => {
        setCountry('KOREA');
    }
    // 이벤트 함수를 선언해서, 클릭시, 'KOREA'로 바뀌고 화면도 바뀌게 해 주세요,
    return(
      <>
      {/*버튼을 만들어서 위에서 만든 이벤트함수와 연결해주세요,*/}
      <button onClick={onClickEvent}>뾰로롱</button>
      <div>저는 {country}사람 입니다. </div>
      </>
    );
}

export default YourComponent;