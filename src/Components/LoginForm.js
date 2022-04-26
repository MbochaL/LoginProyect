import React, {useState} from "react";
import "./LoginForm.css";
import Selector from "./Selector";

function LoginForm({Login, Error}) {
    const [Details, setDetails] = useState({Name: "", Email: "", Password: ""});

    const submitHandler = e => {
        e.preventDefault();
        
        Login(Details);
    }
    return (

        <form onSubmit={submitHandler}>
            <div className="form-inner">
                <h2>Login</h2>
                {(Error != "") ? (<div className="Error">{Error}</div>) : ""}
                    <div className="form-group">
                        <label htmlFor="name">Name:</label>
                        <input type="text" name="Name" id="Name" onChange={e => setDetails({... Details, Name: e.target.value})} value={Details.Name}/>
                        <label htmlFor="password">Password:</label>
                        <input type="password" name="password" id="password" onChange={e => setDetails({... Details, Password: e.target.value})} value={Details.Password}/>
                        <label htmlFor="email">Email:</label>
                        <input type="email" name="email" id="email" onChange={e => setDetails({... Details, Email: e.target.value})} value={Details.Email}/>
                    </div>
                <input className="button" type="submit" value="Iniciar Sesion"/>
            </div>
            <Selector/>
        </form>
    )
}

export default LoginForm;   