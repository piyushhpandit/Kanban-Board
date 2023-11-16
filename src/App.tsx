import "./App.css";
import KanbanBoard from "./Components/KanbanBoard";

function App() {
  return (
    <div>
      <div className="heading">
        Kanban Board
        <h3 className="subheading">
          ADD Boards as per the requirements i.e. To Do, In Progress, and
          Completed.
        </h3>
      </div>
      <div>
        <KanbanBoard />
      </div>
    </div>
  );
}

export default App;
