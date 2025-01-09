import reactImg from '../../assets/react-core-concepts.png'
const reactDescriptions = ['Fundamental', 'Crucial', 'Core'];
import classes from './Header.module.css'

function genRandomInt(max) {
  return Math.floor(Math.random() * (max + 1));
}

export default function Header() {
    const randomName = reactDescriptions[genRandomInt(reactDescriptions.length - 1)];;
    return (
      <header className={classes['header-custom']}>
        <img src={reactImg} alt="Stylized atom" />
        <h1>React Essentials</h1>
        <p>
          {randomName} React concepts you will need for almost any app you are
          going to build!
        </p>
      </header>
    )
  }