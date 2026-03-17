import Link from "next/link";
import { notFound } from "next/navigation";

import {
  MediaImage,
  ProductGrid,
  SiteFooter,
  SiteHeader,
} from "@/components/storefront/storefront";
import { products } from "@/lib/site-content";

type ProductPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export default async function ProductPage({ params }: Readonly<ProductPageProps>) {
  const { slug } = await params;
  const product = products.find((entry) => entry.slug === slug);

  if (!product) {
    notFound();
  }

  return (
    <>
      <SiteHeader />
      <main className="product-shell">
        <section>
          <div className="container product-layout">
            <div className="product-gallery reveal-up">
              <div className="gallery-thumbs">
                <MediaImage src={product.image} alt={`${product.name} main look`} />
                <MediaImage src={product.altImage} alt={`${product.name} alternate look`} />
                <MediaImage src={product.detailImage} alt={`${product.name} detail look`} />
              </div>
              <div className="gallery-main">
                <MediaImage src={product.detailImage} alt={product.name} priority />
              </div>
            </div>

            <div className="product-panel reveal-up delay-1">
              <div className="product-copy">
                <p className="eyebrow">Product detail</p>
                <h1>{product.name}</h1>
                <div className="product-price-row">
                  <strong>{product.price}</strong>
                  <span>{product.color}</span>
                </div>
                <p>{product.summary}</p>
                <div className="product-note">
                  Online exclusive · 14-day returns · Free shipping over $150
                </div>
                <div className="size-grid">
                  <p>Sizes</p>
                  <div className="filter-row">
                    <span className="size-chip active">XS</span>
                    <span className="size-chip">S</span>
                    <span className="size-chip">M</span>
                    <span className="size-chip">L</span>
                  </div>
                </div>
                <div className="hero-actions">
                  <Link className="button button-primary" href="/collection">
                    Add to bag
                  </Link>
                  <Link className="button button-secondary" href="/collection">
                    Save for later
                  </Link>
                </div>
                <ul className="product-specs">
                  <li>Fit: {product.fit}</li>
                  {product.details.map((detail) => (
                    <li key={detail}>{detail}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        <ProductGrid
          title="You may also want"
          description="Related products keep the same grid system so the PDP feels like part of a larger fashion storefront rather than a standalone page."
          products={products.filter((entry) => entry.slug !== product.slug).slice(0, 3)}
        />
      </main>
      <SiteFooter />
    </>
  );
}