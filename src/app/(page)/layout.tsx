import Footer from "@/components/Footer";
import Header from "@/components/Header";

const PageLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="mx-auto w-full">
      <Header />
      <div className="pt-2">{children}</div>
      <Footer />
    </div>
  );
};
export default PageLayout;
