import { useAppDispatch, useAppSelector } from "./hooks/storeHooks";
import {
  decrement,
  decrementByAmount,
  increment,
  incrementAsync,
  incrementByAmount,
} from "./store/counter/counterSlice";

function App() {
  const { value } = useAppSelector((state) => state.counter);
  const dispatch = useAppDispatch();

  return (
    <div>
      <h2>React Redux Toolkit Boilerplate with Typescript</h2>
      <p>Counter: {value}</p>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <button onClick={() => dispatch(incrementByAmount(5))}>
        Increment By 5
      </button>
      <button onClick={() => dispatch(decrementByAmount(5))}>
        Decrement By 5
      </button>
      <button onClick={() => dispatch(incrementAsync(5))}>
        Increment Asynchronously
      </button>
    </div>
  );
}

export default App;
