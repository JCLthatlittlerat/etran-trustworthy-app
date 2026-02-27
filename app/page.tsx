import Card from "@/components/Card";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-(--background-3)">
      <section className="sidebar-section bg-(--background-1)">
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
      <section className="main-content-section">main content</section>
    </main>
  );
}
