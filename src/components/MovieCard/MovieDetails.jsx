import { GrFavorite } from "react-icons/gr";
import { MdDeleteForever } from "react-icons/md";
import MovieCard from "./MovieCard";
import { Link, useLoaderData, useNavigate } from "react-router-dom";
import useAxios from "../../Hooks/useAxios";
import { useEffect, useState } from "react";
import { Rating } from "@smastrom/react-rating";
import { PiTimerBold } from "react-icons/pi";
import { LuCalendarDays } from "react-icons/lu";
import { LiaTagsSolid } from "react-icons/lia";
import { FaRegEdit } from "react-icons/fa";
import { Helmet } from "react-helmet-async";
import useAuth from "../../Hooks/useAuth";
import Swal from "sweetalert2";

const MovieDetails = () => {
    const [rating, setRating] = useState(3);
    const [movieDetails, setMovieDetails] = useState();
    const AxiosMovie = useAxios();
    const AxiosId = useAxios();
    const { user } = useAuth();
    const { _id } = useLoaderData();
    const navigate = useNavigate();
    useEffect(() => {
        AxiosId.get(`/movieDetails/${_id}`)
            .then(res => setMovieDetails(res.data))
    }, [_id, AxiosId])

    if (!movieDetails) {
        return <span className="loading loading-dots loading-xl"></span>
    }
    const { _id: id, Title, Poster, Genre, Duration, ReleaseYear, Rating: movieRating, Summary } = movieDetails;
    const hours = Math.floor(Duration / 60);
    const minute = Duration % 60;

    // Handle Add Favorite -----------------
    const handleAddFavorite = () => {
        const addFavoriteMovie = {
            MovieId: _id,
            userEmail: user?.email,
            Title, Poster, Genre, Duration, ReleaseYear, Rating: movieRating, Summary
        };
        AxiosMovie.post('/userFavorite', addFavoriteMovie)
            .then(res => {
                if (res.data.insertedId) {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: `${Title} Movie Added your Favorite List`,
                        showConfirmButton: false,
                        timer: 1500
                    });
                    navigate('/myFavorites')
                }
            }).catch(error => {
                if (error) {
                    Swal.fire({
                        icon: "error",
                        title: `Oops...${error}`,
                        text: "Something went wrong!",
                        footer: '<a href="#">Why do I have this issue?</a>'
                    });
                }
            })
    }
    return (
        <div className="max-w-7xl mx-auto flex items-center justify-center mt-16">
            <Helmet><title>Camping Retreats || Movie Details</title></Helmet>
            <div className=" lg:flex  bg-base-100  shadow-sm">

                <figure>
                    <img
                        className='rounded-lg '
                        src={Poster}
                        alt="Poster" />
                </figure>

                <div className="card-body">
                    <div className="card-actions">

                        <div className="badge badge-outline">
                            {movieRating}
                            <Rating
                                style={{ maxWidth: 100 }}
                                value={rating}
                                onChange={setRating}
                            />
                        </div>

                    </div>
                    <h2 className="card-title">
                        {Title}
                    </h2>
                    <p>{Summary}</p>
                    <div className="badge badge-outline"><PiTimerBold />Duration  {`${hours} : ${minute}`}</div>
                    <div className="badge badge-outline"><LuCalendarDays /> Publish : {ReleaseYear}</div>
                    <div className='flex gap-2 mt-3'>
                        {
                            Genre.map((tag, index) => <div className='badge shadow flex items-center justify-center' key={index}><LiaTagsSolid />{tag}</div>)
                        }
                    </div>
                    <Link to='/allMovies' className=''>
                        <button className='btn btn-wide btn-outline mt-5'> All Movies</button>
                    </Link>
                    <div className='mt-5 flex items-center'>
                        <div className="card-actions justify-end">
                            <button onClick={handleAddFavorite} className="btn btn-ghost shadow"><GrFavorite color="red" /> Add to Favorite</button>
                            <Link to={`/updateMovie/${id}`}><button className="btn btn-ghost shadow"><FaRegEdit size={20} color="#427aa1" />Update Movie</button></Link>
                            <button className="btn btn-ghost shadow"><MdDeleteForever size={22} color="#e54b4b" /> Delete Movie</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MovieDetails;