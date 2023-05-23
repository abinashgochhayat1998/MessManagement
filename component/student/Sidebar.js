import { useEffect } from "react";
import React from 'react'
import "./Sidebar.css"
import im from '../student/img/nit.png'
const Sidebar = () => {
    useEffect(() => {

        // const body = document.querySelector('body'),
        //         sidebar = body.querySelector('nav'),
        //         toggle = body.querySelector(".toggle"),
        //         searchBtn = body.querySelector(".search-box"),
        //     modeSwitch = body.querySelector(".toggle-switch"),
        //     modeText = body.querySelector(".mode-text");

        // toggle.addEventListener("click", () => {
        //     sidebar.classList.toggle("close");
        // })

        // searchBtn.addEventListener("click", () => {
        //     sidebar.classList.remove("close");
        // })

        // modeSwitch.addEventListener("click", () => {
        //     body.classList.toggle("Light");

        //     if (body.classList.contains("dark")) {
        //         modeText.innerText = "Light mode";
        //     } else {
        //         modeText.innerText = "Dark mode";
        //     }
        // });


        let sidebar = document.querySelector(".sidebar");
        // let sidebarBtn = document.querySelector(".sidebarBtn");
        // sidebarBtn.onclick = function () {
        //     sidebar.classList.toggle("active");
        //     if (sidebar.classList.contains("active")) {
        //         sidebarBtn.classList.replace("bx-menu", "bx-menu-alt-right");
        //     } else
        //         sidebarBtn.classList.replace("bx-menu-alt-right", "bx-menu");
        // }
    });
    return (
        <>
            {/* <nav className="sidebar">
                <header>
                    <div className="image-text">
                        <span className="image">
                            <img src={im} alt="" />
                        </span>

                        <div className="text logo-text">
                            <span className="name">NIT Calicut</span>
                            <span className="profession">Mess Management</span>
                        </div>
                    </div>

                    <i className='bx bx-chevron-right toggle'></i>
                </header>

                <div className="menu-bar">
                    <div className="menu">

                        <li className="search-box">
                            <i className='bx bx-search icon'></i>
                            <input type="text" placeholder="Search..." />
                        </li>

                        <ul className="menu-links">
                            <li className="nav-link">
                                <a href="#/">
                                    <i className='bx bx-home-alt icon' ></i>
                                    <span className="text nav-text">Dashboard</span>
                                </a>
                            </li>
                            <li className="nav-link">
                                <a href="#/">
                                    <i className='bx bx-bar-chart-alt-2 icon' ></i>
                                    <span className="text nav-text">Mess Bill</span>
                                </a>
                            </li>

                            <li className="nav-link">
                                <a href="#/">
                                    <i className='bx bx-bell icon'></i>
                                    <span className="text nav-text">Notifications</span>
                                </a>
                            </li>

                            <li className="nav-link">
                                <a href="#/">
                                    <i className='bx bx-pie-chart-alt icon' ></i>
                                    <span className="text nav-text">Mess Cut Request</span>
                                </a>
                            </li>

                            <li className="nav-link">
                                <a href="#/">
                                    <i className='bx bx-heart icon' ></i>
                                    <span className="text nav-text">Feedback</span>
                                </a>
                            </li>


                        </ul>
                    </div>

                    <div className="bottom-content">
                        <li className="">
                            <a href="#/">
                                <i className='bx bx-log-out icon' ></i>
                                <span className="text nav-text">Logout</span>
                            </a>
                        </li>

                        <li className="mode">
                            <div className="sun-moon">
                                <i className='bx bx-moon icon moon'></i>
                                <i className='bx bx-sun icon sun'></i>
                            </div>
                            <span className="mode-text text">Dark mode</span>

                            <div className="toggle-switch">
                                <span className="switch"></span>
                            </div>
                        </li>
                    </div>
                </div>

            </nav> */}



            <div class="sidebar">
                <div class="logo-details">
                    {/* <i class='bx bxl-c-plus-plus'></i> */}
                    <img src={im} style={{ width: '50px' }} alt="" />&emsp;
                    <span class="text logo-text" style={{ color: 'white' }}>
                        <span className="name">NIT Calicut</span><br />
                        <span className="profession">Mess Management</span>
                    </span>
                </div>
                <br />
                <br />

                <ul class="nav-links">
                    <li>
                        <a href="/dashboard">
                            <i className='bx bx-home-alt icon' ></i>
                            <span class="links_name">Dashboard</span>
                        </a>
                    </li>
                    <li>
                        <a href="/profile">
                            <i className='bx bx-home-alt icon' ></i>
                            <span class="links_name">Profile</span>
                        </a>
                    </li>
                    <li>
                        <a href="/enrollmess">
                        <i class="fa-sharp fa-solid fa-bowl-food"></i>
                            <span class="links_name">Mess Enroll</span>
                        </a>
                    </li>
                    <li>
                        <a href="/messbill">
                            <i className='bx bx-bar-chart-alt-2 icon' ></i>
                            <span class="links_name">Mess Bill</span>
                        </a>
                    </li>

                    <li>
                        <a href="#/">
                            <i className='bx bx-bell icon'></i>
                            <span class="links_name">Notifications</span>
                        </a>
                    </li>

                    <li>
                        <a href="/messcutrequest">
                            <i className='bx bx-pie-chart-alt icon' ></i>
                            <span class="links_name">Mess Cut Request</span>
                        </a>
                    </li>

                    <li>
                        <a href="/suggestion">
                            <i className='bx bx-heart icon' ></i>
                            <span class="links_name">Suggestion</span>
                        </a>
                    </li>
                    <li class="log_out">
                        <a href="#">
                            <i class='bx bx-log-out'></i>
                            <span class="links_name">Log out</span>
                        </a>
                    </li>
                </ul>
            </div>
        </>
    );
}

export default Sidebar