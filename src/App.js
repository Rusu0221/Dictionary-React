import React from "react";
import SearchWord from "./SearchWord";
import AddWord from "./AddWord";

const array = [];

function App() {
  return(
    <div className="text-center">
      <h1 className="container p-3 mb-2 bg-dark text-white">Dictionary</h1>
      <div className="container p-3 mb-2 bg-secondary text-white">
        <SearchWord array={array} />
        <AddWord array={array}/>
      </div>
    </div>
  );
}

export default App;