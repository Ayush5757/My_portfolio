import React from "react";
import TitleHeader from "../components/TitleHeader";
import { expCards } from "../constants";
import GlowCard from "../components/GlowCard";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const ExperienceSection = () => {

  useGSAP(()=>{
    gsap.to('.timeline',{
      transformOrigin: 'bottom bottom',
      ease: 'power1.inOut',
      scrollTrigger: {
        trigger: '.timeline',
        start: 'top center',
        end: '70% center',
        onUpdate: (self)=>{
          gsap.to('.timeline',{
            scaleY: 1 - self.progress
          })
        }
      },
    })

    gsap.utils.toArray('.expText').forEach((text)=>{
      gsap.from(text, {
        xPercent: 0,
        opacity: 0,
        duration: 2,
        ease: 'power2.inOut',
        scrollTrigger: {
          trigger: text,
          start: 'top 100%'
        }
      })
    })
  },[])

  return (
    <section
      id="experience"
      className="w-full md:mt-40 mt-20 section-padding xl:px-0"
    >
      <div className="w-full h-full md:px-20 px-5">
        <TitleHeader
          title="Experience & Education"
          sub="My Career Overview"
        />

        <div className="mt-32 relative">
          <div className="relative z-50 xl:space-y-32 space-y-10">
            {expCards.map((card) => (
              <div key={card.title} className="exp-card-wrapper">
                <div></div>
                <div className="xl:w-5/6">
                  <div className="flex items-start">
                    <div className="timeline-wrapper">
                      <div className="timeline"/>
                      <div className="gradient-line w-1 h-full"/>
                    </div>

                    <div className="expText flex xl:gap-20 md:gap-10 gap-5 relative z-20">
                      <div className="timeline-logo">
                        <img src={card.logoPath} alt="logo" style={{borderRadius:'50%'}} />
                      </div>
                      <div>
                        <h1 className="font-semibold text-xl">{card.title}</h1>
                        <p className="my-5 text-white-50">📅 {card.date}</p>
                        <p className="text-[#839cb5] italic">
                          Responsibilities
                        </p>
                        <ul className="list-disc ms-5 mt-5 flex flex-col gap-5 text-white-50">
                          {card.responsibilities.map((res)=>(
                            <li key={res} className="text-sm lg:text-lg">
                              {res}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
