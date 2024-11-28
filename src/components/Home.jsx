import React from "react";
import { Link } from "react-router-dom"; // Assuming you're using react-router for navigation

const Home = () => {
  return (
    <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-500 to-indigo-500 py-20 px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 bg-black opacity-30"></div>
        <div className="relative z-10 max-w-7xl mx-auto text-center">
          <h1 className="text-5xl font-extrabold text-white">
            Build Your Dream Resume in Minutes
          </h1>
          <p className="mt-4 text-lg text-white">
            Create professional resumes with customizable templates and AI-powered bios to impress employers.
          </p>
          <Link
            to="/signup"
            className="mt-6 inline-block text-white bg-blue-600 hover:bg-blue-700 py-2 px-4"
          >
            Get Started
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white">Features</h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
            Discover the features that make our resume builder stand out.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Feature 1 */}
          <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Easy to Use</h3>
            <p className="mt-4 text-gray-600 dark:text-gray-300">
              Simple forms to input your data and instantly generate a resume that looks professional.
            </p>
          </div>
          {/* Feature 2 */}
          <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Customizable Templates</h3>
            <p className="mt-4 text-gray-600 dark:text-gray-300">
              Choose from a variety of templates, whether you're a fresher or an experienced professional.
            </p>
          </div>
          {/* Feature 3 */}
          <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">AI-Generated Bio</h3>
            <p className="mt-4 text-gray-600 dark:text-gray-300">
              Let our AI generate a compelling bio for you based on the details you provide.
            </p>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-16 bg-gray-100 dark:bg-gray-700">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white">Trust us!!</h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
            We are a passionate team committed to helping you create professional resumes that stand out.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Home;
