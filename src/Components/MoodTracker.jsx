
export default function MoodTracker({ tasks }) {

  const completed = tasks.filter(task => task.completed).length;
  const pending = tasks.length - completed;


  let moodEmoji = "😴";
  let moodText = "No Tasks Yet";

  if (tasks.length > 0 && completed === tasks.length) {
    moodEmoji = "🎉";
    moodText = "Amazing! All Tasks Completed!";
  }

  else if (completed > pending) {
    moodEmoji = "😊";
    moodText = "Great Progress!";
  }

  else if (pending > completed) {
    moodEmoji = "😢";
    moodText = "Too Many Pending Tasks!";
  }

  return (
    <div className="mood-box">
      <h1 className="mood-emoji">{moodEmoji}</h1>
      <p>{moodText}</p>
    </div>
  );
}