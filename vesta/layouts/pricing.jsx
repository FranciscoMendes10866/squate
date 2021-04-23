const Pricing = () => {
  return (
    <section className="py-6 mt-6 mb-6">
      <div className="container has-text-centered">
        <div className="columns is-centered">
          <div className="column is-8">
            <h1 className="is-size-3 has-text-left-mobile has-text-weight-semibold has-text-dark">
              Pricing
            </h1>
            <p className="is-size-5 mt-5 mb-6 has-text-left-mobile has-text-grey">
              The platform is completely free. Start enjoying it right now.
            </p>
            <div className="card remove-shadow has-background-white-bis">
              <div className="card-content">
                <div className="content">
                  <div className="columns is-align-items-center">
                    <div className="column">
                      <ul className="has-text-grey has-text-left reset">
                        <li className="ok-hand">
                          <small>Unlimited links</small>
                        </li>
                        <li className="ok-hand">
                          <small>Unlimited seats</small>
                        </li>
                        <li className="ok-hand">
                          <small>Redirect unlimited links</small>
                        </li>
                        <li className="ok-hand">
                          <small>Custom Slug</small>
                        </li>
                        <li className="ok-hand">
                          <small>Number of clicks allowed</small>
                        </li>
                        <li className="ok-hand">
                          <small>SSL protection</small>
                        </li>
                      </ul>
                    </div>
                    <div className="column has-text-centered">
                      <div className="is-flex is-flex-direction-column">
                        <h1 className="is-size-1 has-text-grey has-text-weight-light mb-5">
                          <span className="is-size-1 has-text-dark has-text-weight-semibold">
                            € 0
                          </span>
                          /mo
                        </h1>
                        <button className="button is-link mb-4 is-medium">
                          Get Started for Free
                        </button>
                        <small className="has-text-grey-light sm-txt">
                          No credit card required.
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
