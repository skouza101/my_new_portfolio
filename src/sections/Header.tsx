import Link from "next/link";

export const Header = () => {
  return (
    <div className="flex items-center  justify-center fixed top-3 w-full z-50" >
      <nav className="flex gap-5 relative z-50 bg-white/5 backdrop-blur-sm p-2 md:p-3 lg:px-4 rounded-full border border-white/85">
        <Link href="#" className="nav-link">
          Home
        </Link>
        <Link href="#" className="nav-link ">
          About
        </Link>
        <Link href="#" className="nav-link">
          Projects
        </Link>
        <Link href="#" className="nav-link">
          Contact
        </Link>
      </nav>
    </div>
  );
};
