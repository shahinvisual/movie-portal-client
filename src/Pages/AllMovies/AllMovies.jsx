import { useEffect, useState } from "react";
import MovieCard from "../../components/MovieCard/MovieCard";
import useAxios from "../../Hooks/useAxios";

const AllMovies = () => {
    const AxiosUser = useAxios();
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        AxiosUser.get('/movieInfo')
            .then(res => {
                console.log(res.data);
                setMovies(res.data);
                setLoading(false)
            })
            .catch(error => console.log(error))

    }, [AxiosUser])
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