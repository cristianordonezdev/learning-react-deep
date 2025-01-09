import Header from './components/Header/Header';
import CoreConcepts from './components/CoreConcepts';
import Examples from './components/Examples';

function App() {

  return (
    <>
      <Header />
      <main>
        <header>
          <h1>Hello world</h1>
        </header>
        <CoreConcepts></CoreConcepts>
        <Examples></Examples>
      </main>
    </>
  );
}

export default App;
