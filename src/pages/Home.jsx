import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
function Home() {
  return (
    <>
      <div className="home">
        <div className="home-box">
          <div className="home-right">
            <div className="right-top">
              <h2>Discover Your Dream Property with Estatein</h2>
              <p>
                Your journey to finding the perfect property begins here.
                Explore our listings to find the home that matches your dreams.
              </p>
            </div>
            <div className="right-center">
              <button>Learn More</button>
              <button className="purple">Browse Properties</button>
            </div>
            <div className="right-bottom">
              <div className="card">
                <h3>200+</h3>
                <p>Happy Customers</p>
              </div>
              <div className="card">
                <h3>10k+</h3>
                <p>Properties For Clients</p>
              </div>
              <div className="card">
                <h3>16+</h3>
                <p>Years of Experience</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="sub-home">
        <div className="box">
          <img src="imgs/icon.png" alt="" />
          <p>Find Your Dream Home</p>
        </div>
        <div className="box">
          <img src="imgs/icontwo.png" alt="" />
          <p>Unlock Property Value</p>
        </div>
        <div className="box">
          <img src="imgs/iconthree.png" alt="" />
          <p>Effortless Property Management</p>
        </div>
        <div className="box">
          <img src="imgs/iconfour.png" alt="" />
          <p>Smart Investments, Informed Decisions</p>
        </div>
      </div>
      <div className="feature">
        <div className="top-part">
          <h1 className="feature-title">Featured Properties</h1>
          <div className="text">
            <p className="feature-text">
              Explore our handpicked selection of featured properties. Each
              listing offers a glimpse into exceptional homes and investments
              available through Estatein. Click "View Details" for more
              information.
            </p>
            <button>View All Properties</button>
          </div>
        </div>

        <div className="bottom-part">
          <Swiper
            slidesPerView={3}
            pagination={true}
            spaceBetween={30}
            modules={[Pagination]}
            className="mySwiper"
          >
            <SwiperSlide>
              <div className="card">
                <img src="imgs/Image.png" alt="" />
                <div className="describe">
                  <h4 className="card-title">Seaside Serenity Villa</h4>
                  <p className="card-text">
                    A stunning 4-bedroom, 3-bathroom villa in a peaceful
                    suburban neighborhood...
                  </p>
                  <div className="btn-box">
                    <button>
                      <img src="" alt="" />
                      4-Bedroom
                    </button>
                    <button>
                      <img src="" alt="" />
                      3-Bathroom
                    </button>
                    <button>
                      <img src="" alt="" />
                      Villa
                    </button>
                  </div>
                  <p className="price-text">price</p>
                  <div className="details">
                    <h3 className="price">$550,000</h3>
                    <button className="details-btn">
                      View Property Details
                    </button>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <div className="card">
                <img src="imgs/Imageb.png" alt="" />
                <div className="describe">
                  <h4 className="card-title">Metropolitan Haven</h4>
                  <p className="card-text">
                    A chic and fully-furnished 2-bedroom apartment with
                    panoramic city views...
                  </p>
                  <div className="btn-box">
                    <button>2-Bedroom</button>
                    <button>2-Bathroom</button>
                    <button>Villa</button>
                  </div>
                  <p className="price-text">price</p>
                  <div className="details">
                    <h3 className="price">$550,000</h3>
                    <button className="details-btn">
                      View Property Details
                    </button>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <div className="card">
                <img src="imgs/Imagea.png" alt="" />
                <div className="describe">
                  <h4 className="card-title">Rustic Retreat Cottage</h4>
                  <p className="card-text">
                    An elegant 3-bedroom, 2.5-bathroom townhouse in a gated
                    community...
                  </p>
                  <div className="btn-box">
                    <button>
                      <img src="" alt="" />
                      3-Bedroom
                    </button>
                    <button>
                      <img src="" alt="" />
                      3-Bathroom
                    </button>
                    <button>
                      <img src="" alt="" />
                      Villa
                    </button>
                  </div>
                  <p className="price-text">price</p>
                  <div className="details">
                    <h3 className="price">$550,000</h3>
                    <button className="details-btn">
                      View Property Details
                    </button>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="card">
                <img src="imgs/Image.png" alt="" />
                <div className="describe">
                  <h4 className="card-title">Seaside Serenity Villa</h4>
                  <p className="card-text">
                    A stunning 4-bedroom, 3-bathroom villa in a peaceful
                    suburban neighborhood...
                  </p>
                  <div className="btn-box">
                    <button>
                      <img src="" alt="" />
                      4-Bedroom
                    </button>
                    <button>
                      <img src="" alt="" />
                      3-Bathroom
                    </button>
                    <button>
                      <img src="" alt="" />
                      Villa
                    </button>
                  </div>
                  <p className="price-text">price</p>
                  <div className="details">
                    <h3 className="price">$550,000</h3>
                    <button className="details-btn">
                      View Property Details
                    </button>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <div className="card">
                <img src="imgs/Imageb.png" alt="" />
                <div className="describe">
                  <h4 className="card-title">Metropolitan Haven</h4>
                  <p className="card-text">
                    A chic and fully-furnished 2-bedroom apartment with
                    panoramic city views...
                  </p>
                  <div className="btn-box">
                    <button>2-Bedroom</button>
                    <button>2-Bathroom</button>
                    <button>Villa</button>
                  </div>
                  <p className="price-text">price</p>
                  <div className="details">
                    <h3 className="price">$550,000</h3>
                    <button className="details-btn">
                      View Property Details
                    </button>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <div className="card">
                <img src="imgs/Imagea.png" alt="" />
                <div className="describe">
                  <h4 className="card-title">Rustic Retreat Cottage</h4>
                  <p className="card-text">
                    An elegant 3-bedroom, 2.5-bathroom townhouse in a gated
                    community...
                  </p>
                  <div className="btn-box">
                    <button>
                      <img src="" alt="" />
                      3-Bedroom
                    </button>
                    <button>
                      <img src="" alt="" />
                      3-Bathroom
                    </button>
                    <button>
                      <img src="" alt="" />
                      Villa
                    </button>
                  </div>
                  <p className="price-text">price</p>
                  <div className="details">
                    <h3 className="price">$550,000</h3>
                    <button className="details-btn">
                      View Property Details
                    </button>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
      <div className="rating">
        <h2 className="rating-title">What Our Clients Say</h2>
        <div className="rating-container">
          <Swiper
            slidesPerView={3}
            pagination={true}
            spaceBetween={30}
            modules={[Pagination]}
            className="mySwiper"
          >
            <SwiperSlide>
              <div className="containers">
                <img src="imgs/Container.png" alt="" />
                <h4>Exceptional Service!</h4>
                <div className="photo">
                  <img src="imgs/Profile.png" alt="" />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="containers">
                <img src="imgs/Container.png" alt="" />

                <h4>Exceptional Service!</h4>
                <p>
                  Estatein provided us with top-notch service. They helped us
                  sell our property quickly and at a great price. We couldn't be
                  happier with the results.
                </p>
                <div className="photos">
                  <img src="imgs/Profile-two.png" alt="" />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="containers">
                <img src="imgs/Container.png" alt="" />
                <h4>Trusted Advisors</h4>
                <div className="photo">
                  <img src="imgs/Profile-three.png" alt="" />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="containers">
                <img src="imgs/Container.png" alt="" />
                <h4>Exceptional Service!</h4>
                <div className="photo">
                  <img src="imgs/Profile.png" alt="" />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="containers">
                <img src="imgs/Container.png" alt="" />

                <h4>Exceptional Service!</h4>
                <p>
                  Estatein provided us with top-notch service. They helped us
                  sell our property quickly and at a great price. We couldn't be
                  happier with the results.
                </p>
                <div className="photos">
                  <img src="imgs/Profile-two.png" alt="" />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="containers">
                <img src="imgs/Container.png" alt="" />
                <h4>Trusted Advisors</h4>
                <div className="photo">
                  <img src="imgs/Profile-three.png" alt="" />
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
      <div className="questions">
        <div className="top-part">
          <h1 className="feature-title">Frequently Asked Questions</h1>
          <div className="text">
            <p className="feature-text">
              Find answers to common questions about Estatein's services,
              property listings, and the real estate process. We're here to
              provide clarity and assist you every step of the way.
            </p>
            <button>View All FAQ’s</button>
          </div>
        </div>
        <div className="rating-container">
          <Swiper
            slidesPerView={2}
            pagination={true}
            spaceBetween={20}
            modules={[Pagination]}
            className="mySwiper"
          >
            <SwiperSlide>
              <div className="containers-two">
                <h4>How do I search for properties on Estatein?</h4>
                <p className="containers-text">
                  Learn how to use our user-friendly search tools to find
                  properties that match your criteria.
                </p>
                <button className="containers-btn">Read More</button>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="containers-two">
                <h4>
                  What documents do I need to sell my property through Estatein?
                </h4>
                <p className="containers-text">
                  Find out about the necessary documentation for listing your
                  property with us.
                </p>
                <button className="containers-btn">Read More</button>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="containers-two">
                <h4>How can I contact an Estatein agent?</h4>
                <p className="containers-text">
                  Discover the different ways you can get in touch with our
                  experienced agents.
                </p>
                <button className="containers-btn">Read More</button>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="containers-two">
                <h4>How do I search for properties on Estatein?</h4>
                <p className="containers-text">
                  Learn how to use our user-friendly search tools to find
                  properties that match your criteria.
                </p>
                <button className="containers-btn">Read More</button>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="containers-two">
                <h4>
                  What documents do I need to sell my property through Estatein?
                </h4>
                <p className="containers-text">
                  Find out about the necessary documentation for listing your
                  property with us.
                </p>
                <button className="containers-btn">Read More</button>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="containers-two">
                <h4>How can I contact an Estatein agent?</h4>
                <p className="containers-text">
                  Discover the different ways you can get in touch with our
                  experienced agents.
                </p>
                <button className="containers-btn">Read More</button>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
      <div className="estate">
        <div className="estate-top-part">
          <h1 className="estate-title">Start Your Real Estate Journey Today</h1>
          <div className="text-container">
            <p className="estate-text">
              Your dream property is just a click away. Whether you're looking
              for a new home, a strategic investment, or expert real estate
              advice, Estatein is here to assist you every step of the way. Take
              the first step towards your real estate goals and explore our
              available properties or get in touch with our team for
              personalized assistance.
            </p>
            <button className="estate-btn">Explore Properties</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
