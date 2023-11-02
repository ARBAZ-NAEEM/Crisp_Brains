import React, { useEffect, useRef } from "react";
import './Banner.style.css';

import hero from '../../../../assets/HERO.svg';
import pill1 from '../../../../assets/pill1.svg';
import pill2 from '../../../../assets/pill2.svg';

import box1 from '../../../../assets/bannerBox1.svg'
import box2 from '../../../../assets/bannerBox2.svg'
import box3 from '../../../../assets/bannerBox3.svg'

import { HiOutlineArrowRight } from 'react-icons/hi'
import { useNavigate } from "react-router-dom";

const Banner = () => {

    return (
        <section className="banner-container">
            <div className="heading-section">
                <div className="heading-container">
                    <h1 data-speed={window.innerWidth > 1024 ? "1.2" : "1"} className="animate__animated animate__fadeIn animate__slow"> CRISP BRAINS</h1>
                </div>
            </div>
        
        </section>
    )
}

export default Banner;
