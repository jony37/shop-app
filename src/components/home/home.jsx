import "../home/home.css";
import img from "../images/slide-02.jpg";

const Home = () => {
  return (
    <div className="home-boss-div">
      <div className="home-img">
        <img src={img} alt="" />
      </div>
      <div className="home-text">
        <p>Men New-Season</p>
        <h1>JAKETS && COATS</h1>
        <button>SHOP NOW</button>
      </div>
    </div>

    
  );
};

export default Home;
