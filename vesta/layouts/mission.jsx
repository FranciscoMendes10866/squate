const Mission = () => {
  return (
    <section className="py-6 mt-6 mb-6">
      <div className="container">
        <div className="columns is-variable is-8 is-justify-content-space-around is-align-items-center">
          <div className="column is-6">
            <h5 className="is-size-3 mb-3 has-text-left has-text-weight-semibold has-text-grey-dark">
              A minha missão
            </h5>
            <p className="is-size-6 mt-5 has-text-grey">
              Estou comprometida em fornecer treinos pessoais eficazes e
              ajudá-lo a alcançar resultados desejados.
            </p>
            <p className="is-size-6 mt-5 has-text-grey">
              Ao contrário dos planos de treino tradicionais e planos de perda
              de peso que parecem ser bons demais para ser verdade, não acredito
              em soluções fáceis de curto prazo.
            </p>
            <p className="is-size-6 mt-5 has-text-grey">
              Em vez disso, vamos definir juntos metas realistas e alcançáveis.
            </p>
          </div>
          <div className="column is-4">
            <img
              src="https://global-uploads.webflow.com/5dc6336c6ade633733ef6e44/5f33de84363a686042550ff3_feature-integrations%402x.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mission;
