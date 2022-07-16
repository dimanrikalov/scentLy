import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Recents from './components/Recents';
import Footer from './components/Footer';
import Register from './components/Register';
import Login from './components/Login';
import Catalog from './components/Catalog';
import Profile from './components/Profile';
import CreateForm from './components/CreateForm';
import EditForm from './components/EditForm';

function App() {

  return (
    <div>
        
        <Navbar />

        <Home />

        <EditForm/>

        <CreateForm />

        <Profile/>

        <Catalog title="Catalog"/>

        <Login />

        <Register />
      
        <Recents />

        <About />
        
        <Footer />

    </div>
  );
}

export default App;
