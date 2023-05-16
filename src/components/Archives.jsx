import { Container, Row, Col } from "react-bootstrap";

import Archive1 from "../assets/archive1.png";
import Archive2 from "../assets/archive2.png";
import Archive3 from "../assets/archive3.png";

const Archives = () => {
  return (
    <section id="archives">
      <Container>
        <Row>
          <Col xs={12} md={5} className="leftWrap">
            <h2>ARCHIVE TALES</h2>
            <p className="py-3">
              olor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim
              veniam, quis nostrud exerabore et dolore magna aliqua. Ut enim ad
              minim veniam, quis nostrud exercitation ullamco laboris nisi
            </p>
            <div>
              <p>LATEST BLOG</p>
              <p>ARCHIVES IN NEWS</p>
            </div>
          </Col>
          <Col xs={12} md={7} className="rightWrap">
            <div className="archiveCardWrap">
              <div className="archiveCard archiveCard1">
                <img src={Archive1} className="archiveImg img-fluid" alt="" />
                <div className="archiveCardText">
                  <span>DOCUMENT OF THE MONTH (DOM)</span>
                  <p>Lorem ipsum dolor sit Lorem ipsum dolor sit amet um...</p>
                </div>
              </div>
              <div className="archiveCard archiveCard1">
                <img src={Archive2} className="archiveImg img-fluid" alt="" />
                <div className="archiveCardText">
                  <span>DOCUMENT OF THE MONTH (DOM)</span>
                  <p>Lorem ipsum dolor sit Lorem ipsum dolor sit amet um...</p>
                </div>
              </div>
              <div className="archiveCard archiveCard1">
                <img src={Archive3} className="archiveImg img-fluid" alt="" />
                <div className="archiveCardText">
                  <span>DOCUMENT OF THE MONTH (DOM)</span>
                  <p>Lorem ipsum dolor sit Lorem ipsum dolor sit amet um...</p>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Archives;
