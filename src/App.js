import { Footer } from 'components/Footer';
import { Header } from 'components/Header';
import { Main } from 'components/Main';

function App() {
  return (
    <div className="container flex min-h-screen flex-col gap-5 overflow-hidden">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
