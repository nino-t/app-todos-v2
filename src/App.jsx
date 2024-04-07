import Todoitems from "./components/Todoitems";

function App() {
  return (
    <div className="app-container">
      <Todoitems />
      <Todoitems />
      <Todoitems />
      <Todoitems />
      <Todoitems />
      <button className="btn-add">New</button>
    </div>
  );
}

export default App;
