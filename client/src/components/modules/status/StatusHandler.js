import { useEffect, useState } from "react";
import Status from "./Status";
import { useSelector } from "react-redux";
// Componente principal de la aplicación.
const StatusHandler = () => {
  const [status, setStatus] = useState(false);
  const [loading, setLoading] = useState(true);
  const {userInfo} = useSelector((state) => state.userInfo);
  console.log(userInfo);
  // Cargamos el estado del servidor
  useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
      .then((data) => setStatus(data.status === "ok"))
      .finally(() => setLoading(false));
  }, []);

  // Mostramos la aplicación
  return (
    <div className="general">
      <h1>Curso de React de TrainingIT</h1>
      <p>
        Estado del servidor:
        {loading ? " Cargando..." : <Status status={status} />}
      </p>
      
        <p>{userInfo != undefined ?userInfo.username : ''}</p>
      </div>
  );
};

export default StatusHandler;
