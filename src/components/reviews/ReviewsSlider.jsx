// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/scss";
import "swiper/scss/pagination";

import { Pagination } from "swiper";

import rewiew1 from "../../assets/review1.png";
import rewiew2 from "../../assets/review2.png";
import rewiew3 from "../../assets/review3.png";
import rewiew4 from "../../assets/review4.png";
import rewiew5 from "../../assets/review5.png";
import rewiew6 from "../../assets/review6.png";

export default function ReviewsSlider() {
  return (
    <>
      <Swiper
        slidesPerView={"auto"}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img className="swiper-img" src={rewiew1} alt="review" />
          <div className="swiper-block">
            <h2 className="swiper-header">Victoria Dobrzhanska</h2>
            <p className="swiper-text">
              I love this chocolate bar. Perfect combination of light crispy
              wafer, covered in a thin layer chocolate.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img className="swiper-img" src={rewiew2} alt="review" />
          <div className="swiper-block">
            <h2 className="swiper-header">Nazar Babenko</h2>
            <p className="swiper-text">
              This chocolate confection is a delight! A delight! The wafer is
              light and crisp, the hazelnut cream is smooth, and the chocolate
              is good.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img className="swiper-img" src={rewiew3} alt="review" />
          <div className="swiper-block">
            <h2 className="swiper-header">Olena Kampusch</h2>
            <p className="swiper-text">
              Chocolate is a family favorite treat. Love the delicious smooth
              chocolate and the creaminess inside. The wafer is soft but
              crunchy.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img className="swiper-img" src={rewiew4} alt="review" />
          <div className="swiper-block">
            <h2 className="swiper-header">Natalia Sus</h2>
            <p className="swiper-text">
              The chocolate assortment was delicious. Both dark and milk
              chocolate pieces were smooth and just right on the sweetness
              level.{" "}
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img className="swiper-img" src={rewiew5} alt="review" />
          <div className="swiper-block">
            <h2 className="swiper-header">Danilo Nottingham</h2>
            <p className="swiper-text">
              This is delicious. It so rich and flavorful you don’t need to use
              as many. I love topping an apple with almond butter and these
              chips for a snack.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img className="swiper-img" src={rewiew6} alt="review" />
          <div className="swiper-block">
            <h2 className="swiper-header">Irina Tydnyuk</h2>
            <p className="swiper-text">
              This is simply the best chocolate around, and I'm just thrilled to
              support a local company! Best local chocolate - world class :)
            </p>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
