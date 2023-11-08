import React from "react";
import Banner from "../../components/Banner";
import ShowCase from "../../components/ShowCase";
import HorizontalGallery from "../../components/HorizontalGallery";
import Tbi from "../../components/Tbi";
import Footer from "../../components/Footer";
import ContentText from "../../components/ContentText";

const Index = () => {
	return (
		<>
			{/* Home Page Content Start Here */}

			{/* Banner Component Include */}
			<Banner />

			<ContentText />
			{/* Banner Component Include */}

			{/* Showcase Component Include */}
			<ShowCase />
			{/* Showcase Component Include */}

			{/* HorizontalGallery Component Include */}
			<HorizontalGallery />
			{/* HorizontalGallery Component Include */}

			{/* Tbi Grow Up Component Include */}
			<Tbi />
			{/* Tbi Grow Up Component Include */}

			{/* Footer Component Include */}
			<Footer />
			{/* Footer Component Include */}

			{/* Home Page Content End Here */}
		</>
	);
};

export default Index;
