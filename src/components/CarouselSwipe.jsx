import { Container, Row, Col, Carousel, Figure, Button } from "react-bootstrap";
import Slider1 from "../assets/slider1.png";
import Slider2 from "../assets/slider2.png";
// Import Swiper React components

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Pagination, Navigation } from "swiper";

const CarouselSwipe = () => {
  return (
    <>
      <Swiper
        pagination={{
          type: "fraction",
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <Container>
            <Row className="py-5">
              <Col xs={12} md={7}>
                <Figure>
                  <Figure.Image
                    width={400}
                    height={250}
                    alt="171x180"
                    src={Slider1}
                    className="d-block w-100 img-fluid"
                  />
                </Figure>
              </Col>
              <Col xs={12} md={5} className="py-4">
                <p className="slideTitle">01 | Thursday Talk</p>
                <p className="slideInfo">
                  Corporate & Business Oral History: Opportunities & challenges
                </p>
                <div className="talksBtnWrap">
                  <a href="#" className="px-4 me-3 ga-btn-primary-outlined">
                    DETAILS
                  </a>
                  <a href="#" className="px-4 ga-btn-primary">
                    REGISTER
                  </a>
                </div>
              </Col>
            </Row>
          </Container>
        </SwiperSlide>
        <SwiperSlide>
          <Container>
            <Row className="py-5">
              <Col xs={12} md={7}>
                <Figure>
                  <Figure.Image
                    width={400}
                    height={250}
                    alt="171x180"
                    src={Slider1}
                    className="d-block w-100 img-fluid"
                  />
                </Figure>
              </Col>
              <Col xs={12} md={5} className="py-4">
                <p className="slideTitle">01 | Thursday Talk</p>
                <p className="slideInfo">
                  Corporate & Business Oral History: Opportunities & challenges
                </p>
                <div className="talksBtnWrap">
                  <a href="#" className="px-4 me-3 ga-btn-primary-outlined">
                    DETAILS
                  </a>
                  <a href="#" className="px-4 ga-btn-primary">
                    REGISTER
                  </a>
                </div>
              </Col>
            </Row>
          </Container>
        </SwiperSlide>
      </Swiper>
    </>
  );
};
export default CarouselSwipe;
