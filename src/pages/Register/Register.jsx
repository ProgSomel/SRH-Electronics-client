import { useContext } from "react";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import Swal from "sweetalert2";


const Register = () => {

    const {createUser, updateUserProfile} = useContext(AuthContext);

    const navigate = useNavigate();

    const handleCreateUser = (e) => {
        e.preventDefault();
        console.log("btn clicked");
        let name = e.target.name.value;
        let photoURL = e.target.photoURL.value;
        let email = e.target.email.value;
        let password = e.target.password.value;

        const regex = /^[^A-Z]*$/;
        const regex2 = /^[a-zA-Z0-9\s]*$/;
        if(password.length < 6) {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Password must be at least 6 characters",
                
              });
            
            return;
        }
        else if(regex.test(password)) {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Password must contain a Capital letter",
                
              });
            
            return;
        }
        else if(regex2.test(password)) {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Password should contain a Special Character",
                
              });
            
            return;
        }

        createUser( email, password)
        .then(res => {
            updateUserProfile(name, photoURL)
            .then((res) => {
                Swal.fire({
                    icon: "success",
                    title: "success",
                    text: "User created successfully",
                    
                  });
                
                navigate('/login')
                
            })
        })
        .catch(err => {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: `${err.message}`,
                
              });
        })
    }

    return (
        <div className="flex  bg-gradient-to-r from-green-200 via-blue-100 to-green-100 py-9 ">
        <div className="m-auto">
          <div className="max-w-md w-full space-y-8 p-8 bg-orange-200 bg-opacity-80 rounded-lg shadow-lg">
            <h2 className="text-3xl font-semibold text-center text-gray-800">Register</h2>
            <form onSubmit={handleCreateUser} className="mt-8 space-y-6">
              <div>
                <label htmlFor="name" className="block text-gray-800">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="mt-1 p-2 w-full border rounded-md focus:ring focus:ring-blue-400"
                  placeholder="Your Name"
                />
              </div>
              <div>
                <label htmlFor="photoURL" className="block text-gray-800">Photo URL</label>
                <input
                  type="text"
                  id="photoURL"
                  name="photoURL"
                  className="mt-1 p-2 w-full border rounded-md focus:ring focus:ring-blue-400"
                  placeholder="Your photoURL"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-gray-800">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="mt-1 p-2 w-full border rounded-md focus:ring focus:ring-blue-400"
                  placeholder="Your Email"
                />
              </div>
              <div>
                <label htmlFor="password" className="block text-gray-800">Password</label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  className="mt-1 p-2 w-full border rounded-md focus:ring focus:ring-blue-400"
                  placeholder="Your password"
                />
              </div>
              <div>
                <button
                  type="submit"
                  className="mt-4 w-full bg-blue-500 text-white p-3 rounded-md hover:bg-blue-600"
                >
                  Register
                </button>
                
              </div>
            </form>
            <p className="text-gray-800 text-center text-sm">
              Already Member? <Link to="/login" className="text-blue-500 underline">Login</Link>
            </p>
          </div>
        </div>
      </div>
    );
};

export default Register;