import Button from "react-bootstrap/Button";
import { Search, Mouse } from "react-bootstrap-icons";

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
          <Button
            variant="warning"
            className="px-4 rounded btn-round-lg btn-lg btn btn-default"
          >
            {" "}
            LET'S START THE TOUR{" "}
          </Button>
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
