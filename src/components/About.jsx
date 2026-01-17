import useScrollReveal from "../hooks/useScrollReveal";
export default function About() {
    useScrollReveal(".sr-about", { origin: "left" });

  return (
    <section className="bg-batblack text-white py-20 px-6 " id="about">
      <div className="max-w-5xl mx-auto">
        <h2 className="font-heading text-batyellow text-5xl text-center mb-10">
          About me
        </h2>

        <div className="bg-batgrey border-4 border-batyellow p-8 text-center shadow-[10px_10px_0_#facc15] sr-about">
          <p className="text-lg leading-relaxed">
            Hi, I’m <b className="text-yellow-200">Jishnu Vijayan</b>, a third-year BTech Computer Science and Engineering student at Rajiv Gandhi Institute of Technology (RIT), Kottayam. I enjoy learning how things work and building software that’s useful in real life. I like experimenting with new technologies, working on projects, and improving my coding and problem-solving skills step by step as I work towards becoming a software engineer.
          </p>
        </div>
      </div>
    </section>
  );
}
