import BannerPng from "../../assets/2106412.png";

const Abaco = () => {
  return (
    <div className="py-12 sm:py-0 relative">
      <div className="container min-h-[620px] flex items-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 place-items-center">
          <div data-aos="fade-up" data-aos-once="false">
            <img src={BannerPng} alt="" className="w-full max-w-[400px]" />
          </div>
          <div className=" lg:pr-20 relative">
            <div className="relative z-10 space-y-5">
              <h1
                data-aos="fade-up"
                data-aos-delay="300"
                className="text-4xl font-semibold"
              >
                Ábaco,{" "}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
                a primeira calculadora da história
                </span>
              </h1>
              <p data-aos="fade-up" data-aos-delay="500">
                Muitos povos da antiguidade utilizavam o ábaco para realizar cálculos do dia a dia, principalmente no comércio e no desenvolvimento de construções civis. Ele pode ser considerado a primeira máquina criada para cálculo, pois utilizava um sistema bastante simples e muito eficiente na resolução de problemas matemáticos. É basicamente um conjunto de varetas de forma paralela que contém pequenas bolas para realizar a contagem. Seu primeiro registro é datado de 5500 a.C. pelos povos que constituíam a Mesopotâmia. Contudo, o ábaco também foi usado por muitas outras culturas, e cada povo tem uma versão específica dessa máquina, preservando a essência original. Seu nome na Roma Antiga era Calculus, termo do qual a palavra cálculo foi derivada. Em operações matemáticas, ele é bastante útil para soma e subtração. Já para multiplicação e divisão não é muito recomendado, somente algumas versões mais complexas que a padrão. 
              </p>
              <div className="flex gap-6">
              </div>
            </div>
            <div className="h-[300px] w-[300px] bg-gradient-to-r from-primary to-secondary rounded-full absolute bottom-[-50px] left-[300px] blur-3xl opacity-50"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Abaco;
