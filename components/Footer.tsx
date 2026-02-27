import React from "react";
import Link from "next/link";

function Footer() {
  return (
    <footer className="links-container flex gap-8 text-(--accent-1) text-lg capitalize">
      <Link href="#">contaxt</Link>
      <Link href="#">social</Link>
      <Link href="#">address</Link>
      <Link href="#">legal terms</Link>
    </footer>
  );
}

export default Footer;
