import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Login() {
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

  const handlelogin = (e) => {
    e.preventDefault();
    console.log("your Email is.....", email);
    console.log("Your Password is....", password);
    localStorage.setItem("admin", "true");
    setEmail("");
    setPassword("");
    navigate("/admin");
  };

  return (
    <div className="container-fluid min-vh-100 d-flex justify-content-center align-items-center">
      <div className="col-12 col-sm-8 col-md-5 col-lg-4">
        <form
          className="p-4 border rounded shadow-sm bg-white rounded-3"
          onSubmit={handlelogin}
        >
          <h3 className="text-center mb-4">Admin Login</h3>

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
          <div className="d-flex align-items-center justify-content-between mb-3">
            <Link
              to="/forget-password"
              className="text-decoration-none text-dark"
            >
              Forget Password?
            </Link>
            <Link to="/register" className="text-decoration-none text-dark">
              Register here?
            </Link>
          </div>

          <button type="submit" className="common__btn w-100">
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
