import HeroImg from "../assets/hero.png"
import { AiOutlineTwitter , AiOutlineFacebook , AiOutlineLinkedin, AiOutlineLink } from "react-icons/ai";

export default function Hero(){

  const config ={
    subtittle:'Im a full-stack developer' ,
    social:{
      Twitter:'https://www.x.com/',
      Facebook:'https://www.facebook.com/',
      linkedin:'https://www.linkedin.com/',
    }
  }
    return <section className="flex flex-col md:flex-row px-5 py-32 bg-primary justify-center">
     <div className="md:w-1/2"> 
       <h1 className=" text-white text-6xl font-hero-font">Hi, <br />Im Loki
       <p className="text-2xl">{config.subtittle}</p>
       </h1>
       <div className="flex py-10">
        <a href={config.social.Twitter} className="pr-5 hover:text-white"> <AiOutlineTwitter size={40}/></a>
        <a href={config.social.Facebook} className="pr-5  hover:text-white"> <AiOutlineFacebook size={40} /></a>
        <a href={config.social.linkedin} className="hover:text-white"> <AiOutlineLinkedin size={40} /></a>
     </div>
     </div>
     
       
       <img className="md:w-1/3" src={HeroImg} />
    </section>
}