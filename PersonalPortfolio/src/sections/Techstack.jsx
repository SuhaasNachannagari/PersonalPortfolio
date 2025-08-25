import { useGSAP } from "@gsap/react";
import gsap from "gsap";

import TitleHeader from "../components/TitleHeader";
import PostgreSQL from "../components/models/tech_logos/PostgreSQL";
import ReactIcon from "../components/models/tech_logos/ReactIcon";
import Mongo from "../components/models/tech_logos/Mongo";
import Threejs from "../components/models/tech_logos/Threejs";
import Spring from "../components/models/tech_logos/Spring";
import FlaskIcon from "../components/models/tech_logos/Flask";
import FastIcon from "../components/models/tech_logos/FastIcon";
import C from "../components/models/tech_logos/C";
import CPlus from "../components/models/tech_logos/CPlus";
import Go from "../components/models/tech_logos/Go";
import Java from "../components/models/tech_logos/Java";
import R from "../components/models/tech_logos/R";
import SQL from "../components/models/tech_logos/SQL";
import JavaScript from "../components/models/tech_logos/JavaScript";
import Python from "../components/models/tech_logos/Python";
import PyTorch from "../components/models/tech_logos/PyTorch";
import Pandas from "../components/models/tech_logos/pandas";


// Dummy placeholder components
const FakeTech1 = () => <div style={{ width: 80, height: 80, background: "#eee", borderRadius: 16, display: "flex", alignItems: "center", justifyContent: "center" }}>Empty 1</div>;
const FakeTech2 = () => <div style={{ width: 80, height: 80, background: "#eee", borderRadius: 16, display: "flex", alignItems: "center", justifyContent: "center" }}>Empty 2</div>;
const FakeTech3 = () => <div style={{ width: 80, height: 80, background: "#eee", borderRadius: 16, display: "flex", alignItems: "center", justifyContent: "center" }}>Empty 3</div>;
const FakeTech4 = () => <div style={{ width: 80, height: 80, background: "#eee", borderRadius: 16, display: "flex", alignItems: "center", justifyContent: "center" }}>Empty 4</div>;
const FakeTech5 = () => <div style={{ width: 80, height: 80, background: "#eee", borderRadius: 16, display: "flex", alignItems: "center", justifyContent: "center" }}>Empty 5</div>;

// Divider section title component
const SectionTitle = ({ title }) => (
  <div className="w-full my-12 flex items-center gap-4">
    <div className="h-px bg-gray-600 flex-1" />
    <h2 className="text-xl md:text-2xl font-semibold text-white-50 whitespace-nowrap">
      {title}
    </h2>
    <div className="h-px bg-gray-600 flex-1" />
  </div>
);

