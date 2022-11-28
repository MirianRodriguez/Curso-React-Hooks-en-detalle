import { useContext } from "react"
import { UserContext } from "./context/UserContext"

export const LoginPage = () => {

  const {user, setUser} = useContext(UserContext);
    return (
      <>
          <h1>LoginPage</h1>
          <hr />
          <p>{JSON.stringify(user)}</p>
          <button className="btn btn-outline-primary" onClick={() => setUser({...user, name:'Juan'})}>
            change name
          </button>
      </>
    )
  }