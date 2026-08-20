import React from "react";
import { Link } from "react-router-dom";

export default function Gallery() {
  const gallery = [
    {
      id: "01",
      title: "Wooden Door Polish",
      category: "Door",
      description:
        "Old wooden door polished",
       service :"6a7dadaa7c9753e99afbf8d5",
      beforeImage: "",
      afterImage: "",
      status: "active",
    },
  ];

  return (
    <div className="container">
      <div className="shadow-sm p-3 rounded-3 bg-white">
        <div className="d-flex align-items-center justify-content-between">
          <h4 className="mb-0">Gallery</h4>

          <Link
            to="/admin/gallery/add-gallery"
            className="common__btn text-decoration-none w-25"
          >
            Add Gallery
          </Link>
        </div>
      </div>

      <div className="bg-white shadow-sm rounded-3 p-3 mt-3">
        <div className="table-responsive">
          <table className="table table-bordered table-hover align-middle mb-0">
            <thead className="table-light">
              <tr>
                <th>#</th>
                <th>Title</th>
                <th>Description</th>
                <th>Before Image</th>
                <th>After Price</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>
              {gallery.length > 0 ? (
                gallery.map((gallery, index) => (
                  <tr key={gallery.id}>
                    <td>{index + 1}</td>

                    <td>
                      <strong>{gallery.title}</strong>
                    </td>

                    <td>
                      <span title={gallery.description}>
                        {gallery.description.length > 40
                          ? `${gallery.description.substring(0, 40)}...`
                          : gallery.description}
                      </span>
                    </td>

                    <td>
                      {gallery.beforeImage ? (
                        <img
                          src={gallery.beforeImage}
                          alt={gallery.title}
                          width="60"
                          height="60"
                          style={{
                            objectFit: "cover",
                            borderRadius: "6px",
                          }}
                        />
                      ) : (
                        <span className="text-muted">No Image</span>
                      )}
                    </td>
                    <td>
                      {gallery.afterImage ? (
                        <img
                          src={gallery.afterImage}
                          alt={gallery.title}
                          width="60"
                          height="60"
                          style={{
                            objectFit: "cover",
                            borderRadius: "6px",
                          }}
                        />
                      ) : (
                        <span className="text-muted">No Image</span>
                      )}
                    </td>

                    <td>
                      <span
                        className={`badge ${
                          gallery.status === "active"
                            ? "text-bg-success"
                            : "text-bg-secondary"
                        }`}
                      >
                        {gallery.status}
                      </span>
                    </td>

                    <td>
                      <div className="d-flex gap-2">
                        <Link
                          to={`/admin/gallerys/view-gallery/${gallery.id}`}
                          className="btn btn-sm btn-outline-primary"
                          title="View"
                        >
                          <i className="bi bi-eye"></i>
                        </Link>

                        <Link
                          to={`/admin/gallerys/edit-gallery/${gallery.id}`}
                          className="btn btn-sm btn-outline-warning"
                          title="Edit"
                        >
                          <i className="bi bi-pencil"></i>
                        </Link>

                        <button
                          type="button"
                          className="btn btn-sm btn-outline-danger"
                          title="Delete"
                          onClick={() =>
                            console.log("Delete gallery:", gallery.id)
                          }
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
                    No Gallery Found
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
