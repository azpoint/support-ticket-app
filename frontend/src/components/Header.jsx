import { FaSignInAlt, FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";

function Header() {
    return (
        <header className="flex justify-between items-center py-5 mb-16 border-b-2 border-someGray">
            <div className="text-xl font-semibold">
                <Link to="/">Support Ticket</Link>
            </div>

            <ul className="flex gap-x-10">
                <li>
                    <Link to="/login" className="flex gap-x-2 items-center">
                        <FaSignInAlt /> Login
                    </Link>
                </li>
                <li>
                    <Link to="/register" className="flex gap-x-2 items-center">
                        <FaUser /> Register
                    </Link>
                </li>
            </ul>
        </header>
    );
}
export default Header;
