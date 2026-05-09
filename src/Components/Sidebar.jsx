export default function Sidebar({ darkMode, setDarkMode }) {
  return (
    <div className="sidebar">
      <h2>TaskMan</h2>

      <ul>
        <li>🏠 Dashboard</li>
        <li>📝 Tasks</li>
        <li>✅ Completed</li>
        <li>⚙ Settings</li>
      </ul>

      <button
        className="dark-btn"
        onClick={() => setDarkMode(!darkMode)}
      >
        {darkMode ? "☀ Light Mode" : "🌙 Dark Mode"}
      </button>
    </div>
  );
}