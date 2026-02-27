import Card from "@/components/Card";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import Footer from "@/components/Footer";
import { FaCheck } from "react-icons/fa6";
import { GiWallet } from "react-icons/gi";
import { LuChartNoAxesCombined } from "react-icons/lu";

export default function Home() {
  return (
    <main className="min-h-screen bg-(--background-3)">
      <section className="sidebar-section bg-(--background-1) px-10">
        <Navbar />
        <h1 className="capitalize text-8xl text-(--background-3)">
          money tranfers
        </h1>
        <h1 className="capitalize text-8xl text-(--background-3)">
          made <span className="text-(--accent-1)">simple</span>
        </h1>
        <p className="text-(--background-3) text-3xl py-4">
          No personal credit checks or founder guarantee.
        </p>
        <div className="card-container my-6">
          <h1 className="capitalize text-2xl text-(--accent-1)">
            our offerings
          </h1>
          <Card />
        </div>
        <Footer />
      </section>
      <section className="main-content-section">
        <div className="hero-container relative capitalize text-xl text-(--background-2) ">
          <Image
            src={"/nel-ranoko-iaHFmpXVltw-unsplash.jpg"}
            alt="hero image"
            width={1200}
            height={700}
            className="rounded-3xl mx-auto my-8"
            style={{
              objectFit: "cover",
              objectPosition: "center",
            }}
          />
          <div className="popup-1 bg-(--accent-2) rounded-full absolute top-[15%] right-80 px-4 py-2 flex items-center gap-2 opacity-70">
            <span className=" bg-(--accent-1) p-4 rounded-full">
              <FaCheck />
            </span>
            <h1 className="opacity-100 pr-4">money sent!</h1>
          </div>
          <div className="popup-2 bg-(--accent-2) rounded-full absolute top-[30%] left-60 px-4 py-2 flex items-center gap-2 opacity-70">
            <span className=" bg-(--accent-1) p-4 rounded-full">
              <LuChartNoAxesCombined />
            </span>
            <h1 className="opacity-100 pr-4">Interest earned!</h1>
          </div>
          <div className="popup-3 bg-(--accent-2) rounded-full absolute top-[75%] left-100 px-4 py-2 flex items-center gap-2 opacity-70">
            <span className=" bg-(--accent-1) p-4 rounded-full">
              <GiWallet />
            </span>
            <h1 className="opacity-100 pr-4">payment received!</h1>
          </div>
        </div>
      </section>
    </main>
  );
}
