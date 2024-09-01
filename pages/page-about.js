import Layout from "../components/layout/Layout";

const Section1 = () => {
    return (
        <section className="row align-items-center mb-50">
            <div className="col-lg-6">
                <img src="/assets/imgs/page/about-1.png" alt="nest"
                     className="border-radius-15 mb-md-3 mb-lg-0 mb-sm-4"/>
            </div>
            <div className="col-lg-6">
                <div className="pl-25">
                    <h2 className="mb-30">به بلوتک خوش آمدید.</h2>
                    <p className="mb-25">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                        ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit
                        in voluptate id est laborum.</p>
                    <p className="mb-50">Ius ferri velit sanctus cu, sed at soleat accusata. Dictas prompta et Ut
                        placerat legendos interpre.Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante
                        Etiam sit amet orci eget. Quis commodo odio aenean sed adipiscing. Turpis massa tincidunt dui ut
                        ornare lectus. Auctor elit sed vulputate mi sit amet. Commodo consequat. Duis aute irure dolor
                        in reprehenderit in voluptate id est laborum.</p>

                </div>
            </div>
        </section>
    )
}


const Section2 = () => {
    return (
        <section className="text-center mb-50">
            <h2 className="title style-3 mb-40">چه خدماتی ما ارائه می دهیم؟</h2>
            <div className="row">
                <div className="col-lg-4 col-md-6 mb-24">
                    <div className="featured-card">
                        <img src="/assets/imgs/theme/icons/icon-1.svg" alt="nest"/>
                        <h4>Best Prices & Offers</h4>
                        <p>There are many variations of passages of Lorem Ipsum available, but the
                            majority have suffered alteration in some form</p>
                        <a href="#">Read more</a>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 mb-24">
                    <div className="featured-card">
                        <img src="/assets/imgs/theme/icons/icon-2.svg" alt="nest"/>
                        <h4>Wide Assortment</h4>
                        <p>There are many variations of passages of Lorem Ipsum available, but the majority have
                            suffered alteration in some form</p>
                        <a href="#">Read more</a>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 mb-24">
                    <div className="featured-card">
                        <img src="/assets/imgs/theme/icons/icon-3.svg" alt="nest"/>
                        <h4>Free Delivery</h4>
                        <p>There are many variations of passages of Lorem Ipsum available, but the majority have
                            suffered alteration in some form</p>
                        <a href="#">Read more</a>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 mb-24">
                    <div className="featured-card">
                        <img src="/assets/imgs/theme/icons/icon-4.svg" alt="nest"/>
                        <h4>Easy Returns</h4>
                        <p>There are many variations of passages of Lorem Ipsum available, but the majority have
                            suffered alteration in some form</p>
                        <a href="#">Read more</a>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 mb-24">
                    <div className="featured-card">
                        <img src="/assets/imgs/theme/icons/icon-5.svg" alt="nest"/>
                        <h4>100% Satisfaction</h4>
                        <p>There are many variations of passages of Lorem Ipsum available, but the majority have
                            suffered alteration in some form</p>
                        <a href="#">Read more</a>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 mb-24">
                    <div className="featured-card">
                        <img src="/assets/imgs/theme/icons/icon-6.svg" alt="nest"/>
                        <h4>Great Daily Deal</h4>
                        <p>There are many variations of passages of Lorem Ipsum available, but the majority have
                            suffered alteration in some form</p>
                        <a href="#">Read more</a>
                    </div>
                </div>
            </div>
        </section>
    )
}

const Section3 = () => {
    return (
        <section className="row align-items-center mb-50">
            <div className="row mb-50 align-items-center">
                <div className="col-lg-7 pr-30">
                    <img src="/assets/imgs/page/about-5.png" alt="nest"
                         className="mb-md-3 mb-lg-0 mb-sm-4"/>
                </div>
                <div className="col-lg-5">
                    <h4 className="mb-20 text-muted">عملکرد ما</h4>
                    <h1 className="heading-1 mb-40">Your Partner for e-commerce grocery
                        solution</h1>
                    <p className="mb-30">Ed ut perspiciatis unde omnis iste natus error sit
                        voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                        quae ab illo inventore veritatis et quasi architecto</p>
                    <p>Pitatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim
                        ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed
                        quia</p>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-4 pr-30 mb-md-5 mb-lg-0 mb-sm-5">
                    <h3 className="mb-30">درباره ما</h3>
                    <p>Volutpat diam ut venenatis tellus in metus. Nec dui nunc mattis enim ut
                        tellus eros donec ac odio orci ultrices in. ellus eros donec ac odio orci
                        ultrices in.</p>
                </div>
                <div className="col-lg-4 pr-30 mb-md-5 mb-lg-0 mb-sm-5">
                    <h3 className="mb-30">نگاهی به سوابق ما</h3>
                    <p>Volutpat diam ut venenatis tellus in metus. Nec dui nunc mattis enim ut
                        tellus eros donec ac odio orci ultrices in. ellus eros donec ac odio orci
                        ultrices in.</p>
                </div>
                <div className="col-lg-4">
                    <h3 className="mb-30">ماموریت ما</h3>
                    <p>Volutpat diam ut venenatis tellus in metus. Nec dui nunc mattis enim ut
                        tellus eros donec ac odio orci ultrices in. ellus eros donec ac odio orci
                        ultrices in.</p>
                </div>
            </div>
        </section>
    )
}

