import React, {useState} from 'react';
import axios from 'axios';

/* global gapi */
const Login = () => {

    //State
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')

    const handleFormSubmit = async(e) => {
        e.preventDefault();

        try {
            const response = await axios.post("/api/login", {
                email: email,
                password: password
            });
            if(response.status === 200){
                console.log(`Login sucessful ${response.status}`);
                //For some reason history.push does not refresh the navbar
                //props.history.push("")
                window.location = "/";
            }
        } catch (err){
            console.log(`Axios post failed! ${err}`);
            // ToDo: Notify user with modal form or just show message on login form

        }       
    }

    const handleEmail = (e) => {
        e.preventDefault()
        setEmail(e.target.value)
    }

    const handlePassword = (e) => {
        e.preventDefault()
        setPassword(e.target.value)
    }

    return (
        <div className="container" >
            <div className="row">
                <div className="col-6 mx-auto">
                    <form className="my-5" onSubmit={handleFormSubmit}>
                        <div className="form-group" >
                            <label htmlFor="exampleInputEmail1">Email address</label>
                            <input 
                                type="email" 
                                name="email"
                                className="form-control" 
                                id="inputEmail1" 
                                aria-describedby="emailHelp" 
                                placeholder="Enter email" 
                                value={email}
                                onChange = {handleEmail}
                            />                            
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputPassword1">Password</label>
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
                        <button type="submit" className="btn btn-primary d-block mx-auto" >Submit</button>
                    </form>
                </div>            
            </div> 

            <div className="col-4 d-block mx-auto">
                <a className="btn btn-lg bg-dark text-white d-block mx-auto" href="http://localhost:5000/auth/google">Login With Google</a>
            </div>           
            
        </div>
               
    )
}
export default Login;
