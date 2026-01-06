import { useState, useEffect, useRef } from "react";
import ProductGrid from "../../components/product/ProductGrid";
import "./Home.css";

const Home = ({ addToCart }) => {
  const [isVisible, setIsVisible] = useState({});
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const sectionsRef = useRef({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible((prev) => ({
              ...prev,
              [entry.target.dataset.section]: true,
            }));
          }
        });
      },
      { threshold: 0.1 }
    );

    Object.values(sectionsRef.current).forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  const collections = [
    { title: "Essentials", img: "collection-essentials.jpg", slug: "essentials" },
    { title: "Premium", img: "collection-premium.jpg", slug: "premium" },
    { title: "Summer", img: "collection-summer.jpg", slug: "summer" }
  ];

  return (
    <div className="home-luxury">
      {/* HERO SECTION */}
      <section className="hero-luxury">
        <div className="hero-luxury-content">
          <h1 className="hero-luxury-title">
            <span className="title-line">SØLENE</span>
            <span className="title-subtitle">A Essência do Linho Premium</span>
          </h1>
          <p className="hero-luxury-description">
            Peças que transcendem o tempo, criadas com linhos europeus
            e o rigor da alfaiataria artesanal.
          </p>

          <div className="hero-luxury-actions">
            <a href="#produtos" className="cta-minimal-gold">Descobrir Coleção</a>
            <a href="#manifesto" className="cta-link">Nossa História</a>
          </div>
        </div>
      </section>

      {/* SEÇÃO DE COLEÇÕES */}
      <section
        className={`collections-section ${isVisible.collections ? "visible" : ""}`}
        data-section="collections"
        ref={(el) => (sectionsRef.current.collections = el)}
      >
        <div className="container-luxury">
          <div className="collections-grid">
            {collections.map((col, i) => (
              <a key={i} href="#produtos" className="collection-card">
                <img src={`${col.img}`} alt={col.title} className="collection-img" />
                <div className="collection-overlay">
                  <h3 className="collection-title">{col.title}</h3>
                  <span className="collection-link">Ver Peças</span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* MANIFESTO */}
      <section
        id="manifesto"
        className={`signature-luxury ${isVisible.signature ? "visible" : ""}`}
        data-section="signature"
        ref={(el) => (sectionsRef.current.signature = el)}
      >
        <div className="container-luxury">
          <div className="signature-content">
            <div className="signature-text">
              <div className="signature-label">
                <span className="label-line"></span>
                <span>MANIFESTO</span>
                <span className="label-line"></span>
              </div>
              <h2 className="signature-title">Luxo Silencioso,<br />Impacto Duradouro</h2>
              <p className="signature-paragraph">
                SØLENE nasceu da convicção de que o verdadeiro luxo não grita — ele sussurra.
                Cada fio de linho europeu carrega séculos de tradição.
              </p>
              <div className="signature-author">
                <div className="author-line"></div>
                <span className="author-name">Fundadores SØLENE</span>
              </div>
            </div>

            <div className="signature-visual">
              <div className="visual-frame">
                <div className="frame-corner tl"></div>
                <div className="frame-corner br"></div>
                <div className="visual-img-container">
                  <img src="manifesto.jpg" alt="Manifesto SØLENE" className="manifesto-img" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PRODUCTS SECTION */}
      <section
        id="produtos"
        className={`products-luxury ${isVisible.products ? "visible" : ""}`}
        data-section="products"
        ref={(el) => (sectionsRef.current.products = el)}
      >
        <div className="container-luxury">
          <div className="section-header-luxury">
            <h2 className="section-title-luxury">Coleção Exclusiva</h2>
            <div className="ornament-center">✦</div>
          </div>
          <ProductGrid addToCart={addToCart} />
        </div>
      </section>
    </div>
  );
};

export default Home;