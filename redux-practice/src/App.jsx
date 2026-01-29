
import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import { increment } from './slice/count.slice'

function App() {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.counter.count);

  return (
    <>
      <button onClick={() => dispatch(increment())}>
        Increment
      </button>

      <p>{count}</p>
    </>
  );
}

export default App;
