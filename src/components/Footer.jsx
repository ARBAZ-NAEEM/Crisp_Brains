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
						<span className="foot_txt hero_txt11">C</span>
						<span className="foot_txt hero_txt11">r</span>
						<span className="foot_txt hero_txt11">i</span>
						<span className="foot_txt hero_txt11">s</span>
						<span className="foot_txt hero_txt11">p</span>
						<span className="foot_txt">B</span>
						<span className="foot_txt">r</span>
						<span className="foot_txt">a</span>
						<span className="foot_txt">i</span>
						<span className="foot_txt">n</span>
						<span className="foot_txt">s</span>
					</h2>
				</div>
			</footer>
		</>
	);
};

export default Footer;
