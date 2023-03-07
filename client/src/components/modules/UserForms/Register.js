import { useHistory } from "react-router-dom";
import "./userForm.css";
import { register } from "../../functions/functions";
import { useState } from "react";

const Register = () => {
  const [mail, setMail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();
  const onSubmit = (event) => {
    event.preventDefault();
   register(mail, password);
  };
  return (
    <div className="user">
      <h1 className="titulo">Register</h1>
      <form onSubmit={onSubmit}>
        <div className="formitem">
          <label>Email:</label>
          <input className="input" type="email" required onChange={(e) => setMail(e.target.value)} />
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
        <div className="buttons">
          <button className="boton" type="submit">
            Register
          </button>
          <button className="boton cambio" onClick={() => history.push("/login")}>
            Go to Login
          </button>
        </div>
      </form>
    </div>
  );
};
export default Register;
