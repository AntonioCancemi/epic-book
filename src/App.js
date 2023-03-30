import "./App.css";
import Home from "./components/Home";
import MyFooter from "./components/MyFooter";
import MyJumbotron from "./components/MyJumbotron";
import MyNav from "./components/MyNav";

function App() {
  return (
    <div className="App">
      <div className="appContainer">
        <MyNav brand="Book-IT" />
        <MyJumbotron />
        <Home />
        <div id="fantasy"></div>
        <MyFooter id="footer" />
      </div>
    </div>
  );
}

export default App;
