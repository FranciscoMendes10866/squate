const Footer = () => {
  return (
    <footer className="footer mt-6 py-6 has-background-white">
      <div className="content has-text-centered has-text-grey is-size-6">
        <p>
          Copyright © {new Date().getFullYear()} Juliana Morais. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
