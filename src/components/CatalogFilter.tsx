import { useMemo, useState } from "react";

type CatalogProduct = {
  name: string;
  year: string;
  version: string;
  era: string;
  category: string;
  reference: string;
  description: string;
  image: string;
  alt: string;
};

type CatalogFilterProps = {
  products: CatalogProduct[];
  filters: string[];
};

export default function CatalogFilter({ products, filters }: CatalogFilterProps) {
  const [filter, setFilter] = useState(filters[0]);
  const visible = useMemo(() => products.filter((p) => filter === filters[0] || p.category === filter), [filter, filters, products]);

  return (
    <div className="catalog-tool">
      <div className="filters" role="tablist" aria-label="Filtrar colección">
        {filters.map((item) => (
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
              <img src={product.image} width="720" height="640" loading="lazy" alt={product.alt} />
            </picture>
            <div className="product-info">
              <span>{product.era} · {product.year}</span>
              <h3>{product.name}</h3>
              <p>{product.version}</p>
              <p>{product.description}</p>
              <small>{product.reference}</small>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
