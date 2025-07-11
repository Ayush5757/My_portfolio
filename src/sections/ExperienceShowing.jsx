import React from "react";
import TitleHeader from "../components/TitleHeader";
import TechIcon from "../components/Models/TechLogos/TechIcon";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const ExperienceShowing = () => {
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
    <>
    <div className="flex-center section-padding w-[100vw]">
      <di className="w-[100vw] h-full md:px-10 px-5">
        <div className="font-semibold md:text-5xl text-3xl text-center w-full">
          My experience at Torinit.
        </div>
        <div className="exp-grid w-[80vw] m-auto mt-20 flex justify-center">
          <div className="transition-all duration-1000 ease-in-out hover:-translate-y-2 sm:hidden md:block md:w-[70vw]">
            <img src="/images/torinitback.png" alt="" srcset="" />
          </div>
        </div>
        <div className=" w-[80vw] m-auto font-semibold text-xs lg:text-sm lg:text-md mt-10 px-5 lg:px-30 text-center">
          <div className="text-start text-gray-300 border-b-1 border-gray-900 p-5">
            Venue Management System Worked on a web-based venue booking and
            management system. The frontend was built using React.js, while the
            backend was handled using PHP. My role involved creating reusable
            components, managing booking flows, and ensuring seamless user
            interactions.
          </div>
          <div className="text-start text-gray-300 border-b-1 border-gray-900 p-5">
            FindWork Platform Developed a job-search platform similar to
            Naukri.com where users can explore jobs, companies, and related
            insights.
          </div>
          <div className="text-start text-gray-300 border-b-1 border-gray-900 p-5">
            Pace360 (CRM + HRM System) At Pace360, I worked on a business
            platform that integrated both CRM and HRM functionalities. The
            project had similarities to the FindWork platform but involved more
            complex use cases and deeper architectural considerations. The
            frontend was entirely developed using React.js, where I handled
            routing through React Router and created a responsive and consistent
            UI using Material UI (MUI). I also implemented advanced filtering
            logic, dynamic form handling, and managed role-based access
            throughout the application. The project required efficient state
            management and theming control to maintain a seamless user
            experience. Throughout the development, I collaborated closely with
            a team of highly supportive colleagues to ensure the solution was
            scalable and aligned with real-world business needs.
          </div>
        </div>
      </di>
    </div>
   
    </>
  );
};

export default ExperienceShowing;
