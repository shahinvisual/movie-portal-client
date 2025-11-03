import { useEffect, useState } from "react";
import MovieCard from "../MovieCard/MovieCard";
import useAxios from "../../Hooks/useAxios";
import { Link } from "react-router-dom";
import { FaArrowRight, FaArrowRightLong } from "react-icons/fa6";

const FeaturedMovies = () => {
    const AxiosFeature = useAxios();
    const [featureMovies, setFeatureMovies] = useState([]);
    useEffect(() => {
        AxiosFeature.get('/movieInfo')
            .then(res => {
                const data = res.data;
                const hightRatedMovie = data.sort((a, b) => b.Rating - a.Rating)
                setFeatureMovies(hightRatedMovie.slice(0, 6))
            })
            .catch(error => console.log(error))
    }, [AxiosFeature])
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {
                featureMovies.map((movie, index) => <MovieCard
                    btn={<Link to={`/movieDetails/${movie._id}`}>
                            <button className='btn btn-ghost shadow  flex items-center'>
                                See Details<FaArrowRight size={15} className="transform rotate-45" />
                            </button>
                        </Link>}
                    key={index}
                    movie={movie} />)
            }
        </div>
    );
};

export default FeaturedMovies;