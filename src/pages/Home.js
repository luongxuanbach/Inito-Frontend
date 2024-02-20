import FrameImg from "../assets/images/Frame 18 (1).png";
import StarImg from "../assets/images/Star 1.png";
import RectangleUnderline from "../assets/images/Rectangle 26.png";
import "../styles/Home.css";

const Home = () => {
  return (
    <>
      <div class="home">
        <div className="banner d-flex">
          <div className="content-banner col-6">
            <div className="box-content-banner">
              <h1 className="title">
                Track you fertility hormones at home, in 5 minutes.
              </h1>
              <img
                className="rectangle-underline-img"
                src={RectangleUnderline}
                alt="RectangleUnderline"
              ></img>
              <p className="sub-title">
                Get accurate results of Estrogen, LH and Progesterone with
                Inito, the all-in-one, FDA-registered fertility monitor.
              </p>

              <button className="btn-learn-more">Learn more</button>
            </div>
          </div>
          <div className="img-banner col-6">
            <img className="star-img" src={StarImg} alt="StarImg"></img>
            <img className="frame-img" src={FrameImg} alt="FrameImg"></img>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
