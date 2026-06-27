import Hero from "../components/home/Hero";
import OfferCards from "../components/home/OfferCards";
import Categories from "../components/home/Categories";
import FeaturedProducts from "../components/home/FeaturedProducts";
import FlashSale from "../components/home/FlashSale";

function Home() {
    return (
        <>
            <Hero />
            <OfferCards />
            <Categories />
            <FlashSale />
            <FeaturedProducts />
        </>
    );
}

export default Home;