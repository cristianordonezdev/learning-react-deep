import { useState } from 'react';

import Counter from './components/Counter/Counter.jsx';
import Header from './components/Header.jsx';
import { log } from './log.js';
import ConfigureCounter from './components/ConfigureCounter.jsx';

function App() {
  log('<App /> rendered');

  const [chosenCount, setChosenCount] = useState(0);
  function handleSetCount(newCount) {
    setChosenCount(newCount)
    setChosenCount((old_value) => old_value + 2)
  }
  return (
    <>
      <Header />
      <main>
        <ConfigureCounter onSet={handleSetCount}></ConfigureCounter>
        <Counter key={chosenCount} initialCount={chosenCount} />
      </main>
    </>
  );
}

export default App;
