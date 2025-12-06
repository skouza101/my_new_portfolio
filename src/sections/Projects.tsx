import Image from "next/image";
import darkSaasLandingPage from "@/assets/images/dark-saas-landing-page.png";
import lightSaasLandingPage from "@/assets/images/light-saas-landing-page.png";
import aiStartupLandingPage from "@/assets/images/ai-startup-landing-page.png";
import CheckIcon from "@/assets/icons/check-circle.svg";
import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";
import grain from "@/assets/images/grain.jpg";

const portfolioProjects = [
  {
    company: "Acme Corp",
    year: "2022",
    title: "Dark Saas Landing Page",
    results: [
      { title: "Enhanced user experience by 40%" },
      { title: "Improved site speed by 50%" },
      { title: "Increased mobile traffic by 35%" },
    ],
    link: "https://youtu.be/4k7IdSLxh6w",
    image: darkSaasLandingPage,
  },
  {
    company: "Innovative Co",
    year: "2021",
    title: "Light Saas Landing Page",
    results: [
      { title: "Boosted sales by 20%" },
      { title: "Expanded customer reach by 35%" },
      { title: "Increased brand awareness by 15%" },
    ],
    link: "https://youtu.be/7hi5zwO75yc",
    image: lightSaasLandingPage,
  },
  {
    company: "Quantum Dynamics",
    year: "2023",
    title: "AI Startup Landing Page",
    results: [
      { title: "Enhanced user experience by 40%" },
      { title: "Improved site speed by 50%" },
      { title: "Increased mobile traffic by 35%" },
    ],
    link: "https://youtu.be/Z7I5uSRHMHg",
    image: aiStartupLandingPage,
  },
];

export const ProjectsSection = () => {
  return (
    <section className="pb-16 lg:pb-24">
      <div className="container">
        <div className="flex justify-center">
          <p className="uppercase font-semibold tracking-widest bg-gradient-to-r from-sky-400 to-blue-500 bg-clip-text text-transparent">
            Real-world Results
          </p>
        </div>
        <h2 className="text-center font-serif font-semibold tracking-wide text-3xl md:text-5xl mt-6">
          Featured projects
        </h2>
        <p className="text-center text-white/55 md:text-lg lg:text-xl mt-4 max-w-md mx-auto">
          Discover how I transform concepts into engaging digital experiences.
        </p>
      </div>
      <div className="container flex flex-col gap-20 mt-10 md:mt-20">
        {portfolioProjects.map((project, index) => (
          <div
            key={index}
            className="bg-gray-800 rounded-3xl px-8 pt-6 md:px-10 md:pt-12 lg:px-20 lg:pt-16 relative z-0 after:z-10 after:content-[''] after:absolute after:inset-0 after:rounded-3xl after:outline after:outline-2 after:-outline-offset-2 after:outline-white/20 overflow-hidden after:pointer-events-none"
          >
            <div
              className="absolute inset-0 -z-10 opacity-5 "
              style={{ backgroundImage: `url(${grain.src})` }}
            ></div>
            <div className="lg:grid lg:grid-cols-2 lg:gap-16">
              <div className="lg:pb-16 ">
                <div className="flex justify-between">
                  <div className="bg-gradient-to-r from-sky-400 to-blue-500 bg-clip-text text-transparent text-sm md:text-lg uppercase font-semibold tracking-widest gap-2 inline-flex">
                    <span>{project.company}</span>
                    <span className="">&bull;</span>
                    <span>{project.year}</span>
                  </div>
                </div>
                <h3 className="text-xl font-serif font-semibold mt-2 md:text-4xl md:mt-4">
                  {project.title}
                </h3>
                <hr className="mt-4 md:mt-6 border-white/10" />
                <ul className="flex flex-col gap-4 mt-4 md:mt-6">
                  {project.results.map((result, index) => (
                    <li
                      key={index}
                      className="flex items-center gap-2 text-sm md:text-base text-white/50"
                    >
                      <CheckIcon className="size-5 md:size-6" />
                      <span>{result.title}</span>
                    </li>
                  ))}
                </ul>
                <a href={project.link} className="mt-6">
                  <button className="inline-flex items-center justify-center gap-2 bg-white text-gray-950 h-12 w-full md:w-auto px-8 rounded-xl font-semibold hover:bg-gray-100 transition-colors mt-6">
                    <span>View Live Demo</span>
                    <ArrowUpRightIcon className="size-5" />
                  </button>
                </a>
              </div>
              <div className="relative">
                <Image
                src={project.image}
                alt={project.title}
                className="-mb-4 mt-6 md:-mb-0 lg:mt-0 lg:absolute lg:h-full lg:w-auto lg:max-w-none"
              />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
