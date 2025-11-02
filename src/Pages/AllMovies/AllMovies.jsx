import { useEffect, useState } from "react";
import MovieCard from "../../components/MovieCard/MovieCard";

const AllMovies = () => {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        fetch('http://localhost:5000/movieInfo')
            .then(result => result.json())
            .then(data => {
                console.log(data);
                setMovies(data);
                setLoading(false)
            })
    }, [])
    if (loading) {
        return <span className="loading loading-dots loading-xl"></span>
    }
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