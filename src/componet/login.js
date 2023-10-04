import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const Navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    const registeredUserData = JSON.parse(
      localStorage.getItem("registrationData")
    );
    if (registeredUserData === null || undefined) {
      alert("no Data Found in LocalStorage");
    }
    if (
      formData.email === registeredUserData.emailAddress &&
      formData.password === registeredUserData.password
    ) {
      Navigate("/");
    } else {
      alert("Login failed. Please check your credentials.");
    }
  };


  return (
    <section
      className="h-100 gradient-form"
      style={{ backgroundColor: "#eee" }}
    >
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-xl-10">
            <div className="card rounded-3 text-black">
              <div className="col-lg-12">
                <div className="card-body p-md-5 mx-md-4">
                  <form onSubmit={handleLogin}>
                    <h3>Please login to your account</h3>
                    <div className="form-outline mb-4">
                      <input
                        type="email"
                        id="form2Example11"
                        className="form-control"
                        placeholder="Email address"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                      />
                      <label className="form-label" htmlFor="form2Example11">
                        Email
                      </label>
                    </div>
                    <div className="form-outline mb-4">
                      <input
                        type="password"
                        id="form2Example22"
                        className="form-control"
                        placeholder="Password"
                        name="password"
                        value={formData.password}
                        onChange={handleInputChange}
                      />
                      <label className="form-label" htmlFor="form2Example22">
                        Password
                      </label>
                    </div>
                    <div className="text-center pt-1 mb-5 pb-1">
                      <button
                        className="btn btn-primary btn-block fa-lg gradient-custom-2 mb-3"
                        type="submit"
                      >
                        Log in
                      </button>
                    </div>
                    <div className="d-flex align-items-center justify-content-center pb-4">
                      <p className="mb-0 me-2">Don't have an account?</p>
                      <button
                        type="button"
                        className="btn btn-outline-danger"
                        onClick={() => Navigate("/signup")}
                      >
                        Create new
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
