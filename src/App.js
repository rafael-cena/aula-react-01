import Data from "./meusComponentes/Data.js";

function App() {
  return (
    <div className="App">
      <Data texto="Data e hora local: " timeZone = "-3.00" />
      <Data texto="Data e hora em Londres: " timeZone = "1.00" />
      <Data texto="Data e hora em Nova York: " timeZone = "-4.00" />
    </div>
  );
}

export default App;
