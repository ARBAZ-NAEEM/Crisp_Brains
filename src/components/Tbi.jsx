import React, { useEffect } from "react";
import gsap, { Power1 } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Tbi = () => {
  useEffect(() => {
    // Second For pin
    const tb = gsap.timeline({
      scrollTrigger: {
        trigger: ".tbi_growup",
        start: "top 0%",
        end: "bottom -80%",
        scrub: 1,
        pin: true,
        // markers: true,
      },
    });
    tb.to(".ball", {
      scale: 47,
      ease: Power1.easeInOut,
    });
    tb.to(
      ".tbi_title",
      {
        scale: 1,
        ease: Power1.easeInOut,
      },
      "<"
    );
    tb.to("body", {
      backgroundImage:
        "linear-gradient( to right, #d11d58, #bd195f, #a71b64, #901e65, #792164)",
      ease: Power1.easeInOut,
    });

    // Text Slider gsap
    const ts = gsap.timeline({
      scrollTrigger: {
        trigger: ".txt_slide2",
        start: "top bottom",
        end: "bottom top",
        scrub: 1,
        // markers: true,
      },
    });
    // ts.to(".txt_slide1", {
    //   x: 70,
    //   // ease: Power1.easeInOut,
    //   duration: 0.5,
    // });
    ts.to(
      ".txt_slide2",
      {
        x: -90,
        // ease: Power1.easeInOut,
        duration: 0.5,
      },
      "<"
    );
  }, []);



  const phoneNumber = '447577842671'; // Replace with the desired phone number

  const handleClick = () => {
    const url = `https://wa.me/${phoneNumber}`;
    window.open(url, '_blank');
	
  };

  return (
    <>
      <section className="tbi_growup overflow-hidden">
        <div className="heading" style={{ height: "100vh" }}>
          <h2 className="tbi_title">
            Unlock Your Business's Potential <br /> Claim Your{" "}
            <b> FREE Digital Marketing Diagnosis</b> Today!
          </h2>
          <div className="ball"></div>
          <div className="txt-slider overflow-hidden">
  
              <h3 className="cta_btn">
                {" "}
                <button className="inside_btn" onClick={handleClick}>Get Started</button>
              </h3>

            <h3 className="txt_slide2"></h3>
          </div>
        </div>
      </section>
    </>
  );
};

export default Tbi;
