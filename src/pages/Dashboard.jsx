import { useContext, useState, useEffect } from "react";
import { AuthContext } from "../auth/AuthContext";
import { getBuses, deleteBus } from "../services/api";
import { useNavigate } from "react-router-dom";
import "./Dashboard.css";

function Dashboard() {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();
  const [busesList, setBusesList] = useState([]);
  const [busesLoading, setBusesLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchBusesList();
  }, []);

  const fetchBusesList = async () => {
    try {
      setBusesLoading(true);
      setError(null);
      const res = await getBuses();
      // backend may return fields with PascalCase or camelCase
      setBusesList(res.data || []);
    } catch (err) {
      setError("Failed to fetch buses");
      console.error(err);
    } finally {
      setBusesLoading(false);
    }
  };

  const handleDeleteBus = async (busId) => {
    if (!window.confirm("Delete this bus?")) return;
    try {
      await deleteBus(busId);
      setBusesList((prev) => prev.filter((b) => (b.BusId || b.busId || b.id) !== busId));
    } catch (err) {
      setError("Failed to delete bus");
      console.error(err);
    }
  };

  return (
    <div className="dashboard">
      <div className="dashboard-card">

        <h2 className="dashboard-title">Buses</h2>

        {error && <div className="alert alert-error">{error}</div>}

        {busesLoading && <div className="loading-message">Loading buses...</div>}

        {!busesLoading && busesList.length === 0 && (
          <div className="empty-message">No buses available</div>
        )}

        {!busesLoading && busesList.length > 0 && (
          <div className="table-container">
            <table className="users-table buses-table">
              <thead>
                <tr>
                  <th>BusId</th>
                  <th>PlateNumber</th>
                  <th>Capacity</th>
                  <th>ImageUrl</th>
                  <th>RoundId</th>
                  {user?.role === "Admin" && <th>Action</th>}
                </tr>
              </thead>
              <tbody>
                {busesList.map((b) => {
                  const id = b.BusId ?? b.busId ?? b.id;
                  const plate = b.PlateNumber ?? b.plateNumber ?? b.Plate ?? "";
                  const capacity = b.Capacity ?? b.capacity ?? "";
                  const image = b.ImageUrl ?? b.imageUrl ?? b.image ?? "";
                  const round = b.RoundId ?? b.roundId ?? "";

                  return (
                    <tr key={id}>
                      <td className="cell-id">{id}</td>
                      <td className="cell-username">{plate}</td>
                      <td className="cell-email">{capacity}</td>
                      <td>
                        {image ? (
                          <img src={image} alt={plate} className="bus-image" />
                        ) : (
                          <span className="no-img">—</span>
                        )}
                      </td>
                      <td>{round}</td>
                      {user?.role === "Admin" && (
                        <td className="cell-action">
                          <button className="btn btn-sm btn-danger" onClick={() => handleDeleteBus(id)}>
                            Delete
                          </button>
                        </td>
                      )}
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        )}

        <button
          className="btn btn-logout"
          onClick={() => {
            logout();
            navigate("/login");
          }}
        >
          Logout
        </button>

      </div>
    </div>
  );
}

export default Dashboard;
