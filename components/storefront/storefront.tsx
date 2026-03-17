"use client";
import Image from "next/image";
import Link from "next/link";

import {
  communityPosts,
  footerColumns,
  homeCategories,
  navItems,
  PLACEHOLDER_IMAGE,
  PLACEHOLDER_VIDEO,
  tickerOffers,
  type CardItem,
  type Product,
  type TrendingTile,
  valuePillars,
} from "@/lib/site-content";

function SearchIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <circle cx="11" cy="11" r="6.5" fill="none" stroke="currentColor" strokeWidth="1.7" />
      <path d="M16 16L21 21" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
    </svg>
  );
}

function HeartIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path
        d="M12 20.5l-1.2-1.1C5.8 14.9 3 12.4 3 8.8 3 6.1 5 4 7.7 4c1.5 0 3 .7 4 1.9C12.7 4.7 14.2 4 15.7 4 18.4 4 20.4 6.1 20.4 8.8c0 3.6-2.8 6.1-7.8 10.6L12 20.5z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function BagIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path d="M6 8h12l-1 11H7L6 8z" fill="none" stroke="currentColor" strokeWidth="1.7" />
      <path d="M9 9V7.5A3 3 0 0112 4.5a3 3 0 013 3V9" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
    </svg>
  );
}

export function OfferTicker({
  className = "",
}: Readonly<{
  className?: string;
}>) {
  return (
    <div className={`offer-ticker ${className}`.trim()}>
      <div className="offer-ticker-track">
        {tickerOffers.map((offer, index) => (
          <span key={offer} className={`offer-ticker-item ticker-delay-${index + 1}`}>
            {offer}
          </span>
        ))}
      </div>
    </div>
  );
}

export function LandingHeader() {
  return (
    <div className="landing-header">
      <div className="landing-toolbar">
        <div className="landing-toolbar-spacer" aria-hidden="true" />

        <Link className="landing-brand" href="/" aria-label="Manifest home">
          Manifest
        </Link>

        <div className="landing-utilities">
          <Link className="utility-icon" href="/collection" aria-label="Search">
            <SearchIcon />
          </Link>
          <Link className="utility-link" href="/collection">
            Login / Register
          </Link>
          <Link className="utility-icon" href="/collection" aria-label="Wishlist">
            <HeartIcon />
          </Link>
          <Link className="utility-icon" href="/product/tailored-column-dress" aria-label="Shopping bag">
            <BagIcon />
          </Link>
        </div>
      </div>

      <nav className="landing-category-nav" aria-label="Homepage categories">
        {homeCategories.map((item) => (
          <Link key={item} href="/collection">
            {item}
          </Link>
        ))}
      </nav>
    </div>
  );
}

