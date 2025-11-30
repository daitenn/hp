import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Works from "./components/Works";
import Service from "./components/Service";
import Blog from "./components/Blog";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main className="pt-20">
        <Hero />
        <About />
        <Works />
        <Service />
        <Blog />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
