import { useEffect, useState } from "react";
import { UserNavbar } from "./Navbar";
import reanBG from "../assets/rean-bg.png";
import reanBG1 from "../assets/rean-bg1.png";
import { MdArrowOutward } from "react-icons/md";
import { ProjectsSlider } from "./ProjectSlider";
import projectsData1 from "./Json/Projects.json";
import achievements from "./Json/Achievement.json";

import {
  Html5,
  Css,
  Javascript,
  TailwindIcon,
  _React,
  Laravel,
  TypescriptIcon,
  Mysql,
  Postgresql,
  Go,
  GoogleGmail,
  Sass,
} from "@dev.icons/react";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

type Projects = {
  id: number;
  title: string;
  description: string;
  category: string;
  image: string;
  url: string;
  status: string;
};

type Achievement = {
  name: string;
  description: string;
  image: string;
};

const achievement = achievements as Achievement[];

const project = projectsData1 as Projects[];
const totalProjects = project.filter(
  (project) => project.status === "completed",
).length;

const skills = [
  { name: "HTML", Icon: Html5 },
  { name: "CSS", Icon: Css },
  { name: "Java Script", Icon: Javascript },
  { name: "Tailwind CSS", Icon: TailwindIcon },
  { name: "Sass", Icon: Sass },
  { name: "Golang", Icon: Go },
  { name: "React JS", Icon: _React },
  { name: "Type Script", Icon: TypescriptIcon },
  { name: "Laravel", Icon: Laravel },
  { name: "MySQL", Icon: Mysql },
  { name: "Postgre SQL", Icon: Postgresql },
];

