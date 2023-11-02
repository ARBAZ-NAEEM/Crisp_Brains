import React, { useEffect } from "react";

import './Power.style.css';

import powerimg from '../../../../assets/power.svg'
import { HiOutlineArrowRight } from 'react-icons/hi'

const Power = () => {

    useEffect(() => {

    }, [])

    return (
        <section className="power-container">
            <div className="power-content-container">
                <p className="power-content" data-scroll data-scroll-speed={1}> At CrispBrains, our marketing team works tirelessly and brainstorm to find out a unique solution, tailor made to your needs in creating a digital brand identity for your business.</p>
            </div>
          
        </section>
    )
}

export default Power;
