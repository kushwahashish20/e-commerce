import axios from "axios";
import { useState } from "react";
const Admin = () => {
     const [email,setEmail] = useState("");
     const [password,setPassword] = useState("");

    const handleEmail = (e) => {
       console.log(e)
       setEmail(e.target.value)
    }
    const handlePassword = (e) => {
        setPassword(e.target.value);
    }
    const handleSubmit = (e) => {
        const request = {
            email : email,
            password : password
        }
          axios.post(
                  "http:8000/admin/signin",request
                );
                console.log(":called")
    }
    return (
        <>
            <div className="container">
                <form  onSubmit={handleSubmit} >
                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">Email address</label>
                        <input type="email" class="form-control" onChange={(e)=>{handleEmail(e)}} id="exampleInputEmail1" aria-describedby="emailHelp" />
                        <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputPassword1" class="form-label">Password</label>
                        <input type="password" class="form-control"onChange={(e)=>{handlePassword(e)}} id="exampleInputPassword1" />
                    </div>
                    <button type="submit" class="btn btn-primary">Submit</button>
                </form>
            </div>
        </>
    );
}
export default Admin;