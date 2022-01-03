import './App.css';
import CommentComponent from "./components/CommentComponent";
import ProductDisplayComponent from "./components/ProductDisplayComponent";

function App() {
  return (
    <div className = "container">
    <div className="App">
      <ProductDisplayComponent/>
      <CommentComponent/>
    </div>
    </div>
  );
}

export default App;
