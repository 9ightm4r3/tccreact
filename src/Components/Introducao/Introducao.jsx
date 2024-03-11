
import HeroPng from "../../assets/maybe.png";


const Introducao = () => {
  return (
    <>
      <div className="py-12 sm:py-0 dark:bg-black dark:text-white duration-300 overflow-hidden">
        <div className="container min-h-[700px] flex relative">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 place-items-center relative z-10">
            {/* hero text section */}
            <div className="order-2 sm:order-1 space-y-5 lg:pr-20 relative z-30">
              <h1 data-aos="fade-up" data className="text-4xl font-semibold">
                Se prepare para experenciar{" "}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
                  O APRENDIZADO AR EM NOSSA PLATAFORMA
                </span>
              </h1>
              <p data-aos="fade-up" data-aos-delay="300">
              Nosso site visa construir um museu virtual com componentes de realidade aumentada e modelos 3D. Nosso objetivo com essa abordagem é, principalmente, aumentar a imersão do usuário no site.
              </p>
            </div>
            <div
              data-aos="fade-up"
              data-aos-offset="0"
              className="order-1 sm:order-2"
            >
              <img src={HeroPng} alt="" className="" />
            </div>
          </div>

          <div className="h-[300px] w-[300px] bg-gradient-to-r from-primary to-secondary rounded-full absolute top-0 left-0 blur-3xl animated-wrapper"></div>
        </div>
      </div>
    </>
  );
};

export default Introducao;
