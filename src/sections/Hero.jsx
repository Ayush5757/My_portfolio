import { useGSAP } from "@gsap/react";
import Button from "../components/Button";
import { words } from "../constants";
import gsap from "gsap";
import Spline from "@splinetool/react-spline";

const Hero = () => {

  useGSAP(()=>{
    gsap.fromTo('.hero-text h1',
      {
        y: 100,
        opacity: 0
    },{
      y: 0,
      opacity: 1,
      stagger: 1,
      duration: 1,
      ease: 'power2.inOut'
    })
  })

  return (
    <section id="hero" className="relative overflow-hidden">
      <div className="absolute top-0 left-0 z-0">
        <img src="/images/bg.png" alt="background" />
      </div>

      <div className="hero-layout">
        {/* ------------- LeftSide Content*/}
        <header className="flex flex-col justify-center md:w-full w-screen md:px-20 px-5 py-10">
          <div className="flex flex-col gap-7">
            <div className="hero-text">
              <h1>
                Developing 
                <span className="slide">
                  <span className="wrapper">
                    {words.map((word) => (
                      <span
                        key={word.text}
                        className="flex items-center md:gap-3 gap-1 pb-2"
                      >
                        <img
                          src={word.imgPath}
                          alt={word.text}
                          className="xl:size-12 md:size-10 size-7 md:p-2 p-1 rounded-full bg-white-50"
                        />
                        <span>{word.text}</span>
                      </span>
                    ))}
                  </span>
                </span>
              </h1>
              <h1>Transforming Vision into Code</h1>
            </div>
              <p className="text-white-50 md:text-xl relative z-10 pointer-events-none">
                Delivering ideas with performance and polish
              </p>
              <Button
                className="md:w-80 md:h-16 w-60 h-12"
                text="See My Work"
                scroll_id='work'
              />
          </div>
        </header>

        {/* -------------- RightSide Content */}
        <figure>
             <Spline className="hidden xl:block absolute xl:right-[-28%] right-0 top-[-20%] lg:top-0" scene="https://prod.spline.design/TJDfBXwYyLCxopEl/scene.splinecode" />
        </figure>
      </div>

    </section>
  );
};

export default Hero;