export function SiteHeader() {
  return (
    <header>
      <div className="announcement-bar">
        10% off your first order · Code: MANIFEST10
      </div>
      <div className="sub-announcement-bar">
        Free limited-edition gift with a minimum spend of $150
      </div>
      <div className="site-header">
        <div className="container header-shell">
          <Link className="brand-lockup" href="/">
            <Image
              src="/brand/logo-cream-maroon.svg"
              alt="Manifest"
              width={360}
              height={80}
              priority
            />
          </Link>
          <nav className="main-nav" aria-label="Primary navigation">
            {navItems.map((item) => (
              <Link key={item.label} href={item.href}>
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="header-actions">
            <Link href="/collection">Search</Link>
            <Link href="/collection">Stores</Link>
            <Link href="/collection">Account</Link>
            <Link className="pill-link" href="/product/tailored-column-dress">
              Bag (1)
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <Image src="/brand/logo-maroon-cream.svg" alt="Manifest" width={360} height={80} />
            <p>
              Built as a polished storefront shell: calm structure, denser merchandising,
              and a richer palette anchored by your uploaded brand assets.
            </p>
          </div>

          <div className="footer-column">
            <span className="footer-label">Shop</span>
            {footerColumns.shop.map((item) => (
              <Link key={item} href="/collection">
                {item}
              </Link>
            ))}
          </div>

          <div className="footer-column">
            <span className="footer-label">About</span>
            {footerColumns.about.map((item) => (
              <Link key={item} href="/collection">
                {item}
              </Link>
            ))}
          </div>

          <div className="footer-column">
            <span className="footer-label">Support</span>
            {footerColumns.support.map((item) => (
              <Link key={item} href="/collection">
                {item}
              </Link>
            ))}
          </div>
        </div>

        <div className="footer-bottom">
          <p>© 2026 Manifest. Designed for a warmer, sharper wardrobe.</p>
          <div className="footer-meta">
            <Link href="/collection">Terms</Link>
            <Link href="/collection">Privacy</Link>
            <Link href="/collection">Instagram</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export function MediaImage({
  src,
  alt,
  priority = false,
}: Readonly<{
  src: string;
  alt: string;
  priority?: boolean;
}>) {
  return <Image src={src} alt={alt} width={1200} height={1600} priority={priority} />;
}

export function EditorialGrid({ items }: Readonly<{ items: CardItem[] }>) {
  return (
    <section className="editorial-section">
      <div className="container">
        <div className="section-heading reveal-up">
          <p className="eyebrow">What&apos;s trending</p>
          <h2>Large-format campaign tiles that hold the page together.</h2>
          <p>
            The reference site relies on oversized editorial tiles to slow the browsing
            pace. This shell keeps that idea but pushes it through your color system.
          </p>
        </div>

        <div className="editorial-grid">
          {items.map((item, index) => (
            <Link className={`editorial-card reveal-up delay-${index}`} key={item.title} href={item.href}>
              <MediaImage src={item.image} alt={item.title} priority={index === 0} />
              <div className="editorial-copy">
                <p className="eyebrow">Editorial</p>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export function TrendingStrip({ items }: Readonly<{ items: TrendingTile[] }>) {
  return (
    <section className="trending-strip">
      <div className="container">
        <div className="section-heading trending-heading reveal-up">
          <h2>What&apos;s trending</h2>
        </div>

        <div className="trending-grid">
          {items.map((item, index) => (
            <Link className={`trending-tile reveal-up delay-${index}`} key={`${item.href}-${index}`} href={item.href}>
              <MediaImage src={item.image} alt={item.alt} priority={index === 0} />
              {item.label ? <span className="trending-tile-label">{item.label}</span> : null}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export function DualOfferSection() {
  return (
    <section className="dual-offer-section">
      <div className="dual-offer-grid">
        <div className="dual-offer-panel">
          <MediaImage src={PLACEHOLDER_IMAGE} alt="Offer left panel" />
        </div>
        <div className="dual-offer-center">
          <p className="dual-offer-text">Limited-time offer · 10% off your first order</p>
          <Link className="button button-primary dual-offer-button" href="/collection">
            Redeem now
          </Link>
        </div>
        <div className="dual-offer-panel">
          <MediaImage src={PLACEHOLDER_IMAGE} alt="Offer right panel" />
        </div>
      </div>
    </section>
  );
}

export function AppDownloadSection() {
  return (
    <section className="app-download-section">
      <div className="app-download-layout">
        <div className="app-download-images">
          <div className="app-download-tile app-download-tile-primary">
            <MediaImage src={PLACEHOLDER_IMAGE} alt="App launch promotion" />
            <div className="app-download-overlay">
              <p className="app-download-date">16 Mar 2026 — 31 Mar 2026</p>
              <h3 className="app-download-title">Download the app now</h3>
            </div>
          </div>
          <div className="app-download-tile">
            <MediaImage src={PLACEHOLDER_IMAGE} alt="App promotion secondary visual" />
          </div>
        </div>

        <div className="app-download-panel">
          <h3>Download app and get notifications</h3>
          <div className="app-download-qr" aria-label="QR code placeholder" />
          <p className="app-download-terms">T&amp;C apply</p>
        </div>
      </div>
    </section>
  );
}

export function FeatureImageStrip() {
  const labels = ["THE CLUBROOM", "NEW SIGNATURES", "PANTS", "OCCASION"];

  return (
    <section className="feature-image-strip">
      <div className="feature-image-strip-heading">
        <h2>Shop by features</h2>
      </div>
      <div className="feature-image-strip-grid">
        {labels.map((label, index) => (
          <Link className={`feature-image-tile reveal-up delay-${index}`} key={label} href="/collection">
            <MediaImage src={PLACEHOLDER_IMAGE} alt={label} />
            <span className="feature-image-tile-label">{label}</span>
          </Link>
        ))}
      </div>
    </section>
  );
}

export function DiscoverVideosRow() {
  return (
    <section className="discover-videos-section">
      <div className="discover-videos-heading">
        <Link href="/collection">
          Discover all <span aria-hidden="true">→</span>
        </Link>
      </div>
      <div className="discover-videos-grid">
        {[0, 1, 2, 3].map((item, index) => (
          <div className={`discover-video-tile reveal-up delay-${index}`} key={item}>
            <video autoPlay muted loop playsInline controls={false} preload="metadata">
              <source src={PLACEHOLDER_VIDEO} type="application/x-mpegURL" />
            </video>
          </div>
        ))}
      </div>
    </section>
  );
}

export function FeatureGrid({ items }: Readonly<{ items: CardItem[] }>) {
  return (
    <section className="feature-section">
      <div className="container">
        <div className="section-heading reveal-up">
          <p className="eyebrow">Shop by feature</p>
          <h2>Build a branded taxonomy instead of a generic category list.</h2>
        </div>
        <div className="feature-grid">
          {items.map((item, index) => (
            <Link className={`feature-card reveal-up delay-${index}`} key={item.title} href={item.href}>
              <MediaImage src={item.image} alt={item.title} />
              <div className="feature-copy">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export function LoyaltySection() {
  return (
    <section className="loyalty-section">
      <div className="container loyalty-layout">
        <div className="loyalty-media reveal-up">
          <MediaImage src={PLACEHOLDER_IMAGE} alt="Loyalty programme" />
        </div>
        <div className="loyalty-copy reveal-up delay-1">
          <p>
            Loyalty pays off. Get rewarded with plenty of member-exclusive benefits when you join
            our loyalty programme today.
          </p>
          <Link className="button button-primary loyalty-button" href="/collection">
            Join now
          </Link>
        </div>
      </div>
    </section>
  );
}

import { useState } from "react";

export function ManifestSection() {
  const [expanded, setExpanded] = useState(false);
  const faqs = [
    {
      q: "What is Manifest?",
      a: "Manifest is a curated platform for discovering and shopping premium fashion edits, designed to help you find styles and fits that match your personality and needs."
    },
    {
      q: "How does Manifest work?",
      a: "Browse our collections, join the loyalty program, and access exclusive guides and benefits. Click 'Read more' to see detailed FAQs."
    }
  ];
  return (
    <section className="manifest-types-section">
      <div className="container manifest-types-layout left-align">
        <h2 className="manifest-types-heading">Manifest</h2>
        <p className="manifest-types-desc">
          Manifest is your destination for premium fashion edits.<br />
          Explore collections, unlock member rewards, and shop with confidence.
        </p>
        <button className="manifest-types-readmore" onClick={() => setExpanded(!expanded)}>
          {expanded ? "Hide FAQs" : "Read more"}
        </button>
        {expanded && (
          <div className="manifest-types-faqs left-align">
            {faqs.map((faq, idx) => (
              <div className="manifest-types-faq" key={faq.q}>
                <strong>{faq.q}</strong>
                <p>{faq.a}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

export function ProductGrid({
  title,
  description,
  products,
}: Readonly<{
  title: string;
  description: string;
  products: Product[];
}>) {
  return (
    <section className="product-section">
      <div className="container">
        <div className="section-heading reveal-up">
          <p className="eyebrow">Bestsellers</p>
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
        <div className="section-tools reveal-up delay-1">
          <span>Shop by edit</span>
          <span>Sort by featured</span>
        </div>
        <div className="product-grid">
          {products.map((product, index) => (
            <Link className={`product-card reveal-up delay-${index}`} key={product.slug} href={`/product/${product.slug}`}>
              <MediaImage src={product.image} alt={product.name} />
              <div className="product-meta">
                <h3>{product.name}</h3>
                <p>{product.summary}</p>
                <strong className="product-price">{product.price}</strong>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export function VideoFeature() {
  return (
    <section className="video-section">
      <div className="container video-layout">
        <div className="video-copy reveal-up">
          <p className="eyebrow">Campaign motion</p>
          <h2>A dedicated moving-image block for your placeholder video.</h2>
          <p>
            This keeps a motion-led merchandising moment in the flow without introducing
            extra media sources beyond the placeholder you provided.
          </p>
          <Link className="button button-primary" href="/collection">
            Explore the chapter
          </Link>
        </div>
        <div className="video-frame reveal-up delay-1">
          <video autoPlay muted loop playsInline controls={false} preload="metadata">
            <source src={PLACEHOLDER_VIDEO} type="application/x-mpegURL" />
          </video>
        </div>
      </div>
    </section>
  );
}

export function CommunitySection({ posts }: Readonly<{ posts: CardItem[] }>) {
  return (
    <section className="community-section">
      <div className="container">
        <div className="section-heading reveal-up">
          <p className="eyebrow">As seen through Manifest</p>
          <h2>Social proof with more editorial restraint.</h2>
          <p>
            Keep the section, but style it like a journal surface rather than a raw social feed.
          </p>
        </div>

        <div className="community-grid">
          {posts.map((post, index) => (
            <Link className={`community-card reveal-up delay-${index}`} key={post.title} href={post.href}>
              <MediaImage src={post.image} alt={post.title} />
              <div className="community-copy">
                <span>Manifest Notes</span>
                <h3>{post.title}</h3>
                <p>{post.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ValueStrip() {
  return (
    <section className="value-strip">
      <div className="container">
        <div className="section-heading reveal-up">
          <p className="eyebrow">Why this shell works</p>
          <h2>It keeps the merchandising discipline and swaps out the personality layer.</h2>
        </div>

        <div className="value-grid">
          {valuePillars.map((pillar, index) => (
            <article className={`value-card reveal-up delay-${index}`} key={pillar.title}>
              <span>0{index + 1}</span>
              <h3>{pillar.title}</h3>
              <p>{pillar.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function NewsletterSection() {
  return (
    <section className="newsletter-strip">
      <div className="container newsletter-layout">
        <div className="newsletter-panel reveal-up">
          <div className="newsletter-copy">
            <p className="eyebrow">Join the list</p>
            <h2>Get launch notes, collection drops, and styling prompts first.</h2>
            <p>
              This replaces the typical generic signup block with a fuller brand moment.
            </p>
          </div>
          <form className="newsletter-form">
            <input type="email" placeholder="Your email address" aria-label="Email address" />
            <button className="button button-secondary" type="submit">
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export function CollectionSummary() {
  return (
    <section className="community-section">
      <div className="container">
        <div className="section-heading reveal-up">
          <p className="eyebrow">Curated highlights</p>
          <h2>A collection page should still feel merchandised, not purely utilitarian.</h2>
        </div>
        <div className="community-grid">
          {communityPosts.slice(0, 2).map((post, index) => (
            <article className={`community-card reveal-up delay-${index}`} key={post.title}>
              <MediaImage src={post.image} alt={post.title} />
              <div className="community-copy">
                <span>Curated story</span>
                <h3>{post.title}</h3>
                <p>{post.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}