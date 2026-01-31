import { useContext } from "react";
import { AuthContext } from "../auth/AuthContext";

function Dashboard() {
  const { user, logout } = useContext(AuthContext);

  return (
    <div>
      <h2>Dashboard</h2>
      <p>Welcome {user?.name}</p>

      {user?.role === "Admin" && (
        <button>Delete Users</button>
      )}

      <button onClick={logout}>Logout</button>
    </div>
  );
}

export default Dashboard;
