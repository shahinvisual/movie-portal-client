import { Rating } from "@smastrom/react-rating";
import { useState } from "react";
import { Helmet } from "react-helmet-async";

const UpdateMovie = () => {
    const [rating, setRating] = useState(3);
     const handleUpdateMovie = (e) => {
            e.preventDefault();
            const form = e.target;
            const movieName = form.movieName.value;
            const photo_url = form.photo_url.value;
            const genre = form.genre.value;
            const year = parseInt(form.year.value);
            const duration = parseInt(form.duration.value);
            const summary = form.summary.value;
            const AddMovie = {
                email: user.email,
                Title: movieName,
                Poster: photo_url,
                Genre: [genre],
                ReleaseYear: year,
                Duration: duration,
                Summary: summary,
                Rating: rating
            };
            console.log(AddMovie);
            // new Movie Data added database------------
            fetch('http://localhost:5000/addMovie', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(AddMovie)
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.insertedId) {
                        Swal.fire({
                            position: "top-end",
                            icon: "success",
                            title: "Movie added successful!",
                            showConfirmButton: false,
                            timer: 1500
                        });
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
                                <input type="text" name='movieName' className="input" placeholder="movie title" required />
                                {/* Movie Poster-URL------------------ */}
                                <label className="label">Movie Poster URL</label>
                                <input type="url" name='photo_url' className="input" placeholder="poster-url" required />
                                {/* Genre Movie Category----------------- */}
                                <select name="genre" defaultValue="Movie Category" className="select">
                                    <option disabled={true}>Pick a color</option>
                                    <option>comedy</option>
                                    <option>drama</option>
                                    <option>horror</option>
                                </select>
                                {/* Release Year Movie----------------- */}
                                <select name="year" defaultValue="Release Year" className="select">
                                    <option disabled={true}>Pick a color</option>
                                    <option>2021</option>
                                    <option>2022</option>
                                    <option>2023</option>
                                    <option>2024</option>
                                </select>
                                {/* Movie Duration------------------ */}
                                <label className="label">Duration</label>
                                <input type="number" name='duration' className="input" placeholder="duration" required />
                                {/* Movie Summary------------------ */}
                                <label className="label">Summary </label>
                                <textarea className="textarea" name="summary" placeholder="summary "></textarea>
                                {/* Movie Rating-------------------- */}
                                <label className="label">Rating </label>
                                <Rating
                                    style={{ maxWidth: 120 }}
                                    value={rating}
                                    onChange={setRating}
                                />
                                <input type="submit" value="Submit Movie" className="btn btn-neutral mt-4"/>

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