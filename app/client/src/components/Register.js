export default function Register () {


    // register form fcks up the navigation bar animation
    return (
<div>
        <div className="max-w-none mx-auto sm:m-20 bg-30 shadow sm:rounded-none flex justify-center flex-1">
          <div className="lg:w-1/2  p-6 ">
            <div>
              <img src="/assets/imgs/sitename.png" className="w-50 mx-auto" />
            </div>
            <div className="mt-12 flex flex-col items-center">
<<<<<<< HEAD
              <h1 className="text-2xl xl:text-3xl font-extrabold text-red-500">
                Sign Up:
=======
              <h1 className="text-2xl xl:text-3xl font-extrabold">
                Sign up:
>>>>>>> parent of 373493b (Created Login Page)
              </h1>
              <div className="w-full flex-1 mt-8">
            
                <div className="mx-auto max-w-xs">
                  <input className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white" type="email" placeholder="Email" />
                  <input className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5" type="password" placeholder="Password" />
                  <input className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5" type="repeatPassword" placeholder="Confirm Password" />
                  <button className="mt-5 tracking-wide font-semibold bg-red-500 text-gray-100 w-full py-4 rounded-lg hover:bg-red-600 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none">
                    <svg className="w-6 h-6 -ml-2" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                      <path d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                      <circle cx="8.5" cy={7} r={4} />
                      <path d="M20 8v6M23 11h-6" />
                    </svg>
                    <span className="ml-3">
                      Sign Up
                    </span>
                  </button>
                  <p className="mt-6 text-xs text-gray-600 text-center">
                    I agree to abide by ScentLy's
                    <a href="#" className="border-b border-gray-500 border-dotted">
                      Terms of Service
                    </a> <nbsp/>
                    and its <nbsp/>
                    <a href="#" className="border-b border-gray-500 border-dotted">
                      Privacy Policy
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex-1 text-center hidden lg:flex">
            <div className=" w-full bg-center bg-contain bg-no-repeat" style={{backgroundImage: 'url("https://media.karousell.com/media/photos/products/2022/3/25/perfume_decant__amouage_reflec_1648178355_7d4f0ee4_progressive.jpg")'}} />
          </div>
        </div>
    
      </div>
    );
}


