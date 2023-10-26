import { useState } from "react";
import axios from 'axios';
import { Link, useNavigate } from "react-router-dom";
import { addUser } from "../redux/userSlice";
import { useDispatch } from "react-redux";


const EmpCreate = () => {
  //const [id, idchange] = useState("");
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

  const handlesubmit = (e) => {
    e.preventDefault();
    axios.post("http://localhost:3005/create", { fullname, email, phone})
    .then(res => {
        dispatch(addUser(res.data))
        navigate('/list')
    })
    .catch(err => console.log(err))


    // const empdata = { name, email, phone, position, bio, empnumber, dob, active };

    // fetch("http://localhost:8000/employee", {
    //   method: "POST",
    //   headers: { "content-type": "application/json" },
    //   body: JSON.stringify(empdata),
    // })
    //   .then((res) => {
    //     alert("Saved successfully.");
    //     navigate("/");
    //   })
    //   .catch((err) => {
    //     console.log(err.message);
    //   });
  };

  // const [dob, setDob] = useState('');

  // const handleSubmit = async (e) => {
  //   e.preventDefault();

  //   // const empdata = {dob};
  //   // fetch("http://localhost:8000/employee", {
  //   //   method: "POST",
  //   //   headers: { "content-type": "application/json" },
  //   //   body: JSON.stringify(empdata),
  //   // })
  //   // Make a POST request to the JSON server to save the date of birth
  //   // try {
  //   //   await axios.post("http://localhost:8000/employee", { dob });
  //   //   console.log('Date of birth saved successfully');
  //   // } catch (error) {
  //   //   console.error('Error saving date of birth', error);
  //   // }
  // };

  // return (
  //   <form onSubmit={handleSubmit}>
  //     <label>Date of Birth:</label>
  //     <input
  //       type="date"
  //       value={dob}
  //       onChange={(e) => setDob(e.target.value)}
  //     />
  //     <button type="submit">Save</button>
  //   </form>
  // );

  return (
    <div>
      <div className="row">
        <div className="offset-lg-3 col-lg-6">
          <form className="container" onSubmit={handlesubmit}>
            <div className="card" style={{ textAlign: "left" }}>
              <div className="card-title">
                <h2>Create Employee</h2>
              </div>
              <div className="card-body">
                <div className="row">
                  <div className="col-lg-12">
                    <div className="form-group">
                      <label>ID</label>
                      <input
                        value="id"
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
                        {fullname.length == 0 && validation && (
                          <span className="text-danger">Enter your full name</span>
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
                        <label>Date of Birth</label>
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
 
export default EmpCreate;