import { Rating } from "@smastrom/react-rating";
import { useState } from "react";
import { Helmet } from "react-helmet-async";
import useAxios from "../../Hooks/useAxios";
import { useLoaderData, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateMovie = () => {
    const navigate = useNavigate();
    const MovieId = useLoaderData();
    console.log(MovieId._id);
    const [rating, setRating] = useState(3);
    const AllMovieData = useAxios();
    const {_id, Title, Poster, Genre, Duration, ReleaseYear,  Summary } = MovieId;
    console.log(MovieId);
    const handleUpdateMovie = (e) => {
        e.preventDefault();
        const form = e.target;
        const movieName = form.movieName.value;
        const photo_url = form.photo_url.value;
        const genre = form.genre.value;
        const year = parseInt(form.year.value);
        const duration = parseInt(form.duration.value);
        const summary = form.summary.value;
        const UpdateMovie = {
            Title: movieName,
            Poster: photo_url,
            Genre: [genre],
            ReleaseYear: year,
            Duration: duration,
            Summary: summary,
            Rating: rating
        };
        // Update Movie Data added database------------
        AllMovieData.put(`/movieUpdate/${_id}`, UpdateMovie )
            .then(res => {
                if (res.data.modifiedCount > 0) {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Movie Update successful!",
                        showConfirmButton: false,
                        timer: 1500
                    });
                    navigate('/allMovies')
                }
            })
            .catch(error => console.log("Error", error))
    }
    return (
        <div>
            <Helmet><title>Camping Retreats || Update Movie</title></Helmet>
            <div className="hero bg-base-200 min-h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Updated Movie!</h1>
                        <p className="py-6">
                            Sign up today to become a member of our exclusive community. Enjoy personalized content and member-only benefits.
                        </p>
                    </div>
                    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                        <div className="card-body">
                            <form onSubmit={handleUpdateMovie} className="fieldset">
                                {/* Movie Title Field------------------ */}
                                <label className="label">Movie Title</label>
                                <input defaultValue={Title} type="text" name='movieName' className="input" placeholder="movie title" required />
                                {/* Movie Poster-URL------------------ */}
                                <label className="label">Movie Poster URL</label>
                                <input defaultValue={Poster} type="url" name='photo_url' className="input" placeholder="poster-url" required />
                                {/* Genre Movie Category----------------- */}
                                <select name="genre" defaultValue={Genre?.[0] || ""} className="select">
                                    <option disabled={true}>Pick a color</option>
                                    <option>comedy</option>
                                    <option>drama</option>
                                    <option>horror</option>
                                </select>
                                {/* Release Year Movie----------------- */}
                                <select name="year" defaultValue={ReleaseYear || ""} className="select">
                                    <option disabled={true}>Pick a color</option>
                                    <option>2021</option>
                                    <option>2022</option>
                                    <option>2023</option>
                                    <option>2024</option>
                                </select>
                                {/* Movie Duration------------------ */}
                                <label className="label">Duration</label>
                                <input defaultValue={Duration} type="number" name='duration' className="input" placeholder="duration" required />
                                {/* Movie Summary------------------ */}
                                <label className="label">Summary </label>
                                <textarea defaultValue={Summary} className="textarea" name="summary" placeholder="summary "></textarea>
                                {/* Movie Rating-------------------- */}
                                <label className="label">Rating </label>
                                <Rating
                                    style={{ maxWidth: 120 }}
                                    value={rating}
                                    onChange={setRating}
                                />
                                <input type="submit" value="Update Movie" className="btn btn-neutral mt-4" />

                            </form>
                            <p className='text-xl font-semibold text-error'>{ }</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UpdateMovie;