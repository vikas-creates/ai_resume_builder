import React from 'react'
import { Link } from 'react-router-dom'
const Footer = () => {
  return (
    <div>
        {/* Footer */}
      <footer className="bg-gray-800 dark:bg-gray-900 text-white py-6">
        <div className="max-w-7xl mx-auto text-center">
          <p>&copy; 2024 VR Solutions. All rights reserved.</p>
          <div className="mt-2">
            <Link to="/contact" className="text-blue-400 hover:text-blue-500">
              Contact Us
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer