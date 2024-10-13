import { Link } from "react-router-dom";

function Navbar() {
    return (
        <nav>
            <Link to="/">
            <img src="./images/logo.png" alt="school logo" width="80px" />
            </Link>
            <Link to="/exams">Exams</Link>
            <Link to="/programs">Programs</Link>
            <Link to="/scholarships">Scholarships</Link>
            <Link to="/scholarships">Test Series</Link>
            <Link to="/scholarships">Study Materials</Link>
        </nav>
    );
}

export default Navbar;
