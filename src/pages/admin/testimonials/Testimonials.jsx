import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

export default function Testimonials() {
  const [testimonialsdata, setTestimonialsdata] = useState([]);
  const [loading, setLoading] = useState(true);

  const handledelete = async (id) => {
    const confirmdelete = window.confirm(
      "Are you sure you want to delete this testimonial?",
    );
    if (!confirmdelete) return;
    try {
      const result = await fetch(
        `http://localhost:3000/api/testimonial/${id}`,
        {
          method: "DELETE",
        },
      );
      const res = await result.json();
      console.log("Delete Response:", res);
      if (!result.ok) {
        throw new Error(res.message || "Failed to delete testimonial");
      }
      toast.success("Testimonial successfully deleted");
      setTestimonialsdata((prevData) =>
        prevData.filter((item) => item._id !== id),
      );
    } catch (error) {
      console.log("Error while deleting the testimonial:", error);
      toast.error(error.message || "Error while deleting the testimonial");
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);

        const result = await fetch(
          "http://localhost:3000/api/testimonial/get-testimonial",
          {
            headers: {
              "Content-Type": "application/json",
            },
          },
        );

        const data = await result.json();

        console.log("Testimonials Data:", data);

        if (!result.ok) {
          throw new Error(data.message || "Failed to fetch testimonials");
        }

        // API response ke according
        setTestimonialsdata(data.testimonial || []);
      } catch (error) {
        console.log("Error while fetching testimonials data:", error);

        toast.error(error.message || "Failed to fetch testimonials");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="container">
      {/* Header */}
      <div className="shadow-sm p-3 rounded-3 bg-white">
        <div className="d-flex align-items-center justify-content-between">
          <h4 className="mb-0">Testimonials</h4>

          {/* <Link
            to="/admin/testimonials/add-testimonials"
            className="common__btn text-decoration-none w-25"
          >
            Add Testimonial
          </Link> */}
        </div>
      </div>

      {/* Table */}
      <div className="bg-white shadow-sm rounded-3 p-3 mt-3">
        <div className="table-responsive">
          <table className="table table-bordered table-hover align-middle mb-0">
            <thead className="table-light">
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Designation</th>
                <th>Message</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>
              {loading ? (
                <tr>
                  <td colSpan="6" className="text-center py-4">
                    Loading Testimonials...
                  </td>
                </tr>
              ) : testimonialsdata.length > 0 ? (
                testimonialsdata.map((testimonial, index) => (
                  <tr key={testimonial._id}>
                    {/* Number */}
                    <td>{index + 1}</td>

                    {/* Name */}
                    <td>
                      <strong>{testimonial.name}</strong>
                    </td>

                    {/* Designation */}
                    <td>{testimonial.designation}</td>

                    {/* Message */}
                    <td>
                      <span title={testimonial.message}>
                        {testimonial.message?.length > 50
                          ? `${testimonial.message.substring(0, 50)}...`
                          : testimonial.message}
                      </span>
                    </td>

                    {/* Status */}
                    <td>
                      <span
                        className={`badge ${
                          testimonial.status === "new"
                            ? "text-bg-primary"
                            : testimonial.status === "read"
                              ? "text-bg-warning"
                              : testimonial.status === "replied"
                                ? "text-bg-success"
                                : testimonial.status === "closed"
                                  ? "text-bg-dark"
                                  : "text-bg-secondary"
                        }`}
                      >
                        {testimonial.status}
                      </span>
                    </td>

                    {/* Action */}
                    <td>
                      <div className="d-flex gap-2">
                        {/* <Link
                          to={`/admin/testimonials/view-testimonial/${testimonial._id}`}
                          className="btn btn-sm btn-outline-primary"
                          title="View"
                        >
                          <i className="bi bi-eye"></i>
                        </Link>
                        <Link
                          to={`/admin/testimonials/edit-testimonial/${testimonial._id}`}
                          className="btn btn-sm btn-outline-warning"
                          title="Edit"
                        >
                          <i className="bi bi-pencil"></i>
                        </Link> */}

                        <button
                          type="button"
                          className="btn btn-sm btn-outline-danger"
                          title="Delete"
                          onClick={() => handledelete(testimonial._id)}
                        >
                          <i className="bi bi-trash"></i>
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="6" className="text-center py-4">
                    No Testimonials Found
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
