export default function Shop() {
    return <h1><>
    {/* <div className="preloader">
      <img
        className="preloader__image"
        width={60}
        src="assets/images/loader.png"
        alt=""
      />
    </div> */}
    {/* /.preloader */}
    <>
  <div className="page-wrapper">
    <header className="main-header main-header--one main-header--one--two  clearfix">
      <div className="main-header--one__wrapper">
        <div className="auto-container">
          <div className="main-header--one__inner">
            <div className="main-header--one__left">
              <div className="logo">
                <a href="index.html">
                  <img src="assets/images/resources/logo-2.png" alt="" />
                </a>
              </div>
            </div>
            <nav className="main-menu main-menu--1">
              <div className="main-menu__inner">
                <a href="#" className="mobile-nav__toggler">
                  <i className="fa fa-bars" />
                </a>
                <div className="stricky-one-logo">
                  <div className="logo">
                    <a href="index.html">
                      <img src="assets/images/resources/logo-1.png" alt="" />
                    </a>
                  </div>
                </div>
                <div className="main-header--one__middle">
                  <ul className="main-menu__list">
                    <li className="dropdown">
                      <a href="index.html">Home</a>
                      <ul>
                        <li>
                          <a href="index.html">Home One</a>
                        </li>
                        <li>
                          <a href="index-2.html">Home Two</a>
                        </li>
                        <li>
                          <a href="index-3.html">Home Three</a>
                        </li>
                        <li className="dropdown">
                          <a href="#">Header Styles</a>
                          <ul>
                            <li>
                              <a href="index.html">Header One</a>
                            </li>
                            <li>
                              <a href="index-2.html">Header Two</a>
                            </li>
                            <li>
                              <a href="index-3.html">Header Three</a>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="about.html">About</a>
                    </li>
                    <li className="dropdown">
                      <a href="#">Services</a>
                      <ul>
                        <li>
                          <a href="services.html">Services</a>
                        </li>
                        <li>
                          <a href="services-two.html">Services Two</a>
                        </li>
                        <li>
                          <a href="services-single-1.html">
                            Floor Demolition Installation
                          </a>
                        </li>
                        <li>
                          <a href="services-single-2.html">Floor Refinishing</a>
                        </li>
                        <li>
                          <a href="services-single-3.html">
                            Luxury Vinyl Plank
                          </a>
                        </li>
                        <li>
                          <a href="services-single-4.html">
                            Emergency Door Repair
                          </a>
                        </li>
                        <li>
                          <a href="services-single-5.html">
                            Heavy Industry &amp; Mining
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="dropdown">
                      <a href="#">Page</a>
                      <ul>
                        <li>
                          <a href="protfolio.html">Protfolio</a>
                        </li>
                        <li>
                          <a href="protfolio-v2.html">Protfolio Two</a>
                        </li>
                        <li>
                          <a href="protfolio-single.html">Protfolio Single</a>
                        </li>
                        <li>
                          <a href="team.html">Team</a>
                        </li>
                        <li>
                          <a href="error.html">Error</a>
                        </li>
                      </ul>
                    </li>
                    <li className="dropdown current">
                      <a href="#">Shop</a>
                      <ul>
                        <li>
                          <a href="shop.html">Shop One</a>
                        </li>
                        <li>
                          <a href="shop-two.html">Shop Two</a>
                        </li>
                        <li>
                          <a href="shop-details.html">Shop Details</a>
                        </li>
                        <li>
                          <a href="cart.html">Cart</a>
                        </li>
                        <li>
                          <a href="checkout.html">Checkout</a>
                        </li>
                      </ul>
                    </li>
                    <li className="dropdown">
                      <a href="#">Blog</a>
                      <ul>
                        <li>
                          <a href="blog.html">Blog</a>
                        </li>
                        <li>
                          <a href="blog-v2.html">Blog Two</a>
                        </li>
                        <li>
                          <a href="blog-single.html">Blog Single</a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="contact.html">Contact</a>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
            <div className="main-header--one__right clearfix">
              <div className="number">
                <a href="tel:123456789">+88 016848651</a>
              </div>
              <div className="social-icon">
                <ul>
                  <li>
                    <a href="#">
                      <span className="fab fa-facebook" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span className="fab fa-linkedin" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span className="fab fa-pinterest-p" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span className="fab fa-google" />
                    </a>
                  </li>
                </ul>
              </div>
              <div className="hidden-content-button bar-box">
                <a
                  className="side-nav-toggler nav-toggler hidden-bar-opener"
                  href="#"
                >
                  <ul>
                    <li />
                    <li />
                    <li />
                  </ul>
                  <ul>
                    <li />
                    <li />
                    <li />
                  </ul>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
    <div className="stricky-header stricked-menu main-menu">
      <div className="sticky-header__content"></div>
      {/* /.sticky-header__content */}
    </div>
    {/* /.stricky-header */}
    {/* Hidden Navigation Bar */}
    <section className="hidden-bar right-align">
      <div className="hidden-bar-closer">
        <button>
          <span className="fa fa-times" />
        </button>
      </div>
      <div className="hidden-bar-wrapper">
        <div className="logo">
          <a href="index.html">
            <img src="assets/images/resources/logo-1.png" alt="Logo" />
          </a>
        </div>
        <div className="hiddenbar-about-us">
          <h3>About Us</h3>
          <div className="text">
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s,
            </p>
          </div>
        </div>
        <div className="contact-info-box">
          <h3>Contact Info</h3>
          <ul>
            <li>
              <h5>Address</h5>
              <p>
                48 10h Street, Office 478 Road 5 <br />
                Berlin, CA 700156
              </p>
            </li>
            <li>
              <h5>Phone</h5>
              <p>
                <a href="tel:123456789">+88 016848651</a>
              </p>
            </li>
            <li>
              <h5>Email</h5>
              <p>
                <a href="mailto:needhelp@company.com">infogamil@gmail.com</a>
              </p>
            </li>
          </ul>
        </div>
        <div className="newsletter-form-box">
          <h3>Newsletter Subscribe</h3>
          <form action="#">
            <div className="row">
              <div className="col-xl-12">
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address..."
                />
                <button type="submit">
                  <i className="fa fa-paper-plane" aria-hidden="true" />
                </button>
              </div>
            </div>
          </form>
        </div>
        <div className="copy-right-text">
          <p>© Alori 2021, All Rights Reserved.</p>
        </div>
      </div>
    </section>
    {/* End Hidden Bar */}
    {/*Start Page Header*/}
    <section className="page-header style2">
      <div
        className="page-header__bg"
        style={{
          backgroundImage: "url(assets/images/backgrounds/page-header-img5.jpg)"
        }}
      ></div>
      <div className="container">
        <div className="row">
          <div className="col-xl-12">
            <div className="page-header__wrapper">
              <div className="page-header__content">
                <h2>Ship With Sidebar Grid</h2>
                <div className="page-header__menu">
                  <ul>
                    <li>
                      <a href="index.html">Home</a>
                    </li>
                    <li>Our Shop</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/*End Page Header*/}
    {/*Start Shop Two*/}
    <section className="shop-two">
      <div className="container">
        <div className="row">
          <div className="col-xl-12">
            <div className="shop-two__top">
              <div className="shop-two__sorting default-form">
                <div className="left">
                  <p>Showing 12 of 120 results</p>
                </div>
                <div className="right">
                  <div className="select-box">
                    <select className="wide">
                      <option data-display="Default sorting">
                        Default sorting
                      </option>
                      <option value={1}>Sort by popular</option>
                      <option value={2}>Sort by Price</option>
                      <option value={3}>Sort by Ratings</option>
                    </select>
                  </div>
                  <ul className="product-view-style">
                    <li>
                      <a href="#">
                        <span className="fa fa-th" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <span className="fa fa-list" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          {/*Start Shop Two Sidebar*/}
          <div className="col-xl-4 col-lg-5">
            <div className="shop-two__sidebar">
              {/*Start Shop Two Sidebar Single*/}
              <div className="shop-two__sidebar-single">
                <div className="shop-two__sidebar-single-search">
                  <form className="search-form" action="#">
                    <input placeholder="Search Product" type="text" />
                    <button type="submit">
                      <i
                        className="alori-icon-three-search1"
                        aria-hidden="true"
                      />
                    </button>
                  </form>
                </div>
              </div>
              {/*End Shop Two Sidebar Single*/}
              {/*Start Shop Two Sidebar Single*/}
              <div className="shop-two__sidebar-single">
                <div className="shop-two__sidebar-single-categories">
                  <div className="title-box">
                    <div className="text">
                      <h2>Categories</h2>
                    </div>
                    <div className="icon">
                      <span className="alori-icon-three-arrow-up" />
                    </div>
                  </div>
                  <ul>
                    <li>
                      <a href="#">
                        Hardwood <span>(6)</span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        Dining Room <span>(7)</span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        Kitchen <span>(1)</span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        Wide Wood <span>(4)</span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        Bathroom <span>(12)</span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        Hallway <span>(9)</span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        Industrial Tile <span>(14)</span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        Traditional Tile <span>(16)</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              {/*End Shop Two Sidebar Single*/}
              {/*Start Shop Two Sidebar Single*/}
              <div className="shop-two__sidebar-single">
                <div className="shop-two__sidebar-single-material">
                  <div className="title-box">
                    <div className="text">
                      <h2>Material</h2>
                    </div>
                    <div className="icon">
                      <span className="alori-icon-three-arrow-up" />
                    </div>
                  </div>
                  <ul>
                    <li>
                      <a href="#">
                        Marble <span>(141)</span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        Ceramic <span>(230)</span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        Limestone <span>(61)</span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        Porcelain <span>(28)</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              {/*End Shop Two Sidebar Single*/}
              {/*Start Shop Two Sidebar Single*/}
              <div className="shop-two__sidebar-single">
                <div className="shop-two__sidebar-single-size">
                  <div className="title-box">
                    <div className="text">
                      <h2>Size</h2>
                    </div>
                    <div className="icon">
                      <span className="alori-icon-three-arrow-up" />
                    </div>
                  </div>
                  <ul>
                    <li>
                      <a href="#">
                        8.5 x 11 <span>(3)</span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        8 x 24 <span>(7)</span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        3 x 6 <span>(55)</span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        10 x 10 <span>(11)</span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        10 x 12 <span>(1)</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              {/*End Shop Two Sidebar Single*/}
            </div>
          </div>
          {/*End Shop Two Sidebar*/}
          {/*Start Shop Two Content*/}
          <div className="col-xl-8 col-lg-7">
            <div className="shop-two__content">
              <div className="row">
                {/*Start Single Product One*/}
                <div
                  className="col-xl-6 col-lg-6 col-md-6  wow fadeInLeft"
                  data-wow-delay="100ms"
                  data-wow-duration="1500ms"
                >
                  <div className="product-one__single">
                    <div className="product-one__single-img">
                      <img
                        src="assets/images/resources/product-v1-img2.jpg"
                        alt=""
                      />
                    </div>
                    <div className="product-one__single-content text-center">
                      <h2>
                        <a href="shop-details.html">White Marble</a>
                      </h2>
                      <p>$45.00</p>
                    </div>
                  </div>
                </div>
                {/*End Single Product One*/}
                {/*Start Single Product One*/}
                <div
                  className="col-xl-6 col-lg-6 col-md-6 wow fadeInRight"
                  data-wow-delay="200ms"
                  data-wow-duration="1500ms"
                >
                  <div className="product-one__single">
                    <div className="product-one__single-img">
                      <img
                        src="assets/images/resources/product-v1-img3.jpg"
                        alt=""
                      />
                    </div>
                    <div className="product-one__single-content text-center">
                      <h2>
                        <a href="shop-details.html">Castlewood Oak10 </a>
                      </h2>
                      <p>
                        <span>
                          <del>$45.00</del>
                        </span>{" "}
                        $35.00
                      </p>
                    </div>
                  </div>
                </div>
                {/*End Single Product One*/}
                {/*Start Single Product One*/}
                <div
                  className="col-xl-6 col-lg-6 col-md-6 wow fadeInLeft"
                  data-wow-delay="0ms"
                  data-wow-duration="1500ms"
                >
                  <div className="product-one__single">
                    <div className="product-one__single-img">
                      <img
                        src="assets/images/resources/product-v1-img10.jpg"
                        alt=""
                      />
                    </div>
                    <div className="product-one__single-content text-center">
                      <h2>
                        <a href="shop-details.html">Stone Flooring</a>
                      </h2>
                      <p> $45.00</p>
                    </div>
                  </div>
                </div>
                {/*End Single Product One*/}
                {/*Start Single Product One*/}
                <div
                  className="col-xl-6 col-lg-6 col-md-6 wow fadeInRight"
                  data-wow-delay="100ms"
                  data-wow-duration="1500ms"
                >
                  <div className="product-one__single">
                    <div className="product-one__single-img">
                      <img
                        src="assets/images/resources/product-v1-img6.jpg"
                        alt=""
                      />
                    </div>
                    <div className="product-one__single-content text-center">
                      <h2>
                        <a href="shop-details.html">Hard Road Stone </a>
                      </h2>
                      <p>
                        <span>
                          <del>$45.00</del>
                        </span>{" "}
                        $35.00
                      </p>
                    </div>
                  </div>
                </div>
                {/*End Single Product One*/}
                {/*Start Single Product One*/}
                <div
                  className="col-xl-6 col-lg-6 col-md-6 wow fadeInLeft"
                  data-wow-delay="200ms"
                  data-wow-duration="1500ms"
                >
                  <div className="product-one__single">
                    <div className="product-one__single-img">
                      <img
                        src="assets/images/resources/product-v1-img11.jpg"
                        alt=""
                      />
                    </div>
                    <div className="product-one__single-content text-center">
                      <h2>
                        <a href="shop-details.html">Laminated Wood</a>
                      </h2>
                      <p>$45.00</p>
                    </div>
                  </div>
                </div>
                {/*End Single Product One*/}
                {/*Start Single Product One*/}
                <div
                  className="col-xl-6 col-lg-6 col-md-6 wow fadeInRight"
                  data-wow-delay="200ms"
                  data-wow-duration="1500ms"
                >
                  <div className="product-one__single">
                    <div className="product-one__single-img">
                      <img
                        src="assets/images/resources/product-v1-img12.jpg"
                        alt=""
                      />
                    </div>
                    <div className="product-one__single-content text-center">
                      <h2>
                        <a href="shop-details.html">Laminated Wood Stone </a>
                      </h2>
                      <p>
                        <span>
                          <del>$45.00</del>
                        </span>{" "}
                        $35.00
                      </p>
                    </div>
                  </div>
                </div>
                {/*End Single Product One*/}
                {/*Start Single Product One*/}
                <div
                  className="col-xl-6 col-lg-6 col-md-6 wow fadeInLeft"
                  data-wow-delay="200ms"
                  data-wow-duration="1500ms"
                >
                  <div className="product-one__single">
                    <div className="product-one__single-img">
                      <img
                        src="assets/images/resources/product-v1-img13.jpg"
                        alt=""
                      />
                    </div>
                    <div className="product-one__single-content text-center">
                      <h2>
                        <a href="shop-details.html">Wheat Field Oak</a>
                      </h2>
                      <p>$45.00</p>
                    </div>
                  </div>
                </div>
                {/*End Single Product One*/}
                {/*Start Single Product One*/}
                <div
                  className="col-xl-6 col-lg-6 col-md-6 wow fadeInRight"
                  data-wow-delay="200ms"
                  data-wow-duration="1500ms"
                >
                  <div className="product-one__single">
                    <div className="product-one__single-img">
                      <img
                        src="assets/images/resources/product-v1-img14.jpg"
                        alt=""
                      />
                    </div>
                    <div className="product-one__single-content text-center">
                      <h2>
                        <a href="shop-details.html">Smoke Signal Hickory</a>
                      </h2>
                      <p>
                        <span>
                          <del>$45.00</del>
                        </span>{" "}
                        $35.00
                      </p>
                    </div>
                  </div>
                </div>
                {/*End Single Product One*/}
              </div>
              <div className="product-one__pagination style2">
                <ul className="styled-pagination clearfix">
                  <li className="active">
                    <a href="#">1</a>
                  </li>
                  <li>
                    <a href="#">2</a>
                  </li>
                  <li>
                    <a href="#">3</a>
                  </li>
                  <li className="arrow next">
                    <a href="#">
                      <span className="alori-icon-three-right-arrow" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/*End Shop Two Content*/}
        </div>
      </div>
    </section>
    {/*End Shop Two*/}
    {/*Start Footer Three*/}
    <footer className="footer-three">
      <div className="footer-three__top">
        <div
          className="footer-three__top-bg"
          style={{
            backgroundImage: "url(assets/images/backgrounds/footer-v3-bg.jpg)"
          }}
        />
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="footer-three__top-wrapper">
                <div className="row">
                  {/*Start Footer Widget Column Two*/}
                  <div
                    className="col-xl-3 col-lg-6 col-md-6 wow animated fadeInUp"
                    data-wow-delay="0.1s"
                  >
                    <div className="footer-widget__column-two footer-widget__about-two">
                      <div className="logo-box">
                        <a href="index.html">
                          <img
                            src="assets/images/resources/logo-4.png"
                            alt=""
                          />
                        </a>
                      </div>
                      <p className="footer-widget__about-two-text">
                        Worldwide Flooring Company is a leading industrial
                        flooring contractor
                      </p>
                      <div className="social-links">
                        <ul>
                          <li>
                            <a href="#">
                              <i className="fab fa-facebook" />
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="fab fa-twitter" />
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="fab fa-pinterest-p" />
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  {/*End Footer Widget Column Two*/}
                  {/*Start Footer Widget Column Two*/}
                  <div
                    className="col-xl-3 col-lg-6 col-md-6 wow animated fadeInUp"
                    data-wow-delay="0.1s"
                  >
                    <div className="footer-widget__column-two footer-widget__address-two">
                      <h2 className="footer-widget__title-two">Our Address</h2>
                      <ul className="footer-widget__address-two-contact-info">
                        <li>
                          <div className="icon-box">
                            <span className="alori-icon-three-email" />
                          </div>
                          <div className="text-box">
                            <p>
                              <a href="mailto:needhelp@company.com">
                                helpus24@gmail.com
                              </a>
                            </p>
                          </div>
                        </li>
                        <li>
                          <div className="icon-box">
                            <span className="alori-icon-three-phone1" />
                          </div>
                          <div className="text-box">
                            <p>
                              <a href="tel:123456789">+088 11 22 33 44 55</a>
                            </p>
                          </div>
                        </li>
                        <li>
                          <div className="icon-box">
                            <span className="alori-icon-three-location" />
                          </div>
                          <div className="text-box">
                            <p>
                              Aski RA4, Suite 14545 <br /> Melbourne Australia
                            </p>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                  {/*End Footer Widget Column Two*/}
                  {/*Start Footer Widget Column Two*/}
                  <div
                    className="col-xl-2 col-lg-6 col-md-6 wow animated fadeInUp"
                    data-wow-delay="0.1s"
                  >
                    <div className="footer-widget__column-two footer-widget__services-two">
                      <h2 className="footer-widget__title-two">Services</h2>
                      <ul className="footer-widget__services-two-list">
                        <li>
                          <a href="#">Tile Installation</a>
                        </li>
                        <li>
                          <a href="#">Stone Installation</a>
                        </li>
                        <li>
                          <a href="#">Stair Flooring</a>
                        </li>
                        <li>
                          <a href="#">Laminate Installation</a>
                        </li>
                        <li>
                          <a href="#">Hardwood Installation</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  {/*End Footer Widget Column Two*/}
                  {/*Start Footer Widget Column Two*/}
                  <div
                    className="col-xl-4 col-lg-6 col-md-6 wow animated fadeInUp"
                    data-wow-delay="0.1s"
                  >
                    <div className="footer-widget__column-two footer-widget__newsletter-two">
                      <h2 className="footer-widget__title-two">Newsletter</h2>
                      <p>
                        Join over 111,000 people getting our emails Newsletter
                      </p>
                      <form className="footer-widget__newsletter-two-form">
                        <div className="input-box">
                          <input
                            type="email"
                            placeholder="Email address"
                            name="email"
                          />
                          <button
                            type="submit"
                            className="footer-widget__newsletter-two-btn"
                          >
                            <span className="alori-icon-three-send" />
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                  {/*End Footer Widget Column Two*/}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*Start Footer One Bottom*/}
      <div className="footer-three__bottom clearfix">
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="footer-three__bottom-inner">
                <div className="footer-three__bottom-text">
                  <p>All Rights Reserved ©2022 Template_Mr </p>
                </div>
                <div className="footer-three__bottom-menu">
                  <ul>
                    <li>
                      <a href="about.html">Privacy &amp; Terms</a>
                    </li>
                    <li>
                      <a href="contact.html"> Contact Us</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*End Footer One Bottom*/}
    </footer>
    {/*End Footer Three*/}
  </div>
  {/* /.page-wrapper */}
  <div className="mobile-nav__wrapper">
    <div className="mobile-nav__overlay mobile-nav__toggler" />
    {/* /.mobile-nav__overlay */}
    <div className="mobile-nav__content">
      <span className="mobile-nav__close mobile-nav__toggler">
        <i className="fa fa-times" />
      </span>
      <div className="logo-box">
        <a href="index.html" aria-label="logo image">
          <img
            src="assets/images/resources/mobilemenu_logo.png"
            width={155}
            alt=""
          />
        </a>
      </div>
      {/* /.logo-box */}
      <div className="mobile-nav__container" />
      {/* /.mobile-nav__container */}
      <ul className="mobile-nav__contact list-unstyled">
        <li>
          <i className="fa fa-envelope" aria-hidden="true" />
          <a href="mailto:needhelp@packageName__.com">needhelp@alori.com</a>
        </li>
        <li>
          <i className="fa fa-phone" aria-hidden="true" />
          <a href="tel:666-888-0000">666 888 0000</a>
        </li>
      </ul>
      {/* /.mobile-nav__contact */}
      <div className="mobile-nav__top">
        <div className="mobile-nav__social">
          <a href="#" className="fab fa-twitter" />
          <a href="#" className="fab fa-facebook-square" />
          <a href="#" className="fab fa-pinterest-p" />
          <a href="#" className="fab fa-instagram" />
        </div>
        {/* /.mobile-nav__social */}
      </div>
      {/* /.mobile-nav__top */}
    </div>
    {/* /.mobile-nav__content */}
  </div>
  {/* /.mobile-nav__wrapper */}
  <div className="search-popup">
    <div className="search-popup__overlay search-toggler" />
    {/* /.search-popup__overlay */}
    <div className="search-popup__content">
      <form action="#">
        <label htmlFor="search" className="sr-only">
          search here
        </label>
        {/* /.sr-only */}
        <input type="text" id="search" placeholder="Search Here..." />
        <button type="submit" aria-label="search submit" className="thm-btn2">
          <i className="fa fa-search" aria-hidden="true" />
        </button>
      </form>
    </div>
    {/* /.search-popup__content */}
  </div>
  {/* /.search-popup */}
  <a href="#" data-target="html" className="scroll-to-target scroll-to-top">
    <i className="icon-next" />
  </a>
  {/* template js */}
</>

    {/* template js */}
  </>
  </h1>;
}