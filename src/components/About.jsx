import useScrollReveal from "../hooks/useScrollReveal";
export default function About() {
    useScrollReveal(".sr-about", { origin: "left" });

  return (
    <section className="bg-batblack text-white py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="font-heading text-batyellow text-5xl text-center mb-10">
          Origin Story
        </h2>

        <div className="bg-batgrey border-4 border-batyellow p-8 text-center shadow-[10px_10px_0_#facc15] sr-about">
          <p className="text-lg leading-relaxed">
            My journey began not in a shadowy alley, but in front of a glowing
            screen, captivated by the power to create worlds from pure logic.
            What started with a simple "Hello, World!" soon became a crusade
            against inefficient code and clunky user experiences. Now, I wield
            my skills in web development to build solutions that are powerful,
            elegant, and impactful.
          </p>
        </div>
      </div>
    </section>
  );
}
