import React, { useEffect } from 'react'
import { NavLink } from 'react-router-dom';
import '../student/adminform.css'
// import Chart from '../../try/components/chart/Chart';
// import Messbill from './Messbill';
import im from '../student/img/nit.png'


const Suggestionsshow = () => {
    useEffect(() => {

        let sidebar = document.querySelector(".sidebar");
        let sidebarBtn = document.querySelector(".sidebarBtn");
        sidebarBtn.onclick = function () {
            sidebar.classList.toggle("active");
            if (sidebar.classList.contains("active")) {
                sidebarBtn.classList.replace("bx-menu", "bx-menu-alt-right");
            } else
                sidebarBtn.classList.replace("bx-menu-alt-right", "bx-menu");
        }
    });
    return (
        <>
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
                        <NavLink to="/adminform">
                            <i class='bx bx-grid-alt' ></i>
                            <span class="links_name">Dashboard</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/messimages">
                            <i class='bx bx-box' ></i>
                            <span class="links_name">Mess Images</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/studentlist">
                            <i class='bx bx-list-ul' ></i>
                            <span class="links_name">Student list</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/showsuggestions'>
                            <i class='bx bx-heart' ></i>
                            <span class="links_name">Suggestions</span>
                        </NavLink>
                    </li>

                    <li class="log_out">
                        <a href="#">
                            <i class='bx bx-log-out'></i>
                            <span class="links_name">Log out</span>
                        </a>
                    </li>
                </ul>
            </div>
            <section class="home-section" style={{ left: '-130px', width: 'calc(100% - -510px)' }}>
                <nav>
                    <div class="sidebar-button">
                        <i class='bx bx-menu sidebarBtn'></i>
                    </div>
                    <div class="search-box">
                        <input type="text" placeholder="Search..." />
                        <i class='bx bx-search' ></i>
                    </div>
                    <div class="profile-details">
                        <img src="images/profile.jpg" alt="" />
                        <span class="admin_name">Prem Shahi</span>
                        <i class='bx bx-chevron-down' ></i>
                    </div>
                </nav>

                <div class="home-content">
                    <div >
                        <div>
                            <table class="table align-middle mb-0 bg-white">
                                <thead class="bg-light">
                                    <tr>
                                        <th>Name</th>
                                        <th>Title</th>
                                        <th>Status</th>
                                        <th>Position</th>
                                        <th>Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>
                                            <div class="d-flex align-items-center">
                                                <img
                                                    src="https://mdbootstrap.com/img/new/avatars/8.jpg"
                                                    alt=""
                                                    style={{ width: '45px', height: '45px' }}
                                                    class="rounded-circle"
                                                />
                                                <div class="ms-3">
                                                    <p class="fw-bold mb-1">John Doe</p>
                                                    <p class="text-muted mb-0">john.doe@gmail.com</p>
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            <p class="fw-normal mb-1">Software engineer</p>
                                            <p class="text-muted mb-0">IT department</p>
                                        </td>
                                        <td>
                                            <span class="badge badge-success rounded-pill d-inline">Active</span>
                                        </td>
                                        <td>Senior</td>
                                        <td>
                                            <button type="button" class="btn btn-link btn-sm btn-rounded">
                                                Edit
                                            </button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div class="d-flex align-items-center">
                                                <img
                                                    src="https://mdbootstrap.com/img/new/avatars/6.jpg"
                                                    class="rounded-circle"
                                                    alt=""
                                                    style={{ width: '45px', height: '45px' }}
                                                />
                                                <div class="ms-3">
                                                    <p class="fw-bold mb-1">Alex Ray</p>
                                                    <p class="text-muted mb-0">alex.ray@gmail.com</p>
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            <p class="fw-normal mb-1">Consultant</p>
                                            <p class="text-muted mb-0">Finance</p>
                                        </td>
                                        <td>
                                            <span class="badge badge-primary rounded-pill d-inline">Onboarding</span>
                                        </td>
                                        <td>Junior</td>
                                        <td>
                                            <button
                                                type="button"
                                                class="btn btn-link btn-rounded btn-sm fw-bold"
                                                data-mdb-ripple-color="dark"
                                            >
                                                Edit
                                            </button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div class="d-flex align-items-center">
                                                <img
                                                    src="https://mdbootstrap.com/img/new/avatars/7.jpg"
                                                    class="rounded-circle"
                                                    alt=""
                                                    style={{ width: '45px', height: '45px' }}
                                                />
                                                <div class="ms-3">
                                                    <p class="fw-bold mb-1">Kate Hunington</p>
                                                    <p class="text-muted mb-0">kate.hunington@gmail.com</p>
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            <p class="fw-normal mb-1">Designer</p>
                                            <p class="text-muted mb-0">UI/UX</p>
                                        </td>
                                        <td>
                                            <span class="badge badge-warning rounded-pill d-inline">Awaiting</span>
                                        </td>
                                        <td>Senior</td>
                                        <td>
                                            <button
                                                type="button"
                                                class="btn btn-link btn-rounded btn-sm fw-bold"
                                                data-mdb-ripple-color="dark"
                                            >
                                                Edit
                                            </button>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </section >
        </>

    )
}
export default Suggestionsshow