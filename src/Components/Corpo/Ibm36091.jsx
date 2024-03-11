
import BannerPng from "../../assets/IBM36091.jpg";
import { BiPlayCircle } from "react-icons/bi";

const Banner8 = ({ togglePlay }) => {
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
                IBM 360/91{" "}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
                (1964) 
                </span>
              </h1>
              <p data-aos="fade-up" data-aos-delay="500">
              Um dos principais exemplos da terceira geração é o IBM 360/91, lançado em 1967, um grande sucesso em vendas na época. Essa máquina já trabalhava com dispositivos de entrada e saída modernos, como discos e fitas de armazenamento, além de poder imprimir todos os resultados em papel. O IBM 360/91 foi um dos primeiros a permitir programação da CPU por microcódigo, então as operações usadas por um processador qualquer podiam ser gravadas através de softwares, sem a necessidade de projetar todo o circuito de forma manual. 
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

export default Banner8;
