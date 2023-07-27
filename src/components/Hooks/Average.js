import React, {useMemo, useState} from "react";
import './Average.css'

    const getAverage = (numbers) => {
        console.log("평균값 계산 중..");
        if(numbers.length === 0) return (0);
        const sum = numbers.reduce((a, b) => a + b);
        return sum / numbers.length;
    }

    const Average = () => {
        const [list, setList] = useState([]);
        const [number, setNUmber] = useState('');

        const onChange = (e) => {
            setNUmber(e.target.value);
        };
        const onInsert = (e) => {
            const nextList = list.concat(parseInt(number));
            setList(nextList);
            setNUmber('');
        };
        // 특정 상태변수의 값이 변경되었을때 호출할 로직을 지정하고. 리턴값을 돌려줌.
        // list자체의 값이 변할때만 getAverage()를 호출하고, 결과값은 avg 변수에 저장하겠다.
        const avg = useMemo(() => getAverage(list), [list]);

        return(
            <div>
                <input value={number} onChange={onChange}/>
                <button onClick={onInsert}>등록</button>
                <ul>
                    {list.map((value, index) => (
                        <li key={index}>{value}</li>
                    ))}
                </ul>
                <div className='Average-result'>
                    <b>평균값 : </b> {avg}
                </div>
            </div>
        );
};
export default Average;