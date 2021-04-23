const Engage = () => {
  return (
    <section className="py-6 mt-6">
      <div className="columns is-justify-content-space-between">
        <div className="column is-3 left-img is-hidden-mobile"></div>
        <div className="column is-4 is-12-mobile has-text-centered">
          <h5 className="is-size-3 mb-3 has-text-centered has-text-weight-semibold has-text-grey-dark">
            I built SlimLink for content creators like you.
          </h5>
          <p className="is-size-6 mt-5 has-text-grey">
            A URL Shortener that integrates with your favourite platforms and
            transforms your passive audience into passionate superfans for life.
          </p>
          <p className="is-size-6 mt-5 has-text-grey">
            In addition to all this, you have access to all your links in a
            fast, secure and private way.
          </p>
          <p className="is-size-6 mt-5 has-text-grey">
            Once you think you should delete the specific link, you can do that
            task as soon as you understand. The link will not be deleted
            organically.
          </p>
          <button className="button is-link mt-6 is-medium">
            Get Started for Free
          </button>
        </div>
        <div className="column is-3 right-img is-hidden-mobile"></div>
      </div>
    </section>
  );
};

export default Engage;
