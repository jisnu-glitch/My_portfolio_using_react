import useScrollReveal from "../hooks/useScrollReveal";

const languages = ["English", "Malayalam", "Tamil"];

export default function Languages() {
  useScrollReveal(".sr-lang", { origin: "top", interval: 150 });

  return (
    <section className="bg-batblack text-white py-16 ">
      <div className="flex flex-wrap justify-center gap-8">
        {languages.map((lang) => (
          <div
            key={lang}
            className="
              sr-lang
              bg-batyellow
              text-black
              px-8
              py-3
              rounded-full
              font-semibold
              hover:scale-105
              transition
            "
          >
            {lang}
          </div>
        ))}
      </div>
    </section>
  );
}
