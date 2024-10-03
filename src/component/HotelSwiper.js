import React from "react";
import { useSelector } from "react-redux";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import SkeletonContainer from "./SkeletonContainer";
import { Navigation, Pagination, Keyboard, Autoplay } from "swiper/modules";
import HotelCard from "./HotelCard";

export default function HotelSwiper() {
  const Country = useSelector((store) => store.country.CountryHotelCode);

  return (
    <div className="w-full">
      <Swiper
        spaceBetween={20} // Adjust spacing between slides
        slidesPerView={1} // Default to 1 slide for mobile (base case)
        breakpoints={{
          640: {
            slidesPerView: 1, // Small screens (mobile), 1 slide per view
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 2, // Medium screens (tablets), 2 slides per view
            spaceBetween: 15,
          },
          1024: {
            slidesPerView: 3, // Large screens (desktop), 3 slides per view
            spaceBetween: 20,
          },
        }}
        loop={true}
        mousewheel={true}
        keyboard={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, Navigation, Keyboard]}
      >
        {Country && Country.length > 0 ? (
          Country.slice(0, 15).map((item, index) => (
            <SwiperSlide key={index}>
              <div key={item.id || index} className="shadow-md">
                <HotelCard item={item} />
              </div>
            </SwiperSlide>
          ))
        ) : (
          <div className="flex flex-wrap gap-10 mb-6">
            <SkeletonContainer />
            <SkeletonContainer />
            <SkeletonContainer />
          </div>
        )}
      </Swiper>
    </div>
  );
}
