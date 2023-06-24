import "../assets/Style/home.scss";
import homepage from "../../public/homepage1.jpg";
import homepage2 from "../../public/homepage2.jpg";
import homepage3 from "../../public/homepage3.webp";
import gif from '../../public/icons/gif3.gif';
import gpt from '../../public/icons/chatgpt.png';
import gmail from '../../public/icons/Gmail-logo.png'
import linkdin from '../../public/icons/linkedin.png'
import movie from '../../public/icons/popcorn cup.webp'
import whatsapp from '../../public/icons/whatsapp.webp'
import youtube from '../../public/icons/youtube.png'
import vercel from '../../public/icons/vercel.png'
import git from '../../public/icons/github.png'
import git2 from '../../public/icons/git2.0.png'



import figma from '../../public/icons/figma.png'
import { useState } from "react";
const date = new Date();
const hour = date.getHours(0 - 24);

 
const Home = () => {
if(hour > 12){
    hour - 12;
}else{
    hour;
}
 
const afternoon = "Good Afternoon";
const evening = "Good Evening";
const night = "Good Night"




 
  const { time, settime } = useState("");

 
  
   
  return (
    <div className="home">
      <img src={homepage3} alt="" />

      <h1>
        Hello Karan, <br /> 
      </h1>

      <h2>
   how  are you
      </h2>

<div className="gif">

     <img src={gif} alt="" />
</div>

<div className="icons">
  <div className="container">
<Item src={figma} link={'https://www.figma.com/files/drafts?fuid=1202972142199126152'}/>
<Item link={'https://chat.openai.com/'} src={gpt}/>
<Item src={youtube} link={'https://www.youtube.com/'}/>
<Item src={whatsapp} link={'https://web.whatsapp.com/'}/>
<Item src={movie} link={'https://moviesmod.pro/'}/>
<Item src={linkdin} link={'https://www.linkedin.com/in/karan-dave-18702324b/'}/>
<Item src={gmail} link={'https://mail.google.com/mail/u/0/#inbox'}/>
<Item src={git2} link={'https://github.com/'}/>
<Item src={vercel} link={'https://vercel.com/dashboard'}/>

  </div>
</div>
      </div>
    );
};

const Item = ({src,link}) =>{
  return (
    <div className="item">
      <a href={link} target={'_blank'}>
        <img src={src} alt="" />
      </a>
    </div>
  )
}

export default Home;
