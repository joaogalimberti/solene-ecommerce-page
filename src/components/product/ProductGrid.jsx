import { useState, useMemo } from "react";
import products from "../../data/products";
import ProductCard from "./ProductCard";
import "./ProductGrid.css";

const ProductGrid = ({ addToCart }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("todas");
  const [sortBy, setSortBy] = useState("relevancia");

  // Extrai categorias únicas dos produtos
  const categories = useMemo(() => {
    const cats = [...new Set(products.map((p) => p.category))];
    return cats;
  }, []);

  // Filtra e ordena produtos
  const filteredAndSortedProducts = useMemo(() => {
    let filtered = products;

    // Filtro por categoria
    if (selectedCategory !== "todas") {
      filtered = filtered.filter((p) => p.category === selectedCategory);
    }

    // Filtro por busca
    if (searchTerm) {
      const regex = new RegExp(searchTerm, "i");
      filtered = filtered.filter(
        (product) =>
          regex.test(product.name) ||
          regex.test(product.description) ||
          regex.test(product.fabric) ||
          regex.test(product.color) ||
          regex.test(product.category)
      );
    }

    // Ordenação
    const sorted = [...filtered].sort((a, b) => {
      switch (sortBy) {
        case "preco-menor":
          return a.price - b.price;
        case "preco-maior":
          return b.price - a.price;
        case "nome-az":
          return a.name.localeCompare(b.name);
        case "nome-za":
          return b.name.localeCompare(a.name);
        default:
          return 0;
      }
    });

    return sorted;
  }, [searchTerm, selectedCategory, sortBy]);

  // Formata nome da categoria
  const formatCategoryName = (cat) => {
    const names = {
      camisas: "Camisas",
      vestidos: "Vestidos",
      calcas: "Calças",
      bermudas: "Bermudas",
      overshirts: "Overshirts",
      tunicas: "Túnicas",
    };
    return names[cat] || cat;
  };

  return (
    <section className="product-grid-section">
      {/* CABEÇALHO COM FILTROS */}
      <div className="filters-container">
        {/* BUSCA */}
        <div className="search-wrapper">
          <svg
            className="search-icon"
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <circle cx="11" cy="11" r="8" />
            <path d="m21 21-4.35-4.35" />
          </svg>
          <input
            type="text"
            className="search-input"
            placeholder="Buscar por nome, tecido ou cor..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          {searchTerm && (
            <button
              className="clear-search"
              onClick={() => setSearchTerm("")}
              aria-label="Limpar busca"
            >
              ×
            </button>
          )}
        </div>

        {/* FILTROS E ORDENAÇÃO */}
        <div className="filters-row">
          {/* CATEGORIAS */}
          <div className="filter-group">
            <label className="filter-label">Categoria</label>
            <div className="category-pills">
              <button
                className={`category-pill ${selectedCategory === "todas" ? "active" : ""
                  }`}
                onClick={() => setSelectedCategory("todas")}
              >
                Todas
              </button>
              {categories.map((cat) => (
                <button
                  key={cat}
                  className={`category-pill ${selectedCategory === cat ? "active" : ""
                    }`}
                  onClick={() => setSelectedCategory(cat)}
                >
                  {formatCategoryName(cat)}
                </button>
              ))}
            </div>
          </div>

          {/* ORDENAÇÃO */}
          <div className="filter-group sort-group">
            <label className="filter-label" htmlFor="sort-select">
              Ordenar por
            </label>
            <select
              id="sort-select"
              className="sort-select"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
            >
              <option value="relevancia">Relevância</option>
              <option value="preco-menor">Menor preço</option>
              <option value="preco-maior">Maior preço</option>
              <option value="nome-az">Nome A-Z</option>
              <option value="nome-za">Nome Z-A</option>
            </select>
          </div>
        </div>
      </div>

      {/* CONTADOR DE RESULTADOS */}
      <div className="results-info">
        <p className="results-count">
          {filteredAndSortedProducts.length}{" "}
          {filteredAndSortedProducts.length === 1 ? "produto" : "produtos"}
          {selectedCategory !== "todas" && (
            <span className="results-filter">
              {" "}
              em {formatCategoryName(selectedCategory)}
            </span>
          )}
        </p>
      </div>

      {/* GRID DE PRODUTOS */}
      <div className="product-grid">
        {filteredAndSortedProducts.length > 0 ? (
          filteredAndSortedProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              addToCart={addToCart}
            />
          ))
        ) : (
          <div className="no-results">
            <svg
              className="no-results-icon"
              width="48"
              height="48"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              <circle cx="11" cy="11" r="8" />
              <path d="m21 21-4.35-4.35" />
            </svg>
            <h3>Nenhum produto encontrado</h3>
            <p>
              Tente ajustar seus filtros ou buscar por outros termos
            </p>
            {(searchTerm || selectedCategory !== "todas") && (
              <button
                className="reset-filters-btn"
                onClick={() => {
                  setSearchTerm("");
                  setSelectedCategory("todas");
                }}
              >
                Limpar filtros
              </button>
            )}
          </div>
        )}
      </div>
    </section>
  );
};

export default ProductGrid;