const Section4 = () => {
    return (
        <section className="container mb-50 d-none d-md-block">
            <div className="row about-count">
                <div className="col-lg-1-5 col-md-6 text-center mb-lg-0 mb-md-5">
                    <h1 className="heading-1"><span className="count">12</span>+</h1>
                    <h4>Glorious years</h4>
                </div>
                <div className="col-lg-1-5 col-md-6 text-center">
                    <h1 className="heading-1"><span className="count">36</span>+</h1>
                    <h4>Happy clients</h4>
                </div>
                <div className="col-lg-1-5 col-md-6 text-center">
                    <h1 className="heading-1"><span className="count">58</span>+</h1>
                    <h4>Projects complete</h4>
                </div>
                <div className="col-lg-1-5 col-md-6 text-center">
                    <h1 className="heading-1"><span className="count">24</span>+</h1>
                    <h4>Team advisor</h4>
                </div>
                <div className="col-lg-1-5 text-center d-none d-lg-block">
                    <h1 className="heading-1"><span className="count">26</span>+</h1>
                    <h4>Products Sale</h4>
                </div>
            </div>
        </section>
    )
}

const Section5 = () => {
    return (
        <section className="mb-50">
            <h2 className="title style-3 mb-40 text-center">Our Team</h2>
            <div className="row">
                <div className="col-lg-4 mb-lg-0 mb-md-5 mb-sm-5">
                    <h6 className="mb-5 text-brand">تیم ما</h6>
                    <h1 className="mb-30">با اعضای تیم تخصصی ما آشنا شوید.</h1>
                    <p className="mb-30">Proin ullamcorper pretium orci. Donec necscele risque leo.
                        Nam massa dolor imperdiet neccon sequata congue idsem. Maecenas malesuada
                        faucibus finibus.</p>
                    <p className="mb-30">Proin ullamcorper pretium orci. Donec necscele risque leo.
                        Nam massa dolor imperdiet neccon sequata congue idsem. Maecenas malesuada
                        faucibus finibus.</p>
                    <a href="#" className="btn">View All Members</a>
                </div>
                <div className="col-lg-8">
                    <div className="row">
                        <div className="col-lg-6 col-md-6">
                            <div className="team-card">
                                <img src="/assets/imgs/page/about-6.png" alt="nest"/>
                                <div className="content text-center">
                                    <h4 className="mb-5">H. Merinda</h4>
                                    <span>CEO & Co-Founder</span>
                                    <div className="social-network mt-20">
                                        <a href="#"><img
                                            src="/assets/imgs/theme/icons/icon-facebook-brand.svg"
                                            alt="nest"/></a>
                                        <a href="#"><img
                                            src="/assets/imgs/theme/icons/icon-twitter-brand.svg"
                                            alt="nest"/></a>
                                        <a href="#"><img
                                            src="/assets/imgs/theme/icons/icon-instagram-brand.svg"
                                            alt="nest"/></a>
                                        <a href="#"><img
                                            src="/assets/imgs/theme/icons/icon-youtube-brand.svg"
                                            alt="nest"/></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6">
                            <div className="team-card">
                                <img src="/assets/imgs/page/about-8.png" alt="nest"/>
                                <div className="content text-center">
                                    <h4 className="mb-5">Dilan Specter</h4>
                                    <span>Head Engineer</span>
                                    <div className="social-network mt-20">
                                        <a href="#"><img
                                            src="/assets/imgs/theme/icons/icon-facebook-brand.svg"
                                            alt="nest"/></a>
                                        <a href="#"><img
                                            src="/assets/imgs/theme/icons/icon-twitter-brand.svg"
                                            alt="nest"/></a>
                                        <a href="#"><img
                                            src="/assets/imgs/theme/icons/icon-instagram-brand.svg"
                                            alt="nest"/></a>
                                        <a href="#"><img
                                            src="/assets/imgs/theme/icons/icon-youtube-brand.svg"
                                            alt="nest"/></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

function About() {

    return (
        <>
            <Layout parent="خانه" sub="صفحات" subChild="درباره ما">
                <div className="container  pt-50">
                    <div className="row">
                        <div className="col-xl-10 col-lg-12 m-auto">
                            <Section1/>
                            <Section2/>
                            <Section3/>
                        </div>
                    </div>
                </div>
                <Section4/>
                <div className="container">
                    <div className="row">
                        <div className="col-xl-10 col-lg-12 m-auto">
                            <Section5 />
                        </div>
                    </div>
                </div>
            </Layout>
        </>
    );
}

export default About;
