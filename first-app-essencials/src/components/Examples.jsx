import TabButton from './TabButton';
import { EXAMPLES } from '../data';
import { useState } from 'react';
import Section from './Section';
import Tabs from './Tabs';
import { styled } from 'styled-components'

export default function Examples() {
  const [getSelected, setSelected] = useState();
  const handleClick = (selectedButton) => {
    setSelected(selectedButton);
  }

  const SectionComponentStyled = styled.section`
    margin: 3rem auto;

    & h2 {
      text-align: left;
    }

    & menu {
      margin: 1rem 0;
      padding: 0;
      display: flex;
      gap: 0.5rem;
      list-style: none;
    }

    & menu button {
      padding: 0.5rem 1rem;
      border: none;
      border-radius: 6px;
      background-color: transparent;
      color: #a18aba;
      font-family: "Roboto Condensed", sans-serif;
      font-size: 1rem;
      cursor: pointer;
      transition: all 0.2s ease-in-out;
    }

    & menu button:hover {
      background-color: #1b082f;
      color: #ebe7ef;
    }

    & menu button.active {
      background-color: #7925d3;
      color: #ebe7ef;
    }
  `

  return (
    <SectionComponentStyled title={'Some examples here'} id='examples'>
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
    </SectionComponentStyled>
  )
}