import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from 'axios';
import { addUser, editUser } from "../redux/userSlice";
import { useDispatch, useSelector } from "react-redux";


const EmpEdit = () => {
  const { id } = useParams();
  const users = useSelector(state => state.users.users)
  const user = users.find(u => u.id === id)
  console.log(user)

  // const[empdata,empdatachange]=useState({})
  // const [id, idchange] = useState("");
  const [fullname, namechange] = useState("");
  const [email, emailchange] = useState("");
  const [phone, phonechange] = useState("");
  const [position, positionchange] = useState("");
  const [bio, biochange] = useState("");
  const [empnumber, empnumberchange] = useState("");
  const [dob, setDob] = useState("");
  const [active, activechange] = useState(true);
  const [validation, valchange] = useState(true);


  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleEdit = (e) => {
    e.preventDefault();
    axios.put("http://localhost:3005/edit/" + id, { fullname, email, phone, position, bio, empnumber, dob, active})
    .then(res => {
        dispatch(editUser({id, fullname, email, phone, position}))
        navigate('/')
    })
    .catch(err => console.log(err))
  };

  // useEffect(() => {
  //   fetch("")
  //     .then((res) => {
  //       return res.json();
  //     })
  //     .then((resp) => {
  //       // idchange(resp.id);
  //       namechange(resp.fullname);
  //       emailchange(resp.email);
  //       phonechange(resp.phone);
  //       positionchange(resp.position);
  //       biochange(resp.bio);
  //       empnumberchange(resp.empnumber);
  //       setDob(resp.dob);
  //       activechange(resp.isactive);
  //     })
  //     .catch((err) => {
  //       console.log(err.message);
  //     });
  // }, []);

  // const handlesubmit = (e) => {
  //   e.preventDefault();
  //   const empdata = { id, name, email, phone, position, bio, empnumber, dob,  active };

  //   fetch("http://localhost:8000/employee/" + empid, {
  //     method: "PUT",
  //     headers: { "content-type": "application/json" },
  //     body: JSON.stringify(empdata),
  //   })
  //     .then((res) => {
  //       alert("Saved successfully.");
  //       navigate("/");
  //     })
  //     .catch((err) => {
  //       console.log(err.message);
  //     });
  // };

  return (
    <div>
      <div className="row">
        <div className="offset-lg-3 col-lg-6">
          <form className="container" onSubmit={handleEdit}>
            <div className="card" style={{ textAlign: "left" }}>
              <div className="card-title">
                <h2>Edit Employee</h2>
              </div>
              <div className="card-body">
                <div className="row">
                  <div className="col-lg-12">
                    <div className="form-group">
                      <label>ID</label>
                      <input
                        value={id}
                        disabled="disabled"
                        className="form-control"
                      ></input>
                    </div>

                    <div className="col-lg-12">
                      <div className="form-group">
                        <label>Name</label>
                        <input
                          required
                          value={fullname}
                          onMouseDown={(e) => valchange(true)}
                          onChange={(e) => namechange(e.target.value)}
                          className="form-control"
                        ></input>
                        {fullname.length === 0 && validation && (
                          <span className="text-danger">Enter your name</span>
                        )}
                      </div>
                    </div>

                    <div className="col-lg-12">
                      <div className="form-group">
                        <label>Email</label>
                        <input
                          value={email}
                          onChange={(e) => emailchange(e.target.value)}
                          className="form-control"
                        ></input>
                      </div>
                    </div>

                    <div className="col-lg-12">
                      <div className="form-group">
                        <label>Phone</label>
                        <input
                          value={phone}
                          onChange={(e) => phonechange(e.target.value)}
                          className="form-control"
                        ></input>
                      </div>
                    </div>

                    <div className="col-lg-12">
                      <div className="form-group">
                        <label>Employee Position</label>
                        <input
                          value={position}
                          onChange={(e) => positionchange(e.target.value)}
                          className="form-control"
                        ></input>
                      </div>
                    </div>

                    <div className="col-lg-12">
                      <div className="form-group">
                        <label>My Bio</label>
                        <input
                          value={bio}
                          onChange={(e) => biochange(e.target.value)}
                          className="form-control"
                        ></input>
                      </div>
                    </div>

                    <div className="col-lg-12">
                      <div className="form-group">
                        <label>Employee Number</label>
                        <input
                          value={empnumber}
                          onChange={(e) => empnumberchange(e.target.value)}
                          className="form-control"
                        ></input>
                      </div>
                    </div>

                    <div className="col-lg-12">
                      <div className="form-group">
                        <label>Date Of Birth</label>
                        <input
                          type="date"
                          value={dob}
                          // onChange={(e) => dobchange(e.target.dob)}
                          onChange={(e) => setDob(e.target.value)}
                          className="form-control"
                        ></input>
                      </div>
                    </div>

                    <div className="col-lg-12">
                      <div className="form-check">
                        <input
                          checked={active}
                          onChange={(e) => activechange(e.target.checked)}
                          type="checkbox"
                          className="form-check-input"
                        ></input>
                        <label className="form-check-label">Is Active</label>
                      </div>
                    </div>

                    <div className="col-lg-12">
                      <div className="form-group">
                        <button className="btn btn-success" type="sumbit">
                          Save
                        </button>
                        <Link to="/list" className="btn btn-danger">
                          Back
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EmpEdit;