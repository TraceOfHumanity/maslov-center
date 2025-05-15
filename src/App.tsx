import { Banner } from "./components/banner";
import { Benefits } from "./components/benefits";
import { Footer } from "./components/footer";
import { Gallery } from "./components/gallery";
import { Header } from "./components/header";
import { Services } from "./components/services";

function App() {
  return (
    <div className="container mx-auto">
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
