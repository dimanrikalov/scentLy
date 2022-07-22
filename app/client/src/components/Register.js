import styles from './Forms.module.css';
import mainStyles from './Register.module.css';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import endpoints from '../endpoints';

export default function Register() {
    const navigate = useNavigate();

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
        navigate('/');
    };

    return (
        <div className={styles.scale}>
            <div className={mainStyles['register-div']}>
                <div className="lg:w-1/2 p-6 backgroundMargin">
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
                                        />
                                        <input
                                            className={styles.input}
                                            type="text"
                                            name="name"
                                            placeholder="Names (First and Last)"
                                            value={values.name}
                                            onChange={changeHandler}
                                        />
                                        <input
                                            className={styles.input}
                                            type="text"
                                            name="profileImage"
                                            placeholder="Profile Image URL"
                                            value={values.profileImage}
                                            onChange={changeHandler}
                                        />
                                        <input
                                            className={styles.input}
                                            type="password"
                                            name="password"
                                            placeholder="Password"
                                            value={values.password}
                                            onChange={changeHandler}
                                        />
                                        <input
                                            className={styles.input}
                                            type="password"
                                            name="repeatPassword"
                                            placeholder="Confirm Password"
                                            value={values.repeatPassword}
                                            onChange={changeHandler}
                                        />
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
                                                />
                                            </div>
                                        </div>
                                        <input
                                            type="number"
                                            name="age"
                                            className={styles.age}
                                            placeholder="    Age"
                                            value={values.age}
                                            onChange={changeHandler}
                                        />
                                        <select
                                            className={styles.gender}
                                            name="gender"
                                            placeholder="Gender"
                                            value={values.gender}
                                            onChange={changeHandler}
                                        >
                                            <option disabled value="gender">
                                                Gender
                                            </option>
                                            <option value="male">Male</option>
                                            <option value="female">
                                                Female
                                            </option>
                                        </select>
                                        <button
                                            type="submit"
                                            name="register-submit"
                                            className={styles['submit-button']}
                                            onClick={submitHandler}
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
                                    <p className="mt-5 mb-2 text-lg font-semibold text-gray-700 text-center">
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
