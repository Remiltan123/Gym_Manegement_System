import React, { useState } from 'react';
import gym from '../../Assets/GYM1.png';
import { useNavigate } from 'react-router-dom';

export const Login = () => {
  const [state, SetState] = useState("Login");
  const navigate = useNavigate();

  const [formdata, SetFormdata] = useState({
    name: "",
    email: "",
    password: ""
  });

  

  const HandleSubmit = (e) => {
    const { name, value } = e.target;
    SetFormdata({ ...formdata, [name]: value });
  };

  
  const PostAdmin = async (e) => {
    e.preventDefault();

    // Frontend validation
    if (!formdata.name || !formdata.email || !formdata.password) {
      alert("Please fill in all the required fields.....");
      return;
    }

    try {
      const response = await fetch("http://localhost:8080/Admin/Resgister", { // Fixed spelling of "Register"
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formdata)
      });

      if (response.ok) {
        alert("Added successfully");
        SetState("Login"); // Switch back to Login page
      } else {
        const errorMessage = await response.text(); // Get error message from response
        alert("An error occurred: " + errorMessage);
      }
    } catch (error) {
      console.error("Error occurred while saving data:", error);
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    // Frontend validation
    if (!formdata.email || !formdata.password) {
      alert("Please fill in all the required fields.");
      return;
    }

    try {
      const response = await fetch("http://localhost:8080/Admin/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formdata)
      });

      if (response.ok) {
        const message = await response.text(); 
        alert(message);
        navigate('/Admin')
        
        // You might want to redirect or store some login state here
      } else {
        const errorMessage = await response.text(); // Get error message from response
        alert("Login failed: " + errorMessage);
      }
    } catch (error) {
      console.error("Error occurred during login:", error);
      alert("An error occurred while logging in.");
    }
  };

  return (
    <div className="container vh-100 d-flex justify-content-center align-items-center">
      <div className="row w-100">
        <div className="col-md-6 d-none d-md-block">
          <img src={gym} alt="Gym" className="img-fluid" style={{ height: '100vh', objectFit: 'cover' }} />
        </div>

        <div className="col-md-6 d-flex justify-content-center align-items-center">
          {state === "Login" && (
            <div className="w-100 px-4 py-5 shadow-lg rounded" style={{ maxWidth: '400px', backgroundColor: '#f8f9fa' }}>
              <h2 className="text-center mb-4">Login</h2>
              <form onSubmit={handleLogin}>
                <div className="form-group mb-3">
                  <label htmlFor="login-email">Email address</label>
                  <input
                    type="email"
                    className="form-control"
                    id="login-email"
                    placeholder="Enter your email"
                    name='email'
                    value={formdata.email}
                    onChange={HandleSubmit}
                    required
                  />
                </div>

                <div className="form-group mb-3">
                  <label htmlFor="login-password">Password</label>
                  <input
                    type="password"
                    className="form-control"
                    id="login-password"
                    placeholder="Enter your password"
                    name='password'
                    value={formdata.password}
                    onChange={HandleSubmit}
                    required
                  />
                </div>

                <button type="submit" className="btn btn-primary w-100 mb-3">Login</button>

                <div className="text-center">
                  <small>
                    Don't have an account? <button type="button" onClick={() => { SetState("SignUp") }}>Register here</button>
                  </small>
                </div>
              </form>
            </div>
          )}

          {state === "SignUp" && (
            <div className="w-100 px-4 py-5 shadow-lg rounded" style={{ maxWidth: '400px', backgroundColor: '#f8f9fa' }}>
              <h2 className="text-center mb-4">Sign Up</h2>
              <form onSubmit={PostAdmin}>
                <div className="form-group mb-3">
                  <label htmlFor="name">Username</label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    placeholder="Enter your name"
                    required
                    name='name'
                    value={formdata.name}
                    onChange={HandleSubmit}
                  />
                </div>

                <div className="form-group mb-3">
                  <label htmlFor="signUp-email">Email address</label>
                  <input
                    type="email"
                    className="form-control"
                    id="signUp-email"
                    placeholder="Enter your email"
                    name='email'
                    value={formdata.email}
                    onChange={HandleSubmit}
                    required
                  />
                </div>

                <div className="form-group mb-3">
                  <label htmlFor="signUp-password">Password</label>
                  <input
                    type="password"
                    className="form-control"
                    id="signUp-password"
                    placeholder="Enter your password"
                    name='password'
                    value={formdata.password}
                    onChange={HandleSubmit}
                    required
                  />
                </div>

                <button type="submit" className="btn btn-primary w-100 mb-3">Sign Up</button>

                <div className="text-center">
                  <small>
                    Already have an account? <button type="button" onClick={() => { SetState("Login") }}>Login here</button>
                  </small>
                </div>
              </form>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
