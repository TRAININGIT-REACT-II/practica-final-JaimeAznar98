import { useHistory } from "react-router-dom";
import { useState } from "react";
import { useDispatch } from "react-redux";
import "./userForm.css";
import { LOGIN } from "./reducer";
const Login = () => {
  const [mail, setMail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();
  const [error, setError] = useState(null);
  const [token, setToken] = useState("");
  const dispatch = useDispatch();
  
  const login = async (mail, password) => {
    const response = await fetch("/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username: mail, password: password }),
    }).then((res) => res.json());
    
    if(response.error != null){
        setError(response.error);
    }
    else{
        dispatch({type: LOGIN, user: response});
        history.push("/");
    }
    
  };

  const onSubmit = (event) => {
    event.preventDefault();
    login(mail, password);
    
  };
  return (
    <div className="user">
      <h1 className="titulo">Login</h1>
      <form onSubmit={onSubmit}>
        <div className="formitem">
          <label>Email:</label>
          <input
            className="input"
            type="email"
            required
            onChange={(e) => setMail(e.target.value)}
          />
        </div>
        <div className="formitem">
          <label>Password:</label>
          <input
            required
            className="input"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <p style={{marginLeft: "5%"}}>{error}</p>
        <div className="buttons">
          <button className="boton" type="submit">
            Login
          </button>
          <button
            className="boton cambio"
            onClick={() => history.push("/register")}
          >
            Go to Register
          </button>
        </div>
      </form>
      {token}
    </div>
  );
};
export default Login;
