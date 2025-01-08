import { CORE_CONCEPTS } from './data';
import { useState } from 'react';

import Header from './components/Header/Header';
import CoreConcept from './components/CoreConcept';
import TabButton from './components/TabButton';
import { EXAMPLES } from './data';
function App() {
  const [getSelected, setSelected] = useState();
  const handleClick = (selectedButton) => {
    setSelected(selectedButton);
  }

  return (
    <div>
      <Header />
      <main>

        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            {CORE_CONCEPTS.map((conceptItem) => (
              <CoreConcept key={conceptItem.title} {...conceptItem} />

            ))}
          </ul>
        </section>
        <section id='examples'>
          <h2>Examples</h2>
          <menu>
            <TabButton isSelected={getSelected === 'components'} onSelectTab={() => handleClick('components')}>Components </TabButton>
            <TabButton isSelected={getSelected === 'jsx'} onSelectTab={() => handleClick('jsx')}>JSX </TabButton>
            <TabButton isSelected={getSelected === 'props'} onSelectTab={() => handleClick('props')}>Props </TabButton>
            <TabButton isSelected={getSelected === 'state'} onSelectTab={() => handleClick('state')}>State </TabButton>
          </menu>
          <div id="tab-content">
            {!getSelected ? <p>Please select a topic</p> :
              <div>
                <h3>{EXAMPLES[getSelected].title}</h3>
                <p>
                  {EXAMPLES[getSelected].description}
                </p>
                <pre>
                  <code>
                    {EXAMPLES[getSelected].code}
                  </code>
                </pre>
              </div>
            }
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
