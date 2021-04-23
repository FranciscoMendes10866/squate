import { Navbar } from '../components'

const Hero = () => {
  return (
    <>
      <Navbar />
      <section className="hero">
      <div className="hero-body">
        <div className="container has-text-centered">
          <div className="columns is-centered py-6">
            <div className="column is-12-mobile is-12-tablet is-8-desktop">
              <h1
                className="is-size-1 has-text-left-mobile has-text-weight-semibold has-text-black"
              >
                SlimLink URL Shortener is better than chocolate.
              </h1>
              <p className="is-size-5 mt-5 has-text-left-mobile has-text-grey">
                I know it's a bold statement but with&nbsp;
                <strong className="has-text-grey-dark">SlimLink</strong> you can
                create as many links as you want and you can use the same
                account on several devices simultaneously without any problems.
              </p>
              <button className="button is-link mt-6 is-medium">
                Get Started for Free
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
