import { useTranslation } from 'react-i18next';

import { Footer } from 'components/Footer';
import { Header } from 'components/Header';
import { Main } from 'components/Main';

function App() {
  // useEffect(() => {
  //   const lng = navigator.language;
  //   i18n.changeLanguage(lng);
  // }, []);

  // const lng = navigator.language;
  return (
    <div className="container flex min-h-screen flex-col gap-5">
      {/* <p>browser language: {lng}</p> */}
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
