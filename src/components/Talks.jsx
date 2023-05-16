/* eslint-disable react/no-unescaped-entities */
import { Container, Row, Col, Carousel, Figure, Button } from "react-bootstrap";
import Slider1 from "../assets/slider1.png";
import Slider2 from "../assets/slider2.png";
import { ArrowLeftCircle, ArrowRightCircle } from "react-bootstrap-icons";

const Talks = () => {
  return (
    <section id="talks">
      <Container>
        <Row>
          <Col className="talksWrap">
            <h2>LATEST TALKS</h2>
            <p>
              Located in Mumbai, Godrej Archives is the Godrej group's business
              archive. The Archives collects, preserves and manages records
              covering 121 years of the company's history. The idea was mooted
              in 1997, the group's centenary year
            </p>
          </Col>
        </Row>
        <Row>
          <Col>
            <Carousel
              nextIcon={<ArrowRightCircle />}
              prevIcon={<ArrowLeftCircle />}
              variant="dark"
            >
              <Carousel.Item>
                <Container>
                  <Row>
                    <Col xs={12} md={6}>
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
                    <Col xs={12} md={6}>
                      <p>01 | Thursday Talk</p>
                      <p>
                        Corporate & Business Oral History: Opportunities &
                        challenges
                      </p>
                      <div className="talksBtnWrap">
                        <Button
                          variant="light"
                          className="px-4 me-3 rounded btn-round-lg btn-lg btn btn-default"
                        >
                          DETAILS
                        </Button>
                        <Button
                          variant="light"
                          className="px-4 rounded btn-round-lg btn-lg btn btn-default"
                        >
                          REGISTER
                        </Button>
                      </div>
                    </Col>
                  </Row>
                </Container>
              </Carousel.Item>

              <Carousel.Item>
                <Container>
                  <Row>
                    <Col>
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
                    <Col>Right</Col>
                  </Row>
                </Container>
              </Carousel.Item>
            </Carousel>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Talks;
