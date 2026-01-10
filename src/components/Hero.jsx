import useScrollReveal from "../hooks/useScrollReveal";
import myImage from "../assets/img2.jpg";
export default function Hero() {
  useScrollReveal(".sr-hero", { origin: "top", distance: "40px" });

  return (
    <header
      className="relative h-screen overflow-hidden flex items-center justify-center text-center text-white bg-cover bg-center"
    >
    
        
    <div
    className="absolute inset-0 bg-cover bg-center"
    style={{
      backgroundImage:
        `url(${myImage})`,
    }}
      />

      <div className="absolute inset-0 bg-black/30"></div>

      
      {/* <div className="absolute
    bottom-12 md:bottom-20
    left-1/2 -translate-x-1/2
    w-full
    max-w-[90%]
    z-10
    text-center
    ">
        <h2 className="font-heading text-batyellow text-4xl tracking-widest">
          I'm
        </h2>

        <h1 className="font-heading text-7xl md:text-9xl text-yellow-300 ">
          Jishnu Vijayan
        </h1>

      </div> */}
    <div
  className="
    absolute
    bottom-20 sm:bottom-12 md:bottom-20
    left-1/2 -translate-x-1/2
    w-full max-w-[90%]
    z-10 text-center
  "
>
  <h2
    className="font-heading text-batyellow tracking-widest translate-y-8 sr-hero"
    style={{ fontSize: "clamp(50px, 3vw, 28px)" }}
  >
    I'm
  </h2>

  <h1
    className="font-heading text-yellow-300 sr-hero"
    style={{ fontSize: "clamp(55px, 10vw, 120px)" }}
  >
    Jishnu Vijayan
  </h1>
</div>


      {/* <div
  className="
    absolute left-1/2 top-1/2
    -translate-x-1/2
    flex flex-col items-center
    translate-y-8 sm:translate-y-12 md:translate-y-16 lg:translate-y-20
    sr-hero
  "
>
  <h2
    className="
      font-heading text-batyellow tracking-widest
      text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px]
      mb-2 sm:mb-3 md:mb-4
    "
  >
    I AM
  </h2>

  <h1
    className="
      font-heading text-yellow-300
      text-[42px] sm:text-[64px] md:text-[96px] lg:text-[120px]
    "
  >
    JISHNU VIJAYAN
  </h1>
</div> */}

    </header>
  );
}
