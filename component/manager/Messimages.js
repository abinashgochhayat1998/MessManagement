import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom';
import '../student/adminform.css'
import im from '../student/img/nit.png'


const Messimages = () => {

    const [image, setImage] = useState("");
    function convertTobase64(e) {
        console.log(e);
        var reader = new FileReader();
        reader.readAsDataURL(e.target.files[0]);
        reader.onload = () => {
            console.log(reader.result);
            setImage(reader.result);
        };
        reader.onerror = error => {
            console.log("Error:", error);
        }
    }
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
            <section class="home-section">
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
                    <div style={{ marginLeft: '38%' }}>
                        <input accept='image/' type='file' onChange={convertTobase64} />
                        {image === "" || image === null ? "" : <img width={100} height={100} src={image} />}
                        <NavLink className='btn btn-primary'>Add Image</NavLink>
                    </div>
                    <div style={{ display: 'flex', marginLeft: '22%', flexWrap: 'wrap' }}>
                        <div class="card" style={{ width: '469px' }}>
                            <img src="https://mdbcdn.b-cdn.net/img/new/standard/city/041.webp" class="card-img-top" alt="Hollywood Sign on The Hill" />
                            <NavLink className='btn' style={{ width: '98%', padding: '16px', borderRadius: '12px' }}>Delete Image</NavLink>
                        </div>
                        <div class="card" style={{ width: '469px' }}>
                            <img src="https://mdbcdn.b-cdn.net/img/new/standard/city/042.webp" class="card-img-top" alt="Palm Springs Road" />
                            <NavLink className='btn' style={{ width: '98%', padding: '16px', borderRadius: '12px' }}>Delete Image</NavLink>
                        </div>
                        <div class="card" style={{ width: '469px' }}>
                            <img src="https://mdbcdn.b-cdn.net/img/new/standard/city/043.webp" class="card-img-top" alt="Los Angeles Skyscrapers" />
                            <NavLink className='btn' style={{ width: '98%', padding: '16px', borderRadius: '12px' }}>Delete Image</NavLink>
                        </div>
                        <div class="card" style={{ width: '469px' }}>
                            <img src="https://mdbcdn.b-cdn.net/img/new/standard/city/044.webp" class="card-img-top" alt="Skyscrapers" />
                            <NavLink className='btn' style={{ width: '98%', padding: '16px', borderRadius: '12px' }}>Delete Image</NavLink>
                        </div>
                    </div>
                </div>
            </section >
        </>

    )
}
export default Messimages