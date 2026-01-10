import useScrollReveal from "../hooks/useScrollReveal";
const skills = [
  { name: "JavaScript", icon: "fa-js-square" },
  { name: "Python", icon: "fa-python" },
  { name: "React", icon: "fa-react" },
  { name: "HTML5", icon: "fa-html5" },
  { name: "CSS3", icon: "fa-css3-alt" },
  { name: "Git", icon: "fa-git-alt" },
];

export default function Skills() {
    useScrollReveal(".sr-skill");

  return (
    <section className="bg-batblack text-white py-20 ">
      <h2 className="font-heading text-batyellow text-5xl text-center mb-14">
        Gadget Arsenal
      </h2>

      <div className="flex flex-wrap justify-center gap-10">
        {skills.map((skill) => (
          <div
            key={skill.name}
            className="sr-skill w-28 h-28 rounded-full bg-batgrey border-2 border-batyellow
                       flex flex-col items-center justify-center
                       hover:scale-110 hover:rotate-3 transition duration-300"
          >
            <i className={`fab ${skill.icon} text-4xl text-batyellow mb-2`}></i>
            <span className="text-sm font-semibold">{skill.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
