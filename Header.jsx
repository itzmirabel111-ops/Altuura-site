"use client";
import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="alt-header">
      <img src="/logo.png" alt="Altuura Logo" className="alt-logo" />

      <nav className={`alt-nav ${open ? 'active' : ''}`}>
        <Link href="/" className="alt-link">Home</Link>
        <Link href="/shop" className="alt-link">Shop</Link>
        <Link href="/about" className="alt-link">About</Link>
        <Link href="/contact" className="alt-link">Contact</Link>
      </nav>

      <button
        aria-label="Toggle menu"
        className="alt-menu-toggle"
        onClick={() => setOpen(!open)}
      >
        &#9776;
      </button>
    </header>
  );
}
