const Tiles = () => {
  return (
    <section className="py-6 mt-6">
      <div className="container">
        {/* <!-- Header --> */}
        <div className="has-text-centered">
          <h1 className="is-size-3 has-text-left-mobile has-text-weight-semibold has-text-dark">
            Complete link management
          </h1>
          <p className="is-size-5 mt-5 has-text-left-mobile has-text-grey">
            Everything you need to create and manage powerful links at scale.
          </p>
        </div>
        {/* <!-- Tiles --> */}
        <div className="tile is-ancestor mt-6">
          <div className="tile is-4 is-parent">
            <div className="tile is-child box remove-shadow has-background-white-bis">
              <h4 className="is-size-5 mb-3 has-text-centered has-text-weight-semibold has-text-grey-dark">
                👋&nbsp;Easily redirect any link
              </h4>
              <small className="has-text-grey mb-3">
                Change the destination URL for any short link, including QR
                Codes. Bitly makes it easy to assign a new URL to any of your
                links, whether you want to correct a destination error, update a
                destination or manually expire old links.
              </small>
              <br />
              <br />
              <small className="has-text-grey">Including examples ...</small>
              <ul className="mt-5 has-text-grey">
                <li className="bunny">
                  <small>Youtube Descriptions</small>
                </li>
                <li className="bunny">
                  <small>Instagram Bio</small>
                </li>
                <li className="bunny">
                  <small>Link on Facebook post</small>
                </li>
                <li className="bunny">
                  <small>Affiliate link</small>
                </li>
                <li className="bunny">
                  <small>Place in newsletters</small>
                </li>
                <li className="bunny">
                  <small>And much more</small>
                </li>
              </ul>
            </div>
          </div>
          <div className="tile is-4 is-vertical is-parent">
            <div className="tile is-child box remove-shadow has-background-white-bis">
              <h4 className="is-size-5 mb-3 has-text-centered has-text-weight-semibold has-text-grey-dark">
                🔑&nbsp;Create secure & reliable links
              </h4>
              <small className="has-text-grey">
                Rest assured knowing your links are secure. Every link is
                encrypted with HTTPS to guard against eavesdropping or
                third-party tampering—because you have more important things to
                worry about.
              </small>
            </div>
            <div className="tile is-child box remove-shadow has-background-white-bis">
              <h4 className="is-size-5 mb-3 has-text-centered has-text-weight-semibold has-text-grey-dark">
                🐧&nbsp;Seamless integrations
              </h4>
              <small className="has-text-grey">
                Integrate Bitly with your preferred social media management
                tools to easily share branded links in all of your social
                content.
              </small>
            </div>
          </div>
          <div className="tile is-4 is-vertical is-parent">
            <div className="tile is-child box remove-shadow has-background-white-bis">
              <h4 className="is-size-5 mb-3 has-text-centered has-text-weight-semibold has-text-grey-dark">
                🌱&nbsp;Turn your links into brand assets
              </h4>
              <small className="has-text-grey">
                With trust comes action. Businesses that share custom links see
                up to a 34% boost in click-throughs. It’s simple: If your
                audience trusts your links and knows where they lead, they’re
                more likely to click on them.
              </small>
            </div>
            <div className="tile is-child box remove-shadow has-background-white-bis">
              <h4 className="is-size-5 mb-3 has-text-centered has-text-weight-semibold has-text-grey-dark">
                🍬&nbsp;Create recognizable links
              </h4>
              <small className="has-text-grey">
                Take custom links a step further with custom back-halves. When
                you edit the back-half of a link you give people a preview of
                where you’re sending them, building trust and boosting
                click-throughs.
              </small>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tiles;
