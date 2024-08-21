import React from 'react';
import { Outlet, NavLink, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();

  return (
    <div className="bg-transparent w-auto">
      <nav className="px-4 md:px-10 flex justify-center items-center">
        <div className="text-xl md:text-3xl font-black text-center text-gray-800 ">
          <ul className="flex justify-center -mb-px border-gray-800 flex-wrap">
            <li>
              <NavLink
                to="/Summary"
                className={`inline-block md:px-10 md:py-4 px-3 py-2  border-b-8 rounded-t-lg hover:text-gray-600 ${
                  location.pathname === '/Summary' ? 'text-blue-500 border-blue-500' : 'border-gray-800'
                }`}
                aria-current={location.pathname === '/Summary' ? 'page' : undefined}
              >
                Summary
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/Markets"
                className={`inline-block md:px-10 md:py-4 px-3 py-2 border-b-8 rounded-t-lg hover:text-gray-600 ${
                  location.pathname === '/Markets' ? 'text-blue-500 border-blue-500' : 'border-gray-800'
                }`}
                aria-current={location.pathname === '/Markets' ? 'page' : undefined}
              >
                Markets
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/Social"
                className={`inline-block md:px-10 md:py-4 px-3 py-2 border-b-8 rounded-t-lg hover:text-gray-600 ${
                  location.pathname === '/Social' ? 'text-blue-500 border-blue-500' : 'border-gray-800'
                }`}
                aria-current={location.pathname === '/Social' ? 'page' : undefined}
              >
                Social
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/EducationalCourses"
                className={`inline-block md:px-10 md:py-4 px-3 py-2 border-b-8 rounded-t-lg hover:text-gray-600 ${
                  location.pathname === '/EducationalCourses' ? 'text-blue-500 border-blue-500' : 'border-gray-800'
                }`}
                aria-current={location.pathname === '/EducationalCourses' ? 'page' : undefined}
              >
                Educational Courses
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/AnalyticsReports"
                className={`inline-block md:px-10 md:py-4 px-3 py-2 border-b-8 rounded-t-lg hover:text-gray-600 ${
                  location.pathname === '/AnalyticsReports' ? 'text-blue-500 border-blue-500' : 'border-gray-800'
                }`}
                aria-current={location.pathname === '/AnalyticsReports' ? 'page' : undefined}
              >
                Analytics Reports
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
      <Outlet />
    </div>
  );
};

export default Navbar;
