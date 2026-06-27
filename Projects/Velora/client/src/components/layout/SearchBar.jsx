import { FaSearch } from "react-icons/fa";

function SearchBar() {
    return (
        <div className="hidden lg:flex items-center w-[420px] bg-gray-100 rounded-xl overflow-hidden">

            <input
                type="text"
                placeholder="Search products..."
                className="w-full px-4 py-3 bg-transparent outline-none"
            />

            <button className="bg-yellow-400 px-5 py-3 hover:bg-yellow-500 transition">
                <FaSearch />
            </button>

        </div>
    );
}

export default SearchBar;