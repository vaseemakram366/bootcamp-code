function CategoryButtons({ setSelectedCategory }) {
    return (
        <div>
            <button onClick={() => setSelectedCategory("html")}>
                HTML
            </button>

            <button onClick={() => setSelectedCategory("css")}>
                CSS
            </button>

            <button onClick={() => setSelectedCategory("javascript")}>
                JavaScript
            </button>

            <button onClick={() => setSelectedCategory("react")}>
                React
            </button>

            <button onClick={() => setSelectedCategory("git")}>
                Git
            </button>

            <button onClick={() => setSelectedCategory("dsa")}>
                DSA
            </button>
        </div>
    );
}

export default CategoryButtons;