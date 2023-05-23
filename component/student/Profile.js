import React from 'react'
import Sidebar from './Sidebar'
import { NavLink } from 'react-router-dom';
import "./Profile.css"
import * as mdb from 'mdb-react-ui-kit';

const Profile = () => {
    return (
        <>
            <Sidebar />
            <section class="section about-section gray-bg" id="about" style={{ width: '114%', marginLeft: '50px', marginRight: '-100px' }}>
                <div>
                    <div class="row align-items-center flex-row-reverse">
                        <div class="col-lg-6">
                            <div class="about-text go-to">
                                <h3 class="dark-color">Abinash Gochhayat</h3>
                                <h6 class="theme-color lead">M200674CA</h6>
                                <div class="row about-list">
                                    <div class="col-md-6" style={{ maxWidth: '56%' }}>
                                        <div class="media">
                                            <label>Birthday</label>
                                            <p>4th april 1998</p>
                                        </div>
                                        <div class="media">
                                            <label>Age</label>
                                            <p>24 Yr</p>
                                        </div>
                                        <div class="media">
                                            <label>Room</label>
                                            <p>509</p>
                                        </div>
                                        <div class="media">
                                            <label>Hostel</label>
                                            <p>OLD MEGA BOYS</p>
                                        </div>
                                    </div>
                                    <div class="col-md-6" style={{ maxWidth: '56%' }}>
                                        <div class="media">
                                            <label>E-mail</label>
                                            <p>abinash_m200674ca@nit.ac.in</p>
                                        </div>
                                        <div class="media">
                                            <label>Phone</label>
                                            <p>7077563854</p>
                                        </div>
                                        <div class="media">
                                            <label>Mess</label>
                                            <p>A</p>
                                        </div>
                                        {/* <div class="media">
                                            <label>Freelance</label>
                                            <p>Available</p>
                                        </div> */}
                                    </div>
                                </div>
                                <NavLink className='btn' style={{ width: '90%', padding: '16px', borderRadius: '12px', marginLeft: '-22px', marginTop: '50px' }}data-mdb-toggle="modal" data-mdb-target="#exampleModal">Edit Info</NavLink>
                            </div>
                        </div>
                        <div class="col-lg-6">
                            <div class="about-avatar">
                                <img src="https://bootdey.com/img/Content/avatar/avatar7.png" style={{ marginLeft: '115px' }} title="" alt="" />
                                <NavLink className='btn' style={{ width: '90%', padding: '16px', borderRadius: '12px', marginLeft: '17px', marginTop: '86px' }} >Edit Image</NavLink>
                            </div>
                        </div>




                        <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div class="modal-dialog" role="document">
                                <div class="modal-content">
                                    <div class="modal-header">
                                        <h5 class="modal-title" id="exampleModal">Modal title</h5>
                                        <button type="button" class="close" data-mdb-dismiss="modal" aria-label="Close">
                                            <span aria-hidden="true">&times;</span>
                                        </button>
                                    </div>
                                    <div class="modal-body">
                                        ...
                                    </div>
                                    <div class="modal-footer">
                                        <button type="button" class="btn btn-secondary" data-mdb-dismiss="modal">Close</button>
                                        <button type="button" class="btn btn-primary">Save changes</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section >
        </>
    )
}

export default Profile