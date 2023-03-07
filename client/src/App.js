import StatusHandler from "./components/modules/status/StatusHandler";
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Login from "./components/modules/UserForms/Login";
import Register from "./components/modules/UserForms/Register";
import { PrivateRoute } from "./components/modules/Router/PrivateRoute";
// Componente principal de la aplicación.
const App = () => {
  // Mostramos la aplicación
  return (
    <Router>
      <Switch>
        <PrivateRoute path="/" exact><StatusHandler /> </PrivateRoute>
        <Route path="/login"> <Login /> </Route>
        <Route path="/register"><Register/> </Route>
        <PrivateRoute path="/create"></PrivateRoute>
        <PrivateRoute path="/edit/:id" />
        <PrivateRoute path="/view/:id" />
        <PrivateRoute path="/list" />
      </Switch>
    </Router>
  );
};

export default App;
