import SwiperCore, { Navigation, Pagination } from "swiper";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";

SwiperCore.use([Navigation, Pagination]);

const Intro1 = () => {
    return (
        <div >
            <Swiper
                slidesPerView={1}
                spaceBetween={0}

                pagination={true}
                navigation={{
                    prevEl: ".custom_prev_i1",
                    nextEl: ".custom_next_i1",
                }}
                className="hero-slider-1 style-4 dot-style-1 dot-style-1-position-1"
            >
                <SwiperSlide>
                    <div
                        className="single-hero-slider single-animation-wrap border"
                        style={{
                            backgroundImage:
                                "url(assets/imgs/slider/slider-1.jpg)",
                        }}
                    >

                        {/*<img src={} />*/}
                        <div className="slider-content align-content-center" dir="rtl">
                            <h1 className="display-2 mb-40" >
                                ارسال رایگان در <br/>سراسر کشور

                            </h1>
                            <p className="mb-65 font-md" >
                                خرید با تخفیف بیشتر در بلوتک
                            </p>

                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div
                        className="single-hero-slider single-animation-wrap"
                        style={{
                            backgroundImage:
                                "url(assets/imgs/slider/slider-2.jpg)",
                        }}
                    >
                        <div className="slider-content" dir="rtl">
                            <h1 className="display-2 mb-40" style={{color:"#52ff5b"}}>
                                فروش ویژه محصولات
                                <br />
                                شیائومی
                            </h1>
                            <p className="mb-65" style={{color:"#f1ffdb"}}>
                                تا 20% تخفیف بر روی تمامی محصولات شیائومی
                            </p>
                            <form className="form-subcriber d-flex">
                                <button className="btn" type="submit">
                                    دریافت
                                </button>
                                <input
                                    type="phone"
                                    placeholder="شماره تماس خود را وارد کنید"
                                />

                            </form>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>

            <div className="slider-arrow hero-slider-1-arrow">
                <span className="slider-btn slider-prev slick-arrow custom_prev_i1">
                    <i className="fi-rs-angle-left"></i>
                </span>
                <span className="slider-btn slider-next slick-arrow custom_next_i1">
                    <i className="fi-rs-angle-right"></i>
                </span>
            </div>
        </div>
    );
};

export default Intro1;
