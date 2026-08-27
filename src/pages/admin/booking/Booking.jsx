import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

export default function Booking() {
  const [bookingdata, setBookingyData] = useState([]);

  const handledelete = async (id) => {
    const confirmdelete = window.confirm(
      "Are you sure you want to delete this booking?",
    );
    if (!confirmdelete) return;
    try {
      const result = await fetch(`http://localhost:3000/api/booking/${id}`, {
        method: "DELETE",
      });
      const res = await result.json();
      console.log("Delete Response:", res);

      if (!result.ok) {
        throw new Error(res.message || "Failed to delete booking");
      }
      toast.success("Booking successfully deleted");
      setBookingyData((prevData) => prevData.filter((item) => item._id !== id));
    } catch (error) {
      console.log("Error while deleting the booking:", error);

      toast.error(error.message || "Error while deleting the booking");
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await fetch(
          "http://localhost:3000/api/booking/get-booking",
        );
        const data = await result.json();
        console.log("Booking API Response:", data);
        if (!result.ok) {
          throw new Error(data.message || "Failed to fetch bookings");
        }
        setBookingyData(data.booking || []);
      } catch (error) {
        console.log("Error while fetching booking:", error);
        toast.error(error.message || "Failed to fetch bookings");
      }
    };

    fetchData();
  }, []);

  return (
    <div className="container">
      <div className="shadow-sm p-3 rounded-3 bg-white">
        <div className="d-flex align-items-center justify-content-between">
          <h4 className="mb-0">Booking</h4>

          <Link
            to="/admin/booking/add-booking"
            className="common__btn text-decoration-none w-25"
          >
            Add Booking
          </Link>
        </div>
      </div>

      <div className="bg-white shadow-sm rounded-3 p-3 mt-3">
        <div className="table-responsive">
          <table className="table table-bordered table-hover align-middle mb-0">
            <thead className="table-light">
              <tr>
                <th>#</th>
                <th>Customer Name</th>
                <th>Phone</th>
                <th>Email</th>
                <th>Service</th>
                <th>Date</th>
                <th>Time</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>
              {bookingdata.length > 0 ? (
                bookingdata.map((booking, index) => (
                  <tr key={booking._id}>
                    <td>{index + 1}</td>

                    <td>
                      <strong>{booking.customerName}</strong>
                    </td>

                    <td>{booking.phone}</td>

                    <td>{booking.email}</td>

                    <td>{booking.service}</td>

                    <td>
                      {new Date(booking.preferredDate).toLocaleDateString()}
                    </td>

                    <td>{booking.preferredTime}</td>

                    <td>
                      <span
                        className={`badge ${
                          booking.status === "pending"
                            ? "text-bg-warning"
                            : booking.status === "confirmed"
                              ? "text-bg-success"
                              : booking.status === "cancelled"
                                ? "text-bg-danger"
                                : "text-bg-secondary"
                        }`}
                      >
                        {booking.status}
                      </span>
                    </td>

                    <td>
                      <div className="d-flex gap-2">
                        <Link
                          to={`/admin/booking/view-booking/${booking._id}`}
                          className="btn btn-sm btn-outline-primary"
                          title="View"
                        >
                          <i className="bi bi-eye"></i>
                        </Link>

                        <Link
                          to={`/admin/booking/edit-booking/${booking._id}`}
                          className="btn btn-sm btn-outline-warning"
                          title="Edit"
                        >
                          <i className="bi bi-pencil"></i>
                        </Link>

                        <button
                          type="button"
                          className="btn btn-sm btn-outline-danger"
                          title="Delete"
                          onClick={() => handledelete(booking._id)}
                        >
                          <i className="bi bi-trash"></i>
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="9" className="text-center py-4">
                    Booking Not Found
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
