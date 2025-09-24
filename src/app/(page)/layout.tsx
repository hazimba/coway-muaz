import Header from "@/components/Header";

const PageLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="mx-auto w-full">
      <Header />
      <div className="py-2">{children}</div>
    </div>
  );
};
export default PageLayout;
