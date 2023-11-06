import React, { useEffect } from "react";
import gsap from "gsap";
import $ from "jquery";

const WebsiteCursor = () => {
	useEffect(() => {
		gsap.set(".cursor_ball", { xPercent: -50, yPercent: -50 });
		let targets = gsap.utils.toArray(".cursor_ball");
		window.addEventListener("mousemove", (e) => {
			const { clientX, clientY } = e;
			gsap.to(targets, {
				duration: 0.3,
				x: e.clientX,
				y: e.clientY,
				ease: "none",
				overwrite: "auto",
				stagger: 0.035,
			});
		});

		// On Gallery text Extend Height & Width of cursor
		$(".gallery .img_box").on("mouseenter", function () {
			gsap.to(targets, {
				width: "40px",
				height: "40px",
			});
		});
		$(".gallery .img_box").on("mouseleave", function () {
			gsap.to(targets, {
				width: "20px",
				height: "20px",
			});
		});

		// On Banner text Extend Height & Width of cursor
		$(".banner_txt").on("mouseenter", function () {
			gsap.to(targets, {
				width: "200px",
				height: "200px",
			});
		});
		$(".banner_txt").on("mouseleave", function () {
			gsap.to(targets, {
				width: "20px",
				height: "20px",
			});
		});
	}, []);
	return (
		<>
			<div className="cursor_ball"></div>
		</>
	);
};

export default WebsiteCursor;
