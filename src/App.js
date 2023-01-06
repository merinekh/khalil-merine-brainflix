import "./App.scss";
import Comments from "./components/Comments/Comments";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <Comments />
    </div>
  );
}

export default App;
