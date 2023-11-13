import React, { useEffect } from "react";
import review from "../assets/img/golden-star.jpg";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);

const ReviewSection = () => {
  useEffect(() => {
    const tlt1 = gsap.timeline({
      scrollTrigger: {
        trigger: ".contentTextss",
        start: "top 20%",
        end: "17% 10%",
        scrub: 1,
        // markers: true,
      },
    });

    const tlt2 = gsap.timeline({
      scrollTrigger: {
        trigger: ".contentText1",
        start: "top 90%",
        end: "17% 10%",
        scrub: 1,
        // markers: true,
      },
    });

    const tlt3 = gsap.timeline({
      scrollTrigger: {
        trigger: ".contentText2",
        start: "top 80%",
        end: "17% 10%",
        scrub: 1,
        // markers: true,
      },
    });

    const tlt4 = gsap.timeline({
      scrollTrigger: {
        trigger: ".contentText3",
        start: "top 90%",
        end: "17% 10%",
        scrub: 1,
        // markers: true,
      },
    });

    tlt1.to(".contentTextss", {
      opacity: 1,
      y: "",
    });

    tlt2.to(".contentText1", {
      opacity: 1,
      y: "",
    });

    tlt3.to(".contentText2", {
      opacity: 1,
      y: "",
    });

    tlt4.to(".contentText3", {
      opacity: 1,
      y: "",
    });
  }, []);

  return (
    <div>
      <section>
        <div className="container">
          <div className="main-heading">
            <div
              className="contentTextss fullpageScroll"
              style={{ height: "30vh", opacity: 0 }}
            >
              <div>
                <h2>A Collection of Happy Endings</h2>
              </div>
            </div>
          </div>

          <div className="review-section">
            <dir
              className="contentText1 fullpageScroll"
              style={{ height: "50vh", opacity: 0 }}
            >
              <div className="first-review">
                <h3>
                  {" "}
                  <span className="color_gradient"> CrispBrains </span> delivered when it mattered most. Worked with us as
                  <span className="color_gradient"> one team </span> and helped make our project a success. <span className="color_gradient">Two thumbs up!</span> 
                </h3>
                <img style={{height:"90px"}} src={review} alt="" />
                <h3>
                  <b>LogiPoint - KSA</b>
                </h3>
              </div>
            </dir>

            <div
              className="contentText2 fullpageScroll"
              style={{ height: "60vh", opacity: 0 }}
            >
              <div className="second-review">
                <h3>
                  {" "}
                  I'm amazed how quickly  <span className="color_gradient"> CrispBrains </span> created a  <span className="color_gradient">fantastic</span>  logo
                  for my firm. I'm going to hire them for my website now!  <span className="color_gradient">Super
                  super!</span> 
                </h3>
                <img style={{height:"90px"}} src={review} alt="" />
                <h3>
                  <b>LedgersPRO - USA</b>
                </h3>
              </div>
            </div>

            <div
              className="contentText3 fullpageScroll"
              style={{ height: "70vh", opacity: 0 }}
            >
              <div className="third-review">
                <h3>
                  {" "}
                  Thank you very much for realization this project. We are  <span className="color_gradient"> very
                  satisfied </span> with the result of the project. The communication
                  went very well. The final project was sent on time.  <span className="color_gradient"> We
                  recommend CrispBrains to other clients.</span>
                </h3>
                <img style={{height:"90px"}} src={review} alt="" />
                <h3>
                  <b>Dr. Mathias Kunze - Switzerland</b>
                </h3>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ReviewSection;
