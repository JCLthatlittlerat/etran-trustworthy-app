import React from "react";
import Link from "next/link";

function Footer() {
  return (
    <div className="links-container flex gap-8 text-(--accent-1) text-lg capitalize py-4 flex-wrap">
      <Link href="#">contaxt</Link>
      <Link href="#">social</Link>
      <Link href="#">address</Link>
      <Link href="#">legal terms</Link>
    </div>
  );
}

export default Footer;
