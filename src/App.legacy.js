import "./App.css";

import Counter from "./features/counter/Counter";
import { CounterProvider } from "./store";

function App() {
  return (
    <div className="App">
      <header className="App-header"></header>
      <CounterProvider>
        <Counter></Counter>
      </CounterProvider>
    </div>
  );
}

export default App;
