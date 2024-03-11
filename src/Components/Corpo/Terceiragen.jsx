
import BannerPng from "../../assets/thirdgen.png";
import { BiPlayCircle } from "react-icons/bi";

const Banner7 = ({ togglePlay }) => {
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
                Terceira geração{" "}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
                (1964-1970) 
                </span>
              </h1>
              <p data-aos="fade-up" data-aos-delay="500">
              Os computadores dessa geração foram conhecidos pelo uso de circuitos integrados que permitiram que uma mesma placa armazenasse vários circuitos que se comunicavam com hardwares distintos ao mesmo tempo. Dessa maneira, as máquinas se tornaram mais velozes e com um número maior de funcionalidades. O preço também diminuiu consideravelmente. No final desse período houve preocupação com a falta de qualidade no desenvolvimento de softwares, visto que grande parte das empresas estava focada em hardware. 
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

export default Banner7;
