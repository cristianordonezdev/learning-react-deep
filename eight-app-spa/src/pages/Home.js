import { Link } from "react-router-dom";

function Home() {
    return (
        <>
            <h1>Hello home</h1>
            <Link to="/products">Products</Link>
        </>
    )
}
export default Home;