import React, {useState} from "react";

function SearchWord(props) {
    const [message, setMessage] = useState("")
    const [search, setSearch] = useState("")

    const searchWord = () => {
        if (props.array.includes(search) === true) {
            setMessage("Word exist")
        } else {
            setMessage("Word don't exist")
        }
    }
    return(
        <div className="p-3 mb-2 bg-secondary text-white">
            <h3>Search a word in Dictionary</h3>
            <input type="text" onChange={(e) => {setSearch(e.target.value)}} />
            <button onClick={searchWord}>Search</button>
            <h4>{message}</h4>
        </div>
    );
}

export default SearchWord;