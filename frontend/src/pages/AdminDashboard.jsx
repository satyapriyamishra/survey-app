import React, { useEffect, useState } from "react";
import axios from "axios";

function AdminDashboard() {
  const [surveys, setSurveys] = useState([]);

  useEffect(() => {
    const fetchSurveys = async () => {
      const token = localStorage.getItem("token");
      const res = await axios.get("http://localhost:5000/api/surveys/admin", {
        headers: { Authorization: token }
      });
      setSurveys(res.data);
    };
    fetchSurveys();
  }, []);

  return (
    <div>
      <h2>Admin Dashboard</h2>
      <h3>All Employee Surveys</h3>
      <ul>
        {surveys.map((survey) => (
          <li key={survey._id}>
            <strong>{survey.userId.name} ({survey.userId.email})</strong>: {survey.response}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AdminDashboard;
