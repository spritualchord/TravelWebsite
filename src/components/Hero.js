import "./Hero.css";

function Hero(props) {
  return (
    <div className={props.cname}>
      <img alt="Heroimg" src={props.heroImg} className="hero-img" />
      <div className="hero-txt">
        <h1>{props.title}</h1>
        <p>{props.text}</p>
        <a href={props.url} className={props.btnClass}>
          {props.butntext}
        </a>
      </div>
    </div>
  );
}

export default Hero;
