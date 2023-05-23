import React, { useEffect } from 'react'
import { NavLink } from 'react-router-dom';
import '../student/adminform.css'
// import Chart from '../../try/components/chart/Chart';
import im from '../student/img/nit.png'
import Messbill from './Messbill';



const Adminform = () => {
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
                        <NavLink to="/adminform" >
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
            <section class="home-section">
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

                <div class="home-content">
                    <div class="overview-boxes" style={{ width: '91%', marginLeft: '70px' }}>
                        <div class="box">
                            <div class="right-side">
                                <div class="box-topic">Total Order</div>
                                <div class="number">40,876</div>
                                <div class="indicator">
                                    <i class='bx bx-up-arrow-alt'></i>
                                    <span class="text">Up from yesterday</span>
                                </div>
                            </div>
                            <i class='bx bx-cart-alt cart'></i>
                        </div>
                        <div class="box">
                            <div class="right-side">
                                <div class="box-topic">Total Sales</div>
                                <div class="number">38,876</div>
                                <div class="indicator">
                                    <i class='bx bx-up-arrow-alt'></i>
                                    <span class="text">Up from yesterday</span>
                                </div>
                            </div>
                            <i class='bx bxs-cart-add cart two' ></i>
                        </div>
                        <div class="box">
                            <div class="right-side">
                                <div class="box-topic">Total Profit</div>
                                <div class="number">$12,876</div>
                                <div class="indicator">
                                    <i class='bx bx-up-arrow-alt'></i>
                                    <span class="text">Up from yesterday</span>
                                </div>
                            </div>
                            <i class='bx bx-cart cart three' ></i>
                        </div>
                        <div class="box">
                            <div class="right-side">
                                <div class="box-topic">Total Return</div>
                                <div class="number">11,086</div>
                                <div class="indicator">
                                    <i class='bx bx-down-arrow-alt down'></i>
                                    <span class="text">Down From Today</span>
                                </div>
                            </div>
                            <i class='bx bxs-cart-download cart four' ></i>
                        </div>
                    </div>

                    <div class="sales-boxes" style={{ width: '96%' }}>
                        <div class="recent-sales box" style={{ marginLeft: 'auto', width: '92%' }}>
                            <div class="title">Mess Cut Requests</div>

                            {/* <ul class="details">
                                    <li class="topic">Start Date</li>
                                    <li><a href="#">02 Jan 2021</a></li>
                                    <li><a href="#">02 Jan 2021</a></li>
                                    <li><a href="#">02 Jan 2021</a></li>
                                    <li><a href="#">02 Jan 2021</a></li>
                                    <li><a href="#">02 Jan 2021</a></li>
                                    <li><a href="#">02 Jan 2021</a></li>
                                    <li><a href="#">02 Jan 2021</a></li>
                                    <li><a href="#">02 Jan 2021</a></li>
                                    <li><a href="#">02 Jan 2021</a></li>
                                </ul>
                                <ul class="details">
                                    <li class="topic">End Date</li>
                                    <li><a href="#">02 Jan 2021</a></li>
                                    <li><a href="#">02 Jan 2021</a></li>
                                    <li><a href="#">02 Jan 2021</a></li>
                                    <li><a href="#">02 Jan 2021</a></li>
                                    <li><a href="#">02 Jan 2021</a></li>
                                    <li><a href="#">02 Jan 2021</a></li>
                                    <li><a href="#">02 Jan 2021</a></li>
                                    <li><a href="#">02 Jan 2021</a></li>
                                    <li><a href="#">02 Jan 2021</a></li>
                                </ul>
                                <ul class="details">
                                    <li class="topic">Customer</li>
                                    <li><a href="#">Alex Doe</a></li>
                                    <li><a href="#">David Mart</a></li>
                                    <li><a href="#">Roe Parter</a></li>
                                    <li><a href="#">Diana Penty</a></li>
                                    <li><a href="#">Martin Paw</a></li>
                                    <li><a href="#">Doe Alex</a></li>
                                    <li><a href="#">Aiana Lexa</a></li>
                                    <li><a href="#">Rexel Mags</a></li>
                                    <li><a href="#">Tiana Loths</a></li>
                                </ul>
                                <ul class="details">
                                    <li class="topic">Sales</li>
                                    <li><a href="#">Delivered</a></li>
                                    <li><a href="#">Pending</a></li>
                                    <li><a href="#">Returned</a></li>
                                    <li><a href="#">Delivered</a></li>
                                    <li><a href="#">Pending</a></li>
                                    <li><a href="#">Returned</a></li>
                                    <li><a href="#">Delivered</a></li>
                                    <li><a href="#">Pending</a></li>
                                    <li><a href="#">Delivered</a></li>
                                </ul>
                                <ul class="details">
                                    <li class="topic">Total</li>
                                    <li><a href="#">$204.98</a></li>
                                    <li><a href="#">$24.55</a></li>
                                    <li><a href="#">$25.88</a></li>
                                    <li><a href="#">$170.66</a></li>
                                    <li><a href="#">$56.56</a></li>
                                    <li><a href="#">$44.95</a></li>
                                    <li><a href="#">$67.33</a></li>
                                    <li><a href="#">$23.53</a></li>
                                    <li><a href="#">$46.52</a></li>
                                </ul> */}
                            <div>
                                <Messbill />
                            </div>
                        </div>
                        {/* <div>
                            <Chart title="Last 6 Months (Revenue)" aspect={2 / 1} />
                        </div> */}
                    </div>
                </div>
            </section>
        </>

    )
}
export default Adminform