import PropTypes from "prop-types";
import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const SlideShow = ({ images }) => {
	const swiperRef = useRef(null);
	const [activeIndex, setActiveIndex] = useState(0); // track active slide

	const handleThumbnailClick = (index) => {
		if (swiperRef.current) {
			swiperRef.current.slideTo(index);
		}
	};

	return (
		<div className="w-full">
			<Swiper
				modules={[Navigation, Pagination]}
				spaceBetween={50}
				slidesPerView={1}
				navigation
				pagination={{ clickable: true }}
				className="bg-black"
				onSwiper={(swiper) => (swiperRef.current = swiper)}
				onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)} // update active index
			>
				{images?.map((image, index) => (
					<SwiperSlide
						key={index}
						className="!flex !items-center !justify-center !h-[360px] bg-black"
					>
						<img
							src={image}
							className="h-full object-cover"
							alt={`Slide ${index}`}
						/>
					</SwiperSlide>
				))}
			</Swiper>

			{/* Thumbnails */}
			<div className="flex justify-center gap-2 mt-4 flex-wrap p-5">
				{images?.map((image, index) => (
					<img
						key={index}
						src={image}
						onClick={() => handleThumbnailClick(index)}
						className={`w-20 h-16 object-cover cursor-pointer border-2 transition rounded-md duration-200 ${
							activeIndex === index
								? "border-redColor"
								: "border-gray"
						}`}
						alt={`Thumb ${index}`}
					/>
				))}
			</div>
		</div>
	);
};

SlideShow.propTypes = {
	images: PropTypes.array.isRequired,
};

export default SlideShow;
