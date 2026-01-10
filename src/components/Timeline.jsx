import useScrollReveal from "../hooks/useScrollReveal";
const timeline = [
  {
    title: "PAST: FORGING THE FOUNDATION",
    text: "Mastered the fundamentals of C++, Data Structures, and Web Development.",
  },
  {
    title: "PRESENT: IN THE TRENCHES",
    text: "Deep diving into Advanced Algorithms, React, and System Design.",
  },
  {
    title: "FUTURE: THE NEXT FRONTIER",
    text: "Preparing for battle in the realms of AI/ML and DevOps.",
  },
];

export default function Timeline() {
    useScrollReveal(".sr-timeline", { origin: "left" });

  return (
    <section className="bg-batblack text-white py-20 px-6 ">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-heading text-batyellow text-5xl text-center mb-12">
          Training Log
        </h2>

        <div className="flex flex-col md:flex-row border-4 border-batgrey">
          {timeline.map((item, index) => (
            <div
              key={index}
              className="sr-timeline flex-1 p-8 text-center border-t-4 md:border-t-0 md:border-l-4 border-batgrey first:border-l-0"
            >
              <h3 className="font-heading text-batyellow text-xl mb-4">
                {item.title}
              </h3>
              <p className="text-sm leading-relaxed">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
