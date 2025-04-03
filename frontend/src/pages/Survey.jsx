import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Survey() {
  const [response, setResponse] = useState("");
  const navigate = useNavigate();

  const handleSurveySubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");
    await axios.post("http://localhost:5000/api/surveys", { response }, {
      headers: { Authorization: token }
    });
    navigate("/dashboard");
  };

  return (
    <div>
      <h2>Take Survey</h2>
      <form onSubmit={handleSurveySubmit}>
        <textarea placeholder="Your response..." onChange={(e) => setResponse(e.target.value)} />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Survey;
