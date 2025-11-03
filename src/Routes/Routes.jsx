import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import AllMovies from "../Pages/AllMovies/AllMovies";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import AddMovie from "../Pages/AddMovie/AddMovie";
import MovieDetails from "../components/MovieCard/MovieDetails";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
        children: [
            {
                path: '/',
                element: <Home />
            }
        ]
    },
    {
        path: 'allMovies',
        element: <AllMovies />
    },
    {
        path: 'movieDetails/:id',
        element: <MovieDetails />,
        loader: async ({ params }) => await fetch(`http://localhost:5000/movieDetails/${params.id}`)
    },
    {
        path: 'addMovie',
        element: <AddMovie />
    },
    {
        path: 'login',
        element: <Login />
    },
    {
        path: 'register',
        element: <Register />
    }
])