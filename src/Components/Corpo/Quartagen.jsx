
import BannerPng from "../../assets/fourthgen.png";


const Quartagen = () => {
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
                Quarta geração{" "}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
                (1970 até hoje)
                </span>
              </h1>
              <p data-aos="fade-up" data-aos-delay="500">
              A quarta geração é conhecida pelo advento dos microprocessadores e computadores pessoais, com a redução drástica do tamanho e do preço das máquinas. As CPUs atingiram o incrível patamar de bilhões de operações por segundo, permitindo que muitas tarefas fossem implementadas. Os circuitos acabaram se tornando ainda mais integrados e menores, o que possibilitou o desenvolvimento dos microprocessadores. Quanto mais o tempo foi passando, mais fácil foi comprar um computador pessoal. Nessa era, os softwares e sistemas se tornaram tão importantes quanto o hardware. 
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

export default Quartagen;
