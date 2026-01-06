import { useState } from "react";
import "./ProductCard.css";

const ProductCard = ({ product, addToCart }) => {
  const [selectedSize, setSelectedSize] = useState(null);
  const [isHovered, setIsHovered] = useState(false);

  // Calcula estoque total
  const totalStock = product.sizes.reduce((acc, size) => acc + size.stock, 0);
  const isLowStock = totalStock < 10;
  const isOutOfStock = totalStock === 0;

  // Formata preço
  const formatPrice = (price) => {
    return price.toLocaleString("pt-BR", {
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    });
  };

  // Handler para adicionar ao carrinho
  const handleAddToCart = () => {
    if (isOutOfStock) return;

    if (!selectedSize) {
      const firstAvailable = product.sizes.find((s) => s.stock > 0);
      if (firstAvailable) {
        setSelectedSize(firstAvailable.label);
        addToCart({ ...product, selectedSize: firstAvailable.label });
      }
    } else {
      addToCart({ ...product, selectedSize });
    }
  };

  return (
    <article
      className="product-card"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* BADGES */}
      <div className="product-badges">
        {isLowStock && !isOutOfStock && (
          <span className="badge badge-low-stock">Últimas unidades</span>
        )}
        {isOutOfStock && <span className="badge badge-out">Esgotado</span>}
      </div>

      {/* IMAGEM */}
      <div className="product-image-wrapper">
        <div className="product-image">
          <img
            src={`/${product.image}`}
            alt={product.name}
            loading="lazy"
          />
        </div>
        {/* OVERLAY COM INFO RÁPIDA */}
        <div className={`product-overlay ${isHovered ? "visible" : ""}`}>
          <div className="overlay-content">
            <p className="overlay-fabric">{product.fabric}</p>
            <ul className="overlay-details">
              {product.details.map((detail, idx) => (
                <li key={idx}>{detail}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* CONTEÚDO */}
      <div className="product-content">
        {/* HEADER */}
        <div className="product-header">
          <div>
            <h3 className="product-name">{product.name}</h3>
            <p className="product-category">{product.category}</p>
          </div>
          <p className="product-price">R$ {formatPrice(product.price)}</p>
        </div>

        {/* DESCRIÇÃO */}
        <p className="product-description">{product.description}</p>

        {/* INFORMAÇÕES */}
        <div className="product-meta">
          <div className="meta-item">
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <rect x="3" y="3" width="18" height="18" rx="2" />
              <path d="M3 9h18M9 21V9" />
            </svg>
            <span>{product.fabric}</span>
          </div>
          <div className="meta-item">
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <circle cx="12" cy="12" r="10" />
              <circle cx="12" cy="12" r="3" />
            </svg>
            <span>{product.color}</span>
          </div>
        </div>

        {/* SELETOR DE TAMANHOS */}
        <div className="size-selector">
          <label className="size-label">Tamanho</label>
          <div className="size-options">
            {product.sizes.map((size) => (
              <button
                key={size.label}
                className={`size-button ${selectedSize === size.label ? "selected" : ""
                  } ${size.stock === 0 ? "unavailable" : ""}`}
                onClick={() =>
                  size.stock > 0 && setSelectedSize(size.label)
                }
                disabled={size.stock === 0}
                title={
                  size.stock === 0
                    ? "Indisponível"
                    : `${size.stock} em estoque`
                }
              >
                {size.label}
              </button>
            ))}
          </div>
        </div>

        {/* BOTÃO DE ADICIONAR */}
        <button
          className={`add-to-cart-button ${isOutOfStock ? "disabled" : ""}`}
          onClick={handleAddToCart}
          disabled={isOutOfStock}
        >
          {isOutOfStock ? (
            <>
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
              Produto Esgotado
            </>
          ) : (
            <>
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <circle cx="9" cy="21" r="1" />
                <circle cx="20" cy="21" r="1" />
                <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
              </svg>
              Adicionar ao Carrinho
            </>
          )}
        </button>
      </div>
    </article>
  );
};

export default ProductCard;