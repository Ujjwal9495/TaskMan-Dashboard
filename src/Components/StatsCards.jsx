export default function StatsCards({ tasks }) {
  const completed = tasks.filter(task => task.completed).length;
  const pending = tasks.length - completed;
  const highPriority = tasks.filter(
    task => task.priority === "High"
  ).length;

  return (
    <div className="stats-container">

      <div className="stat-card">
        <h3>Total Tasks</h3>
        <p>{tasks.length}</p>
      </div>

      <div className="stat-card">
        <h3>Completed</h3>
        <p>{completed}</p>
      </div>

      <div className="stat-card">
        <h3>Pending</h3>
        <p>{pending}</p>
      </div>

      <div className="stat-card">
        <h3>High Priority</h3>
        <p>{highPriority}</p>
      </div>

    </div>
  );
}