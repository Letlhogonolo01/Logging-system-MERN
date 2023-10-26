import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const EmpDetail = () => {
  const { empid } = useParams();

  const [empdata, empdatachange] = useState({});

  useEffect(() => {
    fetch("http://localhost:8000/employee/" + empid)
      .then((res) => {
        return res.json();
      })
      .then((resp) => {
        empdatachange(resp);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  return (
    <div>
      <div className="card" style={{ textAlign: "left" }}>
        <div className="card-title">
          <h2>Employee Details</h2>
        </div>
        <div className="card-body">
          {empdata && (
            <div>
              <h1>
                The Employee name is : {empdata.fullname} ({empdata.id}){" "}
              </h1>
              <h3>Contact Details</h3>
              <h5> Profile Pic : {empdata.imageUrl} </h5>
              <h5>Email is : {empdata.email} </h5>
              <h5>Phone is : {empdata.phone} </h5>
              <h5>Employee position is : {empdata.position} </h5>
              <h5>About my Bio : {empdata.bio} </h5>
              <h5>Employee number is : {empdata.empnumber} </h5>
              <h5>Date of Birth is : {empdata.dob} </h5>
              <Link to="/list" className="btn btn-danger">
                Back to Listing
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default EmpDetail;

{/* <DateOfBirthInput /> */}