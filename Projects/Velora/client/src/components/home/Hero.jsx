function Hero() {
    return (
        <section className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-white">
            <div className="max-w-7xl mx-auto px-6 py-20 grid lg:grid-cols-2 gap-12 items-center">

                {/* Left */}
                <div>
                    <span className="bg-yellow-400 text-black px-4 py-2 rounded-full font-semibold">
                        🚀 New Collection 2026
                    </span>

                    <h1 className="text-5xl lg:text-7xl font-bold leading-tight mt-8">
                        Shop Smarter.
                        <br />
                        Live Better.
                    </h1>

                    <p className="text-gray-300 text-lg mt-6 leading-8">
                        Discover premium electronics, fashion, gadgets and
                        everything you love—all in one place.
                    </p>

                    <div className="flex gap-5 mt-10">
                        <button className="bg-yellow-400 text-black px-8 py-4 rounded-xl font-semibold hover:scale-105 transition">
                            Shop Now
                        </button>

                        <button className="border border-white px-8 py-4 rounded-xl hover:bg-white hover:text-black transition">
                            Explore
                        </button>
                    </div>
                </div>

                {/* Right */}
                <div className="flex justify-center">
                    <img
                        src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=900"
                        alt="Hero"
                        className="rounded-3xl shadow-2xl w-full max-w-lg"
                    />
                </div>

            </div>
        </section>
    );
}

export default Hero;