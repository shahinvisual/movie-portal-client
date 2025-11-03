import { GrFavorite } from "react-icons/gr";
import { MdDeleteForever } from "react-icons/md";
import MovieCard from "./MovieCard";
import { useLoaderData } from "react-router-dom";
import useAxios from "../../Hooks/useAxios";
import { useEffect, useState } from "react";

const MovieDetails = () => {
    const [movieDetails, setMovieDetails] = useState();
    const AxiosId = useAxios();
    const { _id } = useLoaderData();
    console.log(_id);
    useEffect(() => {
        AxiosId.get(`/movieDetails/${_id}`)
            .then(res => setMovieDetails(res.data))
    }, [_id, AxiosId])
    if(!movieDetails){
        return <span className="loading loading-dots loading-xl"></span>
    }
    return (
        // <div><h1>length</h1></div>
        // // <div className="card bg-base-100 w-96 shadow-sm">
        // //     <figure>
        // //         <img
        // //             src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
        // //             alt="Shoes" />
        // //     </figure>
        // //     <div className="card-body">
        // //         <h2 className="card-title">
        // //             Card Title
        // //             <div className="badge badge-secondary">NEW</div>
        // //         </h2>
        // //         <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>

        // //     </div>
        // // </div>
        <div>
            <MovieCard
                btn={<div className="card-actions justify-end">
                    <button className="btn btn-ghost shadow"><GrFavorite color="red" /> Add to Favorite</button>
                    <button className="btn btn-ghost shadow"><MdDeleteForever size={22} color="#e54b4b" /> Delete Movie</button>
                </div>}
                movie={movieDetails}
            />
        </div>
    );
};

export default MovieDetails;