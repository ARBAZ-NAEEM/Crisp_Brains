import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import './Sound.style.css';

import useOnScreen from "../../../../hooks/useOnScreen";

const Sound = () => {
    const ref = useRef();
    const isVisible = useOnScreen(ref);

    useEffect(() => {
        if (window.innerWidth > 768) {
            setTimeout(() => {
                window.gsap.to('.right_to_left', {
                    duration: 30, x: 800, ease: "none",
                    scrollTrigger: {
                        trigger: ".sound-container",
                        scrub: true,
                        pin: false,
                        start: "-=100%",
                        end: "+=4000"
                    }
                })
                window.gsap.to(".left_to_right", {
                    duration: 10, x: -1200, ease: "none",
                    scrollTrigger: {
                        trigger: ".sound-container",
                        scrub: true,
                        pin: false,
                        start: "-=100%",
                        end: "+=4000",
                    },
                });

                window.gsap.timeline({
                    scrollTrigger: {
                        trigger: "#sound-container",
                        start: "top",
                        end: "bottom",
                        pin: true,
                    }
                })

                window.gsap.to(".sound-footer", {
                    scrollTrigger: {
                        trigger: "#sound-container",
                        scrub: true,
                        pin: false,
                        start: "top bottom-=100",
                        end: "bottom center",
                        //markers: true
                    },
                    duration: 0.1,
                    x: -2000,
                    ease: "none"
                });

                window.gsap.to(".overlay", {
                    opacity: 0.2,
                    duration: 1,
                    scrollTrigger: {
                        trigger: ".dashboard-container",
                        start: "top bottom",
                        toggleActions: "play none none reverse"
                    },
                });

                window.gsap.to(".left_to_right", {
                    transform: "scale(0.9)",
                    duration: 0.3,
                    scrollTrigger: {
                        trigger: ".dashboard-container",
                        start: "top bottom",
                        toggleActions: "play none none reverse"
                    },
                });

                window.gsap.to(".right_to_left", {
                    transform: "scale(0.9)",
                    duration: 0.3,
                    scrollTrigger: {
                        trigger: ".dashboard-container",
                        start: "top bottom",
                        toggleActions: "play none none reverse"
                    },
                });

                window.gsap.to(".scale-down", {
                    transform: "scale(0.9)",
                    duration: 0.3,
                    scrollTrigger: {
                        trigger: ".dashboard-container",
                        start: "top bottom",
                        toggleActions: "play none none reverse"
                    },
                });

            }, 50)
        }
    }, [])

    return (
        <section className="sound-container" id="sound-container">
            <div className="overlay"></div>
            <div className="sound-header-container">
                <div className="sound-header">
                    <h1 className="right_to_left" id="right_to_left" >Why hear just <span>sounds</span></h1>
                </div>
                <div className="sound-header">
                    <h1 className="left_to_right">when you can listen to <span>music?</span></h1>
                </div>
            </div>

            <div ref={ref} className="sound-content scale-down">
               
            </div>


            {/* <img src={soundbar} alt="soundbar" /> */}
        </section>



    )
}

export default Sound;
