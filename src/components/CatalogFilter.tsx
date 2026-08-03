import { useMemo, useState } from "react";
import { productFilters, products } from "../data/products";
import { whatsappUrl } from "../config/site";

export default function CatalogFilter() {
  const [filter, setFilter] = useState<(typeof productFilters)[number]>("Todos");
  const visible = useMemo(() => products.filter((p) => filter === "Todos" || p.category === filter), [filter]);

  return (
    <div className="catalog-tool">
      <div className="filters" role="tablist" aria-label="Filtrar colección">
        {productFilters.map((item) => (
          <button
            type="button"
            key={item}
            role="tab"
            aria-selected={filter === item}
            className={filter === item ? "active" : ""}
            onClick={() => setFilter(item)}
          >
            {item}
          </button>
        ))}
      </div>
      <div className="products" aria-live="polite">
        {visible.map((product) => (
          <article className="product reveal" key={product.reference}>
            <picture>
              <source srcSet={product.gallery[1]} type="image/avif" />
              <img src={product.gallery[0]} width="720" height="640" loading="lazy" alt={`${product.name} ${product.year} restaurada por Archivo Mac`} />
            </picture>
            <div className="product-info">
              <span>{product.status} · {product.year}</span>
              <h3>{product.name}</h3>
              <p>{product.version} · {product.condition}</p>
              <p>{product.description}</p>
              <div>
                <strong>{product.price}</strong>
                <a href={whatsappUrl(`Hola Archivo Mac. Me interesa la pieza ${product.name}, referencia ${product.reference}. ¿Sigue disponible?`)}>
                  Consultar
                </a>
              </div>
              <small>{product.reference}</small>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
