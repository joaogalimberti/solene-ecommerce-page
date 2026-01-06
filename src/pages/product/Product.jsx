import { useParams } from "react-router-dom";
import products from "../../data/products";
import "./Product.css";

const Product = ({ addToCart }) => {
  const { id } = useParams();

  // Produto encontrado pelo ID
  const product = products.find((item) => item.id === id);

  if (!product) {
    return <p>Produto não encontrado.</p>;
  }

  return (
    <section className="product-page container">
      {/* IMAGEM DO PRODUTO */}
      <div className="product-page-image">
        <img src={product.image} alt={product.name} />
      </div>

      {/* INFORMAÇÕES DO PRODUTO */}
      <div className="product-page-info">
        <h1 className="product-name">{product.name}</h1>
        <p className="product-price">R$ {product.price.toLocaleString()}</p>

        <p className="product-description">{product.description}</p>

        <ul className="product-details">
          <li><strong>Tecido:</strong> {product.fabric}</li>
          <li><strong>Cor:</strong> {product.color}</li>
          <li><strong>Categoria:</strong> {product.category}</li>
          <li><strong>Gênero:</strong> {product.gender}</li>
        </ul>

        <div className="product-actions">
          <button
            className="btn-primary"
            onClick={() => addToCart(product)}
          >
            Adicionar ao carrinho
          </button>
        </div>
      </div>
    </section>
  );
};

export default Product;
