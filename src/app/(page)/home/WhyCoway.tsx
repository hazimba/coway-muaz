import SplitSection from "@/components/SplitSection";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";

const WhyCoway = () => {
  const overflowScroll = [
    {
      link: "/sr-1.jpg",
      title: "Trusted Brand",
      imagePostion: "left",
      ul: [
        "Coway is a global leader in home wellness solutions, trusted by millions of households worldwide.",
        "Over 30 years of experience in water and air care technology.",
      ],
    },
    {
      link: "/sr-2.jpg",
      title: "Premium Products, Designed for Health",
      imagePostion: "right",
      ul: [
        "Water Purifiers – clean, safe, and great-tasting drinking water.",
        "Air Purifiers – breathe easier with advanced filtration.",
        "Mattresses & Bidets – designed for comfort and hygiene.",
      ],
    },
    {
      link: "/sr-3.jpg",
      title: "Hassle-Free Service",
      imagePostion: "left",
      ul: [
        "Regular servicing by Coway’s Heart Service team.",
        "Free filter changes & maintenance included in subscription plans.",
        "24/7 customer support for peace of mind.",
      ],
    },
    {
      link: "/sr-4.jpg",
      title: "Affordable & Flexible Plans",
      imagePostion: "right",
      ul: [
        "Easy monthly rental or purchase options.",
        "No large upfront payment – just a small monthly fee.",
        "Plans for every household size and lifestyle.",
      ],
    },
    {
      link: "/sr-5.jpg",
      title: "Eco-Friendly & Innovative",
      imagePostion: "left",
      ul: [
        "Energy-efficient products designed to reduce waste.",
        "Smart monitoring for water quality & air freshness.",
        "Committed to sustainability and a healthier planet.",
      ],
    },
  ];

  return (
    <section id="why-coway" className="scroll-mt-22">
      <SplitSection title="Perks & Benefits" />
      <div className="flex justify-center w-screen lg:py-24 py-16 px-4 ">
        <div className="max-w-5xl w-full flex justify-center items-center flex-col gap-10">
          <div className="text-center lg:text-lg text-sm text-justify lg:text-center">
            Established in 1989 and now serving customers worldwide, Coway is
            recognized for its trusted quality and exceptional service. Since
            entering Malaysia in 2006, Coway has grown to become a leading home
            wellness brand, trusted by thousands of families nationwide for
            cleaner water, fresher air, and healthier living.
          </div>
          <div className="flex justify-center border-1 w-full rounded-lg">
            {/* <PromotionCarousel /> */}
            <div className="w-full h-96 overflow-y-scroll flex flex-col gap-4 lg:gap-10">
              {overflowScroll.map((item, index) => (
                <div
                  key={index}
                  className={`flex justify-center ${
                    item.imagePostion === "left"
                      ? "md:justify-start"
                      : "md:justify-end"
                  } gap-10 w-full`}
                >
                  {item.imagePostion === "left" && (
                    <Image
                      className="w-96 object-cover h-60 hidden md:block"
                      src={item.link}
                      alt="Service 1"
                      width={200}
                      height={200}
                    />
                  )}
                  <div className="w-full h-full flex flex-col justify-center items-start gap-4 p-8">
                    <div>
                      <Badge>{item.title}</Badge>
                    </div>
                    <ul className="list-disc list-inside text-gray-500">
                      {item.ul.map((point, idx) => (
                        <li key={idx}>{point}</li>
                      ))}
                    </ul>
                  </div>
                  {item.imagePostion === "right" && (
                    <Image
                      className="w-96 object-cover h-60 hidden md:block"
                      src={item.link}
                      alt="Service 1"
                      width={200}
                      height={200}
                    />
                  )}
                </div>
              ))}
              {/* <div className="text-gray-500 flex justify-center md:justify-start w-full">
                <Image
                  className="w-auto h-60 hidden md:block"
                  src="/sr-2.jpg"
                  alt="Service 1"
                  width={200}
                  height={2000}
                />
                <div className="w-full h-full flex flex-col justify-center items-start gap-4 p-8">
                  <div>
                    <b>Trusted Brand</b>
                  </div>
                  <ul className="list-disc list-inside">
                    <li>
                      Coway is a global leader in home wellness solutions,
                      trusted by millions of households worldwide.
                    </li>
                    <li>
                      Over 30 years of experience in water and air care
                      technology.
                    </li>
                  </ul>
                </div>
              </div>
              <div className="text-gray-500 flex justify-center md:justify-end gap-10 w-full">
                <div>context</div>
                <Image
                  className="w-auto hidden md:block"
                  src="/sr-1.jpg"
                  alt="Service 1"
                  width={200}
                  height={200}
                />
              </div>
              <div className="text-gray-500 flex justify-center md:justify-start w-full">
                <Image
                  className="w-auto hidden md:block"
                  src="/sr-3.jpg"
                  alt="Service 1"
                  width={200}
                  height={200}
                />
                <div>context</div>
              </div>
              <div className="text-gray-500 flex justify-center md:justify-end gap-10 w-full">
                <div>context</div>
                <Image
                  className="w-auto hidden md:block"
                  src="/sr-4.jpg"
                  alt="Service 1"
                  width={200}
                  height={200}
                />
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyCoway;
