import "./App.css";
import SwiperCore, { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import { useState, useEffect } from "react";
import dislike from "./icons/dislike.png";
import like from "./icons/like.png";
import likeFill from "./icons/like-fill.png";
import dislikeFill from "./icons/dislike-fill.png";

SwiperCore.use([Navigation]);

const slides = [
  {
    name: "slide 1",
    link:
      "https://www.har.com/homedetail/2-longfellow-ln-houston-tx-77005/3071803",
  },
  {
    name: "slide 2",
    link:
      "https://www.luxuryestate.com/p97938184-luxury-home-for-sale-chapel-hill",
  },
  {
    name: "slide 3",
    link:
      "https://www.aplaceinthesun.com/property/details/ap2638735/4-bed-villa-for-sale-in-clermont-lake-county-united-states",
  },
  {
    name: "slide 4",
    link: "https://search.savills.com/property-detail/us387476248062",
  },
  {
    name: "slide 5",
    link:
      "https://www.sothebysrealty.com/eng/sales/detail/180-l-1187-4dvyce/27930-pacific-coast-highway-malibu-ca-90265",
  },
];

function App() {
  return (
    <>
      <Swiper
        className={"swiper-container"}
        spaceBetween={0}
        slidesPerView={1}
        navigation
      >
        <div className="next" />
        <div className="prev" />
        {slides.map((slide) => (
          <SwiperSlide className={"swiper-slide"}>
            <RateEstate />
            <iframe
              title={slide.name}
              src={slide.link}
              frameborder="no"
              height="100%"
              width="100%"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}

function RateEstate() {
  const [isLiked, setLiked] = useState("not rated");
  const setRating = (btn) => {
    if (btn === "like") {
      setLiked(true);
    } else {
      setLiked(false);
    }
  };

  return (
    <div className={"rate-container"}>
      <h2 className={"rate-heading"}>Rate this estate</h2>
      <div className={"likes"}>
        <img
          onClick={() => setRating("like")}
          src={isLiked !== "not rated" && isLiked ? likeFill : like}
          alt="like"
          className={"rate-icon"}
        />
        <img
          onClick={() => setRating("dislike")}
          src={isLiked !== "not rated" && !isLiked ? dislikeFill : dislike}
          alt="dislike"
          className={"rate-icon"}
        />
      </div>
    </div>
  );
}

export default App;
