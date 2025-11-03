import { useEffect, useState } from "react";
import MovieCard from "../../components/MovieCard/MovieCard";
import useAxios from "../../Hooks/useAxios";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa6";

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
                    movies.map((movie, index) => <MovieCard
                        btn={<Link to={`/movieDetails/${movie._id}`}>
                            <button className='btn btn-ghost shadow flex items-center'>
                                See Details<FaArrowRight size={15} className="transform rotate-45" />
                            </button>
                        </Link>}
                        key={index}
                        movie={movie} />)
                }
            </div>
        </div>
    );
};

export default AllMovies;