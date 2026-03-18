'use client';

import { useState } from 'react';
import Image from "next/image";
import EmailModal from "@/components/email-modal";

export default function ComingSoonPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <main className="comingsoon-page">
        <div className="comingsoon-bg" aria-hidden="true" />

        <section className="comingsoon-card">
          <p className="comingsoon-label">the manifest label</p>
          <Image
            className="comingsoon-logo"
            src="/brand/logo-maroon-cream.svg"
            alt="Manifest"
            width={360}
            height={80}
            priority
          />

          <p className="comingsoon-title">Your promotion called, it wants better outfits and we&apos;re coming soon to deliver.</p>

          <p className="comingsoon-subtitle">
            <button
              onClick={() => setIsModalOpen(true)}
              className="seat-button"
            >
              Save my seat at launch
            </button>
            {' '}- Be the first to know when we go live
          </p>

          <p className="comingsoon-warning">Warning: May cause random compliments at work</p>
        </section>
      </main>

      <EmailModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}