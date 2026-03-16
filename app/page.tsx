import Card from "@/components/Card";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import Socials from "@/components/Socials";
import { FaCheck } from "react-icons/fa6";
import { GiWallet } from "react-icons/gi";
import { LuChartNoAxesCombined } from "react-icons/lu";
import { data } from "@/store/data";
import Footer from "@/components/Footer";
import Button from '@/components/button';

export default function Home() {
  return (
    <main className=" grid grid-cols-1 md:grid-cols-5 min-h-screen bg-(--background-3) max-w-350 mx-auto">
      <section className="md:sticky md:top-0 md:h-screen col-span-2 sidebar-section bg-(--background-1) px-10   ">
        <Navbar />
        <h1 className="capitalize text-5xl text-(--background-3)">
          money tranfers
        </h1>
        <h1 className="capitalize text-5xl text-(--background-3)">
          made <span className="text-(--accent-1)">simple</span>
        </h1>
        <p className="text-(--background-3) text-2xl py-4">
          No personal credit checks or founder guarantee.
        </p>
        <div className="card-container my-4">
          <h1 className="capitalize text-xl text-(--accent-1)">
            our offerings
          </h1>
          <Card />
        </div>
        <Socials />
      </section>
      <section className="col-span-3 main-content-section">
        <div className="hero-container h-140 relative capitalize text-xl text-(--background-2) ">
          <Image
            src={"/nel-ranoko-iaHFmpXVltw-unsplash.jpg"}
            alt="hero image"
            fill
            className="rounded-4xl mx-auto p-4"
            style={{
              objectFit: "cover",
              objectPosition: "center",
            }}
          />
          <div className="popup-1 bg-(--accent-2)/60 rounded-full absolute top-[15%] right-[10%] px-4 py-2 flex items-center gap-2 ">
            <span className=" bg-(--accent-1) p-4 rounded-full text-(--accent-2) text-2xl">
              <FaCheck />
            </span>
            <h1 className="pr-4">money sent!</h1>
          </div>
          <div className="popup-2 bg-(--accent-2)/60 rounded-full absolute top-[30%] left-[7%] px-4 py-2 flex items-center gap-2 ">
            <span className=" bg-(--accent-1) p-4 rounded-full text-(--accent-2) text-2xl">
              <LuChartNoAxesCombined />
            </span>
            <h1 className="pr-4">Interest earned!</h1>
          </div>
          <div className="popup-3 bg-(--accent-2)/60 rounded-full absolute top-[75%] left-[30%] px-4 py-2 flex items-center gap-2">
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
          <div className="flex justify-evenly px-10 py-10 gap-4 flex-wrap">
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
        <section className="showcase">
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
            <div className="benefit-cards mx-auto grid grid-cols-1 sm:grid-cols-2 gap-4 items-center px-20">
              {data.card2.map((item) => {
                return (
                  <article
                    key={item.id}
                    className="flex flex-col justify-center items-center gap-4 rounded-xl min-h-55 bg-(--accent-1) hover:scale-102 "
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

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 p-10 items-stretch">
                {/* Card 1 */}
                <div className="card shadow-sm hover:shadow-md rounded-2xl overflow-hidden flex flex-col">
                  <div className="relative h-75 w-full">
                    <Image
                      src="/markus-winkler-ahjzVINkuCs-unsplash.jpg"
                      alt="card-image"
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover"
                    />
                  </div>

                  <div className="p-4">
                    <h4 className="capitalize text-xl font-semibold">
                      Scale Your Team, Not Your Card Expenses
                    </h4>
                    <p>
                      Issue virtual and physical cards at no additional cost to
                      support teams of any size.
                    </p>
                  </div>
                </div>

                {/* Card 2 */}
                <div className="card shadow-sm hover:shadow-md rounded-2xl overflow-hidden flex flex-col">
                  <div className="relative h-75 w-full">
                    <Image
                      src="/rebekah-roy-anKRaWvMbRU-unsplash.jpg"
                      alt="tax-invoice"
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover"
                    />
                    <div className="overlay absolute bg-black opacity-40 z-50 w-full h-75 border-t-"></div>
                  </div>

                  <div className="p-4">
                    <h4 className="capitalize text-xl font-semibold">
                      Effortless Paper Tracking, Mobile Convenience
                    </h4>
                    <p>
                      Get precise control—at scale—with the ability to lock any card
                      and restrict any type of spend.
                    </p>
                  </div>
                </div>

              </div>
          </section>

          <div className="black-man-standing">
          <Image
                    src={"/standing-man-holding-phone.png"}
                    alt="standing-man-holding-phone"
                    width={720}
                    height={350}
                    className="object-cover object-top max-h-[350px] mx-auto  my-6 rounded-2xl"
                    style={{objectPosition: '', }}
            />
          </div>     
        </section>
        <section className="features-section">
              <h1 className="text-5xl text-center pt-10 capitalize">
            First class software
          </h1>
          <p className=" text-lg text-center max-w-[55ch] mx-auto py-4">
              Get real-time insights, seamless transactions, and advanced tools to manage your wealth effortlessly.
                </p>
                <div className="cards-container grid grid-cols-1 sm:grid-cols-4 mx-15 gap-8 text-center">
                  <div className="w-full h-45 flex flex-col justify-around">
                    <Image src={'/wallet.png'} alt="secure storage" width={300} height={300}/>
                    <p className="capitalize text-md">safe storage</p>
                  </div>
                  <div className="w-full h-45 flex flex-col justify-around">
                    <Image src={'/secure.png'} alt="secure" width={300} height={300}/>
                    <p className="capitalize text-md">secure</p>

                  </div>
                  <div className="w-full h-45 flex flex-col justify-around">
                    <Image src={'/finance.png'} alt="earn interest" width={300} height={300}/>
                    <p className="capitalize text-md">earn interest</p>

                  </div>
                  <div className="w-full h-45 flex flex-col justify-around">
                    <Image src={'/people.png'} alt="family plans" width={300} height={300}/>
                    <p className="capitalize text-md">family plans</p>

                  </div>
                  {/* download the icons and put the in here */}
                </div>
        </section>
        <section className="get-started">
          <div className="container w-fit mx-auto relative p-4">
            <Image src={'/daria-nepriakhina-_XR5rkprHQU-unsplash.jpg'} alt="get started" width={720} height={350} className="mx-auto rounded-2xl"/>
            <div className="get-started-details absolute left-[10%] bottom-[10%]">
              <p className="max-w-[20ch] text-3xl text-(--background-2) my-4">Download Etran and manage everything from your phone.</p>
              <Button/>
            </div>
          </div>
        </section>
        <Footer/>
      </section>
    </main>
  );
}
