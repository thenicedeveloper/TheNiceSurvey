import React, {useState, useEffect} from 'react';
import axios from 'axios';
/* global gapi */
const Login = () => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    async function handleSubmit(e){
        e.preventDefault()
    }

    let handleEmail = (e) => {
        e.preventDefault()

        setEmail(e.target.value)
    }

    let handlePassword = (e) => {
        setPassword(e.target.value)
    }

    let googleSingIn = async (e) =>{
        e.preventDefault()
        //Waiting for cors to be allowed in the backend
        let res = await axios.get("/auth/google")
        res.then(data => console.log(data))
    }


    return (
        <div className="container">
            <div className="row">
                <div className="col-6 mx-auto">
                    <form className="my-5" onSubmit={handleSubmit}>
                        <div className="form-group" >
                            <label for="exampleInputEmail1">Email address</label>
                            <input 
                                type="email" 
                                name="email"
                                className="form-control" 
                                id="inputEmail1" 
                                aria-describedby="emailHelp" 
                                placeholder="Enter email" 
                                value={email}
                                onChange={handleEmail}
                            />                            
                        </div>
                        <div className="form-group">
                            <label for="exampleInputPassword1">Password</label>
                            <input 
                                name="password"
                                type="password" 
                                className="form-control" 
                                id="inputPassword1" 
                                placeholder="Password" 
                                value={password}
                                onChange={handlePassword}                                
                            />
                        </div>
                        <button type="submit" className="btn btn-primary d-block mx-auto">Submit</button>
                    </form>
                </div>            
            </div> 



            {/* ///////////////////////////////////////////////////////////////Google Login */}
            <div className="col-4 d-block mx-auto">
                <a className="btn btn-lg bg-dark text-white d-block mx-auto" href="http://localhost:5000/auth/google">Login With Google</a>
            </div>           
            
        </div>
               
    )
}
export default Login;
