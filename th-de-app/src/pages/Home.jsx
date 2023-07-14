import React, { useEffect } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';

function Home() {

    let timerId = null;

    const navigate = useNavigate();

    useEffect(() => {
        return () => {
            // 언마운트 시
            if (timerId) {
                clearTimeout(timerId); // 누수 방지
            }
        }
    })

    const throttle = (delay) => {
        if (timerId) {
            // timerId가 있으면 바로 함수 종료
            return;
        }
        console.log(`API요청 실행! ${delay}ms동안 추가 요청은 받지 않습니다.`);
        timerId = setTimeout(() => {
            console.log(`${delay}가 지났습니다. 추가 요청 받습니다.`);
            timerId = null;
        }, delay)
    };

    // 반복적인 이벤트 이후, delay가 지나면 function
    const debounce = (delay) => {
        if (timerId) {
            clearTimeout(timerId);
        }
        timerId = setTimeout(() => {
            console.log(`마지막 요청으로부터 ${delay}ms 지났으므로 API 요청 실행`)
            timerId = null;
        }, delay);

    };

    return (
        <div style={{
            paddingLeft: 20,
            paddingRight: 20,
        }}>
            <h1>버튼 이벤트 예제</h1>
            <button onClick={() => { throttle(2000) }}>쓰로틀링 버튼</button>
            <button onClick={() => { debounce(2000) }}>디바운싱 버튼</button>
            <div>
                <button onClick={() => {
                    navigate('/company');
                }}>페이지 이동
                </button>
            </div>
        </div>
    )
}

export default Home