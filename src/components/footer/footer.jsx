import "../footer/footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="col-3 categories">
            <p className="title">Categories</p>
            <ul>
              <li>Women</li>
              <li>Men</li>
              <li>Shoes</li>
              <li>Watches</li>
            </ul>
          </div>

          <div className="col-3 help">
            <p className="title">Help</p>
            <ul>
              <li>Track Order</li>
              <li>Returns</li>
              <li>Shipping</li>
              <li>FAQs</li>
            </ul>
          </div>

          <div className="col-3 touch">
            <p className="title">GET IN TOUCH</p>
            <p className="subtitle">
              Any questions? Let us know in store at 8th floor, 379 Hudson St, New York, NY 10018 or call us on (+1) 96 716 6879
            </p>
            <div className="touch-icon d-flex">
              <i class="fa-brands fa-facebook-f"></i>
              <i class="fa-brands fa-instagram"></i>
              <i class="fa-brands fa-pinterest-p"></i>
            </div>

          </div>

          
            <div className="col-3">
              <p className="title">Newsletter</p>
              <input type="text" placeholder="email@example.com"/>
              <button className="contact-btn">
                SUBSCRIBE
              </button>
            </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
