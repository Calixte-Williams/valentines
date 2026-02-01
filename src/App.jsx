import "./App.css";
import Button from "./components/Button";

function App() {
  return (
    <>
      <div className="request-card ">
        <div>
          <h1>Would you be my Valentine?</h1>
        </div>
        <div className="card">
          <Button>Yes</Button>
          <Button>No</Button>
        </div>
      </div>
    </>
  );
}

export default App;
