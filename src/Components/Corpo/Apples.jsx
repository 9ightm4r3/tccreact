
import BannerPng from "../../assets/apple.jpg";


const Apples = () => {
  return (
    <div className="py-12 sm:py-0 relative">
      <div className="container min-h-[620px] flex items-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 place-items-center">
          <div className="order-2 sm:order-1  lg:pr-20 relative">
            <div className="relative z-10 space-y-5">
              <h1
                data-aos="fade-up"
                data-aos-delay="300"
                className="text-4xl font-semibold"
              >
                Apples, Lisa e Macintosh{" "}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary"> 
                </span>
              </h1>
              <p data-aos="fade-up" data-aos-delay="500">
              O Apple I, lançado em 1976, pode ser considerado o primeiro computador pessoal, pois acompanhava um pequeno monitor que exibia o que estava acontecendo no PC. Como o sucesso da máquina foi muito grande, em 1979 foi lançado o Apple II, que seguia essa ideia. Na mesma linha, os computadores Lisa (1983) e Macintosh (1984) foram os primeiros a usar mouse e ter a interface gráfica como conhecemos hoje, com pastas, menus e área de trabalho.               
              </p>
              <div className="flex gap-6">
              </div>
            </div>
            {/* backgrond color blob */}
            <div className="h-[300px] w-[300px] bg-gradient-to-r from-primary to-secondary rounded-full absolute bottom-[-200px] left-[300px] blur-3xl opacity-50 "></div>
          </div>

          {/* image section */}
          <div data-aos="fade-up" className="order-1 sm:order-2">
            <img src={BannerPng} alt="" className="w-full max-w-[400px]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Apples;
