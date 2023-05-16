import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import aboutImage from "../assets/about.png";

const About = () => {
  return (
    <>
      <section id="about">
        <Container>
          <Row>
            <Col xs={12} md={6} className="leftWrap">
              <h2>WHO WE ARE</h2>
              <p className="pe-5">
                Located in Mumbai, Godrej Archives is the Godrej group's
                business archive. The Archives collects, preserves and manages
                records covering 121 years of the company's history. The idea
                was mooted in 1997, the group's centenary year, by Mr. Sohrab
                Godrej, former chairman of the Godrej group, who had over the
                years, taken up the task of collecting relevant documents and
                photographs. Since then, Archvies has been recording the history
                of Godrej - its products, plants and people - and making it
                available for research.
              </p>
              <Button
                variant="light"
                className="px-4 rounded btn-round-lg btn-lg btn btn-default"
              >
                EXPLORE
              </Button>
            </Col>
            <Col xs={12} md={6} className="rightWrap">
              <img src={aboutImage} className="img-fluid" alt="" srcset="" />
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default About;