const TechStack = () => {
  useGSAP(() => {
    gsap.fromTo(
      ".tech-card",
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power2.inOut",
        stagger: 0.2,
        scrollTrigger: {
          trigger: "#skills",
          start: "top center",
        },
      }
    );
  });

  return (
    <div id="skills" className="flex-center section-padding">
      <div className="w-full h-full md:px-10 px-5">
        <TitleHeader
          title="How I Can Contribute & My Key Skills"
          sub="🤝 What I Bring to the Table"
        />
        {/* Section: Languages */}
        <SectionTitle title="Languages" />
        <div className="tech-grid">
          
          <div className="card-border tech-card overflow-hidden group xl:rounded-full rounded-lg">
            <div className="tech-card-animated-bg" />
            <div className="tech-card-content">
              <div className="tech-icon-wrapper">
                <CPlus model={{ name: "C++", rotation: [0, 0, 0] }} />
              </div>
              <div className="padding-x w-full">
                <p>C++</p>
              </div>
            </div>
          </div>
          <div className="card-border tech-card overflow-hidden group xl:rounded-full rounded-lg">
            <div className="tech-card-animated-bg" />
            <div className="tech-card-content">
              <div className="tech-icon-wrapper">
                <Go model={{ name: "Go", rotation: [0, -1.75, 0] }} />
              </div>
              <div className="padding-x w-full">
                <p>GO</p>
              </div>
            </div>
          </div>
          <div className="card-border tech-card overflow-hidden group xl:rounded-full rounded-lg">
            <div className="tech-card-animated-bg" />
            <div className="tech-card-content">
              <div className="tech-icon-wrapper">
                <Java model={{ name: "Java", rotation: [0, 0, 0] }} />
              </div>
              <div className="padding-x w-full">
                <p>Java</p>
              </div>
            </div>
          </div>
          <div className="card-border tech-card overflow-hidden group xl:rounded-full rounded-lg">
            <div className="tech-card-animated-bg" />
            <div className="tech-card-content">
              <div className="tech-icon-wrapper">
                <Python model={{ name: "Python", rotation: [0, 0, 0] }} />
              </div>
              <div className="padding-x w-full">
                <p>Python</p>
              </div>
            </div>
          </div>
          <div className="card-border tech-card overflow-hidden group xl:rounded-full rounded-lg">
            <div className="tech-card-animated-bg" />
            <div className="tech-card-content">
              <div className="tech-icon-wrapper">
                <SQL model={{ name: "SQL", rotation: [0, 0, 0] }} />
              </div>
              <div className="padding-x w-full">
                <p>SQL</p>
              </div>
            </div>
          </div>
          <div className="card-border tech-card overflow-hidden group xl:rounded-full rounded-lg">
            <div className="tech-card-animated-bg" />
            <div className="tech-card-content">
              <div className="tech-icon-wrapper">
                <JavaScript model={{ name: "JavaScript", rotation: [0, 0, 0] }} />
              </div>
              <div className="padding-x w-full">
                <p>JavaScript</p>
              </div>
            </div>
          </div>
        </div>

        {/* Section: Databases */}
        <SectionTitle title="Databases" />
        <div className="tech-grid">
          <div className="card-border tech-card overflow-hidden group xl:rounded-full rounded-lg">
            <div className="tech-card-animated-bg" />
            <div className="tech-card-content">
              <div className="tech-icon-wrapper">
                <PostgreSQL model={{ name: "PostgreSQL", rotation: [0, 0, 0] }} />
              </div>
              <div className="padding-x w-full">
                <p>PostgreSQL</p>
              </div>
            </div>
          </div>

          <div className="card-border tech-card overflow-hidden group xl:rounded-full rounded-lg">
            <div className="tech-card-animated-bg" />
            <div className="tech-card-content">
              <div className="tech-icon-wrapper">
                <Mongo model={{ name: "Mongo", rotation: [0, 0, 0] }} />
              </div>
              <div className="padding-x w-full">
                <p>MongoDB</p>
              </div>
            </div>
          </div>

        </div>

        {/* Section: Libraries */}
        <SectionTitle title="Libraries and Frameworks" />
        <div className="tech-grid">
          <div className="card-border tech-card overflow-hidden group xl:rounded-full rounded-lg">
            <div className="tech-card-animated-bg" />
            <div className="tech-card-content">
              <div className="tech-icon-wrapper">
                <ReactIcon model={{ name: "React", rotation: [0, 0, 0] }} />
              </div>
              <div className="padding-x w-full">
                <p>React</p>
              </div>
            </div>
          </div>
          <div className="card-border tech-card overflow-hidden group xl:rounded-full rounded-lg">
            <div className="tech-card-animated-bg" />
            <div className="tech-card-content">
              <div className="tech-icon-wrapper">
                <Threejs model={{ name: "three.js", rotation: [0, 0, 0] }} />
              </div>
              <div className="padding-x w-full">
                <p>three.js</p>
              </div>
            </div>
          </div>
          <div className="card-border tech-card overflow-hidden group xl:rounded-full rounded-lg">
            <div className="tech-card-animated-bg" />
            <div className="tech-card-content">
              <div className="tech-icon-wrapper">
                <Spring model={{ name: "Spring", rotation: [0, 0, 0] }} />
              </div>
              <div className="padding-x w-full">
                <p>Spring</p>
              </div>
            </div>
          </div>
          <div className="card-border tech-card overflow-hidden group xl:rounded-full rounded-lg">
            <div className="tech-card-animated-bg" />
            <div className="tech-card-content">
              <div className="tech-icon-wrapper">
                <FlaskIcon model={{ name: "Flask", rotation: [0, 0, 0] }} />
              </div>
              <div className="padding-x w-full">
                <p>Flask</p>
              </div>
            </div>
          </div>
          <div className="card-border tech-card overflow-hidden group xl:rounded-full rounded-lg">
            <div className="tech-card-animated-bg" />
            <div className="tech-card-content">
              <div className="tech-icon-wrapper">
                <FastIcon model={{ name: "FastAPI", rotation: [0, 0, 0] }} />
              </div>
              <div className="padding-x w-full">
                <p>FastAPI</p>
              </div>
            </div>
          </div>
          <div className="card-border tech-card overflow-hidden group xl:rounded-full rounded-lg">
            <div className="tech-card-animated-bg" />
            <div className="tech-card-content">
              <div className="tech-icon-wrapper">
                <PyTorch model={{ name: "PyTorch", rotation: [0, 0, 0] }} />
              </div>
              <div className="padding-x w-full">
                <p>PyTorch</p>
              </div>
            </div>
          </div>
          <div className="card-border tech-card overflow-hidden group xl:rounded-full rounded-lg">
            <div className="tech-card-animated-bg" />
            <div className="tech-card-content">
              <div className="tech-icon-wrapper">
                <Pandas model={{ name: "pandas", rotation: [0, 0, 0] }} />
              </div>
              <div className="padding-x w-full">
                <p>pandas</p>
              </div>
            </div>
          </div>
        </div>

        {/* Section: Tools and Platforms */}

        <SectionTitle title="Tools and Platforms" />
        <div className="tech-grid">
          <div className="card-border tech-card overflow-hidden group xl:rounded-full rounded-lg">
            <div className="tech-card-animated-bg" />
            <div className="tech-card-content">
              <div className="tech-icon-wrapper">
                <img 
                  src="/images/aws_logo.png"
                  alt="aws"
                  className="w-full h-auto object-contain"
                  style={{ maxWidth: '80px', maxHeight: '80px' }}
                />
              </div>
              <div className="padding-x w-full">
                <p>AWS</p>
              </div>
            </div>
          </div>

          <div className="card-border tech-card overflow-hidden group xl:rounded-full rounded-lg">
            <div className="tech-card-animated-bg" />
            <div className="tech-card-content">
              <div className="tech-icon-wrapper">
                <img 
                  src="/images/azure.png"
                  alt="azure"
                  className="w-full h-auto object-contain"
                  style={{ maxWidth: '80px', maxHeight: '80px' }}
                />
              </div>
              <div className="padding-x w-full">
                <p>Azure</p>
              </div>
            </div>
          </div>

          <div className="card-border tech-card overflow-hidden group xl:rounded-full rounded-lg">
            <div className="tech-card-animated-bg" />
            <div className="tech-card-content">
              <div className="tech-icon-wrapper">
                <img 
                  src="/images/git.png"
                  alt="git"
                  className="w-full h-auto object-contain"
                  style={{ maxWidth: '80px', maxHeight: '80px' }}
                />
              </div>
              <div className="padding-x w-full">
                <p>Git</p>
              </div>
            </div>
          </div>

          <div className="card-border tech-card overflow-hidden group xl:rounded-full rounded-lg">
            <div className="tech-card-animated-bg" />
            <div className="tech-card-content">
              <div className="tech-icon-wrapper">
                <img 
                  src="/images/docker.png"
                  alt="docker"
                  className="w-full h-auto object-contain"
                  style={{ maxWidth: '80px', maxHeight: '80px' }}
                />
              </div>
              <div className="padding-x w-full">
                <p>Docker</p>
              </div>
            </div>
          </div>

          <div className="card-border tech-card overflow-hidden group xl:rounded-full rounded-lg">
            <div className="tech-card-animated-bg" />
            <div className="tech-card-content">
              <div className="tech-icon-wrapper">
                <img 
                  src="/images/tableau.png"
                  alt="tableau"
                  className="w-full h-auto object-contain"
                  style={{ maxWidth: '80px', maxHeight: '80px' }}
                />
              </div>
              <div className="padding-x w-full">
                <p>Tableau</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechStack;
