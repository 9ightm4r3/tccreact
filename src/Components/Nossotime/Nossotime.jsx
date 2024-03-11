

const NossotimeData = [
  {
    name: "Guilherme Nascimento dos Santos ",
    description: "Desenvolvedor Front-end e Mobile",
    aosDelay: "300",
  },
  {
    name: "Marcelo Silva de Oliveira",
    description: "Modelagem 3D e Idealização do Website",
    aosDelay: "500",
  },
  {
    name: "Daniel Cardoso Carvalho",
    description: "Modelagem 3D e Idealização do Website",
    aosDelay: "700",
  },
];

const Nossotime = () => {
  return (
    <>
      <div className="container py-14 sm:min-h-[600px]">
        <div>
          <h1
            data-aos="fade-up"
            className="text-3xl font-semibold text-center sm:text-4xl mb-12"
          >
            Nosso Time
          </h1>

          {/* card section */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
            {NossotimeData.map((data, index) => (
              <div
                key={index}
                data-aos="fade-up"
                data-aos-delay={data.aosDelay}
                className="text-center group space-y-3 sm:space-y-6 p-4 sm:py-10 bg-dark hover:bg-gradient-to-r from-primary to-secondary hover:shadow-[0_0_40px_#007cfff0] text-white hover:text-black rounded-lg duration-300"
              >
                <div className="grid place-items-center"> {data.icon}</div>
                <h1 className="text-2xl">{data.name}</h1>
                <p>{data.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Nossotime;
