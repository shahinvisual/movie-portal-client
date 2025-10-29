import FeaturedMovies from "../../components/FeaturedMovies/FeaturedMovies";
import SwiperBanner from "../../components/swiper/SwiperBanner";

const Home = () => {
    return (
        <div>
            <SwiperBanner />
            <FeaturedMovies />
        </div>
    );
};

export default Home;