import { useEffect, useState } from "react";
import MovieCard from "../MovieCard/MovieCard";
import useAxios from "../../Hooks/useAxios";

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
                featureMovies.map((movie, index) => <MovieCard key={index} movie={movie} />)
            }
        </div>
    );
};

export default FeaturedMovies;