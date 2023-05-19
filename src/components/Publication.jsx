import { Container, Row, Col, Button } from "react-bootstrap";

import publicationImage from "../assets/publication.png";
import { Calendar2Date, CardText } from "react-bootstrap-icons";

const Publication = () => {
  return (
    <section id="publication">
      <Container>
        <Row>
          <h2>Publication</h2>
          <Row className="justify-content-center">
            <Col xs={11} md={9} className="mt-5">
              <img
                src={publicationImage}
                className="img-fluid publicationImg"
                alt=""
              />
            </Col>
          </Row>
          <div className="publicationWrap">
            <Row>
              <Col xs={12} md={4}>
                <span>Latest Archives Times Newsletter</span>
                <div className="pubDetailWrap">
                  <p className="pubDate">
                    <Calendar2Date color="gray" size={16} /> November 2023
                  </p>

                  <p className="pubVol">
                    <CardText color="gray" size={16} /> Volume 1, Issue 1
                  </p>
                </div>
                <div className="mt-3 mb-2">
                  <a href="#" className=" ga-btn-primary px-4 mt-5 ms-0">
                    EXPLORE
                  </a>
                </div>
              </Col>
              <Col xs={12} md={8}>
                <p>
                  Located in Mumbai, Godrej Archives is the Godrej group's
                  business archive. The Archives collects, preserves and manages
                  records covering 121 years of the company's history. The idea
                  was mooted In 1997, the group's centenary year
                </p>
              </Col>
            </Row>
          </div>
        </Row>
      </Container>
    </section>
  );
};

export default Publication;
