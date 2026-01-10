import useScrollReveal from "../hooks/useScrollReveal";

export default function Contact() {
    useScrollReveal(".sr-contact", { origin: "right" });

  return (
    <section className="bg-batblack text-white py-20 px-6  ">
      <div className="max-w-4xl mx-auto text-center ">
        <h2 className="font-heading text-batyellow text-5xl mb-12">
          Signal The Hero
        </h2>

        {/* Contact Form */}
        <form
          action="https://formspree.io/f/xovlbbgd"
          method="POST"
          className="bg-batgrey p-8 flex flex-col gap-4 mb-10 sr-contact"
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            className="bg-batblack border-2 border-gray-600 p-3 text-white focus:outline-none focus:border-batyellow"
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email Address"
            required
            className="bg-batblack border-2 border-gray-600 p-3 text-white focus:outline-none focus:border-batyellow"
          />

          <textarea
            name="message"
            rows="5"
            placeholder="Your Mission Brief"
            required
            className="bg-batblack border-2 border-gray-600 p-3 text-white focus:outline-none focus:border-batyellow"
          />

          <button
            type="submit"
            className="bg-batyellow text-black font-heading text-xl py-3 hover:bg-yellow-300 transition"
          >
            Send Signal
          </button>
        </form>

        {/* Social Links */}
        <div className="flex justify-center gap-8 text-3xl">
          <a
            href="https://github.com/jisnu-glitch/"
            target="_blank"
            className="hover:text-batyellow transition"
          >
            <i className="fab fa-github"></i>
          </a>

          <a
            href="https://www.linkedin.com/in/jishnu-vijayan-2415b1323"
            target="_blank"
            className="hover:text-batyellow transition"
          >
            <i className="fab fa-linkedin"></i>
          </a>

          <a
            href="https://x.com/j_isnu"
            target="_blank"
            className="hover:text-batyellow transition"
          >
            <i className="fa-brands fa-x-twitter"></i>
          </a>
        </div>
      </div>
    </section>
  );
}
