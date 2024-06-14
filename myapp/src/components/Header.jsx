import {Link} from "react-router-dom"

const Hey = () => {
    return (
        <nav>
            <Link to="home">Home</Link>
            <Link to="about">About</Link>
            <Link to="contact">Contact</Link>
        </nav>
    )
}

export default Hey;