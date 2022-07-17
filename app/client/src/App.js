import Home from './components/Home';
import styles from './App.module.css';
import About from './components/About';
import Login from './components/Login';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Recents from './components/Recents';
import Catalog from './components/Catalog';
import Profile from './components/Profile';
import Register from './components/Register';
import Fragrance from './components/Fragrance';
import ErrorPage from './components/ErrorPage';
import { Routes, Route } from 'react-router-dom';
import EditReviewForm from './components/EditReviewForm';
import CreateReviewForm from './components/CreateReviewForm';
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
                <Route path='/fragrance/:fragranceId/edit' element={<EditFragranceForm/>}/>
                <Route path='/fragrance/:fragranceId/review' element={<CreateReviewForm/>}/>
                <Route path='/about' element={<About/>}/>
                <Route path='*' element={<ErrorPage/>}/>
                <Route path='fragrance/:id' element={<Fragrance/>}></Route>
            </Routes>

            <Footer />
{/* 
            <Fragrance />

            <EditReviewForm />

             <CreateReviewForm />

            <EditFragranceForm />
            
*/}
        </div>
    );
}

export default App;
