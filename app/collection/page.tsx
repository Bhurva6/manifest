import Link from "next/link";

import {
  CollectionSummary,
  MediaImage,
  ProductGrid,
  SiteFooter,
  SiteHeader,
} from "@/components/storefront/storefront";
import { collectionChips, PLACEHOLDER_IMAGE, products } from "@/lib/site-content";

export default function CollectionPage() {
  return (
    <>
      <SiteHeader />
      <main className="collection-shell">
        <section>
          <div className="container collection-hero">
            <div className="collection-copy reveal-up">
              <p className="eyebrow">Shop All</p>
              <h1>Curated for every day, events, and everything after.</h1>
              <p>
                This template now leans closer to the reference store&apos;s collection rhythm:
                short category intro, filter chips, then a dense four-column browse grid.
              </p>
              <div className="collection-actions">
                <Link className="button button-primary" href="/product/tailored-column-dress">
                  Shop signature look
                </Link>
                <Link className="button button-secondary" href="/">
                  Back to homepage
                </Link>
              </div>
            </div>

            <div className="collection-panel reveal-up delay-1">
              <MediaImage src={PLACEHOLDER_IMAGE} alt="Collection hero placeholder" />
              <div className="filter-bar">
                <p>Shop by category</p>
                <div className="filter-row">
                  {collectionChips.map((chip, index) => (
                    <span className={`chip ${index === 0 ? "active" : ""}`} key={chip}>
                      {chip}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <ProductGrid
          title="Collection view"
          description="Structured like a premium category page: quick filtering, broad product coverage, and a campaign panel above the fold."
          products={products}
        />
        <CollectionSummary />
      </main>
      <SiteFooter />
    </>
  );
}