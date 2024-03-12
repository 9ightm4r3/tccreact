
import BannerPng from "../../assets/pngwing.png";


const Modelos3d = () => {
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
                Agora, {" "}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
                Visualize como eram as máquinas
                </span>
              </h1>
              <p data-aos="fade-up" data-aos-delay="500">
                Usando nosso visualizador de modelos 3D, aponte a câmera do seu dispositivo em direção ao cartão desejado e então,
                o usuário será capaz de ter uma noção de como as máquinas se pareciam em perspectiva.
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

export default Modelos3d;
