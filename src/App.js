import "./App.scss";
import Comments from "./components/Comments/Comments";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Next from "./components/Next/Next";

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <Comments />
      <Next />
    </div>
  );
}

export default App;
