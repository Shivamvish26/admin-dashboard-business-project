import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [eye, setEye] = useState(false);
  const [emailerror, setEmailerror] = useState(false);
  const navigate = useNavigate();

  const handleEmail = (e) => {
    const item = e.target.value;
    const emailregex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailregex.test(item)) {
      setEmailerror(true);
    } else {
      setEmailerror(false);
    }
    setEmail(item);
  };
  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      if (emailerror || !email) {
        toast.error("Please fix all the errors before submitting");
        return;
      }
      const result = await fetch("http://localhost:3000/api/admin/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          password,
        }),
      });
      const data = await result.json();
      console.log(data);
      if (result.ok) {
        toast.success("Admin registered successfully!");
        setName("");
        setEmail("");
        setPassword("");
        setTimeout(() => {
          navigate("/login");
        }, 1000);
      } else {
        toast.error(data.message || "Registration failed");
      }
    } catch (error) {
      console.error(error);
      toast.error("Error while registering admin");
    }
  };

  return (
    <div className="container-fluid min-vh-100 d-flex justify-content-center align-items-center">
      <div className="col-12 col-sm-8 col-md-5 col-lg-4">
        <form
          className="p-4 border rounded shadow-sm bg-white rounded-3"
          onSubmit={handleRegister}
        >
          <h3 className="text-center mb-4">Admin Register From</h3>

          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Name
            </label>

            <input
              type="text"
              className="form-control shadow-none"
              required
              id="name"
              placeholder="Enter your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email Address
            </label>

            <input
              type="email"
              className="form-control shadow-none"
              required
              id="email"
              placeholder="Enter your email"
              value={email}
              onChange={handleEmail}
            />
            <span className="text-danger">
              {emailerror ? "Please enter the vaild email" : ""}
            </span>
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Password
            </label>

            <div className="input-group">
              <input
                type={eye ? "text" : "password"}
                className="form-control shadow-none"
                id="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />

              <button
                type="button"
                className="btn border shadow-none"
                onClick={() => setEye(!eye)}
              >
                <i className={`bi ${eye ? "bi-eye-slash" : "bi-eye"}`}></i>
              </button>
            </div>
          </div>
          <div className="text-end mb-3">
            <Link
              to="/login"
              className="text-decoration-none text-dark text-end"
            >
              Already Have an Account?
            </Link>
          </div>

          <button type="submit" className="common__btn w-100">
            Register
          </button>
        </form>
      </div>
    </div>
  );
}
