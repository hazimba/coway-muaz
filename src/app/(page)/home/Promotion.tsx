"use server";
import { PromotionCarousel } from "@/components/PromotionCarousel";
import SplitSection from "@/components/SplitSection";

const Promotion = () => {
  return (
    <section id="promotion" className="scroll-mt-22 h-3/4">
      <SplitSection title="Promotion" />
      <div className="flex justify-center items-center h-3/4 w-screen">
        <div className="max-w-6xl w-full flex justify-center py-20 items-center flex-col gap-10">
          <div>MERDEKA PROMOTION!</div>
          <div className="flex justify-center w-full">
            <PromotionCarousel />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Promotion;
