
import BannerPng from "../../assets/ibm7030.jpg";


const Banner5 = () => {
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
                IBM 7030{" "}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
                (1961) 
                </span>
              </h1>
              <p data-aos="fade-up" data-aos-delay="500">
              O IBM 7030, também conhecido como Strech, foi o primeiro supercomputador lançado na segunda geração, desenvolvido pela IBM. Seu tamanho era bem reduzido se comparado com máquinas como o ENIAC, podendo ocupar somente uma sala comum. Ele era utilizado por grandes companhias, custando em torno de 13 milhões de dólares na época. A máquina executava cálculos em microssegundos, o que permitia até 1 milhão de operações por segundo; dessa maneira, um novo patamar de velocidade foi atingido. Várias linguagens foram desenvolvidas para os computadores de segunda geração, como Fortran, Cobol e Algol; assim, softwares podiam ser criados com mais facilidade. Muitos mainframes (modo como as máquinas da época são chamadas) ainda estão em funcionamento em várias empresas até hoje, como na própria IBM. 
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

export default Banner5;
