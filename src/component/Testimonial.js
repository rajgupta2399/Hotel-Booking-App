import React from "react";
import { useSelector } from "react-redux";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import SkeletonContainer from "./SkeletonContainer";
import { Navigation, Keyboard, Autoplay } from "swiper/modules";
import useHotelReview from "../Hooks/useHotelReview";

const TestimonialCard = ({ item }) => (
  <div className="flex flex-col overflow-hidden shadow-xl bg-[#14181B] rounded-lg p-6 mb-5">
    <div className="flex-1">
      <div className="flex  justify-between">
        <span className="text-white">{item.date}</span>
        <span className="mt-0.5 text-sm text-gray-400 capitalize">
          {item.type}
        </span>
      </div>

      <blockquote className="flex-1 mt-8">
        <p className="text-lg leading-relaxed text-white h-full">
          {item.pros
            ? item.pros
            : item.cons
            ? item.cons
            : "Indulge in the outdoor pool, fitness centre, and the charming coffee shop that opens into a picturesque courtyard. Retreat to well-appointed rooms with flat-screen TVs, free WiFi, and complimentary bottled water."}
        </p>
      </blockquote>
    </div>
    <div className="flex items-center mt-8">
      <img
        className="flex-shrink-0 object-cover rounded-full w-8  h-8"
        src="https://upload.wikimedia.org/wikipedia/commons/9/9e/Placeholder_Person.jpg"
        alt={item.name}
      />
      <div className="ml-4">
        <p className="text-base font-bold text-white">{item.name}</p>
      </div>
    </div>
  </div>
);

const Testimonial = () => {
  useHotelReview();
  const hotelReview = useSelector((store) => store.hotelReview.hotelReview);

  return (
    <section className="py-12 bg-[#1D232A] sm:py-16 lg:py-20 border-2 rounded-lg">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="flex flex-col items-center mt-[-40px]">
          <div className="text-center">
            <p className="text-lg font-medium text-white">
              {hotelReview?.length} people have said how good our Hotel is
            </p>
            <h2 className="mt-4 text-lg font-bold text-white sm:text-4xl xl:text-3xl">
              Our happy Customers say about us
            </h2>
          </div>

          <div className="relative mt-10 md:mt-24 w-full">
            <div
              className="absolute inset-0 w-full h-full max-w-5xl mx-auto rounded-3xl opacity-30 blur-lg"
              style={{
                background:
                  "linear-gradient(90deg, #44ff9a -0.55%, #44b0ff 22.86%, #8b44ff 48.36%, #ff6644 73.33%, #ebff70 99.34%)",
              }}
            ></div>

            <div className="relative z-10 h-full">
              <Swiper
                spaceBetween={20}
                slidesPerView={3}
                breakpoints={{
                  640: { slidesPerView: 1 },
                  768: { slidesPerView: 2 },
                  1024: { slidesPerView: 3 },
                }}
                loop={true}
                autoplay={{
                  delay: 3000,
                  disableOnInteraction: false,
                }}
                modules={[Autoplay, Navigation, Keyboard]}
                className="w-full h-[350px]"
              >
                {hotelReview && hotelReview.length > 0 ? (
                  hotelReview.map((item, index) => (
                    <SwiperSlide key={item.id || index}>
                      <TestimonialCard item={item} />
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
