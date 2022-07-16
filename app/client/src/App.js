import Home from './components/Home';
import About from './components/About';
import Login from './components/Login';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Recents from './components/Recents';
import Catalog from './components/Catalog';
import Profile from './components/Profile';
import Register from './components/Register';
import Fragrance from './components/Fragrance';
import EditReviewForm from './components/EditReviewForm';
import CreateReviewForm from './components/CreateReviewForm';
import EditFragranceForm from './components/EditFragranceForm';
import CreateFragranceForm from './components/CreateFragranceForm';

function App() {

  return (
    <div>
        
        <Navbar />

        <Home />
        
        <Fragrance />

        <EditReviewForm />

        <CreateReviewForm />

        <EditFragranceForm />

        <CreateFragranceForm />

        <Profile />

        <Catalog />

        <Login />

        <Register />
      
        <Recents />

        <About />
        
        <Footer />

    </div>
  );
}

export default App;
