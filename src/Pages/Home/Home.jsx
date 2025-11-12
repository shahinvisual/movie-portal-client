import { Helmet } from "react-helmet-async";
import FeaturedMovies from "../../components/FeaturedMovies/FeaturedMovies";
import SwiperBanner from "../../components/swiper/SwiperBanner";
import Navbar from "../../components/Navbar/Navbar";

const Home = () => {
    return (
        <div>
            <Helmet><title>Camping Retreats || Home</title></Helmet>
            <SwiperBanner />
            <FeaturedMovies />
        </div>
    );
};

export default Home;