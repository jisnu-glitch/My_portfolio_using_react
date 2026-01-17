
export default function MiniNav() {

  return (
    <div
      className="
        fixed top-6 left-1/2 -translate-x-1/2 z-50
        flex items-center gap-6
        px-6 py-3
        rounded-full
        backdrop-blur-md
        bg-white/10 dark:bg-black/20
        border border-white/20
        shadow-lg
      "
    >
      {/* Navigation */}
      <NavItem href="#about" label="About" />
      <NavItem href="#skills" label="Skills" />
      <NavItem href="#projects" label="Projects" />
      <NavItem href="#contact" label="Contact" />

      
    </div>
  );
}

function NavItem({ href, label }) {
  return (
    <a
      href={href}
      className="
        text-sm font-medium
        text-white/80
        hover:text-yellow-400
        transition
      "
    >
      {label}
    </a>
  );
}
