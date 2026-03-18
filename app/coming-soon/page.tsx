import Image from "next/image";

export default function ComingSoonPage() {
  return (
    <main className="comingsoon-page">
      <div className="comingsoon-bg" aria-hidden="true" />

      <section className="comingsoon-card">
        <p className="comingsoon-label">the manifest</p>
        <Image
          className="comingsoon-logo"
          src="/brand/logo-maroon-cream.svg"
          alt="Manifest"
          width={360}
          height={80}
          priority
        />

        <h1 className="comingsoon-title">Your promotion called,</h1>
        <h2 className="comingsoon-sub-title">
          it wants better outfits and we&apos;re coming soon to deliver.
        </h2>

        <p className="comingsoon-subtitle">
          Be the first to know when we go live.
        </p>

        <p className="comingsoon-warning">Warning: May cause random compliments at work</p>
      </section>
    </main>
  );
}