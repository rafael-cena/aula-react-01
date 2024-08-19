import Data from "./meusComponentes/Data.js";

function App() {
  return (
    <div className="App">
      <Data texto="Data e hora local: " timeZone = "-3.00" />
      <Data texto="Data e hora em Londres: " timeZone = "0.00" />
      <Data texto="Data e hora em Nova York: " timeZone = "-5.00" />
    </div>
  );
}

export default App;
