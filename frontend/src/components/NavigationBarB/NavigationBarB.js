import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './NavigationBarB.css';
import { useLocation, useNavigate, useParams } from "react-router-dom";

export default function NavigationBarB() {

    const location = useLocation()
    const navigate = useNavigate()
    const params = useParams();

    //     const navigate = new useNavigate();
    //   const MyWorkouts = () => {
    //     let path = `/MyWorkouts`;
    //     navigate(path);
    //   };

    //   const Home = () => {
    //     let path = `/`;
    //     navigate(path);
    //   }

    //Log out function
    function logOut() {
        localStorage.clear();
    }

    return (
        <>
            <div className='NavigationBarB'>
                <nav class="navbar navbar-expand-lg bg-body-tertiary">
                    <div class="container-fluid">
                        <a class="navbar-brand" >FitCrib</a>
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarNavDropdown">
                            <ul class="navbar-nav">
                                <li class="nav-item">
                                    <a class="nav-link" href="#">WORKOUT PLANS</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#">EXERCISES</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#">MARKETPLACE</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#">EDUCATIONAL CONTENT</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#">NUTRITION PLANS</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#">RECIPES</a>
                                </li>

                                <li>
                                    <div class="dropdown">
                                        <a class="btn btn-secondary dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                            {location.state.id}
                                        </a>

                                        <ul class="dropdown-menu dropdown-menu-dark">
                                            <li><a className="dropdown-item" onClick={(e) => {
                                                e.preventDefault();
                                                window.location.href = `/profile/${params.id}`
                                            }}>My Profile</a></li>
                                            <li><a class="dropdown-item" href="/login">Log out</a></li>
                                        </ul>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>

            </div>
        </>
    );
}
