import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { toast } from "react-toastify";

export default function ViewBooking() {
  const { id } = useParams();

  const [bookingdata, setBookingData] = useState(null);
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchBooking = async () => {
      try {
        setLoading(true);
        const response = await fetch(`http://localhost:3000/api/booking/${id}`);
        const data = await response.json();
        console.log("Single Booking Fetched:", data);
        if (!response.ok) {
          throw new Error(data.message || "Failed to fetch the booking");
        }
        setBookingData(data.booking);
      } catch (error) {
        console.log("Error while fetching the booking:", error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchBooking();
  }, [id]);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await fetch(
          "http://localhost:3000/api/service/get-services",
        );
        const data = await response.json();
        console.log("Services:", data);

        if (!response.ok) {
          throw new Error(data.message || "Failed to fetch the services");
        }
        setServices(data.services || []);
      } catch (error) {
        console.log("Error while fetching the services:", error);
        toast.error("Failed to fetch the Services");
      }
    };

    fetchServices();
  }, []);

  if (loading) {
    return (
      <div className="container mt-4">
        <div className="bg-white shadow-sm rounded-3 p-4 text-center">
          <h5 className="mb-0">Loading Booking...</h5>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container mt-4">
        <div className="alert alert-danger">{error}</div>
      </div>
    );
  }

  if (!bookingdata) {
    return (
      <div className="container mt-4">
        <div className="alert alert-warning">Booking not found</div>
      </div>
    );
  }

  const selectedService = services.find(
    (item) => item._id === bookingdata.service,
  );

  return (
    <div className="">
      <div className="shadow-sm p-3 rounded-3 bg-white">
        <div className="d-flex align-items-center justify-content-between">
          <h4 className="mb-0">View Booking</h4>

          <Link
            to="/admin/booking"
            className="common__btn text-decoration-none w-25"
          >
            Back
          </Link>
        </div>
      </div>

      <div className="bg-white shadow-sm rounded-3 p-4 mt-3">
        <div className="mb-3">
          <label className="form-label">Customer Name</label>

          <input
            type="text"
            className="form-control"
            value={bookingdata.customerName || ""}
            readOnly
            disabled
          />
        </div>

        <div className="row">
          <div className="col-md-6 mb-3">
            <label className="form-label">Phone</label>

            <input
              type="text"
              className="form-control"
              value={bookingdata.phone || ""}
              disabled
            />
          </div>

          <div className="col-md-6 mb-3">
            <label className="form-label">Email</label>

            <input
              type="text"
              className="form-control"
              value={bookingdata.email || ""}
              disabled
            />
          </div>
        </div>

        <div className="row">
          <div className="col-md-6 mb-3">
            <label className="form-label">Address</label>

            <input
              type="text"
              className="form-control"
              value={bookingdata.address || ""}
              disabled
            />
          </div>

          <div className="col-md-6 mb-3">
            <label className="form-label">Service</label>

            <select
              className="form-select"
              value={bookingdata.service || ""}
              disabled
            >
              <option value="">Select Service</option>

              {services.map((item) => (
                <option key={item._id} value={item._id}>
                  {item.title}
                </option>
              ))}
            </select>

            {selectedService && (
              <small className="text-muted">
                Selected Service: {selectedService.title}
              </small>
            )}
          </div>
        </div>

        <div className="mb-3">
          <label className="form-label">Description</label>

          <textarea
            className="form-control"
            rows="5"
            value={bookingdata.description || ""}
            disabled
          />
        </div>

        <div className="row">
          <div className="col-md-6 mb-3">
            <label className="form-label">Preferred Date</label>

            <input
              type="date"
              className="form-control"
              value={
                bookingdata.preferredDate
                  ? bookingdata.preferredDate.split("T")[0]
                  : ""
              }
              disabled
            />
          </div>

          <div className="col-md-6 mb-3">
            <label className="form-label">Preferred Time</label>

            <input
              type="time"
              className="form-control"
              value={bookingdata.preferredTime || ""}
              disabled
            />
          </div>
        </div>

        <div className="mb-4">
          <label className="form-label">Status</label>

          <select
            className="form-select"
            value={bookingdata.status || ""}
            disabled
          >
            <option value="pending">Pending</option>

            <option value="confirmed">Confirmed</option>

            <option value="in-progress">In-progress</option>

            <option value="completed">Completed</option>

            <option value="cancelled">Cancelled</option>
          </select>
        </div>
      </div>
    </div>
  );
}
