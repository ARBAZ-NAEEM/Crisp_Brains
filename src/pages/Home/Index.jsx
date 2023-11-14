import React from "react";
import Banner from "../../components/Banner";
import ShowCase from "../../components/ShowCase";
import HorizontalGallery from "../../components/HorizontalGallery";
import Tbi from "../../components/Tbi";
import Footer from "../../components/Footer";
import ReviewSection from "../../components/ReviewSection";
import WhatsAppButton from "../../components/WhatsAppButton";

const Index = () => {
	return (
		<>
			{/* Home Page Content Start Here */}

			{/* Banner Component Include */}
			<Banner />
			{/* Banner Component Include */}

			{/* Showcase Component Include */}
			<ShowCase />
			{/* Showcase Component Include */}

			{/* HorizontalGallery Component Include */}
			<HorizontalGallery />
			{/* HorizontalGallery Component Include */}

			<ReviewSection />

			{/* Tbi Grow Up Component Include */}
			<Tbi />

			<WhatsAppButton />
			{/* Tbi Grow Up Component Include */}

			{/* Footer Component Include */}
			<Footer />
			{/* Footer Component Include */}

			{/* Home Page Content End Here */}
		</>
	);
};

export default Index;
