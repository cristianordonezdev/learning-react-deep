import classes from './Counter.module.css';
import { useSelector, useDispatch } from 'react-redux'

const Counter = () => {

  const dispatch = useDispatch();
  const counter = useSelector(state => state.counter)
  const showCounter = useSelector(state => state.showCounter)

  const handleAction = (action) => {
    if (action === 'increment') dispatch({type: 'increment'})
    else dispatch({type: 'decrement'})
  };

  const handleIncrease = () => {
    dispatch({type: 'increase', amount: 10})
  }
  const toggle = () => {
    dispatch({type: 'toggle'})
  }

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {showCounter && <div className={classes.value}>{counter}</div>}
      <div className={classes.butts}>
        <button onClick={() => handleAction('increment')}>Increment</button>
        <button onClick={handleIncrease}>Increase 10</button>
        <button onClick={() => handleAction('')}>Decrement</button>
      </div>
      <button onClick={toggle}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
