import Features from "./components/Features";
import Hero from "./components/Hero";
import BrowserCards from "./components/BrowserCards";
import FAQ from "./components/FAQ";
import Header from "./components/Header";
import Newsletter from "./components/newsletter";
import Footer from "./components/Footer";
function App() {
  return (
    <>
      <Header />
      <Hero />
      <Features />
      <BrowserCards />
      <FAQ />
      <Newsletter/>
      <Footer/>
    </>
  );
}

export default App;
