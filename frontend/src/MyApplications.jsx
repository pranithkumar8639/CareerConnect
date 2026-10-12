
import { useEffect, useState } from "react";
import { getMyApplications } from "./api";
import "./App.css";

export default function MyApplications() {
  const [applications, setApplications] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    let cancelled = false;

    async function loadApplications() {
      try {
        const data = await getMyApplications();
        if (!cancelled) {
          setApplications(Array.isArray(data) ? data : []);
        }
      } catch (err) {
        if (!cancelled) {
          setError(err.message || "Could not load applications.");
        }
      } finally {
        if (!cancelled) {
          setLoading(false);
        }
      }
    }

    loadApplications();

    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <main className="page">
      <h1>My Applications</h1>
      <p>Track the jobs you have applied for.</p>

      {loading && <p>Loading your applications...</p>}

      {error && <p role="alert">{error}</p>}

      {!loading && !error && applications.length === 0 && (
        <section className="card">
          <h2>No applications yet</h2>
          <p>Explore available jobs and apply to get started.</p>
        </section>
      )}

      {!loading && !error && applications.length > 0 && (
        <div className="applications-list">
          {applications.map((app) => (
            <article className="card" key={app.applicationId}>
              <h2>{app.jobTitle}</h2>
              <p><strong>Company:</strong> {app.company}</p>
              <p><strong>Location:</strong> {app.location}</p>
              <p><strong>Job type:</strong> {app.jobType}</p>
              <p>
                <strong>Status:</strong>{" "}
                <span className="application-status">
                  {app.status}
                </span>
              </p>
              <p>
                <strong>Applied on:</strong>{" "}
                {app.appliedAt
                  ? new Date(app.appliedAt).toLocaleString()
                  : "Not available"}
              </p>
            </article>
          ))}
        </div>
      )}
    </main>
  );
}
