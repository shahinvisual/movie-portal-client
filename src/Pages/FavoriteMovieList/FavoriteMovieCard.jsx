import React from 'react';

const FavoriteMovieCard = ({ movieCard }) => {
    const { Title, Poster, Genre, Duration, ReleaseYear, Rating, Summary } = movieCard;
    return (
        <div className="card card-side bg-base-100 shadow-sm">
            <figure>
                <img
                    src={Poster}
                    alt="Movie" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{Title}</h2>
                <p>Click the button to watch on Jetflix app.</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Watch</button>
                </div>
            </div>
        </div>
    );
};

export default FavoriteMovieCard;