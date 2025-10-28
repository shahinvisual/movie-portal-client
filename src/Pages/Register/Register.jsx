import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import Swal from 'sweetalert2';
import { Helmet } from 'react-helmet-async';
import { FcGoogle } from 'react-icons/fc';

const Register = () => {
    const { loginWithGoogle, userRegister, userProfileUpdate } = useAuth();
    const [error, setError] = useState('')
    const navigate = useNavigate();
    // Login With Google------------------
    const handleGoogleLogin = () => {
        loginWithGoogle()
            .then(result => {
                navigate('/')
            }).catch(error => {
                setError(error.message);
            })
    };

    // New User Register-----------------
    const handleLoginWithEmailPassword = (e) => {
        setError("");
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const photo_url = form.photo_url.value;
        const password = form.password.value;

        const passValidation = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;
        if (!passValidation.test(password)) {
            return setError("Password must be at least 6 characters long and include uppercase, lowercase, number, and special character.")
        }
        userRegister(email, password)
            .then(res => {
                userProfileUpdate(name, photo_url)
                    .then(res => {
                        Swal.fire({
                            position: "top-end",
                            icon: "success",
                            title: "Updated Profile!",
                            showConfirmButton: false,
                            timer: 1500
                        });
                    }).catch(error => {
                        setError(error.message)
                    })
            })
            .then(result => {
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Successfully Registration!",
                    showConfirmButton: false,
                    timer: 1500
                });
                navigate('/')
            }).catch(error => {
                setError(error.message);
            })


    }
    return (
        <div>
            <Helmet><title>Camping Retreats || Register Account</title></Helmet>
            <div className="hero bg-base-200 min-h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Register now!</h1>
                        <p className="py-6">
                            Sign up today to become a member of our exclusive community. Enjoy personalized content and member-only benefits.
                        </p>
                    </div>
                    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                        <div className="card-body">
                            <form onSubmit={handleLoginWithEmailPassword} className="fieldset">
                                {/* Name Field------------------ */}
                                <label className="label">Name</label>
                                <input type="text" name='name' className="input" placeholder="Name" required />
                                {/* Email Field------------------ */}
                                <label className="label">Email</label>
                                <input type="email" name='email' className="input" placeholder="Email" required />
                                {/* Photo-URL Field------------------ */}
                                <label className="label">Photo-URL</label>
                                <input type="text" name='photo_url' className="input" placeholder="photo-url" required />
                                {/* Password-URL Field------------------ */}
                                <label className="label">Password</label>
                                <input type="password" name='password' className="input" placeholder="Password" required />
                                <div><a className="link link-hover">Forgot password?</a></div>
                                <button className="btn btn-neutral mt-4">Register</button>
                                <p className="text-center mt-3">Already have an account? <Link to='/login' className="font-medium text-sm">Login</Link></p>
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

export default Register;