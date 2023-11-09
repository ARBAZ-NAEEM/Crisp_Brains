import React, { useEffect, useRef } from "react";
import arrowIcon from "../assets/img/arrow_icon.svg";
import ReactPlayer from "react-player";
import gsap, { Power1 } from "gsap";
import scrollTrigger from "gsap/ScrollTrigger";
import $ from "jquery";
import {
	Gal1,
	Gal2,
	Gal3,
	Gal4,
	Gal5,
	Gal6,
	Gal7,
	Gal8,
} from "../constant/Index";
gsap.registerPlugin(scrollTrigger);

const HorizontalGallery = () => {
	const galleryData = [
		{
			id: 1,
			img: Gal1,
			link: "/",
			name: "Website Development",
			color: "#000",
		},
		{
			id: 2,
			img: Gal2,
			link: "/",
			name: "SEO",
			color: "#fff",
		},
		{
			id: 3,
			img: Gal3,
			link: "/",
			name: "Social Media Marketing",
			color: "#fff",
		},
		{
			id: 4,
			img: Gal4,
			link: "/",
			name: "Pay-per-Click Advertising (PPC)",
			color: "#000",
		},
		{
			id: 5,
			img: Gal5,
			link: "/",
			name: "Content Marketing",
			color: "#000",
		},
		{
			id: 6,
			img: Gal6,
			link: "/",
			name: "Email Marketing",
			color: "#fff",
		},
	];

	// Horizontal Scrolll gsap
	useEffect(() => {
		// Second For pin
		const tlpin2 = gsap.timeline({
			scrollTrigger: {
				trigger: ".gallery",
				start: "top 0%",
				end: "top -100%",
				scrub: 1,
				pin: true,
				// markers: true,
			},
		});
		tlpin2.to(".gallery", {
			xPercent: -100,
			ease: Power1.easeInOut,
		});
	}, []);

	// View More button hover Effect
	useEffect(() => {
		$(".targetbox").on("mouseenter", function () {
			window.addEventListener("mousemove", (e) => {
				gsap.to(".detailBtn", {
					x: e.offsetX / 2,
					y: e.offsetY / 2,
					stagger: 0.035,
				});
			});
		});
		$(".targetbox").on("mouseleave", function () {
			window.removeEventListener("mousemove", (e) => {});
		});
	}, []);
	return (
		<>
			<section className="projects_sec py-5 overflow-hidden">
				<div className="title">
					<h2>
						<span>A GLIMPSE AT OUR SERVICES</span>
					</h2>
				</div>
				<div className="gallery">
					{galleryData?.map((items, index) => {
						return (
							<>
								{items?.img.split(".").pop() === "jpg" ? (
									<>
										<div
											className={`galleryBox scroll_${items?.id}`}
											key={index}
										>
											{/* <div className="img_box position-relative targetbox">
												<img
													src={items?.img}
													alt="gal1"
													className="img-fluid"
												/>
												<div className="button-group detailBtn">
													<button className="link_btn">
														<span
															className="txt"
															style={{ color: items?.color }}
														>
															View
														</span>
														<span className="icon">
															<img
																src={arrowIcon}
																style={{
																	filter:
																		items?.color === "#fff"
																			? "brightness(0) invert(1)"
																			: "",
																}}
																alt="arrow_icon"
															/>
														</span>
													</button>
												</div>
											</div> */}
											<div className="detail_box d-flex align-items-center justify-content-between">
												<h2 className="name_of_scape">{items?.name}</h2>
											</div>
										</div>
									</>
								) : (
									<>
										<div className={`galleryBox scroll_${items?.id}`}>
											{/* <div className="img_box position-relative targetbox">
												<ReactPlayer
													width="100%"
													height="250px"
													url={items?.img}
													loop={true}
													playing={true}
													muted={true}
												/>
												<div className="button-group detailBtn">
													<button className="link_btn">
														<span
															className="txt"
															style={{ color: items?.color }}
														>
															View
														</span>
														<span className="icon">
															<img
																src={arrowIcon}
																alt="arrow_icon"
																style={{
																	filter:
																		items?.color === "#fff"
																			? "brightness(0) invert(1)"
																			: "",
																}}
															/>
														</span>
													</button>
												</div>
											</div> */}
											<div className="detail_box d-flex align-items-center justify-content-between">
												<h2 className="name_of_scape">{items?.name}</h2>
												{/* <h5 className="type">{items?.type}</h5> */}
											</div>
										</div>
									</>
								)}
							</>
						);
					})}
				</div>
			</section>
		</>
	);
};

export default HorizontalGallery;
