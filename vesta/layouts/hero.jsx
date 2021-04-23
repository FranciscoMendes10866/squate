import { Navbar } from "../components";

const Hero = () => {
  return (
    <>
      <Navbar />
      <section className="hero">
        <div className="hero-body">
          <div className="container has-text-centered">
            <div className="columns is-centered py-6">
              <div className="column is-12-mobile is-12-tablet is-8-desktop">
                <h1 className="is-size-1 has-text-left-mobile has-text-weight-semibold has-text-black">
                  Vamos descobrir juntos o melhor para si!
                </h1>
                <p className="is-size-5 mt-5 has-text-left-mobile has-text-grey">
                  Planos de treino e nutricionais personalizados por uma
                  profissional certificada.
                </p>
                <button className="button is-link mt-6 is-medium">
                  Começar agora!
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
