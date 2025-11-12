import { useEffect, useState } from "react";
import MovieCard from "../../components/MovieCard/MovieCard";
import useAxios from "../../Hooks/useAxios";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa6";
import { Helmet } from "react-helmet-async";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import Swal from "sweetalert2";

const AllMovies = () => {
    const AxiosUser = useAxios();
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);
    const [searchData, setSearchData] = useState("");
    useEffect(() => {
        AxiosUser.get(`/movieInfo?search=${searchData}`)
            .then(res => {
                setMovies(res.data);
                setLoading(false)
            })
            .catch(error => {
                if (error) {
                    Swal.fire({
                        icon: "error",
                        title: `Oops...${error}`,
                        text: "Something went wrong!",
                        footer: '<a href="#">Why do I have this issue?</a>'
                    });
                }
            })

    }, [AxiosUser, searchData])
    if (loading) {
        return <span className="loading loading-dots loading-xl"></span>
    }
    return (
        <div className="max-w-7xl mx-auto">
            <Helmet><title>Camping Retreats || All Movie</title></Helmet>
            <Navbar></Navbar>
            <div className="max-w-md mt-8 mx-auto">
                <input
                    type="text"
                    placeholder="Search"
                    className="input w-full input-border"
                    value={searchData}
                    onChange={(e) => setSearchData(e.target.value)} />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
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
            <Footer />
        </div>
    );
};

export default AllMovies;