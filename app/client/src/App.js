import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Recents from './components/Recents';
import Footer from './components/Footer';
import Register from './components/Register';
import Login from './components/Login';
import CatalogCard from './components/CatalogCard';
function App() {

  return (
    <div>
        
        <Navbar />

        <Home />

        <CatalogCard />

        <Login />

        <Register />
      
        <Recents />

        <About />
        
        <Footer />

    </div>
  );
}

export default App;
