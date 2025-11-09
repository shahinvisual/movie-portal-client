import { Rating } from '@smastrom/react-rating';
import React, { useState } from 'react';
import { LiaTagsSolid } from 'react-icons/lia';
import { LuCalendarDays } from 'react-icons/lu';
import { MdDeleteForever } from 'react-icons/md';
import { PiTimerBold } from 'react-icons/pi';
import { Link } from 'react-router-dom';
import useAxios from '../../Hooks/useAxios';

const FavoriteMovieCard = ({ movie, onDeleteSuccess }) => {
    // const [latestMovie, setLatestMovie] = useState(movie);
    const [rating, setRating] = useState(3);
    const AxiosDelete = useAxios();
    const { _id, Title, Poster, Genre, Duration, ReleaseYear, Rating: movieRating, Summary } = movie;
    console.log(movie);
    const hours = Math.floor(Duration / 60);
    const minute = Duration % 60;
    // Delete Operation--------------------
    const handleDelete = (id) => {
        console.log('delete movie', id);
        AxiosDelete.delete(`/favoriteMovieDelete/${id}`)
            .then(res => {
                console.log(res);
                onDeleteSuccess(id);
            }).catch(error => {
                console.log(error);
            })

    }
    return (
        <div className="card card-side bg-base-100 shadow-sm">
            <figure>
                <img
                    src={Poster}
                    alt="Movie" />
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
                        Genre?.map((tag, index) => <div className='badge shadow flex items-center justify-center' key={index}><LiaTagsSolid />{tag}</div>)
                    }
                </div>
                <Link to='/allMovies' className=''>
                    <button className='btn btn-wide btn-outline mt-5'> All Movies</button>
                </Link>
                <div className='mt-5 flex items-center justify-center'>
                    <div className="card-actions mb-3">
                        <button onClick={() => handleDelete(_id)} className="btn btn-ghost shadow"><MdDeleteForever size={22} color="#e54b4b" /> Delete Movie</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FavoriteMovieCard;