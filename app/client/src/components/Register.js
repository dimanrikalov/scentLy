import endpoints from '../endpoints';
import styles from './Forms.module.css';
import { useContext, useState } from 'react';
import mainStyles from './Register.module.css';
import { Link, useNavigate } from 'react-router-dom';
import { UserContext } from '../contexts/UserContext';


export default function Register() {
    const navigate = useNavigate();
    
    const {user, setUser} = useContext(UserContext);

    const [errorMessage, setErrorMessage] = useState('');
    const [emailHasError, setEmailHasError] = useState('');
    const [nameHasError, setNameHasError] = useState('');
    const [profileImageHasError, setProfileImageHasError] = useState('');
    const [passwordHasError, setPasswordHasError] = useState('');
    const [repeatPasswordHasError, setRepeatPasswordHasError] = useState('');
    const [cityHasError, setCityHasError] = useState('');
    const [countryHasError, setCountryHasError] = useState('');
    const [ageHasError, setAgeHasError] = useState('');
    const [genderHasError, setGenderHasError] = useState('');

    const [values, setValues] = useState({
        email: '',
        name: '',
        profileImage: '',
        password: '',
        repeatPassword: '',
        country: '',
        city: '',
        age: 0,
        gender: 'gender',
    });

    const changeHandler = (e) => {
        setValues((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }));
    };

    const emailValidator = () => {
        const regex = new RegExp('.+@[a-z]+.[a-z]+');

        if (regex.test(values.email)) {
            setEmailHasError(false);
        } else {
            setEmailHasError(true);
        }
    };

    const nameValidator = () => {
        const regex = new RegExp('[A-Z][a-z]+ [A-Z][a-z]+');

        if (regex.test(values.name)) {
            setNameHasError(false);
        } else {
            setNameHasError(true);
        }
    };

    const profileImageValidator = () => {
        if (
            values.profileImage.startsWith('http://') ||
            values.profileImage.startsWith('https://')
        ) {
            setProfileImageHasError(false);
        } else {
            setProfileImageHasError(true);
        }
    };

    const passwordValidator = () => {
        if (values.password.length >= 4) {
            setPasswordHasError(false);
        } else {
            setPasswordHasError(true);
        }
    };

    const repeatPasswordValidator = () => {
        if (values.password === values.repeatPassword) {
            setRepeatPasswordHasError(false);
        } else {
            setRepeatPasswordHasError(true);
        }
    };

    const cityValidator = () => {
        const regex = new RegExp('^[A-Z][a-z]+$');
        if (regex.test(values.city)) {
            setCityHasError(false);
        } else {
            setCityHasError(true);
        }
    };

    const countryValidator = () => {
        const regex = new RegExp('^[A-Z][a-z]+$')
        if (regex.test(values.country)) {
            setCountryHasError(false);
        } else {
            setCountryHasError(true);
        }
    };

    const ageValidator = () => {
        if (values.age >= 10 && values.age <= 100) {
            setAgeHasError(false);
        } else {
            setAgeHasError(true);
        }
    };

    const genderValidator = () => {
        if (values.gender === 'male' || values.gender === 'female') {
            setGenderHasError(false);
        } else {
            setGenderHasError(true);
        }
    };

    const submitHandler = async (e) => {
        e.preventDefault();
        const body = { ...values, age: Number(values.age) };
        const res = await fetch(endpoints.registerUrl, {
            method: 'POST',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(body),
        });
        
        const result = await res.json();
        if(result.message !== 'Successfully registered!') {
            setErrorMessage(result.message);
        } else {
            setUser(result.user);
            navigate('/');
        }
    };

    return (
        <div className={styles.scale}>
            <div className={mainStyles['register-div']}>
                <div className="lg:w-1/2 p-6 pt-0 pb-0 backgroundMargin">
                    <div className={styles.registerBackground}>
                        <div>
                            <img
                                src="/assets/imgs/sitename.png"
                                className="w-50 mx-auto"
                            />
                        </div>
                        <div className="mt-8 flex flex-col items-center">
                            <h1 className="text-2xl xl:text-3xl font-extrabold text-red-500">
                                Sign Up:
                            </h1>
                            {
                                errorMessage &&
                                <h3 className={styles['error-message']}>{errorMessage}</h3>
                            }
                            <div className="w-full flex-1 mt-8">
                                <div className="mx-auto max-w-xs">
                                    <form>
                                        <input
                                            className={styles.input}
                                            type="email"
                                            name="email"
                                            placeholder="Email"
                                            value={values.email}
                                            onChange={changeHandler}
                                            onBlur={emailValidator}
                                        />
                                        {emailHasError && (
                                            <p
                                                className={
                                                    styles['error-message']
                                                }
                                            >
                                                Invalid email. Example:
                                                "someone@smth.smth"
                                            </p>
                                        )}
                                        <input
                                            className={styles.input}
                                            type="text"
                                            name="name"
                                            placeholder="Names (First and Last)"
                                            value={values.name}
                                            onChange={changeHandler}
                                            onBlur={nameValidator}
                                        />
                                        {nameHasError && (
                                            <p
                                                className={
                                                    styles['error-message']
                                                }
                                            >
                                                Name must be in the format:
                                                "Name Sirname"!
                                            </p>
                                        )}
                                        <input
                                            className={styles.input}
                                            type="text"
                                            name="profileImage"
                                            placeholder="Profile Image URL"
                                            value={values.profileImage}
                                            onChange={changeHandler}
                                            onBlur={profileImageValidator}
                                        />
                                        {profileImageHasError && (
                                            <p
                                                className={
                                                    styles['error-message']
                                                }
                                            >
                                                Profile image must be a valid
                                                URL link!
                                            </p>
                                        )}
                                        <input
                                            className={styles.input}
                                            type="password"
                                            name="password"
                                            placeholder="Password"
                                            value={values.password}
                                            onChange={changeHandler}
                                            onBlur={passwordValidator}
                                        />
                                        {passwordHasError && (
                                            <p
                                                className={
                                                    styles['error-message']
                                                }
                                            >
                                                Password must be at least 4
                                                characters long!
                                            </p>
                                        )}
                                        <input
                                            className={styles.input}
                                            type="password"
                                            name="repeatPassword"
                                            placeholder="Confirm Password"
                                            value={values.repeatPassword}
                                            onChange={changeHandler}
                                            onBlur={repeatPasswordValidator}
                                        />
                                        {repeatPasswordHasError && (
                                            <p
                                                className={
                                                    styles['error-message']
                                                }
                                            >
                                                Passwords must match!
                                            </p>
                                        )}
                                        <div className={styles['one-line']}>
                                            <div
                                                className={
                                                    styles['one-line-element']
                                                }
                                            >
                                                <input
                                                    className={[
                                                        styles.input,
                                                        styles['one-line'],
                                                    ].join(' ')}
                                                    type="text"
                                                    placeholder="City"
                                                    name="city"
                                                    value={values.city}
                                                    onChange={changeHandler}
                                                    onBlur={cityValidator}
                                                />
                                            </div>
                                            <div
                                                className={
                                                    styles['one-line-element']
                                                }
                                            >
                                                <input
                                                    className={[
                                                        styles.input,
                                                        styles['one-line'],
                                                    ].join(' ')}
                                                    type="text"
                                                    placeholder="Country"
                                                    name="country"
                                                    value={values.country}
                                                    onChange={changeHandler}
                                                    onBlur={countryValidator}
                                                />
                                            </div>
                                        </div>
                                        {(cityHasError || countryHasError) && (
                                            <p
                                                className={
                                                    styles['error-message']
                                                }
                                            >
                                                City and country must start with
                                                capital letter!
                                            </p>
                                        )}
                                        <input
                                            type="number"
                                            name="age"
                                            className={styles.age}
                                            placeholder="    Age"
                                            value={values.age}
                                            onChange={changeHandler}
                                            onBlur={ageValidator}
                                        />
                                        {ageHasError && (
                                            <p
                                                className={
                                                    styles['error-message']
                                                }
                                            >
                                                Age must be in the range
                                                [10-100]!
                                            </p>
                                        )}
                                        <select
                                            className={styles.gender}
                                            name="gender"
                                            placeholder="Gender"
                                            value={values.gender}
                                            onChange={changeHandler}
                                            onBlur={genderValidator}
                                        >
                                            <option disabled value="gender">
                                                Gender
                                            </option>
                                            <option value="male">Male</option>
                                            <option value="female">
                                                Female
                                            </option>
                                        </select>
                                        { genderHasError && <p className={styles['error-message']}>
                                            Choose a valid gender!
                                        </p>}
                                        <button
                                            type="submit"
                                            name="register-submit"
                                            className={styles['submit-button']}
                                            onClick={submitHandler}
                                            disabled = {
                                                emailHasError || nameHasError || profileImageHasError
                                                 ||passwordHasError || repeatPasswordHasError ||
                                                 cityHasError || countryHasError || ageHasError ||
                                                 genderHasError || Object.values(values).some(x => x === '')
                                                
                                            }
                                        >
                                            <svg
                                                className="w-6 h-6 -ml-2"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth={2}
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            >
                                                <path d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                                                <circle cx="8.5" cy={7} r={4} />
                                                <path d="M20 8v6M23 11h-6" />
                                            </svg>
                                            <span className="ml-3 text-lg">
                                                Sign Up
                                            </span>
                                        </button>
                                    </form>
                                    <p className="mt-3 mb-2 text-lg font-semibold text-gray-700 text-center">
                                        Already have an account? <br /> Sign in
                                        from{' '}
                                        <Link
                                            to="/auth/login"
                                            className="border-b border-gray-500 border-dotted"
                                        >
                                            here
                                        </Link>
                                        .
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex-1 text-center hidden lg:flex">
                    <div
                        className=" w-full bg-center bg-contain bg-no-repeat scale mb-16"
                        style={{
                            backgroundImage: 'url("../assets/imgs/reg.png")',
                        }}
                    />
                </div>
            </div>
        </div>
    );
}
