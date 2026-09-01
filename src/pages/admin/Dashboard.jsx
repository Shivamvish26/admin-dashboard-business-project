import React from "react";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <div className="container-fluid">
      <div className="bg-white shadow-sm rounded-3 p-3 mb-3">
        <div className="d-flex justify-content-between align-items-center">
          <div>
            <h3 className="mb-1">
              {" "}
              Welcome,{" "}
              <strong className="text-uppercase">
                {user?.name || "Admin"}
              </strong>
            </h3>
            <p className="text-muted mb-0">
              Welcome to Furniture Polish Admin Panel
            </p>
          </div>
        </div>
      </div>

      <div className="row g-3">
        <div className="col-md-3">
          <div className="bg-white shadow-sm rounded-3 p-4">
            <div className="d-flex justify-content-between align-items-center">
              <div>
                <p className="text-muted mb-1">Total Services</p>

                <h3 className="mb-0">5</h3>
              </div>

              <div className="fs-2 text-primary">
                <i className="bi bi-gear"></i>
              </div>
            </div>
          </div>
        </div>

        {/* Gallery */}
        <div className="col-md-3">
          <div className="bg-white shadow-sm rounded-3 p-4">
            <div className="d-flex justify-content-between align-items-center">
              <div>
                <p className="text-muted mb-1">Total Gallery</p>

                <h3 className="mb-0">12</h3>
              </div>

              <div className="fs-2 text-primary">
                <i className="bi bi-images"></i>
              </div>
            </div>
          </div>
        </div>

        {/* Bookings */}
        <div className="col-md-3">
          <div className="bg-white shadow-sm rounded-3 p-4">
            <div className="d-flex justify-content-between align-items-center">
              <div>
                <p className="text-muted mb-1">Total Bookings</p>

                <h3 className="mb-0">24</h3>
              </div>

              <div className="fs-2 text-primary">
                <i className="bi bi-calendar-check"></i>
              </div>
            </div>
          </div>
        </div>

        {/* Enquiries */}
        <div className="col-md-3">
          <div className="bg-white shadow-sm rounded-3 p-4">
            <div className="d-flex justify-content-between align-items-center">
              <div>
                <p className="text-muted mb-1">New Enquiries</p>

                <h3 className="mb-0">8</h3>
              </div>

              <div className="fs-2 text-primary">
                <i className="bi bi-envelope"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
