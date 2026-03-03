import Card from "@/components/Card";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import Socials from "@/components/Socials";
import { FaCheck } from "react-icons/fa6";
import { GiWallet } from "react-icons/gi";
import { LuChartNoAxesCombined } from "react-icons/lu";
import { data } from "@/store/data";

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
        <Socials />
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
          <div className="popup-1 bg-(--accent-2)/60 rounded-full absolute top-[15%] right-60 px-4 py-2 flex items-center gap-2 ">
            <span className=" bg-(--accent-1) p-4 rounded-full text-(--accent-2) text-2xl">
              <FaCheck />
            </span>
            <h1 className="pr-4">money sent!</h1>
          </div>
          <div className="popup-2 bg-(--accent-2)/60 rounded-full absolute top-[30%] left-40 px-4 py-2 flex items-center gap-2 ">
            <span className=" bg-(--accent-1) p-4 rounded-full text-(--accent-2) text-2xl">
              <LuChartNoAxesCombined />
            </span>
            <h1 className="pr-4">Interest earned!</h1>
          </div>
          <div className="popup-3 bg-(--accent-2)/60 rounded-full absolute top-[75%] left-100 px-4 py-2 flex items-center gap-2">
            <span className=" bg-(--accent-1) p-4 rounded-full text-(--accent-2) text-2xl">
              <GiWallet />
            </span>
            <h1 className="pr-4">payment received!</h1>
          </div>
        </div>
        <div className="companies ">
          <h1 className="text-3xl max-w-[25ch] text-center mx-auto py-10">
            We escalate transfer efficiency and productivity
          </h1>
          <div className="flex justify-evenly px-10 py-10">
            <Image
              src="/blooming-logo.svg"
              alt="Company logos"
              width={150}
              height={50}
            />
            <Image
              src="/build-right-logo.svg"
              alt="Company logos"
              width={150}
              height={50}
            />
            <Image
              src="/flow-boot-logo.svg"
              alt="Company logos"
              width={120}
              height={50}
            />
            <Image
              src="/expor-logo.svg"
              alt="Company logos"
              width={120}
              height={50}
            />
            <Image
              src="/redo-logo.svg"
              alt="Company logos"
              width={100}
              height={50}
            />
          </div>
        </div>
        <section className="showcase border">
          <div className="benefits">
            <div className="benefits-desc">
              <h1 className="text-5xl text-center pt-10 capitalize">
                get more done in a week
              </h1>
              <p className=" text-lg text-center max-w-[55ch] mx-auto py-4">
                Maximize your productivity with smarter tools designed to
                streamline your workflow to automate tasks, stay organized
              </p>
            </div>
            <div className="benefit-cards mx-auto border grid grid-cols-1 sm:grid-cols-2 gap-4 items-center px-20">
              {data.card2.map((item) => {
                return (
                  <article
                    key={item.id}
                    className="border flex flex-col justify-center items-center gap-4 rounded-xl min-h-55 bg-(--accent-1)"
                  >
                    {item.icon.startsWith("/") ? (
                      <Image
                        src={item.icon}
                        alt="benefits for you"
                        width={150}
                        height={150}
                        className=""
                      />
                    ) : (
                      <h1 className="text-8xl text-(--heading)">{item.icon}</h1>
                    )}
                    <p className="capitalize text-lg">{item.title}</p>
                  </article>
                );
              })}
            </div>
          </div>
          <section className="proofs p-10 max-w-300 mx-auto">
            <h1 className="text-5xl text-center pt-10 capitalize">
              the most reliable app
            </h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 p-10 ">
              <div className="card  ">
                <div className="min-w-87.5 min-h-70 relative border">
                  <Image
                    src={"/markus-winkler-ahjzVINkuCs-unsplash.jpg"}
                    alt="card-image"
                    fill
                    className="  rounded-2xl pb-4 shadow-2xl object-cover object-right min-h-95"
                  />
                </div>
                <div className="relative">
                  <h4 className="capitalize">
                    Scale Your Team, Not Your Card Expenses
                  </h4>
                  <p>
                    Issue virtual and physical cards at no additional cost to
                    support teams of any size.
                  </p>
                </div>
              </div>
              <div className="card border">
                <Image
                  src={"/rebekah-roy-anKRaWvMbRU-unsplash.jpg"}
                  alt="tax-invoice"
                  width={600}
                  height={260}
                  className="object-cover object-right border rounded-2xl pb-4"
                />
                <h4 className="capitalize">
                  Effortless Paper Tracking, Mobile Convenience
                </h4>
                <p>
                  Get precise control—at scale—with the ability to lock any card
                  and restrict any type of spend.
                </p>
              </div>
            </div>
          </section>
          <Image
            src={"/standing-man-holding-phone.png"}
            alt="standing-man-holding-phone"
            width={1050}
            height={350}
            className="object-cover object-top "
          />
        </section>
      </section>
    </main>
  );
}
