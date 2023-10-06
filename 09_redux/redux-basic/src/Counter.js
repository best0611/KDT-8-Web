import { useSelector, useDispatch } from "react-redux";
import { counterAction } from "./store/counter";

export default function Counter() {
  //   const number = useSelector((state) => state.counter);
  const number = useSelector((state) => state.count.counter);
  const dispatch = useDispatch();
  const plus = () => {
    dispatch(counterAction.increment());
  };
  const minus = () => {
    dispatch(counterAction.decrement());
  };
  const newplus = () => {
    dispatch(counterAction.plus({ ten: 10, minus: -15 }));
  };
  return (
    <div>
      <h2>{number}</h2>
      <button onClick={plus}>PLUS</button>
      <button onClick={minus}>MINUS</button>
      <button onClick={newplus}>+</button>
    </div>
  );
}
