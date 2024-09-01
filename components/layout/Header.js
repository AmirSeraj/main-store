import Link from "next/link";
import React, {useEffect, useState} from "react";
import {connect} from "react-redux";
import CategoryProduct2 from "../ecommerce/Filter/CategoryProduct2";
import CategoryProduct3 from "../ecommerce/Filter/CategoryProduct3";
import Search from "../ecommerce/Search";

const Header = ({totalCartItems, totalCompareItems, toggleClick, totalWishlistItems}) => {
    const [isToggled, setToggled] = useState(false);
    const [scroll, setScroll] = useState(0);

    useEffect(() => {
        document.addEventListener("scroll", () => {
            const scrollCheck = window.scrollY >= 100;
            if (scrollCheck !== scroll) {
                setScroll(scrollCheck);
            }
        });
    });

    const handleToggle = () => setToggled(!isToggled);

    return (
        <>
            <header className="header-area header-style-1 header-height-2">
                <div className="mobile-promotion">
                    <span>
                        Grand opening, <strong>up to 15%</strong> off all items. Only <strong>3 days</strong> left
                    </span>
                </div>
                <div className="header-top header-top-ptb-1 d-none d-lg-block">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-xl-3 col-lg-4">
                                <div className="header-info">
                                    <ul>
                                        <li>
                                            <Link href="/page-about">درباره ما</Link>
                                        </li>
                                        <li>
                                            <Link href="/page-account">حساب کاربری</Link>
                                        </li>
                                        <li>
                                            <Link href="/page-account">رهگیری سفارش</Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-xl-6 col-lg-4">
                                <div className="text-center">
                                    <div id="news-flash" className="d-inline-block">
                                        <ul>
                                            <li>

                                                <Link href="/shop-grid-right">بلوتک - ارسال سریع و رایگان به سراسر کشور</Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-4">
                                <div className="header-info header-info-right">
                                    <ul>
                                        <li>
                                            <Link href="tel:09211899043">
                                                <strong className="text-brand">
                                                    09211899043
                                                </strong>
                                            </Link>
                                            &nbsp;&nbsp;
                                            نیاز به مشاوره دارید؟
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="header-middle header-middle-ptb-1 d-none d-lg-block" dir="rtl" >
                    <div className="container">
                        <div className="header-wrap">
                            <div className="logo logo-width-1">
                                <Link href="/">
                                    <img src="/assets/imgs/theme/logo.svg" alt="logo"/>
                                </Link>
                            </div>
                            <div className="header-right mx-4">
                                <div className="search-style-2">
                                    <Search/>
                                </div>
                                <div className="header-action-right">
                                    <div className="header-action-2 gap-2">

                                        <div className="header-action-icon-2 gap-1">
                                            <Link href="/shop-compare">
                                                <img className="svgInject" alt="Evara"
                                                     src="/assets/imgs/theme/icons/icon-compare.svg"/>
                                                <span className="pro-count blue">{totalCompareItems}</span>
                                            </Link>
                                            <Link href="/shop-compare">
                                                <span className="lable ml-0">مقایسه</span>
                                            </Link>
                                        </div>
                                        <div className="header-action-icon-2 gap-1">
                                            <Link href="/shop-wishlist">
                                                <img className="svgInject" alt="Evara"
                                                     src="/assets/imgs/theme/icons/icon-heart.svg"/>
                                                <span className="pro-count blue">{totalWishlistItems}</span>
                                            </Link>
                                            <Link href="/shop-wishlist">
                                                <span className="lable">لیست من</span>
                                            </Link>
                                        </div>
                                        <div className="header-action-icon-2 gap-1">
                                            <Link href="/shop-cart" className="mini-cart-icon">
                                                <img alt="Evara" src="/assets/imgs/theme/icons/icon-cart.svg"/>
                                                <span className="pro-count blue">{totalCartItems}</span>
                                            </Link>
                                            <Link href="/shop-cart">
                                                <span className="lable">سبد خرید</span>
                                            </Link>
                                        </div>

                                        <div className="header-action-icon-2 gap-1">
                                            <Link href="/page-account">
                                                <img className="svgInject" alt="Nest"
                                                     src="/assets/imgs/theme/icons/icon-user.svg"/>
                                            </Link>
                                            <Link href="/page-account">
                                                <span className="lable ml-0">داشبورد</span>
                                            </Link>
                                            <div className="cart-dropdown-wrap cart-dropdown-hm2 account-dropdown">
                                                <ul>
                                                    <li>
                                                        <Link href="/page-account">
                                                            <i className="fi fi-rs-user mr-10"></i>
                                                            حساب من
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link href="/page-account">
                                                            <i className="fi fi-rs-location-alt mr-10"></i>
                                                            رهگیری سفارشات
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link href="/page-account">
                                                            <i className="fi fi-rs-label mr-10"></i>
                                                            سفارشات من
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link href="/page-account">
                                                            <i className="fi fi-rs-settings-sliders mr-10"></i>
                                                            تنظیمات
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link href="/page-login">
                                                            <i className="fi fi-rs-sign-out mr-10"></i>
                                                            خروج
                                                        </Link>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div dir="rtl"
                     className={scroll ? "header-bottom header-bottom-bg-color sticky-bar stick" : "header-bottom header-bottom-bg-color sticky-bar"}>
                    <div className="container">
                        <div className="header-wrap header-space-between position-relative">
                            <div className="logo logo-width-1 d-block d-lg-none">
                                <Link href="/">
                                    <img src="/assets/imgs/theme/logo.svg" alt="logo"/>
                                </Link>
                            </div>
                            <div className="header-nav d-none d-lg-flex">
                                <div className="main-categori-wrap d-none d-lg-block">
                                    <a className="categories-button-active" onClick={handleToggle}>
                                        <span className="fi-rs-apps"></span>
                                        <span className="et">دسته بندی کالاها</span>
                                        {/*<i className="fi-rs-angle-down"></i>*/}
                                    </a>

                                    <div
                                        className={isToggled ? "categories-dropdown-wrap categories-dropdown-active-large font-heading open" : "categories-dropdown-wrap categories-dropdown-active-large font-heading"}>
                                        <div className="d-flex categori-dropdown-inner">
                                            <CategoryProduct2/>
                                            <CategoryProduct3/>
                                        </div>
                                        <div className="more_slide_open" style={{display: "none"}}>
                                            <div className="d-flex categori-dropdown-inner">
                                                <ul>
                                                    <li>
                                                        <Link href="/products">
                                                            <img src="/assets/imgs/theme/icons/icon-1.svg" alt="nest"/>
                                                            Milks and Dairies
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link href="/products">
                                                            <img src="/assets/imgs/theme/icons/icon-2.svg" alt="nest"/>
                                                            Clothing & beauty
                                                        </Link>
                                                    </li>
                                                </ul>
                                                <ul className="end">
                                                    <li>
                                                        <Link href="/products">
                                                            <img src="/assets/imgs/theme/icons/icon-3.svg" alt="nest"/>
                                                            Wines & Drinks
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link href="/products">
                                                            <img src="/assets/imgs/theme/icons/icon-4.svg" alt="nest"/>
                                                            Fresh Seafood
                                                        </Link>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div dir="rtl"
                                     className="main-menu main-menu-padding-1 main-menu-lh-2 d-none d-lg-block  font-heading">
                                    <nav>
                                        <ul>
                                            <li className="hot-deals">
                                                <img src="/assets/imgs/theme/icons/icon-hot.svg" alt="hot deals"/>
                                                <Link href="/products">پیشنهادات شگفت انگیز</Link>
                                            </li>
                                            <li>
                                                <Link href="/" className="active">
                                                    صفحه اصلی
                                                    {/*<i className="fi-rs-angle-down"></i>*/}
                                                </Link>

                                            </li>
                                            <li>
                                                <Link href="/page-about">درباره ما</Link>
                                            </li>
                                            <li>
                                                <Link href="/shop-grid-right" className={''}>
                                                    موبایل
                                                    <i className="fi-rs-angle-down"></i>
                                                </Link>
                                                <ul className="sub-menu">
                                                    <li>
                                                        <Link href="/shop-grid-right">آیفون</Link>
                                                    </li>
                                                    <li>
                                                        <Link href="/products">سامسونگ</Link>
                                                    </li>
                                                    <li>
                                                        <Link href="/shop-list-right">شیائومی</Link>
                                                    </li>
                                                    <li>
                                                        <Link href="/shop-list-left">آنر</Link>
                                                    </li>
                                                    <li>
                                                        <Link href="/shop-fullwidth">سایر</Link>
                                                    </li>
                                                    {/*<li>*/}
                                                    {/*    <Link href="/shop-filter">Shop - Filter</Link>*/}
                                                    {/*</li>*/}
                                                    {/*<li>*/}
                                                    {/*    <Link href="/shop-wishlist">Shop – Wishlist</Link>*/}
                                                    {/*</li>*/}
                                                    {/*<li>*/}
                                                    {/*    <Link href="/shop-cart">Shop – Cart</Link>*/}
                                                    {/*</li>*/}
                                                    {/*<li>*/}
                                                    {/*    <Link href="/shop-checkout">Shop – Checkout</Link>*/}
                                                    {/*</li>*/}
                                                    {/*<li>*/}
                                                    {/*    <Link href="/shop-compare">Shop – Compare</Link>*/}
                                                    {/*</li>*/}
                                                </ul>
                                            </li>

                                            <li>
                                                <a href="#">
                                                    هدفون و هندزفری
                                                    <i className="fi-rs-angle-down"></i>
                                                </a>
                                                <ul className="sub-menu">
                                                    <li>
                                                        <Link href="/vendors">Vendors Grid</Link>
                                                    </li>
                                                    <li>
                                                        <Link href="/vendors-list">Vendors List</Link>
                                                    </li>
                                                    <li>
                                                        <Link href="/vendor-dashboard">Vendor Dashboard</Link>
                                                    </li>
                                                    <li>
                                                        <Link href="/vendor-guide">Vendor Guide</Link>
                                                    </li>
                                                </ul>
                                            </li>

                                            <li className="position-static">
                                                <Link href="/#">
                                                    ساعت و مچ بند هوشمند
                                                    <i className="fi-rs-angle-down"></i>
                                                </Link>
                                                <ul className="mega-menu">
                                                    <li className="sub-mega-menu sub-mega-menu-width-22">
                                                        <a className="menu-title" href="#">
                                                            Fruit & Vegetables
                                                        </a>
                                                        <ul>
                                                            <li>
                                                                <a href="#">Meat & Poultry</a>
                                                            </li>
                                                            <li>
                                                                <a href="#">Fresh Vegetables</a>
                                                            </li>
                                                            <li>
                                                                <a href="#">Herbs & Seasonings</a>
                                                            </li>
                                                            <li>
                                                                <a href="#">Cuts & Sprouts</a>
                                                            </li>
                                                            <li>
                                                                <a href="#">Exotic Fruits & Veggies</a>
                                                            </li>
                                                            <li>
                                                                <a href="#">Packaged Produce</a>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                    <li className="sub-mega-menu sub-mega-menu-width-22">
                                                        <a className="menu-title" href="#">
                                                            Breakfast & Dairy
                                                        </a>
                                                        <ul>
                                                            <li>
                                                                <a href="#">Milk & Flavoured Milk</a>
                                                            </li>
                                                            <li>
                                                                <a href="#">Butter and Margarine</a>
                                                            </li>
                                                            <li>
                                                                <a href="#">Eggs Substitutes</a>
                                                            </li>
                                                            <li>
                                                                <a href="#">Marmalades</a>
                                                            </li>
                                                            <li>
                                                                <a href="#">Sour Cream</a>
                                                            </li>
                                                            <li>
                                                                <a href="#">Cheese</a>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                    <li className="sub-mega-menu sub-mega-menu-width-22">
                                                        <a className="menu-title" href="#">
                                                            Meat & Seafood
                                                        </a>
                                                        <ul>
                                                            <li>
                                                                <a href="#">Breakfast Sausage</a>
                                                            </li>
                                                            <li>
                                                                <a href="#">Dinner Sausage</a>
                                                            </li>
                                                            <li>
                                                                <a href="#">Chicken</a>
                                                            </li>
                                                            <li>
                                                                <a href="#">Sliced Deli Meat</a>
                                                            </li>
                                                            <li>
                                                                <a href="#">Wild Caught Fillets</a>
                                                            </li>
                                                            <li>
                                                                <a href="#">Crab and Shellfish</a>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                    <li className="sub-mega-menu sub-mega-menu-width-34">
                                                        <div className="menu-banner-wrap">
                                                            <a href="#">
                                                                <img src="/assets/imgs/banner/banner-menu.png"
                                                                     alt="Nest"/>
                                                            </a>
                                                            <div className="menu-banner-content">
                                                                <h4>Hot deals</h4>
                                                                <h3>
                                                                    Don't miss
                                                                    <br/>
                                                                    Trending
                                                                </h3>
                                                                <div className="menu-banner-price">
                                                                    <span
                                                                        className="new-price text-success">Save to 50%</span>
                                                                </div>
                                                                <div className="menu-banner-btn">
                                                                    <a href="#">Shop now</a>
                                                                </div>
                                                            </div>
                                                            <div className="menu-banner-discount">
                                                                <h3>
                                                                    <span>25%</span>
                                                                    off
                                                                </h3>
                                                            </div>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li>
                                                <Link href="/blog-category-grid">
                                                    کنسول بازی
                                                    <i className="fi-rs-angle-down"></i>
                                                </Link>
                                                <ul className="sub-menu">
                                                    <li>
                                                        <Link href="/blog-category-grid">PlayStation</Link>
                                                    </li>
                                                    <li>
                                                        <Link href="/blog-category-list">Xbox</Link>
                                                    </li>
                                                    <li>
                                                        <Link href="/blog-category-big">Nintendo</Link>
                                                    </li>

                                                </ul>
                                            </li>

                                        </ul>
                                    </nav>
                                </div>
                            </div>
                            <Link href="https://t.me/TenTechStore">
                                <div className="hotline d-none d-lg-flex flex gap-2 align-items-center">
                                    <img src="/assets/imgs/theme/icons/Telegram_logo.svg" alt="telegram support"
                                         style={{height: "2rem", width: "2rem"}}/>
                                    <span>
                                     پشتیبانی تلگرام
                                    </span>

                                </div>
                            </Link>

                            <div className="header-action-icon-2 d-block d-lg-none">
                                <div className="burger-icon burger-icon-white" onClick={toggleClick}>
                                    <span className="burger-icon-top"></span>
                                    <span className="burger-icon-mid"></span>
                                    <span className="burger-icon-bottom"></span>
                                </div>
                            </div>

                            <div className="header-action-right d-block d-lg-none">
                                <div className="header-action-2">
                                    <div className="header-action-icon-2">
                                        <Link href="/shop-wishlist">
                                            <img alt="Evara" src="/assets/imgs/theme/icons/icon-heart.svg"/>
                                            <span className="pro-count white">{totalWishlistItems}</span>
                                        </Link>
                                    </div>
                                    <div className="header-action-icon-2">
                                        <Link href="/shop-cart" className="mini-cart-icon">
                                            <img alt="Evara" src="/assets/imgs/theme/icons/icon-cart.svg"/>
                                            <span className="pro-count white">{totalCartItems}</span>
                                        </Link>
                                        <div className="cart-dropdown-wrap cart-dropdown-hm2">
                                            <ul>
                                                <li>
                                                    <div className="shopping-cart-img">
                                                        <Link href="/shop-grid-right">
                                                            <img alt="Evara" src="/assets/imgs/shop/thumbnail-3.jpg"/>
                                                        </Link>
                                                    </div>
                                                    <div className="shopping-cart-title">
                                                        <h4>
                                                            <Link href="/shop-grid-right">Plain Striola Shirts</Link>
                                                        </h4>
                                                        <h3>
                                                            <span>1 × </span>
                                                            $800.00
                                                        </h3>
                                                    </div>
                                                    <div className="shopping-cart-delete">
                                                        <Link href="/#">
                                                            <i className="fi-rs-cross-small"></i>
                                                        </Link>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="shopping-cart-img">
                                                        <Link href="/shop-grid-right">
                                                            <img alt="Evara" src="/assets/imgs/shop/thumbnail-4.jpg"/>
                                                        </Link>
                                                    </div>
                                                    <div className="shopping-cart-title">
                                                        <h4>
                                                            <Link href="/shop-grid-right">Macbook Pro 2024</Link>
                                                        </h4>
                                                        <h3>
                                                            <span>1 × </span>
                                                            $3500.00
                                                        </h3>
                                                    </div>
                                                    <div className="shopping-cart-delete">
                                                        <Link href="/#">
                                                            <i className="fi-rs-cross-small"></i>
                                                        </Link>
                                                    </div>
                                                </li>
                                            </ul>
                                            <div className="shopping-cart-footer">
                                                <div className="shopping-cart-total">
                                                    <h4>
                                                        Total
                                                        <span>$383.00</span>
                                                    </h4>
                                                </div>
                                                <div className="shopping-cart-button">
                                                    <Link href="/shop-cart">View cart</Link>
                                                    <Link href="/shop-checkout">Checkout</Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
};

const mapStateToProps = (state) => ({
    totalCartItems: state.cart.length,
    totalCompareItems: state.compare.items.length,
    totalWishlistItems: state.wishlist.items.length
});

export default connect(mapStateToProps, null)(Header);
