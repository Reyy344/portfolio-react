import { useRef, useState } from "react";
import { createPortal } from "react-dom";
import {
  MdArrowBack,
  MdArrowForward,
  MdArrowOutward,
  MdChevronLeft,
  MdChevronRight,
  MdClose,
} from "react-icons/md";
import projectsData from "./Json/Projects.json";

type Project = {
  id: number;
  title: string;
  description: string;
  category: string;
  image: string;
  images?: string[];
  tech: string[];
  url?: string;
};

const projects = projectsData as Project[];
// const noLinkProjects = projects.filter((project) => project.url === "no-link");

export function ProjectsSlider() {
  const sliderRef = useRef<HTMLDivElement>(null);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const galleryImages = selectedProject?.images?.length
    ? selectedProject.images
    : selectedProject
      ? [selectedProject.image]
      : [];

  const slide = (direction: "next" | "prev") => {
    const slider = sliderRef.current;

    if (!slider) return;

    slider.scrollBy({
      left: direction === "next" ? 420 : -420,
      behavior: "smooth",
    });
  };

  const changeGalleryImage = (direction: "next" | "prev") => {
    setActiveImageIndex((currentIndex) => {
      const lastIndex = galleryImages.length - 1;

      if (direction === "next") {
        return currentIndex === lastIndex ? 0 : currentIndex + 1;
      }

      return currentIndex === 0 ? lastIndex : currentIndex - 1;
    });
  };

  return (
    <section
      className="overflow-hidden bg-black py-16 text-white sm:py-20"
      id="projects"
    >
      <div className="container mx-auto px-4">
        <div className="mb-8 flex items-center gap-3 sm:mb-10 sm:gap-5">
          <h2 className="shrink-0 text-xl sm:text-2xl font-bold uppercase lg:text-3xl">
            Selected Projects
          </h2>

          <div className="h-px w-full bg-white/20"></div>
        </div>

        <div
          ref={sliderRef}
          className="flex snap-x snap-mandatory gap-6 overflow-x-auto scroll-smooth pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {projects.map((project, index) => (
            <article
              key={project.id}
              className="group w-[84vw] shrink-0 snap-start sm:w-[55vw] lg:w-[calc((100%-3rem)/3)]"
            >
              <button
                type="button"
                onClick={() => {
                  setSelectedProject(project);
                  setActiveImageIndex(0);
                }}
                className="w-full text-left"
              >
                <div className="aspect-[4/2.4] overflow-hidden border border-white/15 bg-zinc-900">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>

                <div className="mt-5 flex items-center justify-between gap-4">
                  <div className="flex items-center gap-4">
                    <span className="text-2xl sm:text-4xl font-bold text-red-500">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <div>
                      <h3 className="text-sm sm:text-lg font-bold uppercase">
                        {project.title}
                      </h3>
                      <p className="text-xs sm:text-sm uppercase text-white/60">
                        {project.category}
                      </p>
                    </div>
                  </div>

                  <MdArrowOutward className="shrink-0 text-xl sm:text-3xl transition group-hover:translate-x-1 group-hover:-translate-y-1" />
                </div>
              </button>
            </article>
          ))}
        </div>

        <div className="mt-8 flex justify-end gap-3">
          <button
            onClick={() => slide("prev")}
            className="grid size-9 place-items-center border border-white/30 transition hover:border-red-500 hover:bg-red-500 sm:size-11"
            aria-label="Project sebelumnya"
          >
            <MdArrowBack className="text-lg sm:text-2xl" />
          </button>

          <button
            onClick={() => slide("next")}
            className="grid size-9 place-items-center border border-white/30 transition hover:border-red-500 hover:bg-red-500 sm:size-11"
            aria-label="Project selanjutnya"
          >
            <MdArrowForward className="text-lg sm:text-2xl" />
          </button>
        </div>
      </div>

      {selectedProject &&
        createPortal(
          <div
            className="fixed inset-0 z-50 grid place-items-center bg-black/80 p-3 backdrop-blur-sm sm:p-4"
            onClick={() => setSelectedProject(null)}
          >
            <div
              className="relative max-h-[90vh] w-full max-w-3xl overflow-y-auto bg-zinc-950 text-white"
              onClick={(event) => event.stopPropagation()}
            >
              <button
                type="button"
                onClick={() => {
                  setSelectedProject(null);
                  setActiveImageIndex(0);
                }}
                className="absolute right-3 top-3 z-10 grid size-6 place-items-center rounded-full bg-black/70 hover:bg-red-500 sm:right-4 sm:top-4 sm:size-8"
                aria-label="Tutup Popup"
              >
                <MdClose className="size-5 sm:size-7" />
              </button>

              <div className="relative aspect-video w-full overflow-hidden bg-zinc-900">
                <img
                  src={galleryImages[activeImageIndex]}
                  alt={`${selectedProject.title} - gambar ${activeImageIndex + 1}`}
                  className="h-full w-full object-cover"
                />

                {galleryImages.length > 1 && (
                  <>
                    <button
                      type="button"
                      onClick={() => changeGalleryImage("prev")}
                      className="absolute left-2 top-1/2 grid size-7 -translate-y-1/2 place-items-center rounded-full bg-black/70 transition hover:bg-red-500 sm:left-3 sm:size-8"
                      aria-label="Gambar sebelumnya"
                    >
                      <MdChevronLeft className="size-5 sm:size-7" />
                    </button>

                    <button
                      type="button"
                      onClick={() => changeGalleryImage("next")}
                      className="absolute right-2 top-1/2 grid size-7 -translate-y-1/2 place-items-center rounded-full bg-black/70 transition hover:bg-red-500 sm:right-3 sm:size-8"
                      aria-label="Gambar selanjutnya"
                    >
                      <MdChevronRight className="size-5 sm:size-7" />
                    </button>

                    <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2">
                      {galleryImages.map((image, index) => (
                        <button
                          key={image}
                          type="button"
                          onClick={() => setActiveImageIndex(index)}
                          className={`size-2 rounded-full transition ${
                            index === activeImageIndex
                              ? "w-5 bg-red-500"
                              : "bg-white/50 hover:bg-white"
                          }`}
                          aria-label={`Lihat gambar ${index + 1}`}
                        />
                      ))}
                    </div>
                  </>
                )}
              </div>

              <div className="p-5 sm:p-6 md:p-10">
                <p className="text-xs sm:text-lg font-bold uppercase text-white">
                  {selectedProject.category}
                </p>

                <h2 className="mt-2 text-2xl font-bold text-red-500 sm:text-4xl">
                  {selectedProject.title}
                </h2>

                <p className="mt-5 text-sm leading-relaxed text-justify text-white/60 sm:text-lg">
                  {selectedProject.description}
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {selectedProject.tech.map((tech) => (
                    <span
                      key={tech}
                      className="rounded border text-xs border-white/20 px-3 py-1 lg:text-lg"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {selectedProject.url?.trim() ? (
                  <a
                    href={selectedProject.url}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-8 inline-flex items-center gap-2 bg-red-500 px-5 py-3 font-bold uppercase transition hover:bg-red-600"
                  >
                    Visit Project{" "}
                    <MdArrowForward className="text-sm sm:text-xl" />
                  </a>
                ) : (
                  <p className="text-sm sm:text-xl mt-8 inline-flex items-center gap-2 px-5 py-3 bg-white/10">
                    No Link Available
                  </p>
                )}
              </div>
            </div>
          </div>,
          document.body,
        )}
    </section>
  );
}
