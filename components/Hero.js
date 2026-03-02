import React from 'react';

function Hero() {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-blue-50 to-purple-100">
      <div className="absolute inset-0 bg-black opacity-20"></div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center min-h-screen">
          <div className="text-center">
            <h1 className="text-4xl sm:text-6xl font-bold text-white mb-6">Hi, I'm Bruno Amorim</h1>
            <h2 className="text-xl sm:text-2xl text-white opacity-90 mb-8">Frontend Developer | UX/UI Designer</h2>
            <p className="text-white opacity-80 mb-8 max-w-2xl mx-auto">
              Passionate about creating beautiful, functional web experiences that delight users and solve real problems.
            </p>
            <button className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors">
              View My Work
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;