import { useEffect, useState } from "react";
import useAxios from "../../Hooks/useAxios";
import FavoriteMovieCard from "./FavoriteMovieCard";

const FavoriteMovieList = () => {
    const [favoriteMovie, setFavoriteMovie] = useState([]);
    const AxiosMovieList = useAxios();
    useEffect(() => {
        AxiosMovieList.get('/favoriteMovieList')
            .then(res => {
                console.log(res.data);
                setFavoriteMovie(res.data)

            }).catch(error => {
                console.log(error);
            })
    }, [AxiosMovieList])
    if (!favoriteMovie) return <span className="loading loading-ring loading-xl"></span>
    return (
        <div>
           {
            favoriteMovie.map((movie, index) => <FavoriteMovieCard key={index} movieCard={movie} />)
           }
        </div>
    );
};

export default FavoriteMovieList;