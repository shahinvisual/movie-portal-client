import { useEffect, useState } from "react";
import MovieCard from "../MovieCard/MovieCard";

const FeaturedMovies = () => {
    const [featureMovies, setFeatureMovies] = useState([]);
    useEffect(() => {
        fetch('/movie.json')
            .then(result => result.json())
            .then(data => {
                const hightRatedMovie = data.sort((a, b) => b.Rating - a.Rating)
                setFeatureMovies(hightRatedMovie.slice(0, 6))
            })
    }, [])
    return (
        <div className="grid grid-cols-3">
            {
                featureMovies.map((movie, index) => <MovieCard key={index} movie={movie} />)
            }
        </div>
    );
};

export default FeaturedMovies;