import classes from './Counter.module.css';
import { useSelector, useDispatch } from 'react-redux'

const Counter = () => {
  const toggleCounterHandler = () => {};

  const dispatch = useDispatch();
  const counter = useSelector(state => state.counter)

  const handleAction = (action) => {
    if (action === 'increment') dispatch({type: 'increment'})
    else dispatch({type: 'decrement'})
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div W={classes.value}>{counter}</div>
      <div className={classes.butts}>
        <button onClick={() => handleAction('increment')}>Increment</button>
        <button onClick={() => handleAction('')}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
