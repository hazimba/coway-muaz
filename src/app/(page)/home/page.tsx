import SplitSection from "@/components/SplitSection";
import Product from "./Product";
import Profile from "./Profile";
import Promotion from "./Promotion";
import Contact from "./Contact";

const Home = () => {
  return (
    <>
      <Profile />
      <Product />
      <Promotion />
      <Contact />
    </>
  );
};
export default Home;
