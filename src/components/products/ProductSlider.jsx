// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/scss";
import "swiper/scss/pagination";

//import "./styles.css";
//import images
import orange from "../../assets/orange-swipe.png";
import apple from "../../assets/apple-and-strawberry-swipe.png";
import lime from "../../assets/lime-and-sea-salt-swipe.png";
import pineapple from "../../assets/pineapple-swipe.png";
import classic from "../../assets/classic-swipe.png";
import honey from "../../assets/honey-swipe.png";
import roasted from "../../assets/roasted-fruits-swipe.png";
import classicWhite from "../../assets/classic-white-swipe.png";

// import required modules
import { Pagination } from "swiper";

export default function ProductSlider() {
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
          <img className="swiper-img" src={orange} alt="orange" />
          <h2 className="swiper-header">ORANGE</h2>
          <p className="swiper-text">Dark chocolate</p>
          <button className="swiper-price">45 UAH</button>
        </SwiperSlide>
        <SwiperSlide>
          <img className="swiper-img" src={apple} alt="apple" />
          <h2 className="swiper-header">APPLE&CRANBERRY</h2>
          <p className="swiper-text">Milk chocolate</p>
          <button className="swiper-price">50 UAH</button>
        </SwiperSlide>
        <SwiperSlide>
          <img className="swiper-img" src={lime} alt="lime" />
          <h2 className="swiper-header">LIME&SEA SALT</h2>
          <p className="swiper-text">Dark chocolate</p>
          <button className="swiper-price">66 UAH</button>
        </SwiperSlide>
        <SwiperSlide>
          <img className="swiper-img" src={pineapple} alt="pineapple" />
          <h2 className="swiper-header">PINEAPPLE</h2>
          <p className="swiper-text">Dark chocolate</p>
          <button className="swiper-price">54 UAH</button>
        </SwiperSlide>
        <SwiperSlide>
          <img className="swiper-img" src={classic} alt="classic" />
          <h2 className="swiper-header">CLASSIC</h2>
          <p className="swiper-text">Dark chocolate</p>
          <button className="swiper-price">45 UAH</button>
        </SwiperSlide>
        <SwiperSlide>
          <img className="swiper-img" src={honey} alt="honey" />
          <h2 className="swiper-header">HONEY</h2>
          <p className="swiper-text">Milk chocolate</p>
          <button className="swiper-price">50 UAH</button>
        </SwiperSlide>
        <SwiperSlide>
          <img className="swiper-img" src={roasted} alt="roasted" />
          <h2 className="swiper-header">ROASTED FRUITS</h2>
          <p className="swiper-text">Dark chocolate</p>
          <button className="swiper-price">66 UAH</button>
        </SwiperSlide>
        <SwiperSlide>
          <img className="swiper-img" src={classicWhite} alt="classic-white" />
          <h2 className="swiper-header">CLASSIC</h2>
          <p className="swiper-text">White chocolate</p>
          <button className="swiper-price">54 UAH</button>
        </SwiperSlide>
        <SwiperSlide>
          <img src={orange} alt="orange" />
          <h2 className="swiper-header">swiper-header</h2>
          <p className="swiper-text">swiper-text</p>
          <button className="swiper-price">45 UAH</button>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
