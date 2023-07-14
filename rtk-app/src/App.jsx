import { useDispatch, useSelector } from 'react-redux';
import { addNumber, minusNumber } from './redux/modules/counter';

function App() {

  const number = useSelector((state) => state.counter.number);
  const dispatch = useDispatch();

  const addNumberHandelr = () => {
    dispatch(addNumber(1));
  }

  const minusNumberHandelr = () => {
    dispatch(minusNumber(1));
  }

  return (
    <div>
      <div>{number}</div>
      <div>
        <button onClick={addNumberHandelr}>+</button>
        <button onClick={minusNumberHandelr}>-</button>
      </div>
    </div>
  );
}

export default App;
