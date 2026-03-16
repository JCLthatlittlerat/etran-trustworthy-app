import React from "react";
import Image from "next/image";
import Button from "./button";

function Navbar() {
  return (
    <nav className="flex justify-between py-4">
      <div className="flex gap-4 items-center">
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
      </div>
<Button/>
    </nav>
  );
}

export default Navbar;
