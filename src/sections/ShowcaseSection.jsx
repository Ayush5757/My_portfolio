import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React, { useRef } from "react";
import TitleHeader from "../components/TitleHeader";
import YouTube from "react-youtube";

gsap.registerPlugin(ScrollTrigger);
const ShowcaseSection = () => {
  const sectionRef = useRef(null);
  const project1Ref = useRef(null);
  const project2Ref = useRef(null);
  const project3Ref = useRef(null);

  useGSAP(() => {
    const projects = [
      project1Ref.current,
      project2Ref.current,
      project3Ref.current,
    ];
    projects.forEach((card, index) => {
      gsap.fromTo(
        card,
        {
          y: 50,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          delay: 0.3 * (index + 1),
          scrollTrigger: {
            trigger: card,
            start: "top bottom-=100",
          },
        }
      );
    });

    gsap.fromTo(
      sectionRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 2 }
    );
  }, []);
  const opts = {
    width: "100%",
    height: "100%",
    playerVars: {
      autoplay: 1,
      mute: 1,
      controls: 1,
      rel: 0,
      modestbranding: 1,
    },
  };
  return (
    <section id="work" className="app-showcase" ref={sectionRef}>
      <div className="w-full">
        <TitleHeader title="Here are some projects I’ve built" sub="Work" />
        <div className="showcaselayout mt-20">
          {/* left */}
          <div className="first-project-wrapper" ref={project1Ref}>
            <div className="image-wrapper">
              <YouTube videoId="EygRfagepqs"  className="w-full h-[100%] sm:h-[500px]"  opts={opts}/>
            </div>
            <div className="text-content">
              <h2>POS Software Solution for Cafes and Hotels</h2>
              <p className="text-white-50 md: text-md">
                I built a comprehensive POS (Point of Sale) software tailored
                specifically for cafes, dhabas, and small-scale restaurants to
                streamline their daily operations. This system was designed to
                be highly intuitive and scalable, covering everything from
                inventory and sales management to table-wise ordering and staff
                coordination. It supports QR-based table scanning for quick
                order placements, real-time kitchen order ticket (KOT) updates,
                and offers an expense management module to help owners track
                operational costs efficiently. Additionally, the platform
                includes role-based access for staff, insightful sales
                analytics, and a smooth customer experience. The project has
                already been deployed in real-world environments, and detailed
                demo videos are available on the YouTube channel for anyone who
                wants to explore its features further.
                <a href="https://pos-frontend-ej2a.onrender.com/" target="_blank" className=" ml-2 text-blue-400 hover:border-b-2">website link</a>
              </p>
            </div>
          </div>
          {/* Right */}
          <div
            className="project-list-wrapper overflow-hidden"
            ref={project2Ref}
          >
            <div className="project">
              <div className="image-wrapper">
                <img
                  src="/images/chatapp.png"
                  alt="Library Management Platform"
                />
              </div>
              <div className="text-content">
                <h2>
                  Real-time Chat Application with React and Socket.io
                </h2>
                <p className="text-white-50 md: text-md mt-5">
                  I developed a simple yet functional chat application as a test
                  project to explore real-time communication using Sockets.
                  The frontend was built using React.js and Tailwind CSS,
                  ensuring a responsive and modern UI. I implemented core chat
                  features such as friend searching, real-time messaging, and
                  status sharing
                  <a href="https://chatwithme-urb9.onrender.com/" target="_blank" className=" ml-2 text-blue-400 hover:border-b-2">website link</a>
                </p>
              </div>
            </div>

            {/* <div className="project" ref={project3Ref}>
              <div className="image-wrapper bg-[#ffe7eb]">
                <img
                  src="/images/chatapp.png"
                  alt="Library Management Platform"
                />
              </div>
              <div className="text-content">
                <h2>
                  Most visited website in this world because of the person
                  create is the biggest GOT
                </h2>
                <p className="text-white-50 md: text-md mt-5">
                   I developed a simple yet functional chat application as a test
                  project to explore real-time communication using Sockets.
                  The frontend was built using React.js and Tailwind CSS,
                  ensuring a responsive and modern UI. I implemented core chat
                  features such as friend searching, real-time messaging, and
                  status sharing
                </p>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShowcaseSection;
