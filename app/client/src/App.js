import endpoints from './endpoints';
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
import UserGuard from './components/UserGuard';
import GuestGuard from './components/GuestGuard';
import { Routes, Route } from 'react-router-dom';
import {UserContext} from './contexts/UserContext';
import { useEffect, useMemo, useState } from 'react';
import EditReviewForm from './components/EditReviewForm';
import CreateReviewForm from './components/CreateReviewForm';
import FragranceDetails from './components/FragranceDetails';
import EditFragranceForm from './components/EditFragranceForm';
import CreateFragranceForm from './components/CreateFragranceForm';

function App() {

    const [user, setUser] = useState(null);
    const userValue = useMemo(() => ({user, setUser}), [user, setUser]);

    useEffect(()=>{
        const isLogged = JSON.parse(localStorage.getItem('user'));

        if(isLogged) {
            fetch(`${endpoints.getUserUrl}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ 
                    userId : isLogged._id
                })
            })
            .then(res => res.json())
            .then(data => {
                setUser(data);
            })
            .catch(() => {
                localStorage.clear();
                setUser(null);
            });
        }
    },[])

    return (
        <div className={styles['main-backround']}>

            <UserContext.Provider value={userValue}>
            <Navbar />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='*' element={<ErrorPage />} />
                <Route path='/about' element={<About />} />
                <Route path='/catalog' element={<Catalog />} />
                <Route path='/fragrance/:fragranceId/details' element={<FragranceDetails />} />

                <Route element={<GuestGuard />}>
                    <Route path='/auth/login' element={<Login />} />
                    <Route path='/auth/register' element={<Register />} />
                </Route>
              

                <Route element={<UserGuard />}>
                    <Route path='/auth/profile' element={<Profile />} />
                    <Route path='/fragrance/create' element={<CreateFragranceForm />} />
                    <Route path='/fragrance/:fragranceId/edit' element={<EditFragranceForm />} />
                    <Route path='/fragrance/:fragranceId/review/edit' element={<EditReviewForm />} />
                    <Route path='/fragrance/:fragranceId/review/create' element={<CreateReviewForm />} />
                </Route>

            </Routes>
            <Footer />
            </UserContext.Provider>

        </div>
    );
}

export default App;
