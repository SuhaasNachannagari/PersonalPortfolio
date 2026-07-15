const navLinks = [
  {
    name: "Work",
    link: "#work",
  },
  {
    name: "Experience",
    link: "#experience",
  },
  {
    name: "Skills",
    link: "#skills",
  },
];


const words = [
  { text : "Engineer", imgPath: '/images/Engineer.jpeg'},
  { text : "Optimize", imgPath: 'images/Optimize.jpeg'},
  { text : "Model", imgPath: '/images/Model.jpeg'},
  { text : "Deploy", imgPath: '/images/Deploy.jpeg'},
  { text : "Architect", imgPath: '/images/Architect.jpeg'},
];

const counterItems = [
  { value: 15, suffix: "+", label: "Years of Experience" },
  { value: 200, suffix: "+", label: "Satisfied Clients" },
  { value: 108, suffix: "+", label: "Completed Projects" },
  { value: 90, suffix: "%", label: "Client Retention Rate" },
];

const logoIconsList = [
  {
    imgPath: "/images/logos/company-logo-1.png",
  },
  {
    imgPath: "/images/logos/company-logo-2.png",
  },
  {
    imgPath: "/images/logos/company-logo-3.png",
  },
  {
    imgPath: "/images/logos/company-logo-4.png",
  },
  {
    imgPath: "/images/logos/company-logo-5.png",
  },
  {
    imgPath: "/images/logos/company-logo-6.png",
  },
  {
    imgPath: "/images/logos/company-logo-7.png",
  },
  {
    imgPath: "/images/logos/company-logo-8.png",
  },
  {
    imgPath: "/images/logos/company-logo-9.png",
  },
  {
    imgPath: "/images/logos/company-logo-10.png",
  },
  {
    imgPath: "/images/logos/company-logo-11.png",
  },
];

const abilities = [
  {
    imgPath: "/images/seo.png",
    title: "Quality Focus",
    desc: "Delivering high-quality results while maintaining attention to every detail.",
  },
  {
    imgPath: "/images/chat.png",
    title: "Reliable Communication",
    desc: "Keeping you updated at every step to ensure transparency and clarity.",
  },
  {
    imgPath: "/images/time.png",
    title: "On-Time Delivery",
    desc: "Making sure projects are completed on schedule, with quality & attention to detail.",
  },
];

const techStackImgs = [
  {
    name: "React Developer",
    imgPath: "/images/logos/react.png",
  },
  {
    name: "Python Developer",
    imgPath: "/images/logos/python.svg",
  },
  {
    name: "Backend Developer",
    imgPath: "/images/logos/node.png",
  },
  {
    name: "Interactive Developer",
    imgPath: "/images/logos/three.png",
  },
  {
    name: "Project Manager",
    imgPath: "/images/logos/git.svg",
  },
];

const techStackIcons = [
  {
    name: "React Developer",
    modelPath: "/models/basketball.glb",
    scale: 1,
    rotation: [0, 0, 0],
  },
  {
    name: "Python Developer",
    modelPath: "/models/oreo_cupcake.glb",
    scale: 0.8,
    rotation: [0, 0, 0],
  },
  {
    name: "Backend Developer",
    modelPath: "/models/node-transformed.glb",
    scale: 5,
    rotation: [0, -Math.PI / 2, 0],
  },
  {
    name: "Interactive Developer",
    modelPath: "/models/three.js-transformed.glb",
    scale: 0.05,
    rotation: [0, 0, 0],
  },
  {
    name: "Project Manager",
    modelPath: "/models/git-svg-transformed.glb",
    scale: 0.05,
    rotation: [0, -Math.PI / 4, 0],
  },
];

