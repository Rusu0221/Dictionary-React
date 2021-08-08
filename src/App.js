import React from "react";
import AddWord from "./AddWord";
import SearchWord from "./SearchWord";

function App() {
  const allWord = [];
  return(
    <div className="text-center container p-3 mb-2 bg-dark text-white">
      <h1>Dictionary</h1>
      <SearchWord array={allWord}/>
      <AddWord  array={allWord}/>
    </div>
  );
}

export default App;