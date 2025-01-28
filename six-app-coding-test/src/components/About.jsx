import image1 from '../assets/2.webp';
import image2 from '../assets/2.svg';
import { DataContext } from '../contexts/DataContext.jsx';
import { useContext } from 'react';

export default function About() {
    const { updateHeaderMessage } = useContext(DataContext);
    return (
        <div>
            <h1>About</h1>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
                voluptate, quia, eaque nesciunt, quod quos quas ad quibusdam
                voluptatum dolorum autem. Quisquam, quia, eaque nesciunt, quod quos
                qu
            </p>

            <img src={image1} alt="" className='image-about'/>
            <img src={image2} alt="" className='image-about'/>
            <button onClick={() => updateHeaderMessage("New Header Message from About")}>
                Update Header Message
            </button>
        </div>
    );
}