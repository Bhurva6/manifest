'use client';

import { useState } from 'react';
import styles from './email-modal.module.css';

interface EmailModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function EmailModal({ isOpen, onClose }: EmailModalProps) {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!email.trim()) {
      setError('Please enter your email address');
      return;
    }

    if (!validateEmail(email)) {
      setError('Please enter a valid email address');
      return;
    }

    setIsLoading(true);

    try {
      // TODO: Replace with your actual API endpoint
      // const response = await fetch('/api/early-access', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify({ email }),
      // });
      // if (!response.ok) throw new Error('Failed to submit email');

      setIsSubmitted(true);
      setEmail('');
      
      // Auto-close after 3 seconds
      setTimeout(() => {
        setIsSubmitted(false);
        onClose();
      }, 3000);
    } catch (err) {
      setError('Something went wrong. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className={styles.overlay} onClick={onClose} aria-modal="true" role="dialog">
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <button
          className={styles.closeButton}
          onClick={onClose}
          aria-label="Close modal"
        >
          ✕
        </button>

        {isSubmitted ? (
          <div className={styles.confirmation}>
            <h2 className={styles.confirmationTitle}>Thank you!</h2>
            <p className={styles.confirmationMessage}>
              We've saved your email. You'll be the first to know when Manifest launches.
            </p>
          </div>
        ) : (
          <>
            <h2 className={styles.title}>Be the first to know</h2>
            <p className={styles.description}>
              Enter your email to get early access when we launch.
            </p>

            <form onSubmit={handleSubmit} className={styles.form}>
              <div className={styles.inputWrapper}>
                <input
                  type="email"
                  placeholder="your@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  disabled={isLoading}
                  className={styles.input}
                  autoFocus
                />
              </div>

              {error && <p className={styles.error}>{error}</p>}

              <button
                type="submit"
                disabled={isLoading}
                className={styles.submitButton}
              >
                {isLoading ? 'Saving...' : 'Save my seat'}
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
