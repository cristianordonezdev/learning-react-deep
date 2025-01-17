import { Link } from "react-router-dom";
import classes from './MainNavigation.module.css'

export default function MainNavigation() {
    return (
        <header className={classes.header}>
            <ul className={classes.list}>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/products">Productos</Link>
                </li>
            </ul>
        </header>
    )
}