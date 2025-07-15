import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const AppShowcase = () => {
  const sectionRef = useRef(null);

  useGSAP(() => {
    // Animate the whole section in
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1.5 }
    );

    // Select all project cards inside the section
    const cards = sectionRef.current?.querySelectorAll(".project");

    // Animate each card individually with stagger on scroll
    cards?.forEach((card, index) => {
      gsap.fromTo(
        card,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          delay: 0.1 * index,
          scrollTrigger: {
            trigger: card,
            start: "top bottom-=100",
            toggleActions: "play none none none",
          },
        }
      );
    });
  }, []);

  return (
    <div id="work" ref={sectionRef} className="app-showcase min-h-screen py-20">
      <div className="w-full">
        <div className="showcaselayout">
          <div className="project-list-wrapper overflow-hidden">
            <div className="project">
              <div className="image-wrapper bg-[#FFEDCC]">
                <img
                  src="/images/PurdueCourseAdvisor.png"
                  alt="Agentic Purdue Course Advisor"
                />
              </div>
              <h2>Agentic Purdue Course Advisor</h2>
              <p className="text-sm text-neutral-200 mt-2">
                Python, Langchain, FastAPI, AWS, React
              </p>
              <div className="mt-1 space-x-4">
                <a
                  href="https://github.com/..."
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="/images/github.png"
                    alt="GitHub"
                    className="w-5 h-5 inline-block"
                  />
                </a>
                <a
                  href="https://project4-demo.vercel.app"
                  target="_blank"
                  className="text-blue-500 hover:underline"
                >
                  <img
                    src="/images/link.png"
                    alt="Link"
                    className="w-5 h-5 inline-block"
                  />
                </a>
              </div>
            </div>

            <div className="project">
              <div className="image-wrapper bg-[#FFD8C2]">
                <img src="/images/6Degrease.png" alt="6Degrease Web Game" />
              </div>
              <h2>6 Degrease of Kelvin Benjamin Web Game</h2>
              <p className="text-sm text-neutral-200 mt-2">
                Python, BeautifulSoup, Flask, Pandas
              </p>
              <div className="mt-1 space-x-4">
                <a
                  href="https://github.com/..."
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="/images/github.png"
                    alt="GitHub"
                    className="w-5 h-5 inline-block"
                  />
                </a>
                <a
                  href="https://project4-demo.vercel.app"
                  target="_blank"
                  className="text-blue-500 hover:underline"
                >
                  <img
                    src="/images/link.png"
                    alt="Link"
                    className="w-5 h-5 inline-block"
                  />
                </a>
              </div>
            </div>
          </div>

          <div className="project-list-wrapper overflow-hidden">
            <div className="project">
              <div className="image-wrapper bg-[#FFE9EB]">
                <img src="/images/PersonalWebsite.png" alt="Personal Portfolio" />
              </div>
              <h2>Personal Portfolio</h2>
              <p className="text-sm text-neutral-200 mt-2">
                JavaScript, React, TailwindCSS, Three.js
              </p>
              <div className="mt-1 space-x-4">
                <a
                  href="https://github.com/..."
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="/images/github.png"
                    alt="GitHub"
                    className="w-5 h-5 inline-block"
                  />
                </a>
                <a
                  href="https://project4-demo.vercel.app"
                  target="_blank"
                  className="text-blue-500 hover:underline"
                >
                  <img
                    src="/images/link.png"
                    alt="Link"
                    className="w-5 h-5 inline-block"
                  />
                </a>
              </div>
            </div>

            <div className="project">
              <div className="image-wrapper bg-[#FFF9E3]">
                <img src="/images/BoilerExams.png" alt="BoilerExams.com" />
              </div>
              <h2>BoilerExams.com</h2>
              <p className="text-sm text-neutral-200 mt-2">
                Java, GoLang, Spring, Docker, PostgreSQL
              </p>
              <div className="mt-1 space-x-4">
                <a
                  href="https://project4-demo.vercel.app"
                  target="_blank"
                  className="text-blue-500 hover:underline"
                >
                  <img
                    src="/images/link.png"
                    alt="Link"
                    className="w-5 h-5 inline-block"
                  />
                </a>
              </div>
            </div>
          </div>

          <div className="project-list-wrapper overflow-hidden">
            <div className="project">
              <div className="image-wrapper bg-[#F3E7D3]">
                <img
                  src="/images/GuitarTabularizer.png"
                  alt="Guitar Tabularizer"
                />
              </div>
              <h2>Guitar Music Tabularizer</h2>
              <p className="text-sm text-neutral-200 mt-2">
                Librosa, Python, PyTorch, Numpy, CRNN
              </p>
              <div className="mt-1 space-x-4">
                <a
                  href="https://github.com/..."
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="/images/github.png"
                    alt="GitHub"
                    className="w-5 h-5 inline-block"
                  />
                </a>
              </div>
            </div>

            <div className="project">
              <div className="image-wrapper bg-[#FADADD]">
                <img
                  src="/images/NFLResourceAllocationCard.png"
                  alt="NFL Resource Allocation"
                />
              </div>
              <h2>NFL Resource Allocation Simulator </h2>
              <p className="text-sm text-neutral-200 mt-2">
                Python, Pandas, TensorFlow, MongoDB, Flask
              </p>
              <div className="mt-1 space-x-4">
                <a
                  href="https://github.com/..."
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="/images/github.png"
                    alt="GitHub"
                    className="w-5 h-5 inline-block"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppShowcase;
