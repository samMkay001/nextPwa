'use client';
const FunFactPage = async ()=>{
    const res = await fetch('https://api.chucknorris.io/jokes/random',{

        next: {revalidate: 10000}
    
});
const fact = await res.json();


  return (
    <div className="bg-gray-900">
      <nav className="bg-gray-900 border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <a href="#" className="flex-shrink-0 text-white text-2xl font-bold tracking-tight">SwimPro</a>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-6">
                <a href="#" className="text-gray-300 hover:text-blue-600 px-3 py-2 rounded-md text-md font-medium">Home</a>
                <a href="/login" className="text-gray-300 hover:text-blue-600 px-3 py-2 rounded-md text-md font-medium">Login</a>
                <a href="/register" className="text-gray-300 hover:text-blue-600 px-3 py-2 rounded-md text-md font-medium">Register</a>
                <a href="#" className="text-gray-300 hover:text-blue-600 px-3 py-2 rounded-md text-md font-medium">About</a>

                <a href="#" className="text-gray-300 hover:text-blue-600 px-3 py-2 rounded-md text-md font-medium">Contact</a>
          <a href="#" className="inline-block px-5 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg text-lg font-semibold transition">Learn More</a>


                
              </div>
            </div>
            <div className="md:hidden">
              <button type="button" className="text-gray-400 hover:text-white focus:outline-none focus:text-white" data-collapse-toggle="mobile-menu" aria-controls="mobile-menu" aria-expanded="false">
                <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div className="md:hidden hidden" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#" className="block text-gray-300 hover:text-white px-3 py-2 rounded-md text-base font-medium">Home</a>
            <a href="#" className="block text-gray-300 hover:text-white px-3 py-2 rounded-md text-base font-medium">Programs</a>
            <a href="#" className="block text-gray-300 hover:text-white px-3 py-2 rounded-md text-base font-medium">About</a>
            <a href="#" className="block text-gray-300 hover:text-white px-3 py-2 rounded-md text-base font-medium">Contact</a>
          </div>
        </div>
      </nav>

      <section className="relative bg-[url('/image/professional-female-swimmer-points-away-blank-space.jpg')] bg-cover bg-center h-screen flex items-center justify-center">
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        <div className="relative z-10 text-center text-white max-w-2xl mx-auto px-6">
          <h1 className="text-5xl font-extrabold mb-6">Dive Into Excellence</h1>
          <p className="mb-8 text-lg">Unlock your potential with our professional swimming programs. Join a community of champions and take your skills to the next level.</p>
          <a href="#" className="inline-block px-8 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg text-lg font-semibold transition">Get Started</a>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-gray-800">Why Choose Us?</h2>
            <p className="text-gray-600">Experience world-class coaching, state-of-the-art facilities, and a supportive community.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-blue-50 p-8 rounded-lg shadow hover:shadow-lg transition">
              <div className="mb-4 text-blue-600">
                <svg className="w-10 h-10 mx-auto" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 14l9-5-9-5-9 5 9 5z"/><path d="M12 14l6.16-3.422A12.083 12.083 0 0112 21.5a12.083 12.083 0 01-6.16-10.922L12 14z"/></svg>
              </div>
              <h3 className="font-semibold text-xl mb-2">Expert Coaches</h3>
              <p className="text-gray-600">Train with certified professionals dedicated to your progress and success.</p>
            </div>
            <div className="bg-blue-50 p-8 rounded-lg shadow hover:shadow-lg transition">
              <div className="mb-4 text-blue-600">
                <svg className="w-10 h-10 mx-auto" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>
              </div>
              <h3 className="font-semibold text-xl mb-2">Flexible Schedules</h3>
              <p className="text-gray-600">Choose from a variety of classes and timings that fit your lifestyle.</p>
            </div>
            <div className="bg-blue-50 p-8 rounded-lg shadow hover:shadow-lg transition">
              <div className="mb-4 text-blue-600">
                <svg className="w-10 h-10 mx-auto" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M17 20h5v-2a4 4 0 00-3-3.87"/><path d="M9 20H4v-2a4 4 0 013-3.87"/><circle cx="12" cy="7" r="4"/></svg>
              </div>
              <h3 className="font-semibold text-xl mb-2">Community Support</h3>
              <p className="text-gray-600">Be part of a vibrant community that motivates and inspires you every day.</p>
            </div>
          </div>
        </div>
      </section>

     
      <section className="py-16 bg-blue-600">
        <div className="max-w-3xl mx-auto text-center text-white px-6">
          <h2 className="text-3xl font-bold mb-4">Ready to Make a Splash?</h2>
          <p className="mb-8">Sign up today and start your journey towards becoming a better swimmer.</p>
          <a href="#" className="inline-block px-8 py-3 bg-white text-blue-700 font-semibold rounded-lg hover:bg-gray-100 transition">Join Now</a>
        </div>
        <p>{fact.value}</p>
      </section>
    </div>
  )
}

export default FunFactPage
