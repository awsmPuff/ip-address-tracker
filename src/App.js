import Home from "./pages/Home";
import absoluteBg from './assets/pattern-bg.png'

function App() {
  return (
    <div className="App">
      <img className="absolute" src={absoluteBg} alt='' />
      <h1>IP Address Tracker</h1>
      <Home />
    </div>
  );
}

export default App;
