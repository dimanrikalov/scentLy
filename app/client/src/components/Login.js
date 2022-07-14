export default function Login () {


  // register form fcks up the navigation bar animation
  return (
<div>
      <div className="max-w-none mx-auto sm:m-20 bg-30 shadow sm:rounded-none flex justify-center flex-1">
        <div className="lg:w-1/2  p-6 ">
          <div>
            <img src="/assets/imgs/sitename.png" className="w-50 mx-auto" />
          </div>
          <div className="mt-12 flex flex-col items-center">
            <h1 className="text-2xl xl:text-3xl font-extrabold text-red-500">
              Sign In:
            </h1>
            <div className="w-full flex-1 mt-8">
          
              <div className="mx-auto max-w-xs">
                <input className="w-full px-8 py-4 rounded-3xl font-medium bg-gray-100 border border-gray-200 placeholder-gray-600 text-sm focus:outline-none focus:border-gray-400 focus:bg-white" type="email" placeholder="Email" />
                <input className="w-full px-8 py-4 rounded-3xl font-medium bg-gray-100 border border-gray-200 placeholder-gray-600 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5" type="password" placeholder="Password" />
                <button className="mt-5 tracking-wide font-semibold bg-red-500 text-gray-100 w-full py-4 rounded-3xl hover:bg-red-600 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none">
                  <svg className="w-6 h-6 -ml-2" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                    <path d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                    <circle cx="8.5" cy={7} r={4} />
                    <path d="M20 8v6M23 11h-6" />
                  </svg>
                  <span className="ml-3">
                    Sign In
                  </span>
                </button>
                <p className="mt-5 text-l font-semibold text-gray-700 text-center">
                    Don't have an account?<br /> Sign up from <nbsp/>
                    <a href="#" className="border-b border-gray-500 border-dotted">
                      here
                    </a> 
                    .
                  </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-1 text-center hidden lg:flex">
          <div className=" w-full bg-center bg-contain bg-no-repeat" style={{backgroundImage: 'url("./assets/imgs/log-page-img.png")'}} />
        </div>
      </div>
  
    </div>
  );
}


