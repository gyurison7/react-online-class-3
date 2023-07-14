import { useDispatch, useSelector } from 'react-redux';
import { addNumber, minusNumber } from './redux/modules/counterSlice';
import { useState } from 'react';
import { __addNumber, __minusNumber } from './redux/modules/counterSlice';

function App() {

  const globalNumber = useSelector((state) => state.counter.number)
  const [number, setNumber] = useState(0);

  const dispatch = useDispatch();

  const addNumberHandelr = () => {
    dispatch(__addNumber(+number));
  }

  const minusNumberHandelr = () => {
    dispatch(__minusNumber(+number));
  }

  return (
    <div>
      <div>{globalNumber}</div>
      <div>
        <input type="number" onChange={(e) => {
          setNumber(e.target.value);
        }}/>
        <button onClick={addNumberHandelr}>더하기</button>
        <button onClick={minusNumberHandelr}>빼기</button>
      </div>
    </div>
  );
}

export default App;
