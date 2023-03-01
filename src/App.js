import logo from './logo.svg';
import './App.css';
import Ejemplo from './components/Ejemplo';
import MainSection from './pages/main-section';
import Footer from './pages/footer';
import HeaderBar from './pages/HeaderBar';
import 'bootstrap-icons/font/bootstrap-icons.css'

function App() {
  return (
    <div className="App">
      <HeaderBar></HeaderBar>
      <MainSection></MainSection>
      <Footer></Footer>
    </div>
  );
}

export default App;

