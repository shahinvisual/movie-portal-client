import { useEffect, useState } from "react";
import useAxios from "../../Hooks/useAxios";
import FavoriteMovieCard from "./FavoriteMovieCard";
import { Helmet } from "react-helmet-async";
import useAuth from "../../Hooks/useAuth";

const FavoriteMovieList = () => {
    const [favoriteMovie, setFavoriteMovie] = useState([]);
    const AxiosMovieList = useAxios();
    const { user } = useAuth();
    useEffect(() => {
        AxiosMovieList.get(`/favoriteMovieList?email=${user?.email}`)
            .then(res => {
                console.log(res.data);
                setFavoriteMovie(res.data)
            }).catch(error => {
                console.log(error);
            })
    }, [AxiosMovieList, user?.email])
    // const handleRemove = (id) => {
    //     const filterMovie = favoriteMovie.filter(movie => movie._id != id);
    //     setFavoriteMovie(filterMovie)
    // }
    if (!favoriteMovie) return <span className="loading loading-ring loading-xl"></span>
    return (
        <>
            <Helmet><title>Camping Retreats || Favorite Movie</title></Helmet>
            <div className="max-w-7xl mx-auto grid grid-cols-2 space-x-7 gap-8 mt-8">
                {
                    favoriteMovie.map((movie, index) => <FavoriteMovieCard
                        key={index}
                        favoriteMovie={favoriteMovie}
                        setFavoriteMovie={setFavoriteMovie}
                        movie={movie}
                    />)
                }
            </div>
        </>
    );
};

export default FavoriteMovieList;