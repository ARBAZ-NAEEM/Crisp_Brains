import React, { useEffect } from "react";
import { gsap } from "gsap";

const Banner = () => {
  useEffect(() => {
    const tl = gsap.timeline();
    tl.to(".hero_txt", {
      y: 0,
      stagger: {
        amount: 0.8,
      },
    });
	gsap.to("#test", {
		duration: 5, 
		scrambleText: "THIS IS NEW TEXT"
	  });
  }, []);
  return (
    <>
      {/* Banner Component Start Here */}
      <section className="hero_sec">
        <div className="container">
          <h1 className="banner_txt">
            <span className="hero_txt hero_txt11">C</span>
            <span className="hero_txt hero_txt11">R</span>
            <span className="hero_txt hero_txt11">I</span>
            <span className="hero_txt hero_txt11">S</span>
            <span className="hero_txt hero_txt11">P</span>
            <span className="hero_txt">B</span>
            <span className="hero_txt">R</span>
            <span className="hero_txt">A</span>
            <span className="hero_txt">I</span>
            <span className="hero_txt">N</span>
            <span className="hero_txt">S</span>
          </h1>
          <h2 className="subtitle" id="test">LET US HELP YOU <span className="hero_txt">GLOW</span>  & <span className="hero_txt">GROW</span> DIGITALLY!</h2>
        
        </div>
      </section>
      {/* Banner Component End Here */}
    </>
  );
};

export default Banner;
