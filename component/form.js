import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import 'font-awesome/css/font-awesome.min.css';
import { faUser, faCartPlus, faMoneyCheck } from '@fortawesome/fontawesome-free-solid'
import Sidebar from './student/Sidebar';
import Chart from '../try/components/chart/Chart';
import Navbar from './navbar';


const form = () => {
    return (
        <>
            <Sidebar />
            {/* <Navbar /> */}
            <div style={{ float: "right", padding: "70px", display: "flex" }}>
                <div class="card" style={{ width: "300px", borderRadius: "10px", background: "#e0e0e0", boxShadow: " 20px 20px 60px #a8a8a8,-20px -20px 60px #ffffff", padding: "20px 30px", marginRight: "20px" }}>
                    <div class="card-body">
                        <h5 class="card-title" style={{ color: "gray", fontSize: "20px", fontWeight: "400" }}>USERS</h5>
                        <h2 class="card-subtitle mb-2 text-muted" size={30} style={{ fontWeight: "300", fontSize: "45px" }}>300</h2>
                        <a href='#/'>See all users</a>
                        {/* <FontAwesomeIcon icon="fa-duotone fa-user-vneck-hair" /> */}
                        {/* <i class="fa-solid fa-user-vneck fa-beat" style={{ color: "#5f8ddd" }}></i> */}
                        {/* <FontAwesomeIcon icon={faCoffee} /> */}
                        {/* <div className='right'>sdfsdf</div> */}
                        <FontAwesomeIcon icon={faUser} size={'xl'} style={{ float: "right" }} />
                        {/* <i className='bx bx-chevron-right toggle'></i> */}
                    </div>
                </div>
                <div class="card" style={{ width: "300px", borderRadius: "10px", background: "#e0e0e0", boxShadow: " 20px 20px 60px #a8a8a8,-20px -20px 60px #ffffff", padding: "20px 30px", marginRight: "20px" }}>
                    <div class="card-body">
                        <h5 class="card-title" style={{ color: "gray", fontSize: "20px", fontWeight: "400" }}>ORDERS</h5>
                        <h2 class="card-subtitle mb-2 text-muted" style={{ fontWeight: "300", fontSize: "45px" }}>1500</h2>
                        <FontAwesomeIcon icon={faCartPlus} size={'xl'} style={{ float: "right" }} />
                        {/* <a href='#/'>view details</a> */}
                    </div>
                </div>
                <div class="card" style={{ width: "300px", borderRadius: "10px", background: "#e0e0e0", boxShadow: " 20px 20px 60px #a8a8a8,-20px -20px 60px #ffffff", padding: "20px 30px", marginRight: "20px" }}>
                    <div class="card-body">
                        <h5 class="card-title" style={{ color: "gray", fontSize: "20px", fontWeight: "400" }}>EARNINGS</h5>
                        <h2 class="card-subtitle mb-2 text-muted" style={{ fontWeight: "300", fontSize: "45px" }}>&#x20B9; 240000</h2>
                        <a href='#/'>View net earnings</a>
                        <FontAwesomeIcon icon={faMoneyCheck} size={'xl'} style={{ float: "right" }} />
                    </div>
                </div>
            </div>
            <div>
                <Chart title="Last 6 Months (Revenue)" aspect={2 / 1} />
            </div >
        </>
    )
}

export default form