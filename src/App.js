import "./App.css";
import profile from "./images/profileFrame.svg";
import dots from "./images/dots.svg";
import share from "./images/share-icon.svg";
import slack from "./images/slack-icon.svg";
import github from "./images/github-icon.svg";
import zuri from "./images/zuri.svg";
import i4g from "./images/I4G-logo.svg";

function ButtonLink(props) {
  const { id, url, text } = props;

  return (
    <a id={id} href={url} className="button-link">
      {text}
    </a>
  );
}

function App() {
  return (
    <div className="app">
      <div className="profile-section">
        <img src={profile} id="profile__img" alt="user avatar" />
        <h1 id="twitter" className="twitter">
          XenoScript
        </h1>
        <h2 id="slack" hidden>
          Xeno
        </h2>

        <button className="share-button share-button__mobile">
          <img src={dots} alt="horizontal dots" />
        </button>

        <button className="share-button share-button__desktop">
          <img src={share} alt="share arrow" />
        </button>
      </div>

      <div className="links-section">
        <ButtonLink id="twitter" url="https://twitter.com/Xenokeyzz" text="Twitter Link" />

        <ButtonLink
          id="btn__zuri"
          url="https://training.zuri.team/"
          text="Zuri Team"
        />

        <ButtonLink
          id="books"
          url="http://books.zuri.team/"
          text="Zuri Books"
        />

        <ButtonLink
          id="book__python"
          url="https://books.zuri.team/python-for-beginners?ref_id=xenokeyz"
          text="Python Books"
        />

        <ButtonLink
          id="pitch"
          url="https://background.zuri.team/"
          text="Background Check for Coders"
        />

        <ButtonLink
          id="book__design"
          url="https://books.zuri.team/design-rules"
          text="Design Books"
        />
      </div>

      <div className="social-section">
        <a href="#Xenoscript" className="social-link">
          <img src={slack} alt="slack logo" />
        </a>

        <a href="https://github.com/Xenokeyz" className="social-link">
          <img src={github} alt="github logo" />
        </a>
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
    </div>
  );
}

export default App;
