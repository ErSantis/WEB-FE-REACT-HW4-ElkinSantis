import Header from './components/Header';
import Footer from './components/Footer';
import Introduction from './components/Introduction';
import Diagnosis from './components/Diagnosis';
import Identity from './components/Identity';
import Objectives from './components/Objectives';

function App() {
  return (
    <>
      <Header />
      <main>
        <Introduction />
        <Diagnosis />
        <Identity />
        <Objectives/>
      </main>
      <Footer />
    </>
  );
}

export default App;
