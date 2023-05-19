import Button from "react-bootstrap/Button";
import { Mouse } from "react-bootstrap-icons";

const Intro = () => {
  return (
    <>
      <section id="intro">
        <div className="introWrap">
          <h1>Virtual Tour</h1>
          <p className="py-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat
          </p>
          <a href="#about" className="px-5 ga-btn-primary">
            LET'S START THE TOUR
          </a>
          <div className="scrollToWrap">
            <a href="#">
              <Mouse color="gray" size={42} />
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Intro;
