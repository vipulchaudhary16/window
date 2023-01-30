import { FiAlertCircle } from "react-icons/fi";
import "./App.css";
import Alert from "./Components/Alert";
import Desktop from "./Components/Desktop/Desktop";
import Navbar from "./Components/Navbar/Navbar";
import WindowState from "./Context/windowState";

function App() {
  return (
    <WindowState>
      <div className="App">
        <Desktop />
        <Navbar />
        {/* <Alert message={"Hello"} title="Failed" icon={<FiAlertCircle/>} /> */}
      </div>
    </WindowState>
  );
}

export default App;
