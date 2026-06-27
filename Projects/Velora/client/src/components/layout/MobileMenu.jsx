import { FaBars } from "react-icons/fa";

function MobileMenu() {
    return (
        <button className="lg:hidden text-2xl">
            <FaBars />
        </button>
    );
}

export default MobileMenu;