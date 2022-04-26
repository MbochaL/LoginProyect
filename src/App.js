import "./index.css"
import React, {useState} from "react";
import LoginForm from "./Components/LoginForm";


function App() {
  const adminUser = {
    Email: "Test@Test.com",
    Password: "Profesor"
  }

  const [user, setUser] = useState ({Name: "", Email: ""});
  const [Error, setError] = useState("");

  const Login = Details => {
    console.log(Details)
    if(Details.Email == adminUser.Email && Details.Password == adminUser.Password) {
      console.log("Ingreso exitoso");
      setUser({
        Name: Details.Name,
        Email: Details.Email
      });
    } else {
      console.log ("Error al ingresar datos!");
    }
  }

  const Logout = () => {
    setUser({Name: "", Email: ""});
  }
  return (
      <div className="App">
        {(user.Email != "") ? (
          <div className="welcome">
            <h2>Se ha iniciado con exito, <span>{user.Name}</span> <span>{user.Email}</span></h2>
            <button onClick={Logout}>Cerrar sesion</button>
          </div>
        ) : (
          <LoginForm Login={Login} Error={Error}></LoginForm>
        )}
      </div>


  );
}

export default App;
