
import {
  FaLocationArrow,
} from "react-icons/fa";

const LinksRodape = [
  { id: 1, title: "Início ", link: "/#" },
];
const Rodape = () => {
  return (
    <>
      <div className="bg-gray-100 dark:bg-dark mt-14 rounded-t-3xl">
        <div data-aos="fade" className="container">
          <div className="grid md:grid-cols-3 py-4">
            <div className="py-8 px-4">
              <h1 className="sm:text-3xl text-xl font-bold sm:text-left text-justify mb-3 flex items-center gap-3">
                ArTech
              </h1>
              <div>
                <div className="flex items-center gap-3">
                  <FaLocationArrow />
                  <p>Rio de Janeiro, Brasil</p>
                </div>
              </div>
              <div className="flex items-center gap-3 mt-6">
              </div>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 col-span-2 md:pl-10">
              <div>
              </div>
              <div>

              </div>
              <div>
                <div className="py-8 px-4">
                  <h1 className="text-xl font-bold mb-3 ">Links Úteis</h1>
                  <ul className="space-y-3">
                    {LinksRodape.map((link) => (
                      <li
                        key={link.id}
                        className="hover:translate-x-1 duration-300 "
                      >
                        <a
                          href={link.link}
                          className="cursor-pointer hover:text-primary"
                        >
                          {link.title}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Rodape;
