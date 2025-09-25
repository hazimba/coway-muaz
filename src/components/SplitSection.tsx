import { Separator } from "@/components/ui/separator";

interface SplitSectionProps {
  title: string;
}

const SplitSection = ({ title }: SplitSectionProps) => {
  return (
    <section id={`${title}`} className="relative w-screen bg-white z-10">
      <div className="absolute bottom-0 left-0 w-full bg-[#04A4E4]" />
      <div className="relative flex justify-center">
        <Separator className="mt-0 max-w-6xl" />
        <h1 className="absolute -bottom-8 text-4xl font-bold bg-white px-6 py-2 rounded shadow-sm text-[#04A4E4] rounded-lg">
          {title}
        </h1>
      </div>
    </section>
  );
};

export default SplitSection;
