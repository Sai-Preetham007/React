import './App.css';
import Details from './Start';

let Personal_Details = {
  name : "Sai Preetham",
  brand : "$@! **7",
  symbol : "✨",
}

function App() {
  return (
    <div className="App">
      <Details info = {Personal_Details}/>
    </div>
  );
}

export default App;
