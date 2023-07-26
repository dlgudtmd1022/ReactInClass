import React, {useState} from "react";

const Counter = () => {
        const [value, setValue] = useState(0);

        const plus = () => {
            setValue(value + 1);
        }
        const minus = () => {
            setValue(value - 1);
        }

    return(
        <>
            <p>
                현재 카운터 값은 <b>{value}</b>입니다.
            </p>
            {/*setvalue를 이용해서 value값에 1이 더해지거나 빼지게 해주세요.*/}
            <button onClick={plus}> +1</button>
            <button onClick={minus}> -1</button>
        </>
    );
}

export default Counter;