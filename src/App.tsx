import { Banner } from "./components/banner/index.tsx";
import { Benefits } from "./components/benefits";
import { Footer } from "./components/footer";
import { Gallery } from "./components/gallery";
import { Header } from "./components/header";
import { Services } from "./components/services";

function App() {
  return (
    <div className="container mx-auto px-4 overflow-y-auto max-h-screen gap-[1vw] flex flex-col">
      <Header />
      <Banner />
      <Benefits />
      <Services />
      <Gallery />
      <Footer />
    </div>
  );
}

export default App;
