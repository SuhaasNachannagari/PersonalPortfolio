import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useState } from "react";

import { expCards } from "../constants";
import TitleHeader from "../components/TitleHeader";
import GlowCard from "../components/GlowCard";

gsap.registerPlugin(ScrollTrigger);

const Experience = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleExpand = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  useGSAP(() => {


    gsap.to(".timeline", {
      transformOrigin: "bottom bottom",
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: ".timeline",
        start: "top center",
        end: "70% center",
        onUpdate: (self) => {
          gsap.to(".timeline", {
            scaleY: 1 - self.progress,
          });
        },
      },
    });

    // Parallax on image cards
    gsap.utils.toArray(".exp-card-img").forEach((img) => {
      gsap.to(img, {
        yPercent: -12,
        ease: "none",
        scrollTrigger: {
          trigger: img,
          start: "top bottom",
          end: "bottom top",
          scrub: 0.6,
        },
      });
    });


  }, []);

  return (
    <section
      id="experience"
      className="flex-center section-padding xl:px-0"
    >
      <div className="w-full h-full md:px-20 px-5">
        <TitleHeader
          title="Professional Work Experience"
          sub="💼 My Career Overview"
        />
        <div className="mt-32 relative">
          {/* Global Timeline line for the entire section */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 h-full flex justify-center w-2" style={{ zIndex: 10 }}>
            <div className="timeline absolute z-30 h-[105%] -top-10 w-14 md:w-28 bg-black" />
            <div className="gradient-line w-2 h-full absolute z-20" />
          </div>

          <div className="relative z-50 xl:space-y-20 space-y-10 pt-10 pb-10">
            {expCards.map((card, cardIndex) => {
              const isExpanded = expandedIndex === cardIndex;
              return (
                <div key={card.company || card.title} className="relative flex justify-center w-full">
                  {/* Card + slide-out container */}
                  <div className="relative w-[90%] sm:w-[400px] xl:w-[450px] exp-card-img" style={{ zIndex: 60 }}>
                    <div
                      className="cursor-pointer transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] relative z-20 bg-black-100 rounded-xl"
                      style={{
                        transform: isExpanded ? "translateX(-65%)" : "translateX(0)",
                      }}
                      onClick={() => toggleExpand(cardIndex)}
                    >
                      <GlowCard card={card}>
                        <div className="relative">
                          <img src={card.imgPath} alt="exp-img" />
                          {/* Position & date overlay */}
                          <div className="mt-4 flex items-center justify-between gap-2 flex-wrap">
                            <h2 className="font-semibold text-lg md:text-xl text-white">
                              {card.title}
                            </h2>
                            <span className="text-white-50 text-sm whitespace-nowrap">
                              {card.date}
                            </span>
                          </div>
                          {/* Click hint indicator */}
                          <div
                            className="absolute top-3 right-3 flex items-center gap-1.5 px-2.5 py-1 rounded-full transition-all duration-500"
                            style={{
                              background: isExpanded
                                ? `rgba(${card.theme.iconColor ? card.theme.iconColor.rgb : card.theme.rgb}, 0.15)`
                                : `rgba(${card.theme.iconColor ? card.theme.iconColor.rgb : card.theme.rgb}, 0.08)`,
                              border: isExpanded
                                ? `1px solid rgba(${card.theme.iconColor ? card.theme.iconColor.rgb : card.theme.rgb}, 0.4)`
                                : `1px solid rgba(${card.theme.iconColor ? card.theme.iconColor.rgb : card.theme.rgb}, 0.2)`,
                            }}
                          >
                            <svg
                              className={`w-3.5 h-3.5 transition-transform duration-500 ${
                                isExpanded ? "rotate-180" : ""
                              }`}
                              fill="none"
                              stroke={card.theme.iconColor ? card.theme.iconColor.hex : card.theme.hex}
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M9 5l7 7-7 7"
                              />
                            </svg>
                            <span
                              className="text-[10px] font-medium tracking-wide uppercase transition-colors duration-500"
                              style={{
                                color: card.theme.iconColor ? card.theme.iconColor.hex : card.theme.hex,
                              }}
                            >
                              {isExpanded ? "Close" : "Details"}
                            </span>
                          </div>
                        </div>
                      </GlowCard>
                    </div>

                    {/* Slide-out details panel */}
                    <div
                      className="absolute top-0 left-0 w-full h-[calc(100%-1.25rem)] flex items-center transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] pointer-events-none z-10"
                      style={{
                        opacity: isExpanded ? 1 : 0,
                        transform: isExpanded ? "translateX(65%)" : "translateX(0)",
                      }}
                    >
                      <div
                        className="w-full h-full rounded-xl p-6 md:p-8 border pointer-events-auto flex flex-col overflow-y-auto custom-scrollbar"
                        style={{
                          background: "linear-gradient(135deg, rgba(14,14,16,0.95), rgba(28,28,33,0.9))",
                          borderColor: "rgba(98, 224, 255, 0.12)",
                          backdropFilter: "blur(20px)",
                          boxShadow: "0 8px 32px rgba(0,0,0,0.4)",
                        }}
                      >
                        <div className="my-auto">
                          {card.company && (
                            <span
                              className="inline-block px-3 py-1 rounded-full text-xs font-semibold mb-4 w-fit"
                              style={{
                                background: card.featured
                                  ? `linear-gradient(135deg, rgba(${card.theme.rgb}, 0.15), rgba(${card.theme.rgb}, 0.05))`
                                  : "rgba(255, 255, 255, 0.06)",
                                border: card.featured
                                  ? `1px solid rgba(${card.theme.rgb}, 0.3)`
                                  : "1px solid rgba(255, 255, 255, 0.1)",
                                color: card.featured ? card.theme.hex : "#839CB5",
                              }}
                            >
                              {card.company}
                            </span>
                          )}
                          <div className="flex items-center gap-2 mb-3">
                            <svg className="w-4 h-4 text-[#839CB5]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                            <p className="text-[#839CB5] font-medium text-sm">
                              {card.location}
                            </p>
                          </div>
                          <p className="text-white-50 text-xs md:text-sm leading-relaxed pr-2">
                            {card.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;