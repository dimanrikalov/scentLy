import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Recents from './components/Recents';
import Footer from './components/Footer';
import Register from './components/Register';
import Login from './components/Login';
import Catalog from './components/Catalog';
import Profile from './components/Profile';
import CreateFragranceForm from './components/CreateFragranceForm';
import EditFragranceForm from './components/EditFragranceForm';
import CreateReviewForm from './components/CreateReviewForm';
import EditReviewForm from './components/EditReviewForm';

function App() {

  return (
    <div>
        
        <Navbar />

        <Home />
        
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
