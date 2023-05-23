import React, { useEffect } from 'react'
import { NavLink } from 'react-router-dom';
import '../student/adminform.css'
// import Chart from '../../try/components/chart/Chart';
const Sidebarmanager = () => {
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
                    <i class='bx bxl-c-plus-plus'></i>
                    <span class="logo_name">CodingLab</span>
                </div>
                <ul class="nav-links">
                    <li>
                        <a href="#" class="active">
                            <i class='bx bx-grid-alt' ></i>
                            <span class="links_name">Dashboard</span>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <i class='bx bx-box' ></i>
                            <span class="links_name">Menu</span>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <i class='bx bx-list-ul' ></i>
                            <span class="links_name">Student list</span>
                        </a>
                    </li>

                    <li>
                        <a href="#">
                            <i class='bx bx-user' ></i>
                            <span class="links_name">Team</span>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <i class='bx bx-message' ></i>
                            <span class="links_name">Mess Cut Requests</span>
                        </a>
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
            <div class="home-section">
                <nav>
                    <div class="sidebar-button">
                        <i class='bx bx-menu sidebarBtn'></i>
                        {/* <span class="dashboard">Dashboard</span> */}
                    </div>
                    <div class="search-box">
                        <input type="text" placeholder="Search..." />
                        <i class='bx bx-search' ></i>
                    </div>
                    <div class="profile-details">
                        {/* <!--<img src="images/profile.jpg" alt="">--> */}
                        <span class="admin_name">Prem Shahi</span>
                        <i class='bx bx-chevron-down' ></i>
                    </div>
                </nav>
            </div>
        </>

    )
}
export default Sidebarmanager