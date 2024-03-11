
import BannerPng from "../../assets/eniac.jpeg";

const Eniac = () => {
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
                ENIAC{" "}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
                (1946)
                </span>
              </h1>
              <p data-aos="fade-up" data-aos-delay="500">
              Em 1946 ocorreu uma revolução no mundo da computação com o lançamento do Electrical Numerical Integrator and Calculator (ENIAC), desenvolvido pelos cientistas norte-americanos John Eckert e John Mauchly. Essa máquina era em torno de mil vezes mais rápida que qualquer outra da época. A principal inovação foi a computação digital, muito superior aos projetos mecânicos-analógicos desenvolvidos até então. Com o ENIAC, a maioria das operações era realizada sem a necessidade de movimentar peças de forma manual, e sim pela entrada de dados no painel de controle. Cada operação podia ser acessada através de configurações-padrão de chaves e switches. Essa máquina era muito grande, com aproximadamente 25 metros de comprimento por 5,5 metros de altura, com peso total de 30 toneladas. Esse valor representa algo como um andar inteiro de um prédio. 
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

export default Eniac;
