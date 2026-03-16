import React from "react";
import Link from "next/link";

function Footer() {
  return (
    <div className="links-container flex gap-8 text-(--accent-1) text-lg capitalize py-4 flex-wrap">
      <Link href="#contacts">contact</Link>
      <Link href="#benefits">benefits</Link>
      <Link href="#features">features</Link>
      <Link href="#policies">legal terms</Link>
    </div>
  );
}

export default Footer;