const expCards = [
  {
    imgPath: "/images/Amazon.png",
    title: "Software Engineer Intern",
    company: "AWS",
    date: "Incoming Fall 2026",
    theme: { hex: "#62e0ff", rgb: "98, 224, 255" },
    featured: true,
    location: "Seattle, WA",
    description: "This fall, I'll be joining AWS on the Elastic Load Balancing team. I don't know much about the project yet, but my manager did suggest I read a book on Rust. So in my free time, I'm working on my summer reading assignment.",
  },
  {
    imgPath: "/images/Splunk.png",
    title: "Software Engineer Intern",
    company: "Splunk",
    date: "May 2026 - Present",
    theme: { hex: "#ff8c00", rgb: "255, 140, 0", iconColor: { hex: "#62e0ff", rgb: "98, 224, 255" } },
    featured: true,
    location: "San Jose, CA",
    description: "I'm currently at Splunk on the Data Orchestration team, working deep in the agentic ecosystem. I'm building an on-call triage agent for engineers on the Search Services organization, the team behind the search infrastructure much of Splunk's platform runs on. The system is a custom Claude plugin that spawns subagents across a range of MCPs and skills to triage incoming alerts, paired with a shell-based poller that automatically queues, triages, and summarizes each one, with the option to spawn Claude Code windows for engineers to dig deeper. It's been a crash course in harness engineering, and the importance of guardrails, grounding, and deterministic evaluation wherever possible.",
  },
  {
    imgPath: "/images/MSHGlobal.png",
    title: "Software Engineering Intern",
    company: "MSH Global Inc",
    date: "June 2025 - Present",
    theme: { hex: "#00e57a", rgb: "0, 229, 122", glowRgb: "192, 192, 192" },
    featured: false,
    location: "Edison, NJ",
    description: "MSH marked my introduction to agentic systems and the modern AI toolset, tasked with designing the data infrastructure for an entire insurance company. I architected a secure Azure PostgreSQL database supporting 2.5M+ policy records, deployed an internal LangGraph-based tool on top of it, and used FAISS for fast semantic search with OAuth-based access controls to safeguard sensitive data.",
  },
  {
    imgPath: "/images/Inogen.png",
    title: "Machine Learning Engineering Intern",
    company: "Inogen",
    date: "August 2023 - May 2024",
    theme: { hex: "#ffab00", rgb: "255, 171, 0", glowRgb: "192, 192, 192" },
    featured: false,
    location: "West Lafayette, IN",
    description: "My first hands-on experience with real-world data science came through Purdue's Data Mine program, in partnership with Inogen. The work was especially rewarding, since it centered on technology that helps people breathe. I led the analysis of 20 years of high-frequency maintenance data using Pandas, R, and Tableau to uncover key failure patterns, and built time series and random forest models that predicted device failures with 92% accuracy.",
  },
];

const expLogos = [
  {
    name: "logo1",
    imgPath: "/images/logo1.png",
  },
  {
    name: "logo2",
    imgPath: "/images/logo2.png",
  },
  {
    name: "logo3",
    imgPath: "/images/logo3.png",
  },
];

const testimonials = [
  {
    name: "Esther Howard",
    mentions: "@estherhoward",
    review:
      "I can’t say enough good things about Adrian. He was able to take our complex project requirements and turn them into a seamless, functional website. His problem-solving abilities are outstanding.",
    imgPath: "/images/client1.png",
  },
  {
    name: "Wade Warren",
    mentions: "@wadewarren",
    review:
      "Working with Adrian was a fantastic experience. He transformed our outdated website into a modern, user-friendly platform. His attention to detail and commitment to quality are unmatched. Highly recommend him for any web dev projects.",
    imgPath: "/images/client3.png",
  },
  {
    name: "Guy Hawkins",
    mentions: "@guyhawkins",
    review:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    imgPath: "/images/client2.png",
  },
  {
    name: "Marvin McKinney",
    mentions: "@marvinmckinney",
    review:
      "Adrian was a pleasure to work with. He turned our outdated website into a fresh, intuitive platform that’s both modern and easy to navigate. Fantastic work overall.",
    imgPath: "/images/client5.png",
  },
  {
    name: "Floyd Miles",
    mentions: "@floydmiles",
    review:
      "Adrian’s expertise in web development is truly impressive. He delivered a robust and scalable solution for our e-commerce site, and our online sales have significantly increased since the launch. He’s a true professional!",
    imgPath: "/images/client4.png",
  },
  {
    name: "Albert Flores",
    mentions: "@albertflores",
    review:
      "Adrian was a pleasure to work with. He understood our requirements perfectly and delivered a website that exceeded our expectations. His skills in both frontend and backend dev are top-notch.",
    imgPath: "/images/client6.png",
  },
];

const socialImgs = [
  {
    name: "insta",
    imgPath: "/images/insta.png",
  },
  {
    name: "fb",
    imgPath: "/images/fb.png",
  },
  {
    name: "x",
    imgPath: "/images/x.png",
  },
  {
    name: "linkedin",
    imgPath: "/images/linkedin.png",
  },
];

export {
  words,
  abilities,
  logoIconsList,
  counterItems,
  expCards,
  expLogos,
  testimonials,
  socialImgs,
  techStackIcons,
  techStackImgs,
  navLinks,
};