import React from "react";
import AddWord from "./AddWord";
import SearchWord from "./SearchWord";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      allWord: [],
      word: "",
      search: ""
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
  }
  handleChange(e) {
    this.setState({word:e.target.value});
  }
  handleSearch(e) {
    this.setState({search:e.target.value});
  }
  render() {
    return(
      <div className="text-center container p-3 mb-2 bg-dark text-white">
        <h1>Dictionary</h1>
        <div className="p-3 mb-2 bg-secondary text-white">
          <input type="text" onChange={this.handleSearch}/>
          <SearchWord text={this.state.search} array={this.state.allWord}/>
        </div>
        <div className="p-3 mb-2 bg-secondary text-white">
          <input type="text" onChange={this.handleChange}/>
          <AddWord text={this.state.word} array={this.state.allWord}/>
          {this.state.allWord.map(txt => <li key={txt}>{txt}</li>)}
        </div>
      </div>
    );
  }
}

export default App