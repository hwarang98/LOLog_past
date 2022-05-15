import "./App.css";
import Summoner from "./components/summoner";

function App() {
  return (
    <div className="App">
      <h1 className="logoText">lol.gg</h1>
      <div className="search">
        <Summoner />
      </div>
    </div>
  );
}

export default App;
