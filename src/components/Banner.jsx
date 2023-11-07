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
	}, []);
	return (
		<>
			{/* Banner Component Start Here */}
			<section className="hero_sec">
				<div className="container">
					<h1 className="banner_txt">
						<span className="hero_txt">C</span>
						<span className="hero_txt">R</span>
						<span className="hero_txt">I</span>
						<span className="hero_txt">S</span>
						<span className="hero_txt">P</span>
						<span className="hero_txt">&nbsp;</span>
						<span className="hero_txt">B</span>
						<span className="hero_txt">R</span>
						<span className="hero_txt">A</span>
						<span className="hero_txt">I</span>
						<span className="hero_txt">N</span>
						<span className="hero_txt">S</span>
					</h1>
					<h3 className="subtitle">LET US HELP YOU GLOW & GROW DIGITALLY!</h3>
				</div>
			</section>
			{/* Banner Component End Here */}
		</>
	);
};

export default Banner;
