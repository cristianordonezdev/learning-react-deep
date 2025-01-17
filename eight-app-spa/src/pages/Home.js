import {useNavigate} from 'react-router-dom'

function Home() {
    const navigate = useNavigate();

    function handleNavigate() {
        navigate('/products')
    }
    return (
        <>
            <h1>home</h1>
            <button onClick={handleNavigate}>Navigate from JS</button>
        </>
    )
}
export default Home;