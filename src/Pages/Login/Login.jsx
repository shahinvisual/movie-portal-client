import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useAuth from "../../Hooks/useAuth";
import { Helmet } from "react-helmet-async";
import { FcGoogle } from "react-icons/fc";

const Login = () => {
    const { loginWithGoogle, loginWithPassword } = useAuth();
    const [error, setError] = useState('')
    const location = useLocation();
    const from = location?.state?.from?.pathname || '/';
    const navigate = useNavigate();
    // Login in Google-----------------------
    const handleGoogleLogin = () => {
        loginWithGoogle()
            .then(result => {
                navigate(from, { replace: true })
            }).catch(error => {
                setError(error.message);
            })
    };
    // Email & Password login-----------------
    const handleLoginWithEmailPassword = (e) => {
        setError('')
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        loginWithPassword(email, password)
            .then(result => {
                navigate(from, { replace: true })
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Successfully Login!",
                    showConfirmButton: false,
                    timer: 1500
                });
            }).catch(error => {
                setError(error.message);
            })
    }
    return (
        <div>
            <Helmet><title>Camping Retreats || Login</title></Helmet>
            <div className="hero bg-base-200 min-h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Login now!</h1>
                        <p className="py-6">
                            Quick login grants immediate access to personalized settings, seamlessly connecting you to your private dashboard and features.
                        </p>
                    </div>
                    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                        <div className="card-body">
                            <form onSubmit={handleLoginWithEmailPassword} className="fieldset">
                                {/* Email Field------------------ */}
                                <label className="label">Email</label>
                                <input type="email" name='email' className="input" placeholder="Email" required />
                                {/* Password-URL Field------------------ */}
                                <label className="label">Password</label>
                                <input type="password" name='password' className="input" placeholder="Password" required />
                                <div><Link to='/forgotPassword' className="link link-hover">Forgot password?</Link></div>
                                <button className="btn btn-neutral mt-4">Login</button>
                                <p className="text-center mt-3">Don't have an account? <Link to='/register' className="font-medium text-sm">Register</Link></p>
                            </form>
                            <button onClick={handleGoogleLogin} className='btn btn-outline'><FcGoogle size={20}></FcGoogle>Continue with Google</button>
                            <p className='text-xl font-semibold text-error'>{error}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;