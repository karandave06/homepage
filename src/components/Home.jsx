import "../assets/Style/home.scss";

import homepage from "../../public/homepage7.jpg";
import gif from "../../public/jarvis2.gif";
import side from "../../public/small-spyder.png";
import gpt from "../../public/icons/chatgpt.png";
import gmail from "../../public/icons/Gmail-logo.png";
import linkdin from "../../public/icons/linkedin.png";
import movie from "../../public/icons/popcorn cup.webp";
import whatsapp from "../../public/icons/whatsapp.webp";
import youtube from "../../public/icons/youtube.png";
import vercel from "../../public/icons/vercel.png";
import git2 from "../../public/icons/git2.0.png";
import google from "../../public/icons/google.png";
import chess from "../../public/icons/chess.png";
import PreLoader from "./Loader/PreLoader";
import figma from "../../public/icons/figma.png";
import { useEffect, useState } from "react";

const Home = () => {
  let time = new Date().toLocaleTimeString();
  let time2 = new Date();

  const hour = time2.getHours();
  const [clocknw, setclock] = useState(time);


  const updateTime = () => {
    let time = new Date().toLocaleTimeString();
    setclock(time);
  };

  setInterval(updateTime, 1000);

  const Clock = () => {
    return (
      <div className="clock-container">
        <h1 className="clock-font">{clocknw}</h1>
      </div>
    );
  };

  const [greeting, setgreeting] = useState("");

  useEffect(() => {
    if (hour < 12) {
      setgreeting("GOOD MORNING");
    } else if (hour >= 12 && hour <= 16) {
      setgreeting("GOOD AFTERNOON");
    } else if (hour > 16 && hour <= 19) {
      setgreeting("GOOD EVENING");
    } else if (hour > 19 && hour < 24) {
      setgreeting("GOOD NIGHT");
    }
  });
 

  return (
    <div className="home">
      <img src={homepage} alt="homepage" />

      <h1>
        Hello Karan, <br />
      </h1>

      <h2>{greeting}</h2>

      <div className="gif">
        <img
          src={side}
          alt="gif-imageloading"
          // onLoad={() => setImageLoading(false)}
        />
      </div>

      <div className="clock">
        <Clock />
      </div>

      <div className="icons">
        <div className="container">
          <Item
            src={figma}
            link={"https://www.figma.com/files/drafts?fuid=1202972142199126152"}
          />
          <Item link={"https://chat.openai.com/"} src={gpt} />
          <Item src={youtube} link={"https://www.youtube.com/"} />
          <Item src={whatsapp} link={"https://web.whatsapp.com/"} />
          <Item src={movie} link={"https://moviesmod.pro/"} />
          <Item
            src={linkdin}
            link={"https://www.linkedin.com/in/karan-dave-18702324b/"}
          />
          <Item
            src={chess}
            link={
              "https://www.chess.com/play/online/new?action=createLiveChallenge&base=600&timeIncrement=0"
            }
          />
          <Item src={gmail} link={"https://mail.google.com/mail/u/0/#inbox"} />
          <Item src={git2} link={"https://github.com/"} />
          <Item src={vercel} link={"https://vercel.com/dashboard"} />
          <Item src={google} link={"https://www.google.com/"} />
        </div>
      </div>
    </div>
  );
};

const Item = ({ src, link }) => {
  return (
    <div className="item">
      <a href={link} target={"_blank"}>
        <img src={src} alt="" />
      </a>
    </div>
  );
};

export default Home;
