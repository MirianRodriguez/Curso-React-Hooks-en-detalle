import { useContext } from "react";
import { UserContext } from "./context/UserContext";

export const HomePage = () => {
  const {user, setUser} = useContext(UserContext);

    return (
      <>
          <h1>HomePage</h1>
          <hr />
          <p>{JSON.stringify(user)}</p>
          
      </>
    )
  }