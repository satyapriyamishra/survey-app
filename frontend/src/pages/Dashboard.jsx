import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Dashboard() {
  const [surveys, setSurveys] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchSurveys = async () => {
      const token = localStorage.getItem("token");
      const res = await axios.get("http://localhost:5000/api/surveys", {
        headers: { Authorization: token }
      });
      setSurveys(res.data);
    };
    fetchSurveys();
  }, []);

  return (
    <div>
      <h2>Employee Dashboard</h2>
      <button onClick={() => navigate("/survey")}>Take Survey</button>
      <h3>Previous Surveys</h3>
      <ul>
        {surveys.map((survey) => (
          <li key={survey._id}>{survey.response}</li>
        ))}
      </ul>
    </div>
  );
}

export default Dashboard;
