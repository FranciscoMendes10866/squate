const Pricing = () => {
  return (
    <section className="py-6 mt-6 mb-6">
      <div className="container has-text-centered">
        <div className="columns is-centered">
          <div className="column is-8">
            <h1 className="is-size-3 has-text-left-mobile has-text-weight-semibold has-text-dark">
              Os meus serviços
            </h1>
            <p className="is-size-5 mt-5 mb-6 has-text-left-mobile has-text-grey">
              Eu quero que prove a si mesma do que é feita - e que tire o melhor de si e do seu corpo.
            </p>
            <div className="card remove-shadow has-background-white-bis py-5">
              <div className="card-content">
                <div className="content">
                  <div className="columns is-align-items-center">
                    <div className="column">
                      <ul className="has-text-grey has-text-left reset">
                        <li className="ok-hand">
                          <small>HIT</small>
                        </li>
                        <li className="ok-hand">
                          <small>1:1 Personal Training</small>
                        </li>
                        <li className="ok-hand">
                          <small>Personal Training DUO</small>
                        </li>
                        <li className="ok-hand">
                          <small>Small Group Coaching</small>
                        </li>
                        <li className="ok-hand">
                          <small>Online Training</small>
                        </li>
                      </ul>
                    </div>
                    <div className="column has-text-centered">
                      <div className="is-flex is-flex-direction-column">
                        <h1 className="is-size-1 has-text-grey has-text-weight-light mb-5">
                          <span className="is-size-1 has-text-dark has-text-weight-semibold">
                            € ?
                          </span>
                          /mês
                        </h1>
                        <button className="button is-link mb-4 is-medium">
                          Contactar agora!
                        </button>
                        <small className="has-text-grey-light sm-txt">
                          Mande-me uma mensagem para saber mais.
                        </small>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
