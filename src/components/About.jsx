import React from 'react';

const About = () => {
  return (
    <div className="bg-gradient-to-br from-blue-50 to-white dark:from-gray-800 dark:to-gray-900 text-gray-800 dark:text-white py-12 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-extrabold text-center mb-8 text-blue-600 dark:text-blue-400">
          About Us
        </h1>

        {/* Section 1: About VR Solutions */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-200 mb-4">
            Welcome to VR Solutions
          </h2>
          <p className="text-lg leading-relaxed mb-6">
            At <span className="font-semibold text-blue-500 dark:text-blue-300">VR Solutions</span>, we transform ideas into reality. 
            Whether it’s developing websites, creating stunning apps, or offering cutting-edge cloud solutions, 
            our team is here to make your vision come to life. With a passion for innovation and excellence, 
            we empower individuals and businesses to achieve their goals through technology.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 hover:scale-105 transition transform duration-300">
              <h3 className="text-xl font-semibold text-blue-500 dark:text-blue-300">Web Development</h3>
              <p className="text-gray-700 dark:text-gray-400 mt-2">
                Create responsive, visually appealing, and fully functional websites tailored to your needs.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 hover:scale-105 transition transform duration-300">
              <h3 className="text-xl font-semibold text-blue-500 dark:text-blue-300">App Development</h3>
              <p className="text-gray-700 dark:text-gray-400 mt-2">
                Build feature-rich mobile apps that deliver seamless user experiences across platforms.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 hover:scale-105 transition transform duration-300">
              <h3 className="text-xl font-semibold text-blue-500 dark:text-blue-300">Cloud Services</h3>
              <p className="text-gray-700 dark:text-gray-400 mt-2">
                Leverage the power of the cloud with scalable, secure, and efficient cloud computing solutions.
              </p>
            </div>
          </div>
        </section>

        {/* Section 2: AI-Generated Resumes */}
        <section className="mt-12">
          <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-200 mb-4">
            Revolutionizing Resume Creation with AI
          </h2>
          <p className="text-lg leading-relaxed mb-6">
            Our advanced AI-powered resume builder makes creating resumes effortless. 
            By analyzing the details you provide—such as your skills, designation, and experience—our system generates 
            professional, personalized bios and templates that stand out in the job market.
          </p>
          <div className="flex justify-center">
            <img
              src="https://via.placeholder.com/600x400"
              alt="AI Generated Resume Example"
              className="rounded-lg shadow-lg hover:scale-105 transition transform duration-300"
            />
          </div>
        </section>

        {/* Call to Action */}
        <div className="mt-12 text-center">
          <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-4">
            Let VR Solutions bring your ideas to life.
          </h3>
          <p className="text-lg mb-6">
            Whether you're looking to build a resume, create a website, or explore cloud services, 
            we're here to help. Get in touch today to get started!
          </p>
          <button className="px-6 py-3 bg-blue-600 dark:bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 dark:hover:bg-blue-400 transition duration-200">
            Contact Us
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
