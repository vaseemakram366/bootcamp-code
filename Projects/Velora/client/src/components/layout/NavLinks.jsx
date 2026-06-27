import { NavLink } from "react-router-dom";

function NavLinks() {

    const links = [
        { name: "Home", path: "/" },
        { name: "Products", path: "/products" },
        { name: "Orders", path: "/orders" },
    ];

    return (
        <div className="hidden xl:flex items-center gap-8">

            {links.map((link) => (
                <NavLink
                    key={link.path}
                    to={link.path}
                    className="font-medium hover:text-yellow-500 transition"
                >
                    {link.name}
                </NavLink>
            ))}

        </div>
    );
}

export default NavLinks;