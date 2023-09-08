"use client";
import Image from "next/image";
import { Card, Text, Metric, Subtitle, Divider } from "@tremor/react";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-800 to-indigo-900 p-10 flex flex-col justify-center">


<section className="overflow-hidden" >
  <section>
  <nav className="relative py-6 bg-white rounded-full">
    <div className="container mx-auto px-4 flex items-center">
      <ul className="hidden lg:flex lg:w-1/3 lg:flex lg:items-center lg:w-auto lg:space-x-6">
        <li><a className="text-sm  text-blue-600 font-bold " href="#">Home City</a></li>
        <li className="text-gray-300">
          <svg className="w-4 h-4 current-fill" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"></path>
          </svg>
        </li>
        <li><a className="text-sm text-gray-400 hover:text-gray-500 " href="#">About Us</a></li>
        <li className="text-gray-300">
          <svg className="w-4 h-4 current-fill" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"></path>
          </svg>
        </li>
        <li><a className="text-sm text-gray-400 hover:text-gray-500" href="#">Freebies</a></li>
      </ul>
      <div className="lg:absolute lg:top-1/2 lg:left-1/2 lg:transform lg:-translate-y-1/2 lg:-translate-x-1/2">
        <a className="text-3xl font-bold leading-none" href="#">
          <img className="h-16" src="weatherAI-favicon.png" alt="" width="auto"/>
          
        </a>
      </div>
      <div className="hidden lg:ml-auto lg:block lg:w-1/3 text-right">
        <a className="hidden lg:inline-block lg:ml-auto lg:mr-3 py-2 px-6 bg-gray-50 hover:bg-gray-100 text-sm text-gray-900 font-bold rounded-l-xl rounded-t-xl transition duration-200" href="#">Sign In</a>
      <a className="hidden lg:inline-block py-2 px-6 bg-blue-500 hover:bg-blue-600 text-sm text-white font-bold rounded-l-xl rounded-t-xl transition duration-200" href="#">Sign up</a>
      </div>
      <div className="lg:hidden ml-auto">
        <button className="navbar-burger flex items-center text-blue-600 p-3">
          <svg className="block h-4 w-4 fill-current" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <title>Mobile menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
          </svg>
        </button>
      </div>
    </div>
  </nav>
  <div className="hidden navbar-menu fixed top-0 left-0 bottom-0 w-5/6 max-w-sm z-50">
    <div className="navbar-backdrop fixed inset-0 bg-gray-800 opacity-25"></div>
    <nav className="relative flex flex-col py-6 px-6 h-full w-full bg-white border-r overflow-y-auto">
      <div className="flex items-center mb-8">
        <a className="mr-auto text-3xl font-bold leading-none" href="#">
          <img className="h-10" src="atis-assets/logo/atis/atis-mono-black.svg" alt="" width="auto"/>
        </a>
        <button className="navbar-close">
          <svg className="h-6 w-6 text-gray-400 cursor-pointer hover:text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </button>
      </div>
      <div>
        <ul>
          <li className="mb-1"><a className="block p-4 text-sm font-semibold text-gray-400 hover:bg-green-50 hover:text-green-600 rounded" href="#">Start</a></li>
          <li className="mb-1"><a className="block p-4 text-sm font-semibold text-gray-400 hover:bg-green-50 hover:text-green-600 rounded" href="#">Freebies</a></li>
          <li className="mb-1"><a className="block p-4 text-sm font-semibold text-gray-400 hover:bg-green-50 hover:text-green-600 rounded" href="#">About</a></li>
        </ul>
      </div>
      <div className="mt-auto">
        <div className="pt-6"><a className="block px-4 py-3 mb-3 leading-loose text-xs text-center font-semibold leading-none bg-gray-50 hover:bg-gray-100 rounded-l-xl rounded-t-xl" href="#">Sign in</a><a className="block px-4 py-3 mb-2 leading-loose text-xs text-center text-white font-semibold bg-green-600 hover:bg-green-700 rounded-l-xl rounded-t-xl" href="#">Sign Up</a></div>
        <p className="my-4 text-xs text-center text-gray-400">
          <span>&copy; 2020 All rights reserved.</span>
        </p>
        <div className="text-center">
          <a className="inline-block px-1" href="#">
            <img src="atis-assets/social/facebook.svg" alt=""/>
          </a>
          <a className="inline-block px-1" href="#">
            <img src="atis-assets/social/twitter.svg" alt=""/>
          </a>
          <a className="inline-block px-1" href="#">
            <img src="atis-assets/social/instagram.svg" alt=""/>
          </a>
        </div>
      </div>
    </nav>
  </div>
  </section>
  {/* hero-section */}
  <div className="container mx-auto py-12 px-4">
    <div className="flex flex-wrap justify-between -m-6 pt-32 pb-40">
      <div className="w-full lg:w-5/12 xl:w-1/2 p-6">
        <p className="mb-5 font-heading text-gray-400 font-medium text-lg">Your City, Your Forecast, Powered by Artificial Intelligence</p>
        <h1 className="mb-14 font-heading text-4xl md:text-5xl xl:text-5xl text-white font-bold">Introducing AI-Powered Weather Forecasts, anywhere, anytime.</h1>
        {/* <div className="flex flex-wrap -m-3 mb-20">
          <div className="w-full lg:w-auto p-3">
            <button className="font-heading w-full px-6 py-4 text-base text-gray-900 bg-white hover:bg-gray-100 rounded-md">Start 14 Days Free Trial</button>
          </div>
          <div className="w-full lg:w-auto p-3">
            <button className="font-heading w-full px-6 py-4 text-base text-white bg-transparent border border-gray-500 hover:border-gray-600 rounded-md">How it works</button>
          </div>
        </div> */}
        <div className="lg:max-w-md">
          <div className="flex flex-wrap -m-3">
            <div className="w-auto p-3">
              <img className="w-14 h-14" src="gradia-assets/images/hero/avatar-man.png" alt=""/>
            </div>
            <div className="flex-1 p-3">
              <p className="mb-4 text-gray-300 text-base">&ldquo;Sunshine is delicious, rain is refreshing, wind braces us up, snow is exhilarating; there is really no such thing as bad weather, only different kinds of good weather.&rdquo;</p>
              <p className="font-heading text-white text-base">John Ruskin</p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full lg:w-7/12 xl:w-1/2 p-6">
        <div className="max-w-max mx-auto">
          <div className="flex flex-wrap justify-center -m-3 mb-3">
            <div className="w-full p-3">
              <div className="mx-auto w-64 p-3 bg-white transform hover:-translate-y-3 transition ease-out duration-1000 rounded-2xl">
                <div className="flex flex-wrap -m-2">
                  <div className="w-auto p-2">
                    <img src="gradia-assets/images/hero/avatar-circle.png" alt=""/>
                  </div>
                  <div className="w-auto p-2">
                    <p className="font-heading text-base text-gray-900">Albert Flores</p>
                    <p className="mb-2 text-sm text-gray-500">Software Engineer</p>
                    <div className="flex items-center px-2 py-1 bg-gray-100 rounded-full">
                      <svg className="mr-1" width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9.56413 9.02246C9.19416 9.39243 8.5298 10.0568 7.91404 10.6726C7.13299 11.4536 5.867 11.4536 5.08595 10.6725C4.4823 10.0689 3.82786 9.41446 3.43587 9.02246C1.7436 7.33019 1.7436 4.58648 3.43587 2.8942C5.12814 1.20193 7.87185 1.20193 9.56413 2.8942C11.2564 4.58648 11.2564 7.33019 9.56413 9.02246Z" stroke="#71717A" strokeLinecap="round" strokeLinejoin="round"></path>
                        <path d="M8.125 5.95833C8.125 6.8558 7.39746 7.58333 6.5 7.58333C5.60253 7.58333 4.875 6.8558 4.875 5.95833C4.875 5.06087 5.60253 4.33333 6.5 4.33333C7.39746 4.33333 8.125 5.06087 8.125 5.95833Z" stroke="#71717A" strokeLinecap="round" strokeLinejoin="round"></path>
                      </svg>
                      <p className="text-xs text-gray-700 font-medium">New York City, USA</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap justify-center max-w-max -m-3 mb-3">
            <div className="w-1/2 p-3">
              <div className="mx-auto w-auto lg:w-64 p-3 bg-white transform hover:-translate-y-3 transition ease-out duration-1000 rounded-2xl">
                <div className="flex flex-wrap -m-2">
                  <div className="w-auto p-2">
                    <img src="gradia-assets/images/hero/avatar-circle2.png" alt=""/>
                  </div>
                  <div className="w-auto p-2">
                    <p className="font-heading text-base text-gray-900">Darlene Robertson</p>
                    <p className="mb-2 text-sm text-gray-500">Software Tester</p>
                    <div className="flex items-center px-2 py-1 bg-gray-100 rounded-full">
                      <svg className="mr-1" width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9.56413 9.02246C9.19416 9.39243 8.5298 10.0568 7.91404 10.6726C7.13299 11.4536 5.867 11.4536 5.08595 10.6725C4.4823 10.0689 3.82786 9.41446 3.43587 9.02246C1.7436 7.33019 1.7436 4.58648 3.43587 2.8942C5.12814 1.20193 7.87185 1.20193 9.56413 2.8942C11.2564 4.58648 11.2564 7.33019 9.56413 9.02246Z" stroke="#71717A" strokeLinecap="round" strokeLinejoin="round"></path>
                        <path d="M8.125 5.95833C8.125 6.8558 7.39746 7.58333 6.5 7.58333C5.60253 7.58333 4.875 6.8558 4.875 5.95833C4.875 5.06087 5.60253 4.33333 6.5 4.33333C7.39746 4.33333 8.125 5.06087 8.125 5.95833Z" stroke="#71717A" strokeLinecap="round" strokeLinejoin="round"></path>
                      </svg>
                      <p className="text-xs text-gray-700 font-medium">Paris, France</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-1/2 p-3">
              <div className="mx-auto w-auto lg:w-64 p-3 bg-white transform hover:-translate-y-3 transition ease-out duration-1000 rounded-2xl">
                <div className="flex flex-wrap -m-2">
                  <div className="w-auto p-2">
                    <img src="gradia-assets/images/hero/avatar-circle3.png" alt=""/>
                  </div>
                  <div className="w-auto p-2">
                    <p className="font-heading text-base text-gray-900">Kristin Watson</p>
                    <p className="mb-2 text-sm text-gray-500">Project Manager</p>
                    <div className="flex items-center px-2 py-1 bg-gray-100 rounded-full">
                      <svg className="mr-1" width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9.56413 9.02246C9.19416 9.39243 8.5298 10.0568 7.91404 10.6726C7.13299 11.4536 5.867 11.4536 5.08595 10.6725C4.4823 10.0689 3.82786 9.41446 3.43587 9.02246C1.7436 7.33019 1.7436 4.58648 3.43587 2.8942C5.12814 1.20193 7.87185 1.20193 9.56413 2.8942C11.2564 4.58648 11.2564 7.33019 9.56413 9.02246Z" stroke="#71717A" strokeLinecap="round" strokeLinejoin="round"></path>
                        <path d="M8.125 5.95833C8.125 6.8558 7.39746 7.58333 6.5 7.58333C5.60253 7.58333 4.875 6.8558 4.875 5.95833C4.875 5.06087 5.60253 4.33333 6.5 4.33333C7.39746 4.33333 8.125 5.06087 8.125 5.95833Z" stroke="#71717A" strokeLinecap="round" strokeLinejoin="round"></path>
                      </svg>
                      <p className="text-xs text-gray-700 font-medium">Pennsylvania, USA</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap justify-center max-w-max -m-3 mb-3 xl:-ml-20">
            <div className="w-1/2 p-3">
              <div className="mx-auto w-auto lg:w-64 p-3 bg-white transform hover:-translate-y-3 transition ease-out duration-1000 rounded-2xl">
                <div className="flex flex-wrap -m-2">
                  <div className="w-auto p-2">
                    <img src="gradia-assets/images/hero/avatar-circle4.png" alt=""/>
                  </div>
                  <div className="w-auto p-2">
                    <p className="font-heading text-base text-gray-900">Guy Hawkins</p>
                    <p className="mb-2 text-sm text-gray-500">Scrum Master</p>
                    <div className="flex items-center px-2 py-1 bg-gray-100 rounded-full">
                      <svg className="mr-1" width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9.56413 9.02246C9.19416 9.39243 8.5298 10.0568 7.91404 10.6726C7.13299 11.4536 5.867 11.4536 5.08595 10.6725C4.4823 10.0689 3.82786 9.41446 3.43587 9.02246C1.7436 7.33019 1.7436 4.58648 3.43587 2.8942C5.12814 1.20193 7.87185 1.20193 9.56413 2.8942C11.2564 4.58648 11.2564 7.33019 9.56413 9.02246Z" stroke="#71717A" strokeLinecap="round" strokeLinejoin="round"></path>
                        <path d="M8.125 5.95833C8.125 6.8558 7.39746 7.58333 6.5 7.58333C5.60253 7.58333 4.875 6.8558 4.875 5.95833C4.875 5.06087 5.60253 4.33333 6.5 4.33333C7.39746 4.33333 8.125 5.06087 8.125 5.95833Z" stroke="#71717A" strokeLinecap="round" strokeLinejoin="round"></path>
                      </svg>
                      <p className="text-xs text-gray-700 font-medium">London, United Kingdom</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-1/2 p-3">
              <div className="mx-auto w-auto lg:w-64 p-3 bg-white transform hover:-translate-y-3 transition ease-out duration-1000 rounded-2xl">
                <div className="flex flex-wrap -m-2">
                  <div className="w-auto p-2">
                    <img src="gradia-assets/images/hero/avatar-circle5.png" alt=""/>
                  </div>
                  <div className="w-auto p-2">
                    <p className="font-heading text-base text-gray-900">Annette Black</p>
                    <p className="mb-2 text-sm text-gray-500">Software Engineer</p>
                    <div className="flex items-center px-2 py-1 bg-gray-100 rounded-full">
                      <svg className="mr-1" width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9.56413 9.02246C9.19416 9.39243 8.5298 10.0568 7.91404 10.6726C7.13299 11.4536 5.867 11.4536 5.08595 10.6725C4.4823 10.0689 3.82786 9.41446 3.43587 9.02246C1.7436 7.33019 1.7436 4.58648 3.43587 2.8942C5.12814 1.20193 7.87185 1.20193 9.56413 2.8942C11.2564 4.58648 11.2564 7.33019 9.56413 9.02246Z" stroke="#71717A" strokeLinecap="round" strokeLinejoin="round"></path>
                        <path d="M8.125 5.95833C8.125 6.8558 7.39746 7.58333 6.5 7.58333C5.60253 7.58333 4.875 6.8558 4.875 5.95833C4.875 5.06087 5.60253 4.33333 6.5 4.33333C7.39746 4.33333 8.125 5.06087 8.125 5.95833Z" stroke="#71717A" strokeLinecap="round" strokeLinejoin="round"></path>
                      </svg>
                      <p className="text-xs text-gray-700 font-medium">Sydney, Australia</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap justify-center max-w-max -m-3">
            <div className="w-1/2 p-3">
              <div className="mx-auto w-auto lg:w-64 p-3 bg-white transform hover:-translate-y-3 transition ease-out duration-1000 rounded-2xl">
                <div className="flex flex-wrap -m-2">
                  <div className="w-auto p-2">
                    <img src="gradia-assets/images/hero/avatar-circle.png" alt=""/>
                  </div>
                  <div className="w-auto p-2">
                    <p className="font-heading text-base text-gray-900">Robert Fox</p>
                    <p className="mb-2 text-sm text-gray-500">UI/UX Designer</p>
                    <div className="flex items-center px-2 py-1 bg-gray-100 rounded-full">
                      <svg className="mr-1" width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9.56413 9.02246C9.19416 9.39243 8.5298 10.0568 7.91404 10.6726C7.13299 11.4536 5.867 11.4536 5.08595 10.6725C4.4823 10.0689 3.82786 9.41446 3.43587 9.02246C1.7436 7.33019 1.7436 4.58648 3.43587 2.8942C5.12814 1.20193 7.87185 1.20193 9.56413 2.8942C11.2564 4.58648 11.2564 7.33019 9.56413 9.02246Z" stroke="#71717A" strokeLinecap="round" strokeLinejoin="round"></path>
                        <path d="M8.125 5.95833C8.125 6.8558 7.39746 7.58333 6.5 7.58333C5.60253 7.58333 4.875 6.8558 4.875 5.95833C4.875 5.06087 5.60253 4.33333 6.5 4.33333C7.39746 4.33333 8.125 5.06087 8.125 5.95833Z" stroke="#71717A" strokeLinecap="round" strokeLinejoin="round"></path>
                      </svg>
                      <p className="text-xs text-gray-700 font-medium">Los Angeles, USA</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-1/2 p-3">
              <div className="mx-auto w-auto lg:w-64 p-3 bg-white transform hover:-translate-y-3 transition ease-out duration-1000 rounded-2xl">
                <div className="flex flex-wrap -m-2">
                  <div className="w-auto p-2">
                    <img src="gradia-assets/images/hero/avatar-circle2.png" alt=""/>
                  </div>
                  <div className="w-auto p-2">
                    <p className="font-heading text-base text-gray-900">Cody Fisher</p>
                    <p className="mb-2 text-sm text-gray-500">Ethical Hacker</p>
                    <div className="flex items-center px-2 py-1 bg-gray-100 rounded-full">
                      <svg className="mr-1" width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9.56413 9.02246C9.19416 9.39243 8.5298 10.0568 7.91404 10.6726C7.13299 11.4536 5.867 11.4536 5.08595 10.6725C4.4823 10.0689 3.82786 9.41446 3.43587 9.02246C1.7436 7.33019 1.7436 4.58648 3.43587 2.8942C5.12814 1.20193 7.87185 1.20193 9.56413 2.8942C11.2564 4.58648 11.2564 7.33019 9.56413 9.02246Z" stroke="#71717A" strokeLinecap="round" strokeLinejoin="round"></path>
                        <path d="M8.125 5.95833C8.125 6.8558 7.39746 7.58333 6.5 7.58333C5.60253 7.58333 4.875 6.8558 4.875 5.95833C4.875 5.06087 5.60253 4.33333 6.5 4.33333C7.39746 4.33333 8.125 5.06087 8.125 5.95833Z" stroke="#71717A" strokeLinecap="round" strokeLinejoin="round"></path>
                      </svg>
                      <p className="text-xs text-gray-700 font-medium">Tokyo, Japan</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>



      <Card className="max-w-7xl mx-auto justify-center">
        {/* title */}
        <Text className="text-6xl font-bold text-center mb-10">
          Weather-AI{" "}
        </Text>
        {/* subtitle */}
        <Subtitle className="text-xl text-center">
          Powered by Open AI, Next.js 13.3, Tremor 2.0, Tailwind CSS + more!!
        </Subtitle>
        <Divider className="my-10" />

        <Card className="bg-gradient-to-br from-[#394F68] to-[#183b7e]">
          {/* city-picker compnent */}
        </Card>
      </Card>



      {/* footer-starts */}
      <section className="py-12 bg-transaprent">
  <div className="container mx-auto px-4">
    <div className="max-w-4xl mx-auto text-center">
      <div className="pb-9 border-b border-blueGray-800">
        <a className="inline-block mb-20" href="#">
          <img className="block h-9" src="vendia-assets/logos/vendia.svg" alt=""/>
        </a>
        <div className="flex flex-wrap -mx-4 -mb-4 justify-center items-center">
          <div className="w-1/2 md:w-auto px-4 xl:px-8 mb-4">
            <a className="inline-block font-bold text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-white hover:from-yellow-500 hover:via-green-300 hover:to-blue-500" href="#">Company</a></div>
          
          <div className="w-1/2 md:w-auto px-4 xl:px-8 mb-4">
            <a className="inline-block font-bold text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-white hover:from-yellow-500 hover:via-green-300 hover:to-blue-500" href="#">Freebies</a></div>
          <div className="w-1/2 md:w-auto px-4 xl:px-8 mb-4">
            <a className="inline-block font-bold text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-white hover:from-yellow-500 hover:via-green-300 hover:to-blue-500" href="#">Help</a></div>
          <div className="w-1/2 md:w-auto px-4 xl:px-8 mb-4">
            <a className="inline-block font-bold text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-white hover:from-yellow-500 hover:via-green-300 hover:to-blue-500" href="#">Privacy Policy</a></div>
        </div>
      </div>
      <p className="mt-8 text-sm text-gray-400">Powered by &copy; 2023 bantsy.io | All Rights Reserved</p>
    </div>
  </div>
</section>
      {/* footer-ends */}



    </div>
  );
}
