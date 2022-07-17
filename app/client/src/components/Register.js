import styles from './Forms.module.css';
import mainStyles from './Register.module.css';
import {Link} from 'react-router-dom';

export default function Register () {
    return (
    <div className={styles.scale}>
        <div className={mainStyles['register-div']}>
          <div className="lg:w-1/2 p-6 backgroundMargin">
            <div className={styles.registerBackground}>
            <div>
              <img src="/assets/imgs/sitename.png" className="w-50 mx-auto" />
            </div>
            <div className="mt-8 flex flex-col items-center">
              <h1 className="text-2xl xl:text-3xl font-extrabold text-red-500">
                Sign Up:
              </h1>
              <div className="w-full flex-1 mt-8">
            
                <div className="mx-auto max-w-xs">
                <input className={styles.input} type="email" placeholder="Email" />
                <input className={styles.input} type="text" placeholder="Full name" />
                <input className={styles.input} type="password" placeholder="Password" />
                <input className={styles.input} type="password" placeholder="Confirm Password" />
                <div className={styles["one-line"]}>
                <div className={styles["one-line-element"]}><input className={[styles.input, styles['one-line']].join(' ')} type="text" placeholder="Country" /></div>
                <div className={styles["one-line-element"]}><input className={[styles.input, styles['one-line']].join(' ')} type="text" placeholder="City" /></div>
                </div>
                <input type="number" name="age" className={styles.age} placeholder="    Age"/>
                <select className={styles.gender} name="gender" placeholder="Gender">
                  <option disabled selected>Gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </select>
                  <button className={styles["submit-button"]}>
                    <svg className="w-6 h-6 -ml-2" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                      <path d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                      <circle cx="8.5" cy={7} r={4} />
                      <path d="M20 8v6M23 11h-6" />
                    </svg>
                    <span className="ml-3 text-lg">
                      Sign Up
                    </span>
                  </button>
                  <p className="mt-5 mb-2 text-lg font-semibold text-gray-700 text-center">
                    Already have an account? <br /> Sign in from {' '}
                    <Link to="/auth/login" className="border-b border-gray-500 border-dotted">
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
            <div className=" w-full bg-center bg-contain bg-no-repeat scale mb-16" style={{backgroundImage: 'url("../assets/imgs/reg.png")'}} />
          </div>
        </div>
    
      </div>
    );
}


