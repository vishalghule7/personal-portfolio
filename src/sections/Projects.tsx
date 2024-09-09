import darkSaasLandingPage from "@/assets/images/dark-saas-landing-page.png";
import lightSaasLandingPage from "@/assets/images/light-saas-landing-page.png";
import aiStartupLandingPage from "@/assets/images/ai-startup-landing-page.png";
import Image from "next/image";
import CheckboxIcon from "@/assets/icons/check-circle.svg";
import ArrowIcon from "@/assets/icons/arrow-up-right.svg";
import GrainImage from "@/assets/images/grain.jpg";
import { SectionHeader } from "@/components/SectionHeader";
import { Card } from "@/components/Card";

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
    <section className="pb-16 lg:py-24">
      <div className=" container">
        <SectionHeader
          eyebrow="Projects-Section"
          title="Featured Projects"
          description="I transformed concepts into engaging digital experience"
        />
        <div className="flex flex-col mt-10 md:mt-20 gap-16">
          {portfolioProjects.map((project) => (
            <Card
              key={project.title}
              className="bg-gray-800 px-8 pb-0 pt-8 md:px-12 md:pt-10 lg:pt-14 lg:px-16 "
            >
              <div
                className="absolute inset-0 -z-10 opacity-5"
                style={{
                  backgroundImage: `url(${GrainImage.src})`,
                }}
              ></div>

              <div className="lg:grid lg:grid-cols-2 lg:gap-16">
                <div className=" pb-14">
                  <div className=" bg-gradient-to-r from-emerald-400 to-sky-400 inline-flex font-bold uppercase tracking-widest text-sm  bg-clip-text text-transparent gap-2 ">
                    <span>{project.company}</span>
                    <span>&bull;</span>
                    <span>{project.year}</span>
                  </div>
                  <h3 className=" font-serif text-xl md:text-4xl tracking-wid mt-2 md:mt-5">
                    {project.title}
                  </h3>
                  <hr className="border-t-2 border-white/20 mt-4" />
                  <ul className=" flex flex-col gap-4 mt-4 md:mt-5">
                    {project.results.map((result) => (
                      <li className="flex gap-2 text-sm md:text-base text-white/50">
                        <CheckboxIcon className="size-5 md:size-6" />
                        <span>{result.title}</span>
                      </li>
                    ))}
                  </ul>
                  <a href="#">
                    <button className="bg-white text-gray-950    h-11 w-full md:w-auto md:px-6 rounded-xl font-semibold inline-flex items-center justify-center gap-2 mt-8 ">
                      <span>View Live Site</span>
                      <ArrowIcon className=" size-4" />
                    </button>
                  </a>
                </div>
                <div className=" relative">
                  <Image
                    className=" mt-8 -mb-4 md:mb-0 lg:mt-0 lg:absolute lg:h-full lg:w-auto lg:max-w-none "
                    src={project.image}
                    alt={project.title}
                  />
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
