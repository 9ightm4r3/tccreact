
import PlayStoreImg from "../../assets/website/play_store.png";

const AppStore = () => {
  return (
    <>
      <div className="container py-10 sm:min-h-[400px] sm:grid sm:place-items-center">
        <div className="space-y-6 max-w-xl mx-auto">
          <h1
            data-aos="fade-up"
            className="text-2xl text-center sm:text-4xl font-semibold "
          >
            Baixe nosso APP
          </h1>
          <p
            data-aos="fade-up"
            data-aos-delay="300"
            className="text-center sm:px-20"
          >
            Utilize a câmera do seu celular para escanear os cartões físicos e gerar os modelos das máquinas. 
          </p>
          <div className="flex flex-wrap justify-center gap-4 items-center">
            <a href="#" data-aos="fade-up" data-aos-delay="700">
              <img
                src={PlayStoreImg}
                alt=""
                className="max-w-[150px] sm:max-w-[120px] md:max-w-[200px]"
              />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default AppStore;
