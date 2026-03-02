import React from 'react';

function About() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">About Me</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Passionate frontend developer with a keen eye for design and user experience.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Who I Am</h3>
            <p className="text-gray-600 mb-6">
              I'm a frontend developer specializing in creating beautiful, responsive web applications. 
              With a background in UX/UI design, I bring both technical expertise and design sensibility 
              to every project I work on.
            </p>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h4 className="text-lg font-bold text-blue-600 mb-2">Frontend</h4>
                <p className="text-gray-600">React, Next.js, TypeScript</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h4 className="text-lg font-bold text-blue-600 mb-2">Design</h4>
                <p className="text-gray-600">Figma, Adobe XD, CSS</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h4 className="text-lg font-bold text-blue-600 mb-2">Tools</h4>
                <p className="text-gray-600">Git, Vercel, VS Code</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h4 className="text-lg font-bold text-blue-600 mb-2">Skills</h4>
                <p className="text-gray-600">Responsive Design, Performance</p>
              </div>
            </div>
          </div>
          
          <div className="mt-8 md:mt-0">
            <img 
              src="/profile.jpg" 
              alt="Bruno Amorim" 
              className="w-full h-96 object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;