import { ProductSelect } from "@/components/ProductSelector";
import SplitSection from "@/components/SplitSection";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const Product = () => {
  const products = [
    {
      key: "4",
      name: "WATER FILTER",
      img: "/product-wf-2.jpg",
      link: "https://www.coway-malaysia.com.my/water-purifier",
      ht: false,
      new: false,
      list: [
        { label: "VILLAEM3", value: "villaem3" },
        { label: "NEON", value: "neon" },
      ],
    },
    {
      key: "1",
      name: "AIR PURIFIER",
      img: "/product-air-purifier.png",
      link: "https://www.coway-malaysia.com.my/air-purifier",
      ht: false,
      new: false,
      list: [
        { label: "STROM2", value: "storm2" },
        { label: "NOBLE", value: "noble" },
      ],
    },
    {
      key: "2",
      name: "AIR CONDITIONER",
      img: "/product-air-cond.webp",
      link: "https://www.coway-malaysia.com.my/airconditioner",
      ht: true,
      new: false,
      list: [{ label: "1.0 & 1.5 HP", value: "airconditioner" }],
    },
    {
      key: "3",
      name: "MASSAGE CHAIR",
      img: "/product-mc-2.png",
      link: "https://www.coway-malaysia.com.my/massagechair",
      ht: true,
      new: true,
      list: [{ label: "MC-ST01B", value: "massagechair" }],
    },
    {
      key: "5",
      name: "MATTRESS",
      img: "/product-mattress.jpg",
      link: "https://www.coway-malaysia.com.my/mattress",
      ht: true,
      new: false,
      list: [
        { label: "PRIME LITE", value: "mattress-primelite" },
        { label: "PRIME SERIES", value: "mattress-prime-ii" },
      ],
    },
    {
      key: "6",
      name: "WASHER DRYER",
      img: "/product-wd.jpg",
      link: "https://www.coway-malaysia.com.my/washerdryer",
      ht: false,
      new: true,
      list: [{ label: "CWD10-ST01", value: "washerdryer" }],
    },
  ];
  return (
    <section
      id="product"
      className="relative lg:h-[1150px] bg-[#04A4E4] scroll-mt-22"
    >
      <div className="absolute bottom-0 left-0 w-full bg-white" />
      <SplitSection title="Product" />
      <div className="max-w-3xl mx-auto pt-16 px-4 lg:px-0 text-white text-center">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat
        quidem, reprehenderit quia consequatur sunt doloremque esse possimus!
        Tempore similique quaerat libero odit doloremque modi fugit cumque
        beatae ad numquam, omnis facilis ducimus adipisci reprehenderit culpa
        deserunt vero explicabo amet molestias. Cumque perspiciatis fugiat,
        molestias eum quam eos. Sunt, enim eligendi.
      </div>
      <div className="flex max-w-6xl px-4 mx-auto py-12 grid grid-cols-1 lg:grid-cols-3 gap-4">
        {products.map((product) => (
          <div
            key={product.key}
            className="flex flex-col items-center border-2 rounded-lg p-4 gap-4 bg-[#FFFBFF]"
          >
            <span className="font-bold text-lg text-center">
              {product.name}
            </span>
            <div className="relative w-72 h-48 lg:w-70 lg:h-70 sm:w-60 sm:h-40 border-1 border-[#04A4E4]/20 rounded-lg">
              {product.ht && (
                <div className="absolute -top-6 -right-3 z-10 w-12 h-12">
                  <Image
                    sizes="smaller"
                    src="/hotdeal.png"
                    alt="hotdeal badge"
                    fill
                    className="object-contain"
                  />
                </div>
              )}

              {product.new ? (
                <div className="absolute -bottom-3 -left-3 z-10 w-8 h-8 rounded-lg overflow-hidden">
                  <Image
                    sizes="smaller"
                    src="/sign.png"
                    alt="sign badge"
                    fill
                    className="object-cover"
                  />
                </div>
              ) : null}
              <Image
                sizes="medium"
                src={product.img}
                alt={product.name}
                fill
                className="rounded-lg object-cover"
              />
            </div>

            <div className="flex gap-2 w-full px-6 justify-center items-center">
              <a
                href={product.link}
                className=""
                target="_blank"
                rel="noreferrer"
              >
                <Button className="w-full" variant="secondary">
                  Learn More
                </Button>
              </a>
              <ProductSelect products={product.list} />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Product;
