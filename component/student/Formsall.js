import React, { useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon, faSun, faAddressCard, faEnvelope, faInbox, faPaperclip } from '@fortawesome/fontawesome-free-solid'
import '../student/Formsall.css';
import im1 from './img/img.jpg';


const Formsall = () => {
    useEffect(() => {
        const inputs = document.querySelectorAll(".contact-input");
        const toggleBtn = document.querySelector(".theme-toggle");
        const abin = document.querySelector(".abi");
        const allElements = document.querySelectorAll("*");

        toggleBtn.addEventListener("click", () => {
            abin.classList.toggle("dark");

            allElements.forEach((el) => {
                el.classList.add("transition");
                setTimeout(() => {
                    el.classList.remove("transition");
                }, 1000);
            });
        });

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
            <div className='abi'>
                <span className='nav-link theme-toggle'>
                    <FontAwesomeIcon icon={faSun} className='fa-solid fa-sun' />
                    <FontAwesomeIcon icon={faMoon} className='fa-soild fa-moon' />
                </span>
                <main>
                    <section className='contact'>
                        <div className='containerr'>
                            <div className='left'>
                                <div className='form-wrapper'>
                                    <div className='contact-heading'>
                                        <h1>Let's Work Together<span>.</span></h1>
                                        <p className='text'>Or reach us via: <a href='abinas@gmail.com'>abinash@gmail.com</a></p>
                                    </div>

                                    <form className='contact-form'>
                                        <div className='input-wrap'>
                                            <input className='contact-input' autoComplete='off' name='First Name' type='text' required />
                                            <label>First Name</label>
                                            <FontAwesomeIcon icon={faAddressCard} className='icon fa-soild fa-address-card' />
                                        </div>

                                        <div className='input-wrap'>
                                            <input className='contact-input' autoComplete='off' name='Last Name' type='text' required />
                                            <label>Last Name</label>
                                            <FontAwesomeIcon icon={faAddressCard} className='icon fa-soild fa-address-card' />
                                        </div>

                                        <div className='input-wrap w-100'>
                                            <input className='contact-input' autoComplete='off' name='Email' type='text' required />
                                            <label>Email</label>
                                            <FontAwesomeIcon icon={faEnvelope} className='icon fa-soild fa-envelope' />
                                        </div>

                                        <div className='input-wrap textarea w-100'>
                                            <textarea name='Message' autoComplete='off' className='contact-input' required />
                                            <label>Message</label>
                                            <FontAwesomeIcon icon={faInbox} className='icon fa-soild fa-inbox' />
                                        </div>

                                        <div className='contact-buttons'>

                                            <button className='btn upload'>
                                                <span>
                                                    <FontAwesomeIcon icon={faPaperclip} className='fa-soild fa-paperclip' />Add attachement
                                                    <input type='file' accept='image/' name='attachement' />
                                                </span>
                                            </button>
                                            <input type='submit' name="Send Message" className='btn' />
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <div className='right'>
                                <div className='image-wrapper'>
                                    <img src={im1} className='img' alt="" />
                                    <div className='wave-wrap'>
                                        <svg className='wave' viewBox="0 0 783 1536" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path id="wave" d="M236.705 1356.18C200.542 1483.72 64.5004 1528.54 1 1535V1H770.538C793.858 63.1213 797.23 196.197 624.165 231.531C407.833 275.698 274.374 331.715 450.884 568.709C627.393 805.704 510.079 815.399 347.561 939.282C185.043 1063.17 281.908 1196.74 236.705 1356.18Z" />
                                        </svg>
                                    </div>
                                    <svg className='dashed-wave' viewBox="0 0 345 877" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path id="dashed-wave" d="M0.5 876C25.6667 836.167 73.2 739.8 62 673C48 589.5 35.5 499.5 125.5 462C215.5 424.5 150 365 87 333.5C24 302 44 237.5 125.5 213.5C207 189.5 307 138.5 246 87C185 35.5 297 1 344.5 1" />
                                    </svg>

                                </div>
                            </div>
                        </div>
                    </section>
                </main>

            </div>

        </>
    )
}

export default Formsall