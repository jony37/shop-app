import "../header/header.css";
import img from "../images/logo-01.png.webp";
const Header = () => {
  return (
    <div>
      <div className="header-boss-div">
        <div className="shipping-header">
          <div className="container">
            <p>Free shipping for standard order over $100</p>
            <div className="header-info">
              <ul>
                <li className="header-info-li-1">Help & FAQs</li>
                <li className="jonyAcc">My Account</li>
                <li className="header-info-li">
                  <a href="#">EN</a>
                </li>
                <li className="header-info-li">
                  <a href="#">USD</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {window.addEventListener("scroll", function () {
        if (window.scrollY >= 50) {
          document
            .querySelector(".header-navbar-div")
            .classList.add("active-nav");
          document.querySelector(".home-nav-div-block").classList.add("noneee");
        } else {
          document
            .querySelector(".header-navbar-div")
            .classList.remove("active-nav");
          document
            .querySelector(".home-nav-div-block")
            .classList.remove("noneee");
        }
      })}
      <div className="home-nav-div-block"></div>
      <div className="header-navbar-div">
        <div className="container">
          <div className="home-nav-div">
            <div>
              <img src={img} alt="" />
            </div>
            <ul className="d-flex aligin-items-center">
              <li className="nav-li1">Home</li>
              <li>Shop</li>
              <li>
                <a href="">HOT</a>Features
              </li>
              <li>Blog</li>
              <li>About</li>
              <li>Contact</li>
            </ul>
            <br />
            <div className="header-icons">
              <p className="icon-p1">2</p>
              <div className="home-icons-div">
                <i class="fa-solid fa-magnifying-glass"></i>
                <i class="fa-solid fa-cart-shopping"></i>
                <i class="fa-regular fa-heart"></i>
                <p className="icon-p2">0</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
