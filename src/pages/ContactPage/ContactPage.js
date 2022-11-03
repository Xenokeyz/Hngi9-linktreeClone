import i4g from "../../images/I4G-logo.svg";
import zuri from "../../images/zuri.svg";

function ContactPage() {
  return (
    <>
      <div className="container" id="Contact">
        <div className="outer">
          <span className="close">&times;</span>

          <div className="contact">
            <h2 className="head">Contact Us</h2>
            <p className="txt">
              Let us know how we can help out. We will respond as soon as
              possible.{" "}
            </p>
          </div>
          <form className="action">
            <label for="fname">First Name</label>
            <br />
            <input
              type="text"
              id="fname"
              name="fname"
              placeholder="Enter your first and last name"
              required
            />
          <form className="action">
            <label for="fname">Last Name</label>
            <br />
            <input
              type="text"
              id="fname"
              name="fname"
              placeholder="Enter your first and last name"
              required
            />
            <br />
            <label for="email">E-mail Address</label>
            <br />
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Type your email here"
              required
            />
            <br />
            <div className="msgbox">
              <label for="message">Message</label>
              <br />
              <textarea
                className="message"
                name="msg"
                placeholder="Type message here"
              ></textarea>
              <input type="submit" id="submit" value="Send Message" />
            </div>
          </form>
        </div>
      </div>

      <div className="footer-section">
        <div className="footer-section__container">
          <a href="https://zuri.team">
            <img src={zuri} alt="zuri logo" />
          </a>

          <p className="footer-text">HNG Internship 9 Frontend Task</p>

          <a href="#i4g">
            <img src={i4g} alt="i4g logo" />
          </a>
        </div>
      </div>
    </>
  );
}

export default ContactPage;
