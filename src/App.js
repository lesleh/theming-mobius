import { useMobius } from "./hooks/useMobius";

function App() {
  const Mobius = useMobius();

  return (
    <div className="App">
      <Mobius.Button onPress={() => alert("Clicked")}>Clicky</Mobius.Button>
    </div>
  );
}

export default App;
