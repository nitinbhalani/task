import React, { useState } from "react";
import {useNavigate} from 'react-router-dom'
const Register = () => {
  const Navigate = useNavigate()
  const [formData, setFormData] = useState({
    firstName: "",
    birthdayDate: "",
    gender: "female", 
    emailAddress: "",
    phoneNumber: "",
    password:""
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("registrationData", JSON.stringify(formData));
    alert("Form data saved in local storage!");
    if(localStorage.getItem("registrationData")){
      Navigate("/login")
      window.location.reload()
    }

  };

  return (
    <section className="vh-100 gradient-custom">
      <div className="container py-5 h-100">
        <div className="row justify-content-center align-items-center h-100">
          <div className="col-12 col-lg-9 col-xl-7">
            <div
              className="card shadow-2-strong card-registration"
              style={{ borderRadius: 15 }}
            >
              <div className="card-body p-4 p-md-5">
                <h3 className="mb-4 pb-2 pb-md-0 mb-md-5">Registration Form</h3>
                <form onSubmit={handleSubmit}>
                  <div className="row">
                    <div className="col-md-6 mb-4">
                      <div className="form-outline">
                        <input
                          type="text"
                          id="firstName"
                          className="form-control form-control-lg"
                          name="firstName"
                          value={formData.firstName}
                          onChange={handleInputChange}
                        />
                        <label className="form-label" htmlFor="firstName">
                          Full Name
                        </label>
                      </div>
                    </div>
                   
                  </div>
                  <div className="row">
                    <div className="col-md-6 mb-4 d-flex align-items-center">
                      <div className="form-outline datepicker w-100">
                        <input
                          type="date"
                          className="form-control form-control-lg"
                          id="birthdayDate"
                          name="birthdayDate"
                          value={formData.birthdayDate}
                          onChange={handleInputChange}
                        />
                        <label htmlFor="birthdayDate" className="form-label">
                          Birthday
                        </label>
                      </div>
                    </div>
                    <div className="col-md-6 mb-4">
                      <h6 className="mb-2 pb-1">Gender: </h6>
                      <div className="form-check form-check-inline">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="gender"
                          id="femaleGender"
                          value="female"
                          checked={formData.gender === "female"}
                          onChange={handleInputChange}
                        />
                        <label
                          className="form-check-label"
                          htmlFor="femaleGender"
                        >
                          Female
                        </label>
                      </div>
                      <div className="form-check form-check-inline">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="gender"
                          id="maleGender"
                          value="male"
                          checked={formData.gender === "male"}
                          onChange={handleInputChange}
                        />
                        <label
                          className="form-check-label"
                          htmlFor="maleGender"
                        >
                          Male
                        </label>
                      </div>
                      <div className="form-check form-check-inline">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="gender"
                          id="otherGender"
                          value="other"
                          checked={formData.gender === "other"}
                          onChange={handleInputChange}
                        />
                        <label
                          className="form-check-label"
                          htmlFor="otherGender"
                        >
                          Other
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6 mb-4 pb-2">
                      <div className="form-outline">
                        <input
                          type="email"
                          id="emailAddress"
                          className="form-control form-control-lg"
                          name="emailAddress"
                          value={formData.emailAddress}
                          onChange={handleInputChange}
                        />
                        <label className="form-label" htmlFor="emailAddress">
                          Email
                        </label>
                      </div>
                    </div>
                    <div className="row">
                    <div className="col-md-6 mb-4 pb-2">
                      <div className="form-outline">
                        <input
                          type="password"
                          id="password"
                          className="form-control form-control-lg"
                          name="password"
                          value={formData.password}
                          onChange={handleInputChange}
                        />
                        <label className="form-label" htmlFor="emailAddress">
                          Password
                        </label>
                      </div>
                    </div>
                    </div>
                    <div className="col-md-6 mb-4 pb-2">
                      <div className="form-outline">
                        <input
                          type="tel"
                          id="phoneNumber"
                          className="form-control form-control-lg"
                          name="phoneNumber"
                          value={formData.phoneNumber}
                          onChange={handleInputChange}
                        />
                        <label className="form-label" htmlFor="phoneNumber">
                          Phone Number
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="mt-4 pt-2">
                    <input
                      className="btn btn-primary btn-lg"
                      type="submit"
                      value="Submit"
                    />
                  </div>
                  <div className="d-flex align-items-center justify-content-center pb-4">
                      <p className="mb-0 me-2">You have an account?</p>
                      <button type="button" className="btn btn-outline-danger" onClick={()=>Navigate('/login')}>
                        Log in
                      </button>
                    </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};


export default Register

