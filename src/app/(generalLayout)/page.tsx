import About from "../components/sections/About";
import Blogs from "../components/sections/Blogs";
import CTA from "../components/sections/Cta";
import Footer from "../components/sections/Footer";
import Hero from "../components/sections/Hero";
import Projects from "../components/sections/Projects";
import { Skills } from "../components/sections/Skills";
const Page = () => {
  return (
    <main className="bg-black min-h-screen h-auto flex flex-col w-full">
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Blogs />
      <CTA />
      <Footer />
    </main>
  );
};

export default Page;
