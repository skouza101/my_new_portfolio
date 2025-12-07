import Link from "next/link";

export const Header = () => {
  return (
    <div className="flex items-center  justify-center fixed top-3 w-full z-50">
      <nav className="flex gap-1 p-0.5 border border-white/15 rounded-full bg-white/10 backdrop-blur-sm shadow-[0_8px_32px_0_rgba(31,38,135,0.15)] ring-1 ring-white/5">
        <Link
          href="#home"
          className="px-4 py-2 text-sm font-medium text-white/70 hover:text-white hover:bg-white/10 rounded-full transition-all"
        >
          Home
        </Link>
        <Link
          href="#about"
          className="px-4 py-2 text-sm font-medium text-white/70 hover:text-white hover:bg-white/10 rounded-full transition-all"
        >
          About
        </Link>
        <Link
          href="#projects"
          className="px-4 py-2 text-sm font-medium text-white/70 hover:text-white hover:bg-white/10 rounded-full transition-all"
        >
          Projects
        </Link>
        <Link
          href="#contact"
          className="px-4 py-2 text-sm font-medium text-white/70 hover:text-white hover:bg-white/10 rounded-full transition-all"
        >
          Contact
        </Link>
      </nav>
    </div>
  );
};
