import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ReactPlayer from "react-player";
import { backVideo } from "../constant/Index";

gsap.registerPlugin(ScrollTrigger);

const ShowCase = () => {
	// ScrollTrigger Video & Text
	useEffect(() => {
		gsap.set(".scrollTxt2", { x: "200%", opacity: 0 });
		gsap.set(".scrollTxt1", { x: "-200%", opacity: 0 });
		const tlt = gsap.timeline({
			scrollTrigger: {
				trigger: ".main_animation",
				start: "top 70%",
				end: "top center",
				scrub: 4,
				// markers: true,
			},
		});

		// Second For pin
		const tlpin = gsap.timeline({
			scrollTrigger: {
				trigger: ".bg-img",
				start: "top 25%",
				end: "top -100%",
				scrub: 1,
				pin: true,
				// markers: true,
			},
		});

		// For Text
		const tltxt = gsap.timeline({
			scrollTrigger: {
				trigger: ".main_animation",
				start: "top 25%",
				end: "top -100%",
				scrub: 1,
				// markers: true,
			},
		});
		tlt.to(".bg-img", {
			scale: 0.7,
			duration: 0.6,
		});

		tlpin.to(
			".bg-img",
			{
				scale: 1.3,
			},
			"<",
		);
		tltxt.to(
			".scrollTxt1",
			{
				x: "0%",
				opacity: 1,
			},
			"<",
		);
		tltxt.to(
			".scrollTxt2",
			{
				x: "0%",
				opacity: 1,
			},
			"<",
		);
	}, []);
	return (
		<>
			<section className="scroll position-relative overflow-hidden">
				<div className="main_animation">
					<div className="bg-img">
						<ReactPlayer
							width="100%"
							height="100%"
							url={backVideo}
							loop={true}
							playing={true}
							muted={true}
						/>
						<div className="txtwrapper">
							<h1 className="scrollTxt1">Building Brands</h1>
							<h1 className="scrollTxt2">&nbsp;That Last!</h1>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default ShowCase;
