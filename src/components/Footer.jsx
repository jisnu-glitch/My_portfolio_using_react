import useScrollReveal from "../hooks/useScrollReveal";

export default function Footer() {
  // Animate quote first
  useScrollReveal(".sr-footer-quote", {
    origin: "bottom",
    distance: "40px",
  });

  // Animate copyright slightly later
  useScrollReveal(".sr-footer-copy", {
    origin: "bottom",
    distance: "20px",
    delay: 200,
  });

  return (
    <footer className="bg-batblack text-center py-16 px-6 ">
      <div className="sr-footer-quote flex items-center justify-center gap-4 max-w-4xl mx-auto">
  
  {/* Yellow bar */}
  <span className="w-1 h-8 bg-batyellow"></span>

  {/* Quote */}
  <blockquote className="text-gray-400 italic text-lg">
    “It’s not who I am underneath, but what I do that defines me.”
  </blockquote>

</div>
    </footer>
  );
}
