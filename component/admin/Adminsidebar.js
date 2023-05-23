import React, { useEffect } from 'react'
import { NavLink } from 'react-router-dom';
import '../student/adminform.css'
import im from '../student/img/nit.png'
const Adminsidebar = () => {
    // useEffect(() => {

    //     let sidebar = document.querySelector(".sidebar");
    //     let sidebarBtn = document.querySelector(".sidebarBtn");
    //     sidebarBtn.onclick = function () {
    //         sidebar.classList.toggle("active");
    //         if (sidebar.classList.contains("active")) {
    //             sidebarBtn.classList.replace("bx-menu", "bx-menu-alt-right");
    //         } else
    //             sidebarBtn.classList.replace("bx-menu-alt-right", "bx-menu");
    //     }
    // });
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
                <br />
                <ul class="nav-links">
                    <li>
                        <NavLink href="#">
                            <i class='bx bx-grid-alt' ></i>
                            <span class="links_name">Dashboard</span>
                        </NavLink>
                    </li>

                    <li>
                        <NavLink href="#" >
                            <i class='bx bx-list-ul' ></i>
                            <span class="links_name">Student list</span>
                        </NavLink>
                    </li>

                    <li>
                        <NavLink href="#">
                            <i class='bx bx-message' ></i>
                            <span class="links_name">Mess Details</span>
                        </NavLink>
                    </li>

                    <li class="log_out">
                        <NavLink href="#">
                            <i class='bx bx-log-out'></i>
                            <span class="links_name">Log out</span>
                        </NavLink>
                    </li>
                </ul>
            </div>

        </>

    )
}
export default Adminsidebar