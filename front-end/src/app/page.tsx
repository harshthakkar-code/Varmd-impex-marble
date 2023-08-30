import Image from 'next/image'
import '../../public/assets/css/alori.css'
export default function Home() {
  return (
    <main className="">
    <>
  {/* <div className="preloader">
    <img
      className="preloader__image"
      width={60}
      src="assets/images/loader.png"
      alt=""
    />
  </div> */}
  {/* /.preloader */}
  <div className="page-wrapper">
    <header className="main-header main-header--one  clearfix">
      <div className="main-header--one__wrapper">
        <div className="auto-container">
          <div className="main-header--one__inner">
            <div className="main-header--one__left">
              <div className="logo">
                <a href="index.html">
                  <img src="assets/images/resources/logo-1.png" alt="" />
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
                    <li className="dropdown current">
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
                    <li className="dropdown">
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
    {/*Main Slider Start*/}
    <section className="main-slider main-slider-one">
      <div
        className="swiper-container thm-swiper__slider"
        data-swiper-options='{"slidesPerView": 1, "loop": true, "effect": "fade", "pagination": {
      "el": "#main-slider-pagination",
      "type": "bullets",
      "clickable": true
      },
      "navigation": {
      "nextEl": "#main-slider__swiper-button-next",
      "prevEl": "#main-slider__swiper-button-prev"
      },
      "autoplay": {
      "delay": 7000
      }}'
      >
        <div className="swiper-wrapper">
          {/*Start Single Swiper Slide*/}
          <div className="swiper-slide">
            <div
              className="image-layer"
              style={{
                backgroundImage:
                  "url(assets/images/backgrounds/main-slider-v1-1.jpg)"
              }}
            />
            <div className="container">
              <div className="row">
                <div className="col-xl-12">
                  <div className="main-slider-one__inner text-center">
                    <p className="main-slider-one__text">
                      A Complete Solution for Your Flooring Vision.
                    </p>
                    <h2 className="main-slider-one__title">
                      Welcome to Our Alori <br /> Flooring Solutions
                    </h2>
                    <div className="main-slider-one__btn">
                      <a href="#" className="thm-btn">
                        Our Solution
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/*End Single Swiper Slide*/}
          {/*Start Single Swiper Slide*/}
          <div className="swiper-slide">
            <div
              className="image-layer"
              style={{
                backgroundImage:
                  "url(assets/images/backgrounds/main-slider-v1-2.jpg)"
              }}
            />
            <div className="container">
              <div className="row">
                <div className="col-xl-12">
                  <div className="main-slider-one__inner text-center">
                    <p className="main-slider-one__text">
                      A Complete Solution for Your Flooring Vision.
                    </p>
                    <h2 className="main-slider-one__title">
                      Welcome to Our Alori <br /> Flooring Solutions
                    </h2>
                    <div className="main-slider-one__btn">
                      <a href="#" className="thm-btn">
                        Our Solution
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/*End Single Swiper Slide*/}
          {/*Start Single Swiper Slide*/}
          <div className="swiper-slide">
            <div
              className="image-layer"
              style={{
                backgroundImage:
                  "url(assets/images/backgrounds/main-slider-v1-3.jpg)"
              }}
            />
            <div className="container">
              <div className="row">
                <div className="col-xl-12">
                  <div className="main-slider-one__inner text-center">
                    <p className="main-slider-one__text">
                      A Complete Solution for Your Flooring Vision.
                    </p>
                    <h2 className="main-slider-one__title">
                      Welcome to Our Alori <br /> Flooring Solutions
                    </h2>
                    <div className="main-slider-one__btn">
                      <a href="#" className="thm-btn">
                        Our Solution
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/*End Single Swiper Slide*/}
          {/*Start Single Swiper Slide*/}
          <div className="swiper-slide">
            <div
              className="image-layer"
              style={{
                backgroundImage:
                  "url(assets/images/backgrounds/main-slider-v1-4.jpg)"
              }}
            />
            <div className="container">
              <div className="row">
                <div className="col-xl-12">
                  <div className="main-slider-one__inner text-center">
                    <p className="main-slider-one__text">
                      A Complete Solution for Your Flooring Vision.
                    </p>
                    <h2 className="main-slider-one__title">
                      Welcome to Our Alori <br /> Flooring Solutions
                    </h2>
                    <div className="main-slider-one__btn">
                      <a href="#" className="thm-btn">
                        Our Solution
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/*End Single Swiper Slide*/}
        </div>
        {/* If we need navigation buttons */}
      </div>
    </section>
    {/*Main Slider End*/}
    {/*Start Your Project One*/}
    <section className="your-project-one">
      <div className="container">
        <div className="row">
          <div className="col-xl-12">
            <div className="your-project-one__wrapper">
              <ul>
                <li className="your-project-one__single">
                  <div className="your-project-one__single-content-box text-center">
                    <h4>
                      <a href="contact.html">
                        Contact <br />
                        Us
                      </a>
                    </h4>
                  </div>
                  <div className="your-project-one__single-text-box">
                    <h2>
                      How Can We <br />
                      Help You?
                    </h2>
                    <p>
                      Find out how you can get a landscape
                      <br /> that supports your goals{" "}
                    </p>
                  </div>
                </li>
                <li className="your-project-one__single">
                  <div className="your-project-one__single-text-box mar-t0">
                    <h2>
                      Let’s Start Your
                      <br /> Project
                    </h2>
                    <p>
                      Make an appointment &amp; Start
                      <br /> your project today.
                    </p>
                  </div>
                  <div className="your-project-one__single-btn">
                    <a href="#" className="thm-btn">
                      Project
                    </a>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/*End Your Project One*/}
    {/*Start About One*/}
    <section className="about-one">
      <div className="container">
        <div className="row">
          {/*Start About One Img Box*/}
          <div className="col-xl-6">
            <div className="about-one__img">
              <div className="shape1 zoom-fade">
                <img src="assets/images/shapes/about-v1-shape1.png" alt="" />
              </div>
              <div className="about-one__img1">
                <img src="assets/images/about/about-v1-img1.jpg" alt="" />
              </div>
              <div className="about-one__img2">
                <div className="video-icon">
                  <a
                    className="video-popup wow zoomIn animated animated animated animated"
                    data-wow-delay="300ms"
                    data-wow-duration="1500ms"
                    title=" Video"
                    href="https://www.youtube.com/watch?v=p25gICT63ek"
                    style={{
                      visibility: "visible",
                      animationDuration: "1500ms",
                      animationDelay: "300ms",
                      animationName: "zoomIn"
                    }}
                  >
                    <span className="icon-play-button-3" />
                  </a>
                </div>
                <img src="assets/images/about/about-v1-img2.jpg" alt="" />
              </div>
            </div>
          </div>
          {/*End About One Img Box*/}
          {/*Start About One Content*/}
          <div className="col-xl-6">
            <div className="about-one__content">
              <div className="sec-title">
                <span className="sec-title__tagline">Why Choose Us</span>
                <h2 className="sec-title__title">
                  About agori Solutions
                  <br /> flooring company
                </h2>
              </div>
              <div className="about-one__content-text">
                <p>
                  Slando is a full-service landscape company. Our established
                  systems allow us to deliver industry-leading landscape
                  <br /> solutions to commercial and residential clients.{" "}
                </p>
              </div>
              <ul className="about-one__content-list">
                <li>
                  <div className="icon">
                    <span className="icon-wood-board" />
                  </div>
                  <div className="title">
                    <h3>Hardwood Floor Repair</h3>
                  </div>
                </li>
                <li>
                  <div className="icon">
                    <span className="icon-customer-satisfaction-1" />
                  </div>
                  <div className="title">
                    <h3>Custom projects with unique designs</h3>
                  </div>
                </li>
                <li>
                  <div className="icon">
                    <span className="icon-kitchen" />
                  </div>
                  <div className="title">
                    <h3>We bring our showroom to your home.</h3>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          {/*End About One Content*/}
        </div>
      </div>
    </section>
    {/*End About One*/}
    {/*Start Best Logistics One*/}
    <section className="best-logistics-one">
      <div className="shape2 zoominout">
        <img src="assets/images/shapes/best-logistics-v1-shape2.png" alt="" />
      </div>
      <div className="container">
        <div className="row">
          {/*Start Best Logistics One Content*/}
          <div className="col-xl-6">
            <div className="best-logistics-one__content">
              <div className="sec-title">
                <h2 className="sec-title__title">
                  Expert Flooring <br />
                  Installers
                </h2>
                <p className="sec-title__text">
                  There are many variations of passages of Lorem Ipsum available
                  but the majority have suffered alteration{" "}
                </p>
              </div>
              <ul className="best-logistics-one__content-counter">
                <li
                  className="wow fadeInUp"
                  data-wow-delay="0ms"
                  data-wow-duration="1500ms"
                >
                  <div className="inner">
                    <h2>
                      <span className="odometer" data-count={5}>
                        00
                      </span>
                      <span className="k">k</span>
                      <span className="fa fa-plus plus-icon" />
                    </h2>
                    <h3 className="best-logistics-one__content-counter-title">
                      Completed Projects
                    </h3>
                    <p className="best-logistics-one__content-counter-text">
                      5k complete work
                    </p>
                  </div>
                </li>
                <li
                  className="wow fadeInUp"
                  data-wow-delay="200ms"
                  data-wow-duration="1500ms"
                >
                  <h2>
                    <span className="odometer" data-count={30}>
                      00
                    </span>
                    <span className="fa fa-plus plus-icon pd-l" />
                  </h2>
                  <h3 className="best-logistics-one__content-counter-title">
                    Our Expert{" "}
                  </h3>
                  <p className="best-logistics-one__content-counter-text">
                    Expert Flooring worker
                  </p>
                </li>
              </ul>
              <div className="best-logistics-one__content-bottom">
                <div className="best-logistics-one__content-bottom-text">
                  <p>We can help you stand out your business</p>
                </div>
                <div className="best-logistics-one__content-bottom-btn">
                  <a href="#" className="thm-btn">
                    Learn More
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/*End Best Logistics One Content*/}
          {/*Start Best Logistics One Img*/}
          <div className="col-xl-6">
            <div className="best-logistics-one__img">
              <div className="shape1 zoom-fade">
                <img
                  src="assets/images/shapes/best-logistics-v1-shape1.png"
                  alt=""
                />
              </div>
              <div className="shape3">
                <img
                  src="assets/images/shapes/best-logistics-v1-shape2.png"
                  alt=""
                />
              </div>
              <div className="best-logistics-one__img-inner">
                <img
                  src="assets/images/resources/best-logistics-v1-img.jpg"
                  alt=""
                />
              </div>
              <div className="overlay-content">
                <h2>We Are Since 2006 ! Over 200 Awards</h2>
              </div>
            </div>
          </div>
          {/*End Best Logistics One Img*/}
        </div>
      </div>
    </section>
    {/*End Best Logistics One*/}
    {/*Services One Start*/}
    <section className="services-one clearfix">
      <div className="container">
        <div className="sec-title text-center">
          <h2 className="sec-title__title">Services We Provide</h2>
          <p className="sec-title__text">
            Our design services starts and ends with a best in class experience
            <br />
            strategy that builds brands.
          </p>
        </div>
        <div className="row">
          {/*Start Single Services One*/}
          <div
            className="col-xl-4 col-lg-4 wow fadeInLeft"
            data-wow-delay="0ms"
            data-wow-duration="1500ms"
          >
            <div className="services-one__single text-center">
              <div className="services-one__single-icon">
                <span className="icon-carpet" />
              </div>
              <h2>
                <a href="services-single-1.html">Carpet Removal</a>
              </h2>
              <div className="text">
                <p>
                  Fusce dapibus, tellus ac cursus co <br /> mmodo,tortor mauris
                  condimen <br /> tum nibh, ut fermentum{" "}
                </p>
              </div>
            </div>
          </div>
          {/*End Single Services One*/}
          {/*Start Single Services One*/}
          <div
            className="col-xl-4 col-lg-4 wow fadeInLeft"
            data-wow-delay="200ms"
            data-wow-duration="1500ms"
          >
            <div className="services-one__single text-center">
              <div className="services-one__single-icon bg2">
                <span className="icon-kitchen1" />
              </div>
              <h2>
                <a href="services-single-1.html">Kitchen Strip Outs</a>
              </h2>
              <div className="text">
                <p>
                  Fusce dapibus, tellus ac cursus co <br /> mmodo,tortor mauris
                  condimen <br /> tum nibh, ut fermentum{" "}
                </p>
              </div>
            </div>
          </div>
          {/*End Single Services One*/}
          {/*Start Single Services One*/}
          <div
            className="col-xl-4 col-lg-4 wow fadeInLeft"
            data-wow-delay="400ms"
            data-wow-duration="1500ms"
          >
            <div className="services-one__single text-center">
              <div className="services-one__single-icon bg3">
                <span className="icon-logs" />
              </div>
              <h2>
                <a href="services-single-1.html">Timber Floor Removal</a>
              </h2>
              <div className="text">
                <p>
                  Fusce dapibus, tellus ac cursus co <br /> mmodo,tortor mauris
                  condimen <br /> tum nibh, ut fermentum{" "}
                </p>
              </div>
            </div>
          </div>
          {/*End Single Services One*/}
        </div>
      </div>
    </section>
    {/*Services One End*/}
    {/*Start Our Material One*/}
    <section className="our-material-one">
      <div className="container">
        <div className="row">
          {/*Start Our Material One Content*/}
          <div className="col-xl-6">
            <div className="our-material-one__content">
              <div className="sec-title">
                <h2 className="sec-title__title">
                  Our Flooring <br />
                  Hardwood, <br />
                  Material Stone,
                  <br />
                  Laminate, Carpet
                </h2>
                <p className="sec-title__text">
                  There are many variations of passages of Lorem Ipsum available
                  but the majority have suffered alteration{" "}
                </p>
              </div>
              <div className="our-material-one__content-btn">
                <a href="#" className="thm-btn">
                  Our Product
                </a>
              </div>
            </div>
          </div>
          {/*End Our Material One Content*/}
          {/*Start Our Material One Img*/}
          <div className="col-xl-6">
            <div className="our-material-one__img">
              <div className="our-material-one__img1">
                <img
                  src="assets/images/resources/our-material-v1-img1.jpg"
                  alt=""
                />
              </div>
              <div
                className="our-material-one__img2 wow zoomIn"
                data-wow-delay="100ms"
              >
                <img
                  src="assets/images/resources/our-material-v1-img2.jpg"
                  alt=""
                />
              </div>
            </div>
          </div>
          {/*End Our Material One Img*/}
        </div>
      </div>
    </section>
    {/*End Our Material One*/}
    {/*Start Work One*/}
    <section className="work-one">
      <div className="shape1">
        <img src="assets/images/shapes/work-v1-shape1.png" alt="" />
      </div>
      <div className="container">
        <div className="sec-title text-center">
          <span className="sec-title__tagline">OUR PROCESS</span>
          <h2 className="sec-title__title">Our Concrete Finishing Services</h2>
        </div>
        <div className="row">
          {/*Start Single Work One*/}
          <div
            className="col-xl-3 col-lg-3 wow animated fadeInUp"
            data-wow-delay="0.1s"
          >
            <div className="work-one__single text-center">
              <div className="work-one__single-icon">
                <span className="icon-wood-board" />
                <div className="count-box" />
              </div>
              <h2>
                <a href="#">Color Board</a>
              </h2>
            </div>
          </div>
          {/*End Single Work One*/}
          {/*Start Single Work One*/}
          <div
            className="col-xl-3 col-lg-3 wow animated fadeInUp"
            data-wow-delay="0.1s"
          >
            <div className="work-one__single text-center">
              <div className="work-one__single-icon bg2">
                <span className="icon-wood" />
                <div className="count-box" />
              </div>
              <h2>
                <a href="#">Dimension</a>
              </h2>
            </div>
          </div>
          {/*End Single Work One*/}
          {/*Start Single Work One*/}
          <div
            className="col-xl-3 col-lg-3 wow animated fadeInUp"
            data-wow-delay="0.1s"
          >
            <div className="work-one__single text-center">
              <div className="work-one__single-icon bg3">
                <span className="icon-wheel-saw" />
                <div className="count-box" />
              </div>
              <h2>
                <a href="#">Installation</a>
              </h2>
            </div>
          </div>
          {/*End Single Work One*/}
          {/*Start Single Work One*/}
          <div
            className="col-xl-3 col-lg-3 wow animated fadeInUp"
            data-wow-delay="0.1s"
          >
            <div className="work-one__single text-center">
              <div className="work-one__single-icon bg4">
                <span className="icon-chisel" />
                <div className="count-box" />
              </div>
              <h2>
                <a href="#">Finishing</a>
              </h2>
            </div>
          </div>
          {/*End Single Work One*/}
        </div>
      </div>
    </section>
    {/*End Work One*/}
    {/*Start Projects One*/}
    <section className="projects-one">
      <div className="container">
        <div className="row">
          <div className="col-xl-12">
            <div className="projects-one__top">
              <div className="sec-title">
                <span className="sec-title__tagline">Our PROJECTS</span>
                <h2 className="sec-title__title">
                  We have done more than
                  <br />{" "}
                  <span className="odometer" data-count={712}>
                    00
                  </span>
                  <span className="plus">+</span> 712+ flooring successful
                  project
                </h2>
              </div>
              <div className="projects-one__top-btn">
                <a href="protfolio.html" className="thm-btn">
                  More Project
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="auto-container">
        <div className="row">
          {/*Start Single Projects One*/}
          <div
            className="col-xl-3 col-lg-6 wow fadeInLeft"
            data-wow-delay="0ms"
            data-wow-duration="1500ms"
          >
            <div className="projects-one__single">
              <div className="projects-one__single-img">
                <img
                  src="assets/images/resources/projects-v1-img1.jpg"
                  alt=""
                />
              </div>
              <div className="projects-one__single-content">
                <span>Hardwood</span>
                <h2>
                  <a href="protfolio-single.html">Hardword Flooring</a>
                </h2>
                <p>
                  Volutpat lacus laoreet curabitur. Cursus turpis in eu mi
                  bibendum{" "}
                </p>
                <div className="btn-box">
                  <a href="protfolio-single.html">
                    <span className="icon-next" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/*End Single Projects One*/}
          {/*Start Single Projects One*/}
          <div
            className="col-xl-3 col-lg-6 wow fadeInLeft"
            data-wow-delay="200ms"
            data-wow-duration="1500ms"
          >
            <div className="projects-one__single">
              <div className="projects-one__single-img">
                <img
                  src="assets/images/resources/projects-v1-img2.jpg"
                  alt=""
                />
              </div>
              <div className="projects-one__single-content">
                <span>Carpet Care</span>
                <h2>
                  <a href="protfolio-single.html">Carpet Wood Care</a>
                </h2>
                <p>
                  Volutpat lacus laoreet curabitur. Cursus turpis in eu mi
                  bibendum{" "}
                </p>
                <div className="btn-box">
                  <a href="protfolio-single.html">
                    <span className="icon-next" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/*End Single Projects One*/}
          {/*Start Single Projects One*/}
          <div
            className="col-xl-3 col-lg-6 wow fadeInLeft"
            data-wow-delay="400ms"
            data-wow-duration="1500ms"
          >
            <div className="projects-one__single">
              <div className="projects-one__single-img">
                <img
                  src="assets/images/resources/projects-v1-img3.jpg"
                  alt=""
                />
              </div>
              <div className="projects-one__single-content">
                <span>Wood Care</span>
                <h2>
                  <a href="protfolio-single.html">Wood Flooring </a>
                </h2>
                <p>
                  Volutpat lacus laoreet curabitur. Cursus turpis in eu mi
                  bibendum{" "}
                </p>
                <div className="btn-box">
                  <a href="protfolio-single.html">
                    <span className="icon-next" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/*End Single Projects One*/}
          {/*Start Single Projects One*/}
          <div
            className="col-xl-3 col-lg-6 wow fadeInLeft"
            data-wow-delay="600ms"
            data-wow-duration="1500ms"
          >
            <div className="projects-one__single">
              <div className="projects-one__single-img">
                <img
                  src="assets/images/resources/projects-v1-img4.jpg"
                  alt=""
                />
              </div>
              <div className="projects-one__single-content">
                <span>Tale Care</span>
                <h2>
                  <a href="protfolio-single.html">Tile Flooring</a>
                </h2>
                <p>
                  Volutpat lacus laoreet curabitur. Cursus turpis in eu mi
                  bibendum{" "}
                </p>
                <div className="btn-box">
                  <a href="protfolio-single.html">
                    <span className="icon-next" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/*End Single Projects One*/}
        </div>
      </div>
    </section>
    {/*End Projects One*/}
    {/*Start Video One*/}
    <section className="video-one">
      <div className="container">
        <div className="row">
          <div className="col-xl-12">
            <div
              className="video-one__inner text-center"
              style={{
                backgroundImage:
                  "url(assets/images/backgrounds/video-v1-bg.jpg)"
              }}
            >
              <h2>
                A Complete Solution for Your Flooring <br />
                Vision.We have done more than 562 <br />
                successful projects
              </h2>
              <p>
                Schedule a free case evaluation. Or call us at +88 17 12 48101
              </p>
              <div className="video-one__bottom">
                <div className="text">
                  <a href="protfolio.html">View all Project</a>
                </div>
                <div className="icon">
                  <a
                    href="https://www.youtube.com/watch?v=8DP4NgupAhI"
                    className="video-one__btn video-popup"
                  >
                    <span className="icon-play-2" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/*End Video One*/}
    {/*Start Contact One*/}
    <section className="contact-one">
      <div className="shape1">
        <img src="assets/images/shapes/contact-v1-shape1.png" alt="" />
      </div>
      <div
        className="contact-one__img"
        style={{
          backgroundImage: "url(assets/images/resources/contact-v1-img1.jpg)"
        }}
      >
        <div className="overlay-content text-center">
          <h2>25</h2>
          <h3>
            Years of <br />
            Expeirence
          </h3>
        </div>
      </div>
      <div className="container">
        <div className="row">
          {/*Start Contact One Img*/}
          <div className="col-xl-6 col-lg-0"></div>
          {/*End Contact One Img*/}
          {/*Start Contact One Content*/}
          <div className="col-xl-6 col-lg-12">
            <div className="contact-one__content">
              <div className="sec-title">
                <span className="sec-title__tagline">Contact us</span>
                <h2 className="sec-title__title">
                  Lets Create Something <br />
                  Great Together!
                </h2>
              </div>
              <div className="contact-one__content-comment-form">
                <form
                  action="https://alori-html.vercel.app/assets/inc/sendemail.php"
                  className="comment-one__form contact-form-validated"
                  // noValidate="novalidate"
                >
                  <div className="row">
                    <div className="col-xl-6 col-lg-6 col-md-6">
                      <div className="comment-form__input-box">
                        <input
                          type="text"
                          placeholder="Full Name"
                          name="name"
                        />
                      </div>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-6">
                      <div className="comment-form__input-box">
                        <input
                          type="email"
                          placeholder="Email Addresss"
                          name="email"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-xl-12 col-lg-12">
                      <div className="comment-form__input-box">
                        <textarea
                          name="message"
                          placeholder="Message Details"
                          defaultValue={""}
                        />
                      </div>
                      <button
                        type="submit"
                        className="thm-btn comment-form__btn"
                      >
                        Send
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
          {/*End Contact One Content*/}
        </div>
      </div>
    </section>
    {/*End Contact One*/}
    {/*Start Testimonial One*/}
    <section className="testimonial-one">
      <div className="container">
        <div className="sec-title text-center">
          <span className="sec-title__tagline">Testimonial</span>
          <h2 className="sec-title__title">
            Here's what our satisfied <br /> clients are saying...
          </h2>
        </div>
        <div className="row">
          <div className="col-xl-12">
            <div className="testimonial-one__carousel owl-carousel owl-theme">
              {/*Start Single Testimonial One*/}
              <div className="testimonial-one__single">
                <div className="icon">
                  <span className="icon-quotation" />
                </div>
                <div className="text">
                  <p>
                    Lorem ipsum dolor sit amet elite send do eiusmod tempor
                    incididunt the labore na aliqua. Uit enim ad minim veniam,
                    quis nostrud exercitation an{" "}
                  </p>
                </div>
                <div className="client-info">
                  <div className="img">
                    <img
                      src="assets/images/resources/testimonial-v1-img1.png"
                      alt=""
                    />
                  </div>
                  <div className="title">
                    <h3>Mahfuz RIad</h3>
                    <p>Senior client</p>
                  </div>
                </div>
              </div>
              {/*End Single Testimonial One*/}
              {/*Start Single Testimonial One*/}
              <div className="testimonial-one__single">
                <div className="icon">
                  <span className="icon-quotation" />
                </div>
                <div className="text">
                  <p>
                    Lorem ipsum dolor sit amet elite send do eiusmod tempor
                    incididunt the labore na aliqua. Uit enim ad minim veniam,
                    quis nostrud exercitation an{" "}
                  </p>
                </div>
                <div className="client-info">
                  <div className="img">
                    <img
                      src="assets/images/resources/testimonial-v1-img2.png"
                      alt=""
                    />
                  </div>
                  <div className="title">
                    <h3>Tamim anj</h3>
                    <p>Senior client</p>
                  </div>
                </div>
              </div>
              {/*End Single Testimonial One*/}
              {/*Start Single Testimonial One*/}
              <div className="testimonial-one__single">
                <div className="icon">
                  <span className="icon-quotation" />
                </div>
                <div className="text">
                  <p>
                    Lorem ipsum dolor sit amet elite send do eiusmod tempor
                    incididunt the labore na aliqua. Uit enim ad minim veniam,
                    quis nostrud exercitation an{" "}
                  </p>
                </div>
                <div className="client-info">
                  <div className="img">
                    <img
                      src="assets/images/resources/testimonial-v1-img1.png"
                      alt=""
                    />
                  </div>
                  <div className="title">
                    <h3>Mahfuz RIad</h3>
                    <p>Senior client</p>
                  </div>
                </div>
              </div>
              {/*End Single Testimonial One*/}
              {/*Start Single Testimonial One*/}
              <div className="testimonial-one__single">
                <div className="icon">
                  <span className="icon-quotation" />
                </div>
                <div className="text">
                  <p>
                    Lorem ipsum dolor sit amet elite send do eiusmod tempor
                    incididunt the labore na aliqua. Uit enim ad minim veniam,
                    quis nostrud exercitation an{" "}
                  </p>
                </div>
                <div className="client-info">
                  <div className="img">
                    <img
                      src="assets/images/resources/testimonial-v1-img2.png"
                      alt=""
                    />
                  </div>
                  <div className="title">
                    <h3>Tamim anj</h3>
                    <p>Senior client</p>
                  </div>
                </div>
              </div>
              {/*End Single Testimonial One*/}
              {/*Start Single Testimonial One*/}
              <div className="testimonial-one__single">
                <div className="icon">
                  <span className="icon-quotation" />
                </div>
                <div className="text">
                  <p>
                    Lorem ipsum dolor sit amet elite send do eiusmod tempor
                    incididunt the labore na aliqua. Uit enim ad minim veniam,
                    quis nostrud exercitation an{" "}
                  </p>
                </div>
                <div className="client-info">
                  <div className="img">
                    <img
                      src="assets/images/resources/testimonial-v1-img1.png"
                      alt=""
                    />
                  </div>
                  <div className="title">
                    <h3>Mahfuz RIad</h3>
                    <p>Senior client</p>
                  </div>
                </div>
              </div>
              {/*End Single Testimonial One*/}
              {/*Start Single Testimonial One*/}
              <div className="testimonial-one__single">
                <div className="icon">
                  <span className="icon-quotation" />
                </div>
                <div className="text">
                  <p>
                    Lorem ipsum dolor sit amet elite send do eiusmod tempor
                    incididunt the labore na aliqua. Uit enim ad minim veniam,
                    quis nostrud exercitation an{" "}
                  </p>
                </div>
                <div className="client-info">
                  <div className="img">
                    <img
                      src="assets/images/resources/testimonial-v1-img2.png"
                      alt=""
                    />
                  </div>
                  <div className="title">
                    <h3>Tamim anj</h3>
                    <p>Senior client</p>
                  </div>
                </div>
              </div>
              {/*End Single Testimonial One*/}
            </div>
          </div>
        </div>
      </div>
    </section>
    {/*End Testimonial One*/}
    {/*Start Blog One*/}
    <section className="blog-one">
      <div className="container">
        <div className="sec-title text-center">
          <span className="sec-title__tagline">Visiting our blog</span>
          <h2 className="sec-title__title">
            Articles daily updated latest articles <br />
            directly from the blog
          </h2>
        </div>
        <div className="row">
          {/*Start Single Blog One*/}
          <div
            className="col-xl-4 col-lg-4 wow animated fadeInUp"
            data-wow-delay="0.1s"
          >
            <div className="blog-one__single">
              <div className="blog-one__single-img">
                <img src="assets/images/blog/blog-v1-img1.jpg" alt="" />
                <div className="overlay-icon">
                  <a href="blog-single.html">
                    <span className="fa fa-plus" />
                  </a>
                </div>
                <div className="overlay-text">
                  <span>Business</span>
                </div>
              </div>
              <div className="blog-one__single-content">
                <ul className="meta-info">
                  <li>
                    <div className="icon">
                      <i className="icon-clock-3" aria-hidden="true" />
                    </div>
                    <div className="text">
                      <p>Octobar 12,2021</p>
                    </div>
                  </li>
                  <li>
                    <div className="icon">
                      <i className="icon-user-3" aria-hidden="true" />
                    </div>
                    <div className="text">
                      <p>Admin</p>
                    </div>
                  </li>
                </ul>
                <h2>
                  <a href="blog-single.html">
                    How to Remove Common <br />
                    Carpet Stains
                  </a>
                </h2>
                <p>
                  One of the most popular and timeless tile choices for kitchens
                  and bathrooms
                </p>
              </div>
            </div>
          </div>
          {/*End Single Blog One*/}
          {/*Start Single Blog One*/}
          <div
            className="col-xl-4 col-lg-4 wow animated fadeInUp"
            data-wow-delay="0.1s"
          >
            <div className="blog-one__single">
              <div className="blog-one__single-img">
                <img src="assets/images/blog/blog-v1-img2.jpg" alt="" />
                <div className="overlay-icon">
                  <a href="blog-single.html">
                    <span className="fa fa-plus" />
                  </a>
                </div>
                <div className="overlay-text">
                  <span>Woodhard</span>
                </div>
              </div>
              <div className="blog-one__single-content">
                <ul className="meta-info">
                  <li>
                    <div className="icon">
                      <i className="icon-clock-3" aria-hidden="true" />
                    </div>
                    <div className="text">
                      <p>Octobar 12,2021</p>
                    </div>
                  </li>
                  <li>
                    <div className="icon">
                      <i className="icon-user-3" aria-hidden="true" />
                    </div>
                    <div className="text">
                      <p>Admin</p>
                    </div>
                  </li>
                </ul>
                <h2>
                  <a href="blog-single.html">
                    Hardwood oak flooring at
                    <br /> Simple Flooring{" "}
                  </a>
                </h2>
                <p>
                  One of the most popular and timeless tile choices for kitchens
                  and bathrooms
                </p>
              </div>
            </div>
          </div>
          {/*End Single Blog One*/}
          {/*Start Single Blog One*/}
          <div
            className="col-xl-4 col-lg-4 wow animated fadeInUp"
            data-wow-delay="0.1s"
          >
            <div className="blog-one__single">
              <div className="blog-one__single-img">
                <img src="assets/images/blog/blog-v1-img3.jpg" alt="" />
                <div className="overlay-icon">
                  <a href="blog-single.html">
                    <span className="fa fa-plus" />
                  </a>
                </div>
                <div className="overlay-text">
                  <span>Flooring</span>
                </div>
              </div>
              <div className="blog-one__single-content">
                <ul className="meta-info">
                  <li>
                    <div className="icon">
                      <i className="icon-clock-3" aria-hidden="true" />
                    </div>
                    <div className="text">
                      <p>Octobar 12,2021</p>
                    </div>
                  </li>
                  <li>
                    <div className="icon">
                      <i className="icon-user-3" aria-hidden="true" />
                    </div>
                    <div className="text">
                      <p>Admin</p>
                    </div>
                  </li>
                </ul>
                <h2>
                  <a href="blog-single.html">
                    Why choose vinyl plank <br />
                    over other flooring types?
                  </a>
                </h2>
                <p>
                  One of the most popular and timeless tile choices for kitchens
                  and bathrooms
                </p>
              </div>
            </div>
          </div>
          {/*End Single Blog One*/}
        </div>
      </div>
    </section>
    {/*End Blog One*/}
    {/*Start Footer One*/}
    <footer className="footer-one">
      <div
        className="footer-one__bg"
        style={{
          backgroundImage: "url(assets/images/backgrounds/footer-v1-bg.jpg)"
        }}
      ></div>
      <div className="footer-one__top">
        <div className="container">
          <div className="footer-one__subscribe-box">
            <div className="row">
              <div className="col-xl-6 col-lg-6">
                <div className="footer-one__subscribe-box-text">
                  <h2>
                    Subscribe our newsletter to get <br />
                    the latest news &amp; updates.
                  </h2>
                </div>
              </div>
              <div className="col-xl-6 col-lg-6">
                <div className="footer-one__subscribe-box-right">
                  <form className="subscribe-form" action="#">
                    <div className="input-box">
                      <input
                        type="email"
                        name="email"
                        placeholder="Email address"
                      />
                    </div>
                    <button type="submit">
                      <img src="assets/images/icon/right-arrow.png" alt="" />
                    </button>
                  </form>
                  <div className="checked-box">
                    <input
                      type="checkbox"
                      name="skipper1"
                      id="skipper"
                      defaultChecked={false}
                    />
                    <label htmlFor="skipper">
                      <span />I agree to the Privacy Policy.
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-12">
              <div className="footer-one__top-wrapper">
                <div className="row">
                  {/*Start Footer Widget Column*/}
                  <div
                    className="col-xl-4 col-lg-4 col-md-6 wow animated fadeInUp"
                    data-wow-delay="0.1s"
                  >
                    <div className="footer-widget__column footer-widget__about">
                      <div className="footer-widget__about-logo">
                        <a href="index.html">
                          <img
                            src="assets/images/resources/footer-logo.png"
                            alt=""
                          />
                        </a>
                      </div>
                      <p className="footer-widget__about-text">
                        48 10h Street, Office 478 Road 5<br />
                        Berlin, CA 700156
                      </p>
                      <p className="footer-widget__about-email">
                        <a href="mailto:needhelp@company.com">
                          infogamil@gmail.com
                        </a>
                      </p>
                    </div>
                  </div>
                  {/*End Footer Widget Column*/}
                  {/*Start Footer Widget Column*/}
                  <div
                    className="col-xl-3 col-lg-3 col-md-6 wow animated fadeInUp"
                    data-wow-delay="0.3s"
                  >
                    <div className="footer-widget__column footer-widget__services">
                      <h2 className="footer-widget__title">Services</h2>
                      <ul className="footer-widget__services-list">
                        <li className="footer-widget__services-list-item">
                          <a href="#">Flooring</a>
                        </li>
                        <li className="footer-widget__services-list-item">
                          <a href="#">Wood Floor</a>
                        </li>
                        <li className="footer-widget__services-list-item">
                          <a href="#">Woodhard </a>
                        </li>
                        <li className="footer-widget__services-list-item">
                          <a href="#">Tiles setup</a>
                        </li>
                        <li className="footer-widget__services-list-item">
                          <a href="#">Carpet Setup</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  {/*End Footer Widget Column*/}
                  {/*Start Footer Widget Column*/}
                  <div
                    className="col-xl-2 col-lg-2 col-md-6 wow animated fadeInUp"
                    data-wow-delay="0.5s"
                  >
                    <div className="footer-widget__column footer-widget__quick-links">
                      <h2 className="footer-widget__title">Quick Links</h2>
                      <ul className="footer-widget__quick-links-list">
                        <li className="footer-widget__quick-links-list-item">
                          <a href="contact.html">Contact us</a>
                        </li>
                        <li className="footer-widget__quick-links-list-item">
                          <a href="team.html">Member</a>
                        </li>
                        <li className="footer-widget__quick-links-list-item">
                          <a href="protfolio.html">Our Project</a>
                        </li>
                        <li className="footer-widget__quick-links-list-item">
                          <a href="about.html">About Company</a>
                        </li>
                        <li className="footer-widget__quick-links-list-item">
                          <a href="blog.html">News Update</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  {/*End Footer Widget Column*/}
                  {/*Start Footer Widget Column*/}
                  <div
                    className="col-xl-3 col-lg-3 col-md-6 wow animated fadeInUp"
                    data-wow-delay="0.7s"
                  >
                    <div className="footer-widget__column footer-widget__contact-info">
                      <h2 className="footer-widget__title">Get In Touch</h2>
                      <div className="footer-widget__contact-info-social-links">
                        <ul>
                          <li>
                            <a href="#">
                              <i className="fab fa-facebook" />
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="fab fa-instagram" />
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="fab fa-twitter" />
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="fab fa-linkedin" />
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  {/*End Footer Widget Column*/}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*Start Footer One Bottom*/}
      <div className="footer-one__bottom clearfix">
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="footer-one__bottom-inner">
                <div className="footer-one__bottom-text">
                  <p>Copyright © 2022 All Rights Reserved by</p>
                </div>
                <div className="footer-one__bottom-list">
                  <ul>
                    <li>
                      <a href="about.html">About Site</a>
                    </li>
                    <li>
                      <a href="about.html"> Careers</a>
                    </li>
                    <li>
                      <a href="about.html">Privacy Policy</a>
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
    {/*End Footer One*/}
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


    </main>
  )
}
