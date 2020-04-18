import React, {useState} from 'react';

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
        </div>
               
    )
}
export default Login;
