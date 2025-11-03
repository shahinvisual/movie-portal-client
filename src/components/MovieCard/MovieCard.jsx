import { useState } from 'react';
import { Rating } from '@smastrom/react-rating'

import '@smastrom/react-rating/style.css'
import { PiTimerBold } from 'react-icons/pi';
import { LuCalendarDays } from 'react-icons/lu';
import { LiaTagsSolid } from 'react-icons/lia';
import { Link } from 'react-router-dom';

const MovieCard = ({ movie, btn }) => {
    const [rating, setRating] = useState(3);
    const { Title, Poster, Genre, Duration, ReleaseYear, Rating: movieRating, Summary } = movie;
    const hours = Math.floor(Duration / 60);
    const minute = Duration % 60;

    return (
        <div>
            <div className="card bg-base-100 w-96 shadow-sm">
                <figure>
                    <img
                        className='rounded-lg'
                        src={Poster}
                        alt="Poster" />
                </figure>
                <div className="card-body">
                    <div className="card-actions justify-between">
                        <h2 className="card-title">
                            {Title}
                        </h2>
                        <div className="badge badge-outline">
                            {movieRating}
                            <Rating
                                style={{ maxWidth: 100 }}
                                value={rating}
                                onChange={setRating}
                            />
                        </div>
                    </div>
                    <p>{Summary}</p>
                    <div className="badge badge-outline"><PiTimerBold />Duration  {`${hours} : ${minute}`}</div>
                    <div className="badge badge-outline"><LuCalendarDays /> Publish : {ReleaseYear}</div>
                    <div className='flex gap-2 mt-3'>
                        {
                            Genre.map((tag, index) => <div className='badge shadow flex items-center justify-center' key={index}><LiaTagsSolid />{tag}</div>)
                        }
                    </div>
                    {/* <Link to='/movieDetails'>
                        <button className='btn btn-outline mt-5'>See Details</button>
                    </Link> */}
                    <div className='mt-5 flex items-center justify-between'>
                        {btn}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MovieCard;