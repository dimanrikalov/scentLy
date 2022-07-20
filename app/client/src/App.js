import Home from './components/Home';
import styles from './App.module.css';
import About from './components/About';
import Login from './components/Login';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Catalog from './components/Catalog';
import Profile from './components/Profile';
import Register from './components/Register';
import ErrorPage from './components/ErrorPage';
import { Routes, Route } from 'react-router-dom';
import CreateReviewForm from './components/CreateReviewForm';
import FragranceDetails from './components/FragranceDetails';
import EditFragranceForm from './components/EditFragranceForm';
import CreateFragranceForm from './components/CreateFragranceForm';


function App() {
    return (
        <div className={styles['main-backround']}>
            <Navbar />

            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/auth/register' element={<Register/>}/>
                <Route path='/auth/login' element={<Login/>}/>
                <Route path='/auth/profile' element={<Profile/>}/>
                <Route path='/catalog' element={<Catalog/>}/>
                <Route path='/fragrance/create' element={<CreateFragranceForm/>}/>
                <Route path='/fragrance/:fragranceId/details' element={<FragranceDetails/>}/>
                <Route path='/fragrance/:fragranceId/edit' element={<EditFragranceForm/>}/>
                <Route path='/fragrance/:fragranceId/review/create' element={<CreateReviewForm/>}/>
                <Route path='/about' element={<About/>}/>
                <Route path='*' element={<ErrorPage/>}/>
            </Routes>

            <Footer />
{/* 
            <EditReviewForm />
            
*/}
        </div>
    );
}

export default App;
