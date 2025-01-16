import { useContext } from 'react';
import Navbar from '../../components/navbar/navbar'; // Make sure the Navbar component is correctly imported
import '../layout/layout.scss'; // Ensure your CSS or SCSS is correct
import { Outlet, Navigate } from "react-router-dom"; // Importing necessary React Router components
import { AuthContext } from '../../context/AuthContext'; // Your custom AuthContext for authentication

// This component is the default layout for all routes
function Layout() {
  return (
    <div className="layout">
      <div className="navbar">
        <Navbar />
      </div>
      <div className="content">
        <Outlet /> {/* This will render the child route components */}
      </div>
    </div>
  );
}

// This component ensures that a user must be authenticated to access certain routes
function RequireAuth() {
  const { currentUser } = useContext(AuthContext); // Getting currentUser from context

  return currentUser ? (
    // If user is authenticated, render the layout with child routes
    <div className="layout">
      <div className="navbar">
        <Navbar />
      </div>
      <div className="content">
        <Outlet /> {/* This will render the child route components */}
      </div>
    </div>
  ) : (
    // If user is not authenticated, redirect to login page
    <Navigate to="/login" />
  );
}

export default Layout;
export { RequireAuth };
