import React, { useState } from 'react';
import { Rating } from '@smastrom/react-rating'

import '@smastrom/react-rating/style.css'

const MovieCard = ({ movie }) => {
      const [rating, setRating] = useState(3);
    const { Title, Poster, Genre, Duration, ReleaseYear, Rating:movieRating, Summary } = movie;
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
                    <h2 className="card-title">
                        {Title}
                        <div className="badge badge-secondary">NEW</div>
                    </h2>
                    <p>{Summary}</p>
                    <div className="card-actions justify-end">
                        <div className="badge badge-outline">
                            {movieRating}
                            <Rating
                                style={{ maxWidth: 100 }}
                                value={rating}
                                onChange={setRating}
                            />
                        </div>
                        <div className="badge badge-outline">{Duration}</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MovieCard;