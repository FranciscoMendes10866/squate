const Navbar = () => {
  return (
    <nav
      className="navbar container"
      role="navigation"
      aria-label="main navigation"
    >
      <div className="navbar-brand">
        <h1 className="navbar-item has-text-weight-medium">Juliana Morais</h1>
        <a
          role="button"
          className="navbar-burger"
          aria-label="menu"
          aria-expanded="false"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div className="navbar-end">
        <div className="navbar-item">
          <div className="buttons">
            <a className="button is-link">
              <strong>Criar conta</strong>
            </a>
            <a className="button is-link is-light">Iniciar sessão</a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
