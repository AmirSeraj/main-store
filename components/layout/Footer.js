import React from "react";
import Link from "next/link"
import {ImLinkedin} from "react-icons/im";
import {FaTwitter} from "react-icons/fa";
import {CiInstagram} from "react-icons/ci";
import {SiAparat} from "react-icons/si";

const Footer = () => {
    const inamad_html = "<a referrerpolicy='origin' target='_blank' href='https://trustseal.enamad.ir/?id=520649&Code=gmTWxwBKkaViehRK8cncso895D00ohMO'><img referrerpolicy='origin' src='https://trustseal.enamad.ir/logo.aspx?id=520649&Code=gmTWxwBKkaViehRK8cncso895D00ohMO' alt='' style='cursor:pointer' code='gmTWxwBKkaViehRK8cncso895D00ohMO'></a>"

    return (
        <>
            <footer className="main">
                <section className="newsletter mb-15  wow animate__animated animate__fadeIn" dir={'rtl'}>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="position-relative newsletter-inner">
                                    <div className="newsletter-content">
                                        <h2 className="mb-20">
                                            برای دریافت پیشنهادات ویژه <br/>
                                            ایمیل خود را وارد کنید.
                                        </h2>
                                        {/*<p className="mb-45">*/}
                                        {/*    Start You'r Daily Shopping with{" "}*/}
                                        {/*    <span className="text-brand">*/}
                                        {/*        Nest Mart*/}
                                        {/*    </span>*/}
                                        {/*</p>*/}
                                        <form className="form-subcriber d-flex" dir={'ltr'}>
                                            <button className="btn" type="submit" dir="rtl">
                                                برو!
                                            </button>
                                            <input
                                                type="email"
                                                placeholder="آدرس ایمیل"
                                            />
                                        </form>
                                    </div>
                                    {/*<img*/}
                                    {/*    src="/assets/imgs/banner/banner-9.png"*/}
                                    {/*    alt="newsletter"*/}
                                    {/*/>*/}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="featured  section-padding">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-1-5 col-md-4 col-12 col-sm-6 mb-md-4 mb-xl-0">
                                <div
                                    className="banner-left-icon d-flex align-items-center  wow animate__animated animate__fadeInUp"
                                    data-wow-delay="0"
                                >
                                    <div className="banner-icon">
                                        <img
                                            src="/assets/imgs/theme/icons/icon-1.svg"
                                            alt="nest"
                                        />
                                    </div>
                                    <div className="banner-text">
                                        <h3 className="icon-box-title">
                                            ﺿﻤﺎﻧﺖ اﺻﻞ ﺑﻮدن ﮐﺎﻟﺎ
                                        </h3>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-1-5 col-md-4 col-12 col-sm-6">
                                <div
                                    className="banner-left-icon d-flex align-items-center  wow animate__animated animate__fadeInUp"
                                    data-wow-delay=".1s"
                                >
                                    <div className="banner-icon">
                                        <img
                                            src="/assets/imgs/theme/icons/icon-2.svg"
                                            alt="nest"
                                        />
                                    </div>
                                    <div className="banner-text">
                                        <h3 className="icon-box-title">
                                            ارسال رایگان در مشهد
                                        </h3>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-1-5 col-md-4 col-12 col-sm-6">
                                <div
                                    className="banner-left-icon d-flex align-items-center  wow animate__animated animate__fadeInUp"
                                    data-wow-delay=".2s"
                                >
                                    <div className="banner-icon">
                                        <img
                                            src="/assets/imgs/theme/icons/icon-3.svg"
                                            alt="nest"
                                        />
                                    </div>
                                    <div className="banner-text">
                                        <h3 className="icon-box-title">
                                            امکان پرداخت در محل
                                        </h3>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-1-5 col-md-4 col-12 col-sm-6">
                                <div
                                    className="banner-left-icon d-flex align-items-center  wow animate__animated animate__fadeInUp"
                                    data-wow-delay=".3s"
                                >
                                    <div className="banner-icon">
                                        <img
                                            src="/assets/imgs/theme/icons/icon-4.svg"
                                            alt="nest"
                                        />
                                    </div>
                                    <div className="banner-text">
                                        <h3 className="icon-box-title">
                                            اﻣﮑﺎن ﺗﺤﻮﯾﻞ اﮐﺴﭙﺮس
                                        </h3>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-1-5 col-md-4 col-12 col-sm-6">
                                <div
                                    className="banner-left-icon d-flex align-items-center  wow animate__animated animate__fadeInUp"
                                    data-wow-delay=".4s"
                                >
                                    <div className="banner-icon">
                                        <img
                                            src="/assets/imgs/theme/icons/icon-5.svg"
                                            alt="nest"
                                        />
                                    </div>
                                    <div className="banner-text">
                                        <h3 className="icon-box-title">
                                            هفت روز ضمانت بازگشت کالا
                                        </h3>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-1-5 col-md-4 col-12 col-sm-6 d-xl-none">
                                <div
                                    className="banner-left-icon d-flex align-items-center  wow animate__animated animate__fadeInUp"
                                    data-wow-delay=".5s"
                                >
                                    <div className="banner-icon">
                                        <img
                                            src="/assets/imgs/theme/icons/icon-6.svg"
                                            alt="nest"
                                        />
                                    </div>
                                    <div className="banner-text">
                                        <h3 className="icon-box-title">
                                            Safe delivery
                                        </h3>
                                        <p>Within 30 days</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="section-padding footer-mid" dir="rtl">
                    <div className="container pt-15 pb-20">
                        <div className="row">
                            <div className="col">
                                <div
                                    className="widget-about font-md mb-md-3 mb-lg-3 mb-xl-0  wow animate__animated animate__fadeInUp"
                                    data-wow-delay="0"
                                >
                                    <div className="logo mb-15">
                                        <Link href="/" className="mb-15">
                                            <img
                                                src="/assets/imgs/theme/logo.png"
                                                alt="logo"
                                            />
                                        </Link>
                                        <p className="font-lg text-heading">
                                            بلوتک
                                        </p>
                                    </div>
                                    <ul className="contact-infor">
                                        <li>
                                            <img
                                                src="/assets/imgs/theme/icons/icon-location.svg"
                                                alt="nest"
                                            />
                                            <strong>آدرس: </strong>{" "}
                                            <span className={'mr-5'}>
                                                مشهد - بلوار جانباز ....
                                            </span>
                                        </li>
                                        <li>
                                            <img
                                                src="/assets/imgs/theme/icons/icon-contact.svg"
                                                alt="nest"
                                            />
                                            <strong>تماس با ما:</strong>
                                            <span className={'mr-5'} dir={'ltr'}>
                                                (+98) 915 248 5119
                                            </span>
                                        </li>
                                        <li>
                                            <img
                                                src="/assets/imgs/theme/icons/icon-email-2.svg"
                                                alt="nest"
                                            />
                                            <strong>ایمیل:</strong>
                                            <span className={'mr-5'}>amir.seraj6990@gmail.com</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div
                                className="footer-link-widget col  wow animate__animated animate__fadeInUp"
                                data-wow-delay=".1s"
                            >
                                <h4 className="widget-title">شرکت</h4>
                                <ul className="footer-list  mb-sm-5 mb-md-0">
                                    <li>
                                        <a href="#">درباره ما</a>
                                    </li>
                                    <li>
                                        <a href="#">تماس با ما</a>
                                    </li>
                                </ul>
                            </div>
                            <div
                                className="footer-link-widget col  wow animate__animated animate__fadeInUp"
                                data-wow-delay=".2s"
                            >
                                <h4 className="widget-title ">حساب کاربری</h4>
                                <ul className="footer-list  mb-sm-5 mb-md-0">
                                    <li>
                                        <a href="#">ورود</a>
                                    </li>
                                    <li>
                                        <a href="#">سبد خرید</a>
                                    </li>
                                    <li>
                                        <a href="#">پیگیری سفارش</a>
                                    </li>
                                </ul>
                            </div>
                            <div
                                className="footer-link-widget col  wow animate__animated animate__fadeInUp"
                                data-wow-delay=".3s"
                            >
                                <h4 className="widget-title ">راهنمای خرید</h4>
                                <ul className="footer-list  mb-sm-5 mb-md-0">
                                    <li>
                                        <a href="#">سوالات پرتکرار</a>
                                    </li>
                                    <li>
                                        <a href="#">نحوه عودت کالا</a>
                                    </li>
                                    <li>
                                        <a href="#">شرایط استفاده</a>
                                    </li>
                                    <li>
                                        <a href="#">حریم خصوصی</a>
                                    </li>
                                    <li>
                                        <a href="#">انتقادات و پیشنهادات</a>
                                    </li>
                                </ul>
                            </div>
                            <div
                                className="footer-link-widget col  wow animate__animated animate__fadeInUp"
                                data-wow-delay=".4s"
                            >
                                <h4 className="widget-title ">خدمات مشتریان</h4>
                                <ul className="footer-list  mb-sm-5 mb-md-0">
                                    <li>
                                        <a href="#">نحوه ثبت سفارشات</a>
                                    </li>
                                    <li>
                                        <a href="#">رویه ارسال سفارشات</a>
                                    </li>
                                    <li>
                                        <a href="#">شیوه های پرداخت</a>
                                    </li>
                                </ul>
                            </div>

                            <div
                                className="footer-link-widget widget-install-app col  wow animate__animated animate__fadeInUp"
                                data-wow-delay=".5s"
                            >
                                <h4 className="widget-title my-2">همراه ما باشید</h4>
                                <div className="download-app w-full flex justify-center items-center mb-20">
                                    <a href="https://www.linkedin.com" aria-label="LinkedIn">
                                        <ImLinkedin size={20} className='text-gray-400 hover:text-white'/>
                                    </a>
                                    <a href="https://www.twitter.com" aria-label="Twitter">
                                        <FaTwitter size={20} className='text-gray-400 hover:text-white'/>
                                    </a>
                                    <a href="https://www.instagram.com" aria-label="Instagram">
                                        <CiInstagram size={20} className='text-gray-400 hover:text-white'/>
                                    </a>
                                    <a href="https://www.aparat.com" aria-label="Aparat">
                                        <SiAparat size={20} className='text-gray-400 hover:text-white'/>
                                    </a>
                                </div>


                                <div dangerouslySetInnerHTML={{__html: inamad_html}}/>

                            </div>
                        </div>
                    </div>
                </section>
                <div
                    className="container pb-30  wow animate__animated animate__fadeInUp"
                    data-wow-delay="0"
                >
                    <div className="row align-items-center">
                        <div className="col-12 mb-30">
                            <div className="footer-bottom"></div>
                        </div>
                        <div className="col-xl-4 col-lg-6 col-md-6">
                            <p className="font-sm mb-0">
                                All rights reserved
                            </p>
                        </div>
                        <div className="col-xl-4 col-lg-6 text-center d-none d-xl-block">
                            <div className="hotline d-lg-inline-flex mr-30">
                                <img
                                    src="/assets/imgs/theme/icons/phone-call.svg"
                                    alt="hotline"
                                />
                                <p className={'font-sm'}>
                                    09211899043
                                </p>
                            </div>
                            <div className="hotline d-lg-inline-flex">
                                <img
                                    src="/assets/imgs/theme/icons/phone-call.svg"
                                    alt="hotline"
                                />
                                <p>
                                    09393935921
                                </p>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-6 col-md-6 text-end d-none d-md-block">
                            <div className="mobile-social-icon">
                                <h6>در شبکه های اجتماعی ما را دنبال کنید</h6>
                                <a href="#">
                                    <img
                                        src="/assets/imgs/theme/icons/icon-facebook-white.svg"
                                        alt="nest"
                                    />
                                </a>
                                <a href="#">
                                    <img
                                        src="/assets/imgs/theme/icons/icon-twitter-white.svg"
                                        alt="nest"
                                    />
                                </a>
                                <a href="#">
                                    <img
                                        src="/assets/imgs/theme/icons/icon-instagram-white.svg"
                                        alt="nest"
                                    />
                                </a>
                                <a href="#">
                                    <img
                                        src="/assets/imgs/theme/icons/icon-pinterest-white.svg"
                                        alt="nest"
                                    />
                                </a>
                                <a href="#">
                                    <img
                                        src="/assets/imgs/theme/icons/icon-youtube-white.svg"
                                        alt="nest"
                                    />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default Footer;
