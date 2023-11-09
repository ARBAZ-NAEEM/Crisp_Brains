import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);

const Banner = () => {
	useEffect(() => {
		const tl = gsap.timeline();
		tl.to(".hero_txt", {
			y: 0,
			stagger: {
				amount: 0.8,
			},
		});
		// gsap.to("#test", {
		// 	duration: 5,
		// 	scrambleText: "THIS IS NEW TEXT",
		// });

		// Fullpage Scroll
		const tlt3 = gsap.timeline({
			scrollTrigger: {
				trigger: ".second_hero_sec",
				start: "top 30%",
				end: "17% 10%",
				scrub: 1,
				// markers: true,
			},
		});

		const tlt4 = gsap.timeline({
			scrollTrigger: {
				trigger: ".contentText",
				start: "top 70%",
				end: "17% 10%",
				scrub: 1,
				// markers: true,
			},
		});

		tlt3.to(".second_hero_sec", {
			opacity: 1,
			y: "-20rem",
		});

		tlt4.to(".contentText", {
			opacity: 1,
			y: "-20rem",
		});
	}, []);
	return (
		<>
			{/* Banner Component Start Here */}
			<main className="heroMain">
				<section className="hero_sec fullpageScroll">
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
					</div>
				</section>
				<section
					className="second_hero_sec fullpageScroll"
					style={{ height: "100vh", opacity: 0 }}
				>
					<div className="container">
						<h2 className="subtitle" id="test">
							LET US HELP YOU <span className="hero_txt">GLOW</span> &{" "}
							<span className="hero_txt">GROW</span> DIGITALLY!
						</h2>
					</div>
				</section>
				<section
					className="contentText fullpageScroll"
					style={{ height: "100vh", opacity: 0 }}
				>
					<div className="container">
						<h2>
							At CrispBrains, our marketing team works tirelessly and brainstorm
							to find out a unique solution, tailor made to your needs in{" "}
							<span className="hero_txt">
								{" "}
								creating a digital brand identity for your business.{" "}
							</span>
						</h2>
					</div>
				</section>
			</main>
			{/* Banner Component End Here */}
		</>
	);
};

export default Banner;
