import "./App.css";
import Sidebar from "./components/sidebar/Sidebar";
import Top from "./components/topbar/Top";

function App() {
  return (
    <div>
      <Top />

      <div className="container">
        <Sidebar/>
      </div>
    </div>
  );
}

export default App;
