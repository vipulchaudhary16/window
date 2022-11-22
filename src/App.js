import "./App.css";
import Desktop from "./Components/Desktop/Desktop";
import Navbar from "./Components/Navbar/Navbar";
import WindowState from "./Context/windowState";

function App() {
  return (
    <WindowState>
      <div className="App">
        <Desktop />
        <Navbar />
      </div>
    </WindowState>
  );
}

export default App;
