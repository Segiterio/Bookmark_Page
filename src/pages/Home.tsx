import Features from "../components/Features";
import Hero from "../components/Hero";
// import BrowserCards from "../components/BrowserCards";
import Newsletter from "../components/Newsletter";
import Faqs from "../components/Faqs";

const Home = () => {
  return (
    <>
      <Hero />
      <Features />
      {/* <BrowserCards /> */}
      <Faqs />
      <Newsletter />
    </>
  );
};

export default Home;
