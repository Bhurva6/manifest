import Link from "next/link";

import {
  AppDownloadSection,
  DiscoverVideosRow,
  DualOfferSection,
  FeatureImageStrip,
  LandingHeader,
  LoyaltySection,
  ManifestSection,
  MediaImage,
  OfferTicker,
  SiteFooter,
  TrendingStrip,
} from "@/components/storefront/storefront";
import {
  PLACEHOLDER_IMAGE,
  trendingTiles,
} from "@/lib/site-content";

export default function Home() {
  return (
    <>
      <OfferTicker className="landing-top-ticker" />
      <main>
        <section className="landing-hero">
          <div className="landing-media-grid">
            <div className="landing-media-panel landing-media-left">
              <MediaImage src={PLACEHOLDER_IMAGE} alt="Landing left placeholder" priority />
            </div>
            <div className="landing-media-panel landing-media-right">
              <MediaImage src={PLACEHOLDER_IMAGE} alt="Landing right placeholder" priority />
            </div>
          </div>

          <div className="landing-overlay">
            <div className="container landing-overlay-shell">
              <LandingHeader />
              <div className="landing-cta-row reveal-up delay-1">
                <Link className="button button-primary landing-shop-button" href="/collection">
                  Shop new in
                </Link>
              </div>
            </div>
            <OfferTicker className="landing-bottom-ticker" />
          </div>
        </section>

        <TrendingStrip items={trendingTiles} />
        <DualOfferSection />
        <AppDownloadSection />
        <FeatureImageStrip />
        <DiscoverVideosRow />
        <LoyaltySection />
        <ManifestSection />
      </main>
      <SiteFooter />
    </>
  );
}
