import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Login = () => {
  const [email, emailchange] = useState("");
  const [password, passwordchange] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    sessionStorage.clear();
  }, []);

  const ProceedLogin = (e) => {
    e.preventDefault();
    if (validate()) {
      axios.post('http://localhost:3001/login', { email, password })
        .then((resp) => {
          //console.log(resp)
          if (Object.keys(resp).length === 0) {
            toast.error('Please Enter valid username');
          } else {
            if (resp.password === password) {
              toast.success('Success');
              sessionStorage.setItem('email', email);
              sessionStorage.setItem('userrole', resp.role);
              navigate('/list')
            } else {
              toast.error('Please Enter valid credentials');
            }
          }
        }).catch((err) => {
          toast.error('Login Failed due to :' + err.message);
        });


      ///implimentation
      // console.log('proceed');

      //   fetch("http://localhost:8000/user/" + email)
      //     .then((res) => {
      //       return res.json();
      //     })
      //     .then((resp) => {
      //       // console.log(resp)
      //       if (Object.keys(resp).length === 0) {
      //         toast.error("Please Enter valid username");
      //       } else {
      //         if (resp.password === password) {
      //           toast.success("Success");
      //           sessionStorage.setItem("email", email);
      //           usenavigate("/");
      //         } else {
      //           toast.error("Please Enter valid password");
      //         }
      //       }
      //     })
      //     .catch((err) => {
      //       toast.error("Login Failed due to :" + err.message);
      //     });
    }
  };
  const validate = () => {
    let result = true;
    if (email === "" || email === null) {
      result = false;
      toast.warning("Please Enter Email");
    }
    if (password === "" || password === null) {
      result = false;
      toast.warning("Please Enter Password");
    }
    return result;
  };

  return (
    <div className="row">
      <div className="offset-lg-3 col-lg-6" style={{ marginTop: '100px' }}>
        <form onSubmit={ProceedLogin} className="container">
          <div className="card">
            <div className="card-header">
              <h2>User Login</h2>
            </div>
            <br />
            <div className="card-body">
              <div className="form-group">
                <label>
                  Email <span className="errmsg">*</span>
                </label>
                <input
                  value={email}
                  onChange={(e) => emailchange(e.target.value)}
                  className="form-control"
                ></input>
              </div>
              <br />
              <div className="form-group">
                <label>
                  Password <span className="errmsg">*</span>
                </label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => passwordchange(e.target.value)}
                  className="form-control"
                ></input>
              </div>
            </div>
            <br />
            <div className="card-footer">
              <button type="submit" className="btn btn-primary">
                {" "}
                Login{" "}
              </button>{" "}
              |
              <Link className="btn btn-success" to={"/register"}>
                {" "}
                New User
              </Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;