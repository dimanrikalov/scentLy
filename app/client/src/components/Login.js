import { useState } from 'react';
import {Link} from 'react-router-dom';
import styles from './Forms.module.css';
import endpoints from '../endpoints';

export default function Login () {

    const [values, setValues] = useState({
      email: '',
      password: ''
    })

    const changeHandler = (e) => {
      setValues(prevState => ({
        ...prevState,
        [e.target.name]: e.target.value
      }))
    }

    const submitHandler = async (e) => {
      e.preventDefault();

      const res = await fetch(endpoints.loginUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(values)
      });

      const result = await res.json();
      console.log(result);
    }

  return (
<div id="login" className='pb-16'>
      <div className="max-w-none mx-auto mt-32 bg-30 shadow sm:rounded-none flex justify-center flex-1">
        <div className="lg:w-1/2  p-6 ">
        <div className={styles.loginBackground}>
        <div>
            <img src="/assets/imgs/sitename.png" className="w-50 mx-auto" />
          </div>
          <div className="mt-12 flex flex-col items-center">
            <h1 className="text-2xl xl:text-3xl font-extrabold text-red-500">
              Sign In:
            </h1>
            <div className="w-full flex-1 mt-8">
          
              <div className="mx-auto max-w-xs">
              <input className={styles.input} type="email" placeholder="Email" name="email" value={values.email} onChange={changeHandler}/>
                <input className={styles.input} type="password" placeholder="Password" name="password" value={values.password} onChange={changeHandler}/>
                <button type="submit" className={styles["submit-button"]} onClick={submitHandler}>
                  <svg className="w-6 h-6 -ml-2" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                    <path d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                    <circle cx="8.5" cy={7} r={4} />
                    <path d="M20 8v6M23 11h-6" />
                  </svg>
                  <span className="ml-3 text-lg">
                    Sign In
                  </span>
                </button>
                <p className="mt-5 mb-16 text-lg font-semibold text-gray-700 text-center">
                    Don't have an account?<br /> Sign up from {' '}
                    <Link to="/auth/register" className="border-b border-gray-500 border-dotted">
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
          <div className="w-full bg-center bg-contain bg-no-repeat mb-32" style={{backgroundImage: 'url("../assets/imgs/log-page-img.png")'}} />
        </div>
      </div>
  
    </div>
  );
}


