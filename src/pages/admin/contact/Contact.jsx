import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

export default function Contact() {
  const [contactdata, setContactData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);

        const result = await fetch(
          "http://localhost:3000/api/contact/get-contact",
          {
            headers: {
              "Content-Type": "application/json",
            },
          },
        );

        const data = await result.json();

        console.log("Contact Data:", data);

        if (!result.ok) {
          throw new Error(data.message || "Failed to fetch contact data");
        }

        setContactData(data.contact || []);
      } catch (error) {
        console.log("Error while fetching contact data:", error);
        toast.error(error.message || "Failed to fetch contacts");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="container">
      <div className="shadow-sm p-3 rounded-3 bg-white">
        <div className="d-flex align-items-center justify-content-between">
          <h4 className="mb-0">Contact</h4>

          {/* <Link
            to="/admin/contact/add-contact"
            className="common__btn text-decoration-none w-25"
          >
            Add Contact
          </Link> */}
        </div>
      </div>

      <div className="bg-white shadow-sm rounded-3 p-3 mt-3">
        <div className="table-responsive">
          <table className="table table-bordered table-hover align-middle mb-0">
            <thead className="table-light">
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Phone</th>
                <th>Email</th>
                <th>Subject</th>
                <th>Message</th>
                <th>Status</th>
                {/* <th>Action</th> */}
              </tr>
            </thead>

            <tbody>
              {loading ? (
                <tr>
                  <td colSpan="8" className="text-center py-4">
                    Loading Contacts...
                  </td>
                </tr>
              ) : contactdata.length > 0 ? (
                contactdata.map((contact, index) => (
                  <tr key={contact._id}>
                    <td>{index + 1}</td>

                    <td>
                      <strong>{contact.name}</strong>
                    </td>

                    <td>{contact.phone}</td>

                    <td>{contact.email}</td>

                    <td>{contact.subject}</td>

                    <td>
                      <span title={contact.message}>
                        {contact.message?.length > 40
                          ? `${contact.message.substring(0, 40)}...`
                          : contact.message}
                      </span>
                    </td>

                    <td>
                      <span
                        className={`badge ${
                          contact.status === "new"
                            ? "text-bg-primary"
                            : contact.status === "read"
                              ? "text-bg-warning"
                              : contact.status === "replied"
                                ? "text-bg-success"
                                : "text-bg-secondary"
                        }`}
                      >
                        {contact.status}
                      </span>
                    </td>

                    {/* <td>
                      <div className="d-flex gap-2">
                        <Link
                          to={`/admin/contact/view-contact/${contact._id}`}
                          className="btn btn-sm btn-outline-primary"
                          title="View"
                        >
                          <i className="bi bi-eye"></i>
                        </Link>
                      </div>
                    </td> */}
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="8" className="text-center py-4">
                    No Contact Enquiry Found
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
