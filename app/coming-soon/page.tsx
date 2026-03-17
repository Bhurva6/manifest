"use client";

import Image from "next/image";
import Link from "next/link";
import { FormEvent, useState } from "react";

export default function ComingSoonPage() {
  const [modalOpen, setModalOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [showThanks, setShowThanks] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setModalOpen(false);
    setEmail("");
    setShowThanks(true);
    window.setTimeout(() => setShowThanks(false), 2600);
  };

  return (
    <main className="comingsoon-page">
      <div className="comingsoon-bg" aria-hidden="true" />

      <nav className="comingsoon-nav" aria-label="Coming soon navigation">
        <Link href="/collection">Types</Link>
      </nav>

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

        <h1 className="comingsoon-title">
          Your promotion called, 
        </h1>
        <h2 className="comingsoon-sub-title">
          it wants better outfits and we&apos;re coming soon to deliver.
        </h2>

        <p className="comingsoon-subtitle">
          <button className="comingsoon-seat-link" type="button" onClick={() => setModalOpen(true)}>
            Save my seat at launch
          </button>
          <span> - Be the first to know when we go live</span>
        </p>

        <p className="comingsoon-warning">Warning: May cause random compliments at work</p>
      </section>

      {modalOpen ? (
        <div className="comingsoon-modal-backdrop" role="presentation" onClick={() => setModalOpen(false)}>
          <div
            className="comingsoon-modal"
            role="dialog"
            aria-modal="true"
            aria-label="Join launch waitlist"
            onClick={(event) => event.stopPropagation()}
          >
            <h2>Save my seat at launch</h2>
            <form onSubmit={handleSubmit}>
              <input
                type="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                placeholder="Enter your email"
                required
              />
              <button type="submit">Notify me</button>
            </form>
          </div>
        </div>
      ) : null}

      {showThanks ? (
        <div className="comingsoon-thanks" role="status" aria-live="polite">
          Thank you! You&apos;re on the list ✨
        </div>
      ) : null}
    </main>
  );
}