export const Homepage = () => {
  const [activeAchievement, setActiveAchievement] = useState<number | null>(
    null,
  );
  const [activeSkill, setActiveSkill] = useState<number | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 },
    );

    document
      .querySelectorAll<HTMLElement>("[data-reveal]")
      .forEach((element) => {
        observer.observe(element);
      });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="page-enter">
      <div className="relative min-h-screen">
        <UserNavbar />
        <main id="main" data-reveal>
          <div className="relative min-h-[44rem] overflow-hidden bg-black text-white sm:min-h-screen">
            <h1 className="pointer-events-none absolute top-1/2 left-1/2 z-0 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-b from-[#ff0000] from-[45%] to-black bg-clip-text font-gothic text-[clamp(8rem,28vw,32rem)] lg:text-[clamp(28rem,48vw,52rem)] leading-[0.75] uppercase text-transparent">
              Portfolio
            </h1>

            <div className="relative z-10 flex min-h-[44rem] sm:min-h-screen">
              <div className="flex min-h-[44rem] w-full flex-col justify-center px-5 pt-16 sm:px-10 md:w-3/4 lg:w-1/2 lg:px-20">
                <h3 className="mb-2 text-2xl font-brittany sm:text-5xl">
                  Hello, I'm
                </h3>
                <h2 className="mb-3 font-gothic text-[clamp(2.8rem,14vw,3.5rem)] leading-[0.75] uppercase sm:mb-4 sm:text-[clamp(4rem,8vw,7rem)]">
                  Raihan Rizky
                </h2>
                <h2 className="mb-4 font-gothic text-[clamp(2.8rem,14vw,3.5rem)] leading-[0.75] uppercase sm:text-[clamp(4rem,8vw,7rem)]">
                  Adriansyah
                </h2>
                <h2 className="mb-4 text-xl font-extrabold uppercase text-red-500 sm:text-4xl">
                  Full-Stack <br />
                  Developer
                </h2>
                <p className="mb-8 max-w-sm text-base text-justify sm:text-lg">
                  I'm interested to make a <br /> website and web application.
                </p>
              </div>
              <div className="absolute bottom-0 left-1/2 z-10 hidden -translate-x-1/2 md:flex">
                <img
                  src={reanBG}
                  alt="Profile"
                  className="size-[19rem] object-cover sm:size-[27rem] lg:size-[34rem] xl:size-[36rem]"
                />
              </div>
            </div>
          </div>
        </main>
      </div>
      <section
        className="bg-black py-16 text-white sm:py-20"
        id="about"
        data-reveal
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-5 mb-20">
            <h2 className="shrink-0 text-xl sm:text-2xl font-bold uppercase lg:text-3xl">
              About Me!
            </h2>
            <div className="h-px w-full bg-white/20"></div>
          </div>
        </div>

        <div className="container mx-auto flex w-11/12 flex-col px-4 lg:w-5/6 lg:flex-row">
          <div className="relative mx-auto h-[25rem] w-full max-w-[24rem] shrink-0 sm:h-[32rem] sm:max-w-[28rem] lg:mx-0 lg:h-[35rem]">
            <div className="absolute bottom-0 left-0 z-0 h-[22rem] w-full rounded-t-full bg-gray-400 sm:h-[27rem] lg:h-[29rem]"></div>
            <img
              src={reanBG1}
              alt="Profile"
              className="absolute bottom-0 left-1/2 z-10 h-full w-auto -translate-x-1/2 object-contain"
            />
          </div>
          <div className="mt-10 w-full lg:mt-0 lg:ml-20">
            <h1 className="mb-4 font-gothic text-[clamp(2rem,10vw,3rem)] leading-[0.9] uppercase sm:text-[clamp(4rem,8vw,8rem)]">
              I'm Available for{" "}
              <span className="text-red-500">Full-Stack Development</span>{" "}
              Project.
            </h1>

            <p className="mb-5 text-sm leading-relaxed text-left sm:text-xl sm:text-justify lg:text-xl">
              I am a full-stack developer with experience in building web
              applications using modern technologies. I am passionate about
              creating efficient and scalable solutions that meet the needs of
              users. I am always eager to learn new skills and stay up-to-date
              with the latest trends in web development.
            </p>

            <div className="mb-10 flex flex-wrap gap-4">
              <div className="flex flex-col items-center justify-center bg-white/20 backdrop-blur-lg p-2 sm:p-4 rounded-lg">
                <h2 className=" text-lg sm:text-3xl font-bold">3+</h2>
                <p>Years of Experience</p>
              </div>
              <div className="flex flex-col items-center justify-center bg-white/20 backdrop-blur-lg p-2 sm:p-4 rounded-lg">
                <h2 className="text-xl sm:text-3xl font-bold">
                  {totalProjects}
                </h2>
                <p>Projects Completed</p>
              </div>
            </div>

            <a
              href="#contacts"
              className="text-sm sm:text-xl uppercase flex flex-row items-center gap-2 bg-red-500 hover:bg-red-600 cursor-pointer ease-in-out duration-300 py-5 px-5 w-fit rounded "
            >
              Get in touch <MdArrowOutward />
            </a>
          </div>
        </div>
        <div className="container mx-auto px-4">
          <div className="flex flex-col gap-4 mt-10">
            <div className="flex items-center gap-5 mt-15">
              <h1 className="shrink-0 text-md sm:text-lg font-bold uppercase lg:text-2xl">
                Education Background
              </h1>

              {/* <div className="h-px w-full bg-white/20"></div> */}
            </div>

            <div className="flex flex-col gap-1 sm:flex-row sm:justify-between">
              <h1 className="text-md sm:text-xl font-bold bg-gradient-to-l from-[#ff0000] from-[5%] bg-clip-text to-white text-transparent">
                SMK Bina Informatika
              </h1>
              <p className="text-sm sm:text-lg ">2023 - 2026</p>
            </div>

            <div className="flex flex-col gap-1 sm:flex-row sm:justify-between">
              <h1 className="text-md sm:text-xl font-bold bg-gradient-to-l from-[#ff0000] from-[5%] bg-clip-text to-white text-transparent">
                Multimedia Nusantara University
              </h1>
              <p className="text-sm sm:text-lg">2026 - Present</p>
            </div>
          </div>
        </div>

        <div className="container px-4 mx-auto mt-20">
          <h2 className="text-md sm:text-lg font-bold uppercase text-white lg:text-2xl">
            Achievements
          </h2>

          <div className="mt-5 flex flex-wrap gap-5">
            {achievement.map((achieve, index) => (
              <div
                key={index}
                className="group relative w-36 cursor-pointer sm:w-44"
              >
                <button
                  type="button"
                  onClick={() =>
                    setActiveAchievement((current) =>
                      current === index ? null : index,
                    )
                  }
                  className="block w-full"
                  aria-expanded={activeAchievement === index}
                  aria-label={`Lihat detail ${achieve.name}`}
                >
                  <img
                    src={achieve.image}
                    alt={achieve.name}
                    className="object-cover"
                  />
                </button>

                <div
                  className={`pointer-events-none absolute left-0 top-full z-50 mt-3 w-[min(80vw,20rem)] rounded-xl border-2 border-white bg-black p-5 transition-all duration-300 md:left-full md:top-0 md:mt-0 md:ml-6 md:w-80 md:group-hover:visible md:group-hover:opacity-100 ${
                    activeAchievement === index
                      ? "visible opacity-100"
                      : "invisible opacity-0"
                  }`}
                >
                  <div className="flex items-center gap-4 mb-4">
                    <img src={achieve.image} />
                  </div>
                  <div>
                    <h3 className="text-sm sm:text-lg text-white font-bold">
                      {achieve.name}
                    </h3>
                  </div>

                  <p className="text-xs sm:text-lg text-white/70 text-justify">
                    {achieve.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="container px-4 mx-auto mt-20">
          <h2 className="text-md sm:text-lg font-bold uppercase text-white lg:text-2xl">
            Project I Worked With
          </h2>

          <div className="mt-5 flex flex-wrap gap-4 sm:gap-5">
            {skills.map((skill, index) => (
              <button
                type="button"
                key={index}
                onClick={() =>
                  setActiveSkill((current) =>
                    current === index ? null : index,
                  )
                }
                className="relative group cursor-pointer overflow-hidden rounded bg-white p-2 text-left shadow sm:p-3"
                aria-label={`Lihat ${skill.name}`}
                aria-pressed={activeSkill === index}
              >
                <skill.Icon className="size-10 sm:size-14 lg:size-[70px]" />

                <div
                  className={`absolute inset-0 flex items-center justify-center bg-black/80 transition-transform duration-300 md:group-hover:translate-y-0 ${
                    activeSkill === index ? "translate-y-0" : "translate-y-full"
                  }`}
                >
                  <span className="text-white text-xs sm:text-lg font-bold tracking-wide">
                    {skill.name}
                  </span>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      <ProjectsSlider />

      <section
        className="bg-black py-16 text-white sm:py-20"
        id="contacts"
        data-reveal
      >
        <div className="container mx-auto px-4">
          <div className="mb-10 flex items-center gap-5">
            <h2 className="shrink-0 text-xl sm:text-2xl font-bold uppercase lg:text-3xl">
              Contact Me!
            </h2>

            <div className="h-px w-full bg-white/20"></div>
          </div>

          <div className="mx-auto flex w-11/12 flex-col gap-10 px-4 lg:w-5/6 lg:flex-row">
            <div className="flex flex-col gap-4">
              <h1 className="font-gothic text-[clamp(2.5rem,11vw,4rem)] leading-[0.9] uppercase font-bold lg:text-[clamp(4rem,8vw,10rem)]">
                Let's <span className="text-red-500">Work</span> <br /> and Make
                it <br /> <span className="text-red-500">Better</span> Together.{" "}
                <br />
              </h1>

              <p className="text-sm sm:text-lg text-justify lg:text-xl">
                If you have any questions or want to discuss a project, feel
                free to reach out to me. I am always open to new opportunities
                and collaborations.
              </p>
            </div>

            <div className="w-full lg:ml-10">
              <div className="flex flex-col gap-10">
                <a
                  href="https://linkedin.com/in/raihan-rizky-adriansyah4434/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-row items-center gap-4 "
                >
                  <FaLinkedin className="break-all size-10 p-1 bg-white text-blue-500 rounded-xl " />

                  <span className="font-bold text-sm sm:text-2xl">
                    Raihan Rizky Adriansyah
                  </span>
                </a>
                <a
                  href="https://github.com/Reyy344"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-row items-center gap-4 "
                >
                  <FaGithub className="size-10 p-1 bg-white text-black rounded-xl" />

                  <span className="break-all font-bold text-sm sm:text-2xl">
                    Reyy344
                  </span>
                </a>
                <a
                  href="https://www.instagram.com/raihanrizky2/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-row items-center gap-4"
                >
                  <FaInstagram className="size-10 bg-linear-to-r from-[#833ab4] via-[#fd1d1d] to-[#fcb045] text-white p-[1.55px] rounded-xl" />

                  <span className="break-all font-bold text-sm sm:text-2xl">
                    raihanrizky2
                  </span>
                </a>
                <a
                  href="https://www.instagram.com/raihan.rizky2/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-row items-center gap-4"
                >
                  <FaInstagram className="size-10 bg-linear-to-r from-[#833ab4] via-[#fd1d1d] to-[#fcb045] text-white p-[1.55px] rounded-xl" />

                  <span className="break-all font-bold text-sm sm:text-2xl">
                    raihan.rizky2
                  </span>
                </a>
                <a
                  href="mailto:raihanrizkybi@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-row items-center gap-4 "
                >
                  <GoogleGmail className="size-10 p-1 bg-white text-blue-500 rounded-xl" />

                  <span className="break-all font-bold text-xs sm:text-2xl">
                    raihanrizkybi@gmail.com
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
