import { useEffect, useState } from "react";
import MovieCard from "../../components/MovieCard/MovieCard";

const AllMovies = () => {
    const [movies, setMovies] = useState([]);
    useEffect(() => {
        fetch('/movie.json')
            .then(result => result.json())
            .then(data => {
                setMovies(data);
            })
    }, [])
    return (
        <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {
                movies.map((movie, index) => <MovieCard key={index} movie={movie} />)
            }
        </div>
        </div>
    );
};

export default AllMovies;