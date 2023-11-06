import React, { useEffect } from "react";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
	useEffect(() => {
		// Animated Text
		const ft = gsap.timeline({
			scrollTrigger: {
				trigger: ".footerLogo",
				start: "bottom bottom",
				end: "bottom bottom",
				scrub: 4,
				// markers: true,
			},
		});
		ft.to(".foot_txt", {
			y: 0,
			stagger: {
				amount: 0.8,
			},
			ease: "bounce.in",
		});
	}, []);
	return (
		<>
			<footer className="footerBottom">
				<div className="container">
					<h2 className="footerLogo">
						<span className="foot_txt">C</span>
						<span className="foot_txt">R</span>
						<span className="foot_txt">I</span>
						<span className="foot_txt">S</span>
						<span className="foot_txt">P</span>
						<span className="foot_txt">&nbsp;</span>
						<span className="foot_txt">B</span>
						<span className="foot_txt">R</span>
						<span className="foot_txt">A</span>
						<span className="foot_txt">I</span>
						<span className="foot_txt">N</span>
						<span className="foot_txt">S</span>
					</h2>
				</div>
			</footer>
		</>
	);
};

export default Footer;
