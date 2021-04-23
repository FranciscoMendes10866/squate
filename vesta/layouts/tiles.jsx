const Tiles = () => {
  return (
    <section className="py-6 mt-6">
      <div className="container">
        {/* <!-- Header --> */}
        <div className="columns is-centered py-6">
          <div className="column is-12-mobile is-12-tablet is-8-desktop has-text-centered">
            <h1 className="is-size-3 has-text-left-mobile has-text-weight-semibold has-text-dark">
              Está na hora de se colocar em primeiro lugar
            </h1>
            <p className="is-size-5 mt-5 has-text-left-mobile has-text-grey">
              Trabalho com homens e mulheres que deixaram o condicionamento
              físico cair na sua lista de prioridades e querem fazer uma
              mudança.
            </p>
          </div>
        </div>
        {/* <!-- Tiles --> */}
        <div className="tile is-ancestor mt-6">
          <div className="tile is-4 is-parent">
            <div className="tile is-child box remove-shadow has-background-white-bis">
              <h4 className="is-size-5 mb-3 has-text-centered has-text-weight-semibold has-text-grey-dark">
                🤩&nbsp;Não apenas bem estar físico
              </h4>
              <small className="has-text-grey mb-4">
                O desporto é um bom ponto de partida para a promoção da educação
                baseada em competências para a vida e estilos de vida saudáveis.
              </small>
              <br />
              <br />
              <small className="has-text-grey">
                Tendo como benefícios psicológicos:
              </small>
              <ul className="mt-5 has-text-grey">
                <li className="bunny">
                  <small>Promove a sensação de bem-estar</small>
                </li>
                <li className="bunny">
                  <small>Diminui o estresse</small>
                </li>
                <li className="bunny">
                  <small>Combate a ansiedade e a depressão</small>
                </li>
                <li className="bunny">
                  <small>Aumenta a disposição</small>
                </li>
                <li className="bunny">
                  <small>Fortalece o sistema imunológico</small>
                </li>
                <li className="bunny">
                  <small>Entre muitos outros benefícios...</small>
                </li>
              </ul>
            </div>
          </div>
          <div className="tile is-4 is-vertical is-parent">
            <div className="tile is-child box remove-shadow has-background-white-bis">
              <h4 className="is-size-5 mb-3 has-text-centered has-text-weight-semibold has-text-grey-dark">
                😁&nbsp;Combata o excesso de peso
              </h4>
              <small className="has-text-grey">
                As atividades físicas são a melhor forma de combater o excesso
                de peso ou obesidade, além de ajudar a manter a perda de peso.
                Isto porque os exercícios aceleram o metabolismo do corpo.
              </small>
            </div>
            <div className="tile is-child box remove-shadow has-background-white-bis">
              <h4 className="is-size-5 mb-3 has-text-centered has-text-weight-semibold has-text-grey-dark">
                😊&nbsp;Reduza a pressão arterial
              </h4>
              <small className="has-text-grey">
                As atividades físicas melhoram os níveis de colesterol bom e
                reduzem o colesterol ruim e os triglicerídeos, diminuindo o
                risco de doenças cardiovasculares como aterosclerose, infarto ou
                derrame cerebral.
              </small>
            </div>
          </div>
          <div className="tile is-4 is-vertical is-parent">
            <div className="tile is-child box remove-shadow has-background-white-bis">
              <h4 className="is-size-5 mb-3 has-text-centered has-text-weight-semibold has-text-grey-dark">
                👍&nbsp;Controle a glicemia
              </h4>
              <small className="has-text-grey">
                Reduza o excesso de gordura ao redor da cintura que está
                relacionado com o aumento da resistência à insulina, fazendo com
                que o corpo não utilize o açúcar de maneira correta, o que leva
                ao aumento da glicemia, aumentando o risco de desenvolver
                diabetes.
              </small>
            </div>
            <div className="tile is-child box remove-shadow has-background-white-bis">
              <h4 className="is-size-5 mb-3 has-text-centered has-text-weight-semibold has-text-grey-dark">
                🥸&nbsp;Fortaleça os ossos e articulações
              </h4>
              <small className="has-text-grey">
                Promova o crescimento ósseo e aumente a resistência e a
                densidade dos ossos. Prevenindo a osteoporose e a reduzir o
                risco de lesões, quedas e fraturas relacionadas com o
                enfraquecimento dos ossos.
              </small>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tiles;
