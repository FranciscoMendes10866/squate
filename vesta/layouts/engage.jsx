const Engage = () => {
  return (
    <section className="py-6 mt-6">
      <div className="columns is-justify-content-space-between">
        <div className="column is-3 left-img is-hidden-mobile"></div>
        <div className="column is-4 is-12-mobile has-text-centered">
          <h5 className="is-size-3 mb-3 has-text-centered has-text-weight-semibold has-text-grey-dark">
            O meu papel no seu progresso
          </h5>
          <p className="is-size-6 mt-5 has-text-grey">
            A minha abordagem é projetada desde o início para colocar a ti e aos teus objetivos em primeiro lugar.
          </p>
          <p className="is-size-6 mt-5 has-text-grey">
            Desde treinos individuais, até treinos para pequenos grupos com tudo à sua medida.
          </p>
          <p className="is-size-6 mt-5 has-text-grey">
            Garanto que os resultados que você alcança não sejam apenas impressionantes a curto prazo, mas também sustentável para a vida.
          </p>
          <button className="button is-link mt-6 is-medium">
            Começar agora!
          </button>
        </div>
        <div className="column is-3 right-img is-hidden-mobile"></div>
      </div>
    </section>
  );
};

export default Engage;
