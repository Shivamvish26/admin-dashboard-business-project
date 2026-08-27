import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export default function AddBooking() {
  const [customername, setCustomername] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [service, setService] = useState("");
  const [services, setServices] = useState([]);
  const [description, setDescription] = useState("");
  const [preferreddate, setPreferredDate] = useState("");
  const [preferredtime, setPreferredTime] = useState("");
  const [status, setStatus] = useState("pending");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const bookingData = {
        customerName: customername,
        phone,
        email,
        address,
        service,
        description,
        preferredDate: preferreddate,
        preferredTime: preferredtime,
        status,
      };
      console.log("Sendind Data....", bookingData);
      const response = await fetch(
        "http://localhost:3000/api/booking/create-booking",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(bookingData),
        },
      );
      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.message || "Failed to create booking");
      }
      toast.success("Services Added Successfully");
      setTimeout(() => {
        navigate("/admin/booking");
      }, 2000);
    } catch (error) {
      console.log("Faild to add the Booking", error);
      toast.error("Faild to Added the Booking");
    }
  };

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await fetch(
          "http://localhost:3000/api/service/get-services",
        );
        const data = await response.json();
        console.log("Services", data);
        if (!response.ok) {
          throw new Error(data.message || "Failed to fetch the services");
        }
        setServices(data.services || []);
      } catch (error) {
        console.log("Error while fetching the services", error);
        toast.error("Faild to fetch the Services");
      }
    };
    fetchServices();
  }, []);

  return (
    <div className="">
      <div className="shadow-sm p-3 rounded-3 bg-white">
        <div className="d-flex align-items-center justify-content-between">
          <h4 className="mb-0">Add Booking</h4>

          <Link
            to="/admin/booking"
            className="common__btn text-decoration-none w-25"
          >
            Back
          </Link>
        </div>
      </div>

      <div className="bg-white shadow-sm rounded-3 p-4 mt-3">
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Customer Name</label>

            <input
              type="text"
              className="form-control"
              placeholder="Enter Customer Name"
              value={customername}
              onChange={(e) => setCustomername(e.target.value)}
              required
            />
          </div>

          <div className="row">
            <div className="col-md-6 mb-3">
              <label className="form-label">Phone</label>

              <input
                type="text"
                className="form-control"
                placeholder="Enter Phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
              />
            </div>

            <div className="col-md-6 mb-3">
              <label className="form-label">Email</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
          </div>

          <div className="row">
            <div className="col-md-6 mb-3">
              <label className="form-label">Address</label>

              <input
                type="text"
                className="form-control"
                placeholder="Enter Address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />
            </div>
            <div className="col-md-6 mb-3">
              <label className="form-label">Service</label>
              <select
                className="form-select"
                value={service}
                onChange={(e) => setService(e.target.value)}
                required
              >
                <option value="">Select Service</option>
                {services.map((item) => (
                  <option key={item._id} value={item._id}>
                    {item.title}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="mb-3">
            <label className="form-label">Description</label>

            <textarea
              className="form-control"
              rows="5"
              placeholder="Enter Decription"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
            />
          </div>
          <div className="row">
            <div className="col-md-6 mb-3">
              <label className="form-label">Preferred Date</label>

              <input
                type="date"
                className="form-control"
                placeholder="Preferred Date"
                value={preferreddate}
                onChange={(e) => setPreferredDate(e.target.value)}
              />
            </div>
            <div className="col-md-6 mb-3">
              <label className="form-label">Preferred Time</label>

              <input
                type="time"
                className="form-control"
                placeholder="Preferred Time"
                value={preferredtime}
                onChange={(e) => setPreferredTime(e.target.value)}
              />
            </div>
          </div>

          <div className="mb-4">
            <label className="form-label">Status</label>

            <select
              className="form-select"
              value={status}
              onChange={(e) => setStatus(e.target.value)}
            >
              <option value="pending">Pending</option>
              <option value="confirmed">Confirmed</option>
              <option value="in-progress">In-progress</option>
              <option value="completed">Completed</option>
              <option value="cancelled">Cancelled</option>
            </select>
          </div>

          <button type="submit" className="common__btn w-25">
            Add Booking
          </button>
        </form>
      </div>
    </div>
  );
}
