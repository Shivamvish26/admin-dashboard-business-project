import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <aside className="admin-sidebar">
      <div className="sidebar-logo">Furniture Polish</div>

      <nav className="sidebar-menu">
        <Link to="/admin">Dashboard</Link>

        <Link to="/admin/services">Services</Link>

        <Link to="/admin/gallery">Gallery</Link>

        <Link to="/admin/booking">Bookings</Link>

        <Link to="/admin/contact">Contact</Link>

        <Link to="/admin/testimonials">Testimonials</Link>

        {/* <Link to="/admin/faqs">FAQs</Link> */}
      </nav>

    </aside>
  );
};

export default Sidebar;
