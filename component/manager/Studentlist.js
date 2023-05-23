import React, { useEffect } from 'react'
import { NavLink } from 'react-router-dom';
import '../student/adminform.css'
// import Chart from '../../try/components/chart/Chart';
import Messbill from '../student/Messbill';
import im from '../student/img/nit.png'


const Studentlist = () => {
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
                    <div class="sales-boxes" style={{ width: '91%' }}>
                        <div class="recent-sales box" style={{ marginLeft: 'auto', width: '88%' }}>
                            <div class="title">Student Lists</div>
                            <div>
                                <Messbill />
                            </div>
                        </div>
                    </div>
                </div>
            </section >
        </>

    )
}
export default Studentlist