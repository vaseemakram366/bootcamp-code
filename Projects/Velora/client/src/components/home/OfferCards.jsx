function OfferCards() {
    const offers = [
        {
            title: "Free Delivery",
            desc: "On orders above ₹999",
        },
        {
            title: "Easy Returns",
            desc: "7 Days Return Policy",
        },
        {
            title: "Secure Payment",
            desc: "100% Protected",
        },
    ];

    return (
        <section className="max-w-7xl mx-auto px-6 -mt-10 relative z-10">
            <div className="grid md:grid-cols-3 gap-6">
                {offers.map((offer) => (
                    <div
                        key={offer.title}
                        className="bg-white rounded-2xl shadow-lg p-8 text-center"
                    >
                        <h3 className="text-2xl font-bold">
                            {offer.title}
                        </h3>

                        <p className="text-gray-500 mt-2">
                            {offer.desc}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default OfferCards;