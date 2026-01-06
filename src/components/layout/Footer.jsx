import "./Footer.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="footer-compact">
      <div className="container-luxury">
        <div className="footer-compact-main">

          {/* LOGO */}
          <div className="compact-brand">
            <h2 className="footer-logo-small">SØLENE</h2>
          </div>

          {/* NAVEGAÇÃO INTERMEDIÁRIA */}
          <nav className="compact-nav">
            <a href="#produtos">Coleções</a>
            <a href="#manifesto">História</a>
            <a href="#">Privacidade</a>
          </nav>

          {/* REDES SOCIAIS NOMINAIS */}
          <div className="compact-social">
            <a href="https://www.instagram.com/" target="_blank" className="social-link">INSTAGRAM</a>
            <span className="sep">/</span>
            <a href="https://br.pinterest.com/" target="_blank" className="social-link">PINTEREST</a>
          </div>

          {/* BOTÃO VOLTAR AO TOPO - AGORA INTEGRADO */}
          <div className="compact-back-to-top" onClick={scrollToTop}>
            TOPO ↑
          </div>
        </div>

        <div className="footer-compact-bottom">
          <p>© {currentYear} SØLENE — PURE LINEN ETHOS</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;