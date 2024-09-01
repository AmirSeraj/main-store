import { useRouter } from "next/router";
import { connect } from "react-redux";
import SwiperCore, { Autoplay, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { updateProductCategory } from "./../../redux/action/productFiltersAction";

SwiperCore.use([Navigation, Autoplay]);
const data = [
    {
        id: 1,
        title: "گوشی موبایل",
        slug: "phone",
        img: "cat-13.png",
        bg: "bg-13"
    },
    {
        id: 2,
        title: "لپ تاپ",
        slug: "Laptop",
        img: "cat-12.png",
        bg: "bg-10"
    },
    {
        id: 3,
        title: "هدفون و هندزفری",
        slug: "headphone-hands-free",
        img: "cat-11.png",
        bg: "bg-11"
    },
    {
        id: 4,
        title: "آداپتور و شارژر",
        img: "cat-14.png",
        bg: "bg-12"
    },
    {
        id: 5,
        title: "ساعت هوشمند",
        img: "cat-16.png",
        bg: "bg-9"
    },
    {
        id: 6,
        title: "کنسول بازی",
        img: "cat-1.png",
        bg: "bg-14"
    },
    {
        id: 7,
        title: "پرینتر",
        img: "cat-2.png",
        bg: "bg-15"
    },
    {
        id: 8,
        title: "کابل شارژ",
        img: "cat-4.png",
        bg: "bg-12"
    },
    {
        id: 9,
        title: "اسپیکر",
        img: "cat-5.png",
        bg: "bg-10"
    },
    {
        id: 10,
        title: "پاور بانک",
        img: "cat-3.png",
        bg: "bg-12"
    },
    {
        id: 11,
        title: "لوازم جانبی",
        img: "cat-6.png",
        bg: "bg-11"
    }
];
const CategorySlider = () => {


    const router = useRouter();

    const selectCategory = (e, category) => {
        e.preventDefault();
        // removeSearchTerm();
        updateProductCategory(category);
        router.push({
            pathname: "/products",
            query: {
                cat: category //
            }
        });

        console.log("Click");
    };

    return (
        <>
            <Swiper
                autoplay={true}
                navigation={{
                    prevEl: ".custom_prev_ct1",
                    nextEl: ".custom_next_ct1"
                }}
                dir="rtl"
                className="custom-class"
                breakpoints={{
                    480: {
                        slidesPerView: 2
                    },
                    640: {
                        slidesPerView: 3
                    },
                    768: {
                        slidesPerView: 5
                    },
                    1024: {
                        slidesPerView: 8
                    },
                    1200: {
                        slidesPerView: 10
                    }
                }}
            >
                {data.map((item, i) => (
                    <SwiperSlide key={i}>
                        <div className={`card-2 ${item.bg} wow animate__animated animate__fadeInUp`} onClick={(e) => selectCategory(e, item.slug)}>
                            <figure className=" img-hover-scale overflow-hidden">
                                <a>
                                    <img src={`assets/imgs/shop/${item.img}`} alt="nest" />
                                </a>
                            </figure>
                            <h6>
                                <a>{item.title}</a>
                            </h6>
                            {/*<span>26 items</span>*/}
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

            <div className="slider-arrow slider-arrow-2 flex-right carausel-10-columns-arrow align-items-center text-center justify-content-center align-content-center"
                 id="carausel-10-columns-arrows">
                <span className="slider-btn slider-next slick-arrow custom_prev_ct1">
                    <i className="fi-rs-arrow-small-left "></i>
                </span>
                <span className="slider-btn slider-prev slick-arrow custom_next_ct1">
                    <i className="fi-rs-arrow-small-right"></i>
                </span>

            </div>
        </>
    );
};

export default connect(null, {updateProductCategory})(CategorySlider);


// import SwiperCore, { Navigation } from "swiper";
// import { Swiper, SwiperSlide } from "swiper/react";

// SwiperCore.use([Navigation]);

// const CategorySlider = () => {
//     return (
//         <>
//             <Swiper
//                 slidesPerView={1}
//                 spaceBetween={30}
//
//                 navigation={{
//                     prevEl: ".custom_prev",
//                     nextEl: ".custom_next",
//                 }}
//                 className="custom-class"
//             >
//                 <SwiperSlide>1</SwiperSlide>
//                 <SwiperSlide>2</SwiperSlide>
//                 <SwiperSlide>3</SwiperSlide>
//             </Swiper>

//             <div className="custom-nav">
//                 <button type="button" className="custom_prev">
//                     Prev
//                 </button>
//                 <button type="button" className="custom_next">
//                     Next
//                 </button>
//             </div>
//         </>
//     );
// };

// export default CategorySlider;
