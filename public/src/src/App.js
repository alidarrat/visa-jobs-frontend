import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function Home() {
  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>Find UK Visa Sponsored Jobs</h1>
      <p>Search jobs from UK employers offering sponsorship.</p>
      <Link to="/jobs">View Jobs</Link>
    </div>
  );
}

function Jobs() {
  const jobs = [
    {
      id: 1,
      title: "Care Assistant",
      company: "London Care Ltd",
      location: "London",
      salary: "£24,000",
      sponsorship: "Yes"
    },
    {
      id: 2,
      title: "Software Engineer",
      company: "Tech UK",
      location: "Manchester",
      salary: "£45,000",
      sponsorship: "Yes"
    }
  ];

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>Jobs</h1>
      {jobs.map((job) => (
        <div
          key={job.id}
          style={{
            border: "1px solid #ddd",
            padding: "16px",
            marginBottom: "12px",
            borderRadius: "8px"
          }}
        >
          <h3>{job.title}</h3>
          <p><strong>Company:</strong> {job.company}</p>
          <p><strong>Location:</strong> {job.location}</p>
          <p><strong>Salary:</strong> {job.salary}</p>
          <p><strong>Visa Sponsorship:</strong> {job.sponsorship}</p>
          <button>Apply</button>
        </div>
      ))}
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <nav style={{ padding: "20px", borderBottom: "1px solid #ddd", fontFamily: "Arial" }}>
        <Link to="/" style={{ marginRight: "15px" }}>Home</Link>
        <Link to="/jobs">Jobs</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/jobs" element={<Jobs />} />
      </Routes>
    </BrowserRouter>
  );
}
