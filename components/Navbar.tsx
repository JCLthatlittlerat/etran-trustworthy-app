import React from "react";
import Image from "next/image";
import Button from "./button";
import Link from "next/link";

function Navbar() {
  return (
    <header>
      <nav className="flex justify-between py-4">
          <Link className="flex gap-4 items-center" href={'#hero-container'}>
            <Image
              src={"/etran-logo.png"}
              alt="etran logo"
              width={30}
              height={30}
              style={{ flexShrink: "0" }}
            />
            <h1 className="capitalize font-semibold text-2xl text-(--background-2)">
              etran
            </h1>
          </Link>
        <Button/>
      </nav>
    </header>
  );
}

export default Navbar;
