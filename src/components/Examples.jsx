import TabButton from './TabButton';
import { EXAMPLES } from '../data';
import { useState } from 'react';
import Section from './Section';
import Tabs from './Tabs';

export default function Examples() {
  const [getSelected, setSelected] = useState();
  const handleClick = (selectedButton) => {
    setSelected(selectedButton);
  }

  return (
    <Section title={'Some examples here'} id='examples'>
      <Tabs ButtonsContainer="menu" buttons={
        <>
          <TabButton isSelected={getSelected === 'components'} onClick={() => handleClick('components')}>Components </TabButton>
          <TabButton isSelected={getSelected === 'jsx'} onClick={() => handleClick('jsx')}>JSX </TabButton>
          <TabButton isSelected={getSelected === 'props'} onClick={() => handleClick('props')}>Props </TabButton>
          <TabButton isSelected={getSelected === 'state'} onClick={() => handleClick('state')}>State </TabButton>
        </>
      }>
        
      </Tabs>
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
    </Section>
  )
}