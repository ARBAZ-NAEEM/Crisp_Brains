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
			"<",
		);
		tb.to("body", {
			backgroundColor: "#000",
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
		ts.to(".txt_slide1", {
			x: 70,
			// ease: Power1.easeInOut,
			duration: 0.5,
		});
		ts.to(
			".txt_slide2",
			{
				x: -90,
				// ease: Power1.easeInOut,
				duration: 0.5,
			},
			"<",
		);
	}, []);
	return (
		<>
			<section className="tbi_growup overflow-hidden">
				<div className="heading" style={{ height: "100vh" }}>
					<h2 className="tbi_title">TBI</h2>
					<div className="ball"></div>
				</div>
			</section>
			<div className="txt-slider overflow-hidden">
				<h3 className="txt_slide1">
					THIS SITE WAS DESIGNED BY FAVORIT X FRAME
				</h3>
				<h3 className="txt_slide2">EXCLUSIVE FOR THE BRAND IDENTITY.</h3>
			</div>
		</>
	);
};

export default Tbi;
