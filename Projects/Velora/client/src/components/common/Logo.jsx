import { Link } from "react-router-dom";
import { APP_NAME } from "../../constants/theme";

function Logo() {
    return (
        <Link
            to="/"
            className="text-3xl font-bold tracking-wide text-gray-900"
        >
            {APP_NAME}
        </Link>
    );
}

export default Logo;