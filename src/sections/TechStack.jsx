import React from "react";
import TitleHeader from "../components/TitleHeader";
import { techStackImgs } from "../constants";
import TechIcon from "../components/Models/TechLogos/TechIcon";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const TechStack = () => {
  useGSAP(() => {
    gsap.fromTo(
      ".tech-card",
      {
        y: 50,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power2.inOut",
        stagger: 0.5,
        scrollTrigger: {
          trigger: "#skills",
          start: "top center",
        },
      }
    );
  }, []);

  return (
    <div id="skills" className="flex-center section-padding">
      <di className="w-full h-full md:px-10 px-5">
        <TitleHeader
          title={"My  Preferred TechStack"}
          sub={"The Skills I Bring to the Table"}
        />

        <div className="tech-grid">
          <>
            {techStackImgs.map((icon) => (
              <div className="transition-transform duration-300 ease-in-out transition-all duration-1000 ease-in-out hover:-translate-y-5">
                <div
                  key={icon.name}
                  className="card-border tech-card overflow-hidden group xl:rounded-full rounded-lg"
                >
                  {/* <div className="tech-card-animated-bg" /> */}
                  <div className="tech-card-content">
                    <div className="tech-icon-wrapper">
                      <img src={icon.imgPath} />
                    </div>
                  </div>
                </div>
              </div>
            ))}
            <div className="card-border tech-card overflow-hidden group xl:rounded-full rounded-lg">
              {/* <div className="tech-card-animated-bg" /> */}
              <div className="tech-card-content">
                <div className="tech-icon-wrapper">
                  <img
                    src={"/images/logos/etc.png"}
                    style={{
                      backgroundColor: "rgba(3, 238, 124, 0.9)",
                      borderRadius: "50%",
                    }}
                  />
                </div>
              </div>
            </div>
          </>
        </div>
      </di>
    </div>
  );
};

export default TechStack;
