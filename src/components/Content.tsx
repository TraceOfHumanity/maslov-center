import { Footer } from "../Footer";
import { About } from "./About";
import { Benefits } from "./Benefits";
import { Contact } from "./Contact";
import { Experience } from "./Experience";
import { Header } from "./Header";
import { Hero } from "./Hero";
import { Service } from "./Service";
// import { Ticker } from "./Ticker";

export const Content = () => {
  return (
    <div className="w-full min-h-dvh max-h-dvh relative mx-auto px-2 sm:px-4 md:px-6 lg:px-8 py-4 sm:py-6 md:py-8 lg:py-12 flex flex-col max-w-7xl">
      <Header />
      <Hero />
      <div className="flex flex-col gap-8 sm:gap-12 md:gap-16 lg:gap-20 mt-8 sm:mt-12 md:mt-16 lg:mt-20">
        <About />
        <Benefits />
        <Experience />
        <Service />
        {/* <Ticker /> */}
        <Contact />
        <Footer />
      </div>
    </div>
  );
};
