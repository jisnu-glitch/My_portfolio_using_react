

export default function EducationMap() {
  return (
    <section className="py-28 bg-[#0b0b0b] overflow-hidden ">
         <h2 className="font-heading text-yellow-400 text-5xl mb-20 text-center tracking-widest">
          EDUCATION JOURNEY
        </h2>
      <div className="max-w-6xl mx-auto px-6 hidden md:block">

        <div className="relative">

          {/* SVG MAP PATH */}
          <svg
            viewBox="0 0 800 1200"
            className="w-full h-[1200px]"
            fill="none"
          >
            {/* First segment */}
            <path
              d="M400 50 C200 200, 200 400, 400 550"
              stroke="#facc15"
              strokeWidth="4"
              strokeDasharray="4 12"
              strokeLinecap="round"
              className="animate-pathGlow"
            />

            {/* Second segment */}
            <path
              d="M400 550 C600 700, 600 900, 400 1050"
              stroke="#facc15"
              strokeWidth="4"
              strokeDasharray="8 16"
              strokeLinecap="round"
              className="animate-pathGlow delay-500"
            />
          </svg>

          {/* STOPS */}
          <MapPoint
            top="80px"
            left="50%"
            align="right"
            variant="school"
            year="2020 – 2021"
            title="Aravinda Vidyamandiram"
            subtitle="10th Standard"
            score="93%"
          />

          <MapPoint
            top="520px"
            left="50%"
            align="left"
            variant="school"
            year="2022 – 2023"
            title="Aravinda Vidyamandiram"
            subtitle="12th Standard"
            score="95.6%"
          />

          <MapPoint
            top="1000px"
            left="50%"
            align="right"
            variant="college"
            year="2023 – 2027"
            title="RIT Kottayam"
            subtitle="BTech CSE"
            score="9.09 CGPA"
            current
          />
        </div>
      </div>

                        {/* MOBILE STACKED VERSION */}
        <div className="md:hidden relative pl-12">

        {/* FULL HEIGHT LINE */}
        <div className="absolute left-5 top-0 h-full w-[2px] bg-yellow-400/70"></div>

        <MobileCard
            year="2020 – 2021"
            title="Aravinda Vidyamandiram"
            subtitle="10th Standard"
            score="93%"
        />

        <MobileCard
            year="2022 – 2023"
            title="Aravinda Vidyamandiram"
            subtitle="12th Standard"
            score="95.6%"
        />

        <MobileCard
            year="2023 – 2027"
            title="RIT Kottayam"
            subtitle="BTech CSE"
            score="9.09 CGPA"
            current
        />

        </div>


    </section>

    
  );
}
function MapPoint({
  top,
  left,
  align,
  year,
  title,
  subtitle,
  score,
  variant,
  current
}) {
  const isLeft = align === "left";

  return (
    <div className="absolute" style={{ top, left }}>
      
      {/* Map Pin */}
      <div
        className={`
          absolute -left-3 top-2 w-5 h-5 rounded-full
          ${current ? "bg-green-400 animate-pulse" : "bg-yellow-400"}
          shadow-[0_0_15px_#facc15]
        `}
      ></div>

      {/* Card */}
      <div
        className={`
          ml-8
          ${isLeft ? "-translate-x-full mr-8" : ""}
          max-w-sm
          rounded-3xl
          p-6
          text-white
          backdrop-blur
          border
          ${variant === "college"
            ? "bg-yellow-400/10 border-yellow-400 rotate-[-1deg]"
            : "bg-[#111] border-yellow-400/30 rotate-[1deg]"}
        `}
      >
        <p className="text-xs tracking-wider text-yellow-400">{year}</p>

        <h3 className="font-semibold text-lg mt-1">
          {title}
        </h3>

        <p className="text-sm opacity-80">{subtitle}</p>

        {/* Score Badge */}
        <span className="
          inline-block mt-4 px-4 py-1
          rounded-full text-sm font-bold
          bg-yellow-400 text-black
        ">
          {score}
        </span>

        {current && (
          <p className="mt-3 text-green-400 text-xs tracking-wide">
            ● CURRENT LOCATION
          </p>
        )}
      </div>
    </div>
  );
}

function MobileCard({ year, title, subtitle, score, current }) {
  return (
    <div className="relative mb-12">

      {/* DOT ON THE LINE */}
      <div
        className={`
          absolute left-[-2.25rem] top-4
          w-4 h-4 rounded-full
          ${current ? "bg-green-400" : "bg-yellow-400"}
          shadow-[0_0_10px_#facc15]
          z-10
        `}
      />

      {/* CARD */}
      <div className="
        bg-[#111]
        border border-yellow-400/30
        rounded-2xl
        p-5
        text-white
      ">
        <p className="text-xs text-yellow-400 tracking-wider">
          {year}
        </p>

        <h3 className="text-lg font-semibold mt-1">
          {title}
        </h3>

        <p className="text-sm opacity-80">
          {subtitle}
        </p>

        <span className="
          inline-block mt-3
          px-3 py-1
          text-sm font-bold
          rounded-full
          bg-yellow-400 text-black
        ">
          {score}
        </span>

        {current && (
          <p className="mt-2 text-xs text-green-400">
            ● CURRENT
          </p>
        )}
      </div>
    </div>
  );
}
