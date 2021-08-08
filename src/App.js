import React from "react";
import AddWord from "./AddWord";
import SearchWord from "./SearchWord";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      allWord: []
    }
  }

  render() {
    return(
      <div className="text-center container p-3 mb-2 bg-dark text-white">
        <h1>Dictionary</h1>
        <SearchWord array={this.state.allWord}/>
        <AddWord  array={this.state.allWord}/>
      </div>
    );
  }
}

export default App