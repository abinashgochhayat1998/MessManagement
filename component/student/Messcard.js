import React, { useEffect } from 'react'
import im1 from './img/img.jpg'
import './Messcard.css'
const Messcard = ({ Title, FoodCategory, Gender, LiveCount }) => {
    useEffect(() => {
        const img = document.getElementById("im1");
        // Function to increase image size
        function enlargeImg() {
            // Set image size to 1.5 times original
            img.style.transform = "scale(1.5)";
            // Animation effect
            img.style.transition = "transform 0.25s ease";
        }
        // Function to reset image size
        function resetImg() {
            // Set image size to original
            img.style.transform = "scale(1)";
            img.style.transition = "transform 0.25s ease";
        }
    });
    return (
        <>
            <div className="card">
                <div class="content">
                    <div className="imgBx">
                        <img src={im1} alt="" class="src" width="100px" />
                    </div>
                    <div class="contentBx">
                        <h3>{Title}<br /><span>{FoodCategory}</span>
                            <br /><span>{Gender}</span>
                            <br /><span>{LiveCount}</span>
                            <ul class="sci">
                                <li>
                                    <button className='abibtn' type='submit'>
                                        submit
                                    </button>
                                </li>
                            </ul>
                        </h3>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Messcard