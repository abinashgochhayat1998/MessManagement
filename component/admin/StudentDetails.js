import React, { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import '../student/adminform.css'
import im from '../student/img/nit.png'
import Messbill from '../student/Messbill';
import * as mdb from 'mdb-react-ui-kit';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faPhone, faAddressCard, faEnvelope, faHome,  faUserGraduate, faCalendar, faImage } from '@fortawesome/fontawesome-free-solid'
import StudentDetailsdata from './StudentDetailsdata';
const StudentDetails = () => {
    const [fname, setfname] = useState('');
    const [lname, setlname] = useState('');
    const [roll, setroll] = useState('');
    const [room, setroomnumber] = useState('');
    const [phone, setphone] = useState('');
    const [hostel, sethostel] = useState('');
    const [batch, setbatch] = useState('');
    const [year, setyear] = useState('');
    const [birthday, setbirthday] = useState('');
    const [email, setemail] = useState('');
    function sendinput() {
        console.log(fname + " " + lname + " " + roll);
        // alert("hi cheta");
    }

    useEffect(() => {
        const inputs = document.querySelectorAll(".contact-input");


        inputs.forEach((ipt) => {
            ipt.addEventListener("focus", () => {
                ipt.parentNode.classList.add("focus");
                ipt.parentNode.classList.add("not-empty");
            });
        });
        inputs.forEach((ipt) => {
            ipt.addEventListener("blur", () => {
                if (ipt.value === "") {
                    ipt.parentNode.classList.remove("not-empty");
                }
                ipt.parentNode.classList.remove("focus");
            });
        });
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
                        <NavLink to="/admindashboard">
                            <i class='bx bx-grid-alt' ></i>
                            <span class="links_name">Dashboard</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/messdetails">
                            <i class='bx bx-box' ></i>
                            <span class="links_name">Mess Details</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/studentdetails" class="active">
                            <i class='bx bx-list-ul' ></i>
                            <span class="links_name">Student Details</span>
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
            <NavLink className='btn' style={{ width: '60%', padding: '16px', borderRadius: '12px', float: 'right' }} data-mdb-toggle="modal" data-mdb-target="#exampleModal">Add Student</NavLink>
            <div class="recent-sales box" style={{ marginLeft: '-42px', width: '135%' }}>
                <div class="title">Student Lists</div>
                <div>
                    {/* <table class="table align-middle mb-0 bg-white">
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
                    </table> */}

                    <StudentDetailsdata />
                </div>
            </div>
            <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModal">Student Details</h5>
                            <button type="button" class="close" data-mdb-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">
                            <form className='contact-form' style={{ padding: '0px', marginTop: '2px' }}>
                                <div className='input-wrap'>
                                    <input className='contact-input' onChange={(e) => setfname(e.target.value)} autoComplete='off' name='First Name' type='text' required />
                                    <label>First Name</label>
                                    <FontAwesomeIcon icon={faAddressCard} className='icon fa-soild fa-address-card' />
                                </div>

                                <div className='input-wrap'>
                                    <input className='contact-input' onChange={(e) => setlname(e.target.value)} autoComplete='off' name='Last Name' type='text' required />
                                    <label>Last Name</label>
                                    <FontAwesomeIcon icon={faAddressCard} className='icon fa-soild fa-address-card' />
                                </div>
                                <div className='input-wrap'>
                                    <input className='contact-input' onChange={(e) => setroomnumber(e.target.value)} autoComplete='off' name='Room Number' type='text' required />
                                    <label>Room Number</label>
                                    <FontAwesomeIcon icon={faHome} className='icon fa-soild fa-address-card' />
                                </div>

                                <div className='input-wrap'>
                                    <input className='contact-input' onChange={(e) => sethostel(e.target.value)} autoComplete='off' name='Last Name' type='text' required />
                                    <label>Hostel</label>
                                    <FontAwesomeIcon icon={faHome} className='icon fa-soild fa-address-card' />
                                </div>

                                <div className='input-wrap'>
                                    <input className='contact-input' onChange={(e) => setbatch(e.target.value)} autoComplete='off' name='First Name' type='text' required />
                                    <label>Batch</label>
                                    <FontAwesomeIcon icon={faUserGraduate} className='icon fa-soild fa-address-card' />
                                </div>

                                <div className='input-wrap'>
                                    <input className='contact-input' onChange={(e) => setyear(e.target.value)} autoComplete='off' name='Last Name' type='text' required />
                                    <label>Year</label>
                                    <FontAwesomeIcon icon={faCalendar} className='icon fa-soild fa-address-card' />
                                </div>

                                <div className='input-wrap w-100'>
                                    <input className='contact-input' onChange={(e) => setroll(e.target.value)} autoComplete='off' name='roll' type='text' required />
                                    <label>Roll Number</label>
                                    <FontAwesomeIcon icon={faEnvelope} className='icon fa-soild fa-envelope' />
                                </div>
                                <div className='input-wrap w-100'>
                                    <input className='contact-input' onChange={(e) => setemail(e.target.value)} autoComplete='off' name='roll' type='text' required />
                                    <label>Email</label>
                                    <FontAwesomeIcon icon={faEnvelope} className='icon fa-soild fa-envelope' />
                                </div>
                                <div className='input-wrap w-100'>
                                    <input className='contact-input' onChange={(e) => setphone(e.target.value)} autoComplete='off' name='roll' type='text' required />
                                    <label>Phone Number</label>
                                    <FontAwesomeIcon icon={faPhone} className='icon fa-soild fa-envelope' />
                                    {/* <FontAwesomeIcon icon={faEnvelope} className='icon fa-soild fa-envelope' /> */}
                                </div>
                                <div className='input-wrap w-100'>
                                    <input className='contact-input' onChange={(e) => setbirthday(e.target.value)} autoComplete='off' name='roll' type='file' required />

                                    <FontAwesomeIcon icon={faImage} className='icon fa-soild fa-envelope' />
                                </div>


                            </form>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-mdb-dismiss="modal">Close</button>
                            <button type="button" class="btn btn-primary">Add Student</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default StudentDetails