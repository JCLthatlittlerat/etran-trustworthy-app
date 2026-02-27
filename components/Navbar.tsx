import React from "react";
import Image from "next/image";

function Navbar() {
  return (
    <nav className="flex justify-between py-8">
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
      <button className="capitalize p-4 text-(--forground) bg-(--accent-1) rounded-lg">
        get started
      </button>
    </nav>
  );
}

export default Navbar;
