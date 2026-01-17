import useScrollReveal from "../hooks/useScrollReveal";

const projects = [
  {
    title: "Syllabus Tracker",
    description:
      "A task management app designed to help users conquer their daily chaos with precision and style.",
    tech: ["React", "Firebase"],
    github: "https://github.com/jisnu-glitch/Syllabus_tracker",
    live: "https://syllabus-tracker-sable.vercel.app/",
  },
  {
    title: "Ticktill",
    description:
      "A simple, date-based countdown timer built using plain JavaScript",
    tech: ["JavaScript"],
    github: "https://github.com/jisnu-glitch/Ticktill-",
    live: "https://jisnu-glitch.github.io/Ticktill-/",
  },
  {
    title: "Chappati Roundness Detector",
    description:
      "This project measures the roundness of a chapathi uploaded as image",
    tech: ["Python", "OpenCV"],
    github: "https://github.com/ShanRomio306/Chapathi-Roundness-Checker",
    live: "https://chapathi-roundness-checker-hvxf.onrender.com/",
  },
];

export default function Projects() {
    useScrollReveal(".sr-project");

  return (
    <section className="bg-batblack text-white py-20 px-6 " id="projects">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-heading text-batyellow text-5xl text-center mb-12">
          Completed Missions
        </h2>

        <div className="grid gap-8 md:grid-cols-3">
          {projects.map((project) => (
            <div
              key={project.title}
              className="sr-project bg-batgrey border-2 border-gray-600 p-6
           hover:border-batyellow hover:-translate-y-2 hover:shadow-xl
           transition duration-300"
            >
              <h3 className="font-heading text-batyellow text-2xl mb-3">
                {project.title}
              </h3>

              <p className="text-sm leading-relaxed mb-4">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="bg-batyellow text-black text-xs font-semibold px-2 py-1 rounded"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <div className="flex gap-4">
                            <a
                href={project.github}
                target="_blank"
                className="border border-batyellow text-batyellow px-3 py-1 text-sm
                        hover:bg-batyellow hover:text-black transition flex items-center gap-2"
            >
                <i className="fab fa-github"></i>
                GitHub
            </a>

            <a
                href={project.live}
                target="_blank"
                className="border border-batyellow text-batyellow px-3 py-1 text-sm
                        hover:bg-batyellow hover:text-black transition flex items-center gap-2"
            >
                <i className="fa-solid fa-arrow-up-right-from-square"></i>
                Live
            </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
