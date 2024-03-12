
import DarkMode from "./DarkMode";

const NavLinks = [
  {
    id: 1,
    name: "Início",
    link: "#",
  },

];
const Navbar = () => {
  return (
    <div className="relative z-[9999] text-black dark:text-white duration-300">
      <div className="container py-2 md:py-0">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-3">
            <p className="text-3xl">
              Ar<span className="font-bold">Tech</span>
            </p>
          </div>
          {/* Desktop Menu section */}
          <nav className="hidden md:block">
            <ul className="flex items-center gap-8">
              {NavLinks.map(({ id, name, link }) => {
                return (
                  <li key={id} className="py-4">
                    <a
                      href={link}
                      className="text-xl font-semibold hover:text-primary py-2 hover:border-b-2 hover:border-secondary transition-colors duration-500"
                    >
                      {name}
                    </a>
                  </li>
                );
              })}
              <DarkMode />
            </ul>
          </nav>

          <div className="md:hidden block">
            <div className="flex items-center gap-4">
              <DarkMode />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
