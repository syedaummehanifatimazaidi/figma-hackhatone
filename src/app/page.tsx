import Header from "./components/Header";
import Topbar from "./components/Topbar";
import Hero from "./components/Hero";
import FeaturedProducts from "./components/Products";
import CategorySection from "./components/CategorySection";
import StyleSection from "./components/StyleSection";
import ProductSection from "./components/ProductSection";
import Footer from "./components/Footer";
import LogoSection from "./components/LogoSection";
import Layout from "./components/Layout";

export default function Home() {
  return (
    <div>
      <Topbar />
      <Header />
      <Layout />
      <Hero />
      <LogoSection />
      <FeaturedProducts />
      <CategorySection />
      <StyleSection />
      <ProductSection />
      <Footer />
    </div>
  );
}