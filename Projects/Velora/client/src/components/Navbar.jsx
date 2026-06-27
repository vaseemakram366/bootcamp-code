import Logo from "./common/Logo";
import SearchBar from "./layout/SearchBar";
import NavLinks from "./layout/NavLinks";
import NavbarActions from "./layout/NavbarActions";
import MobileMenu from "./layout/MobileMenu";

function Navbar() {
    return (
        <header className="sticky top-0 z-50 bg-white shadow-md">

            <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

                <Logo />

                <NavLinks />

                <SearchBar />

                <NavbarActions />

                <MobileMenu />

            </nav>

        </header>
    );
}

export default Navbar;