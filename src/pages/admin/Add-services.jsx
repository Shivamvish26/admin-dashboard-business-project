import React from "react";
import { Link } from "react-router-dom";

export default function AddServices() {
  return (
    <div>
      <div className="container">
        <div className="shadow-sm p-3 rounded-3">
          <div className="d-flex align-items-center justify-content-between">
            <h4>Add Services</h4>
            <Link to="/admin/services" className="common__btn w-25">
              Back
            </Link>
          </div>
        </div>
        <div className="mt-3">
        
        </div>
      </div>
    </div>
  );
}
