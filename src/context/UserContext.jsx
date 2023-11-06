import { useEffect, useState } from "react";
import { useContext } from "react";
import { createContext } from "react";

const URL = "http://localhost/BackEnd2/Interface.php";
const UserContext = createContext();

export default function UserContextProvider({ children }) {
  const [user, setUser] = useState(false);
  const [dataJSON, setDataJSON] = useState(false);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      var data = new FormData();
      data.append("usuario", JSON.parse(localStorage.getItem("Usuario")));
      data.append("METHOD", "SESSION");
      const resp = await fetch(URL, {
        method: "POST",
        body: data,
      });
      const { Sesion } = await resp.json();
      setReady(true);
      setDataJSON(Sesion);
      if (Sesion) {
        setUser(JSON.parse(localStorage.getItem("Usuario")));
      }
    };
    fetchData();
  }, []);

  return (
    <UserContext.Provider value={{ user, dataJSON, ready }}>
      {children}
    </UserContext.Provider>
  );
}

export const useUserContext = () => useContext(UserContext);
