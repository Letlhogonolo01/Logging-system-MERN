import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
// import { deleteUser } from "../redux/userSlice";


// import avator1 from "../Assets/images/avator1.jpg";

const EmpListing = () => {
//   const [empdata, empdatachange] = useState(null);
  const navigate = useNavigate();

  
  const users = useSelector(state => state.users.users);
  const dispatch = useDispatch()
 

  console.log(users)
 // console.log(users[7]._id)
  // const [items, setItems] = useState([]);

  // useEffect(() => {
  //   fetch("http://localhost:8000/employee/items")
  //     .then((response) => response.json())
  //     .then((data) => setItems(data));
  // }, []);

  // const [images, setImages] = useState([]);

  // useEffect(() => {
  //   fetch("http://localhost:8000/employee/imageUrl")
  //     .then((response) => response.json())
  //     .then((data) => setImages(data));
  // }, []);

  const LoadDetail = (id) => {
    navigate("/details/" + id);
  };
  const LoadEdit = (id) => {
    navigate("/edit/" + id);
  };
  const RemoveFunction = (id) => {
    axios.delete('http://localhost:3005/deleteuser/' + id)
    .then(res => {
      //dispatch(deleteUser({id}))
      console.log(res)
    }).catch(err => console.log(err))
  }
  
  // const RemoveFunction = (id) => {
  //   if (window.confirm("Do you want to remove?")) {
  //     fetch("http://localhost:8000/employee/" + id, {
  //       method: "DELETE",
  //     })
  //       .then((res) => {
  //         alert("Removed successfully.");
  //         window.location.reload();
  //       })
  //       .catch((err) => {
  //         console.log(err.message);
  //       });
  //   }
  // };

//   useEffect(() => {
//     fetch("http://localhost:8000/employee")
//       .then((res) => {
//         return res.json();
//       })
//       .then((resp) => {
//         empdatachange(resp);
//       })
//       .catch((err) => {
//         console.log(err.message);
//       });
//   }, []);
  return (
    <div className="container">
      <h1>MLab Logging System</h1>
      <div className="card">
        <div className="card-title">
          <h2>Employee Listing</h2>
        </div>
        <div className="card-body">
          <div className="divbtn">
            <Link to="/create" className="btn btn-success btn-sm">
              Add New (+)
            </Link>
          </div>
          <table className="table table-bordered">
            <thead className="bg-dark text-white">
              <tr>
                {/* <td>ID</td> */}
                <td>Full Name</td>
                <td>Email</td>
                <td>Phone</td>
                <td>Employee Position</td>
                <td>Action</td>
              </tr>
            </thead>
            <thead>
  {users.map((user) => (
    <tr key={user._id}>
      <td>{user.fullname}</td>
      <td>{user.email}</td>
      <td>{user.phone}</td>
      <td>{user.position}</td>
      <td>
        <a onClick={() => LoadEdit(user._id)} className="btn btn-success">
          Edit
        </a>
        <a onClick={() => RemoveFunction(user._id)} className="btn btn-danger">
          Remove
        </a>
        <a onClick={() => LoadDetail(user._id)} className="btn btn-primary">
          Details
        </a>
      </td>
    </tr>
  ))}
</thead>

          </table>
        </div>
      </div>
    </div>
  );
};

export default EmpListing;