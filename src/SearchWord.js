import React, {useState} from "react";

function SearchWord(props) {
    const [message, setMessage] = useState("Search words.")

    const search = () => {
        if (props.array.includes(props.text) === true) {
            setMessage("Word exist")
        } else {
            setMessage("Word don't exist")
        }
    }
    return(
        <div>
            <button onClick={search}>Search</button>
            <h4>{message}</h4>
        </div>
    );
}

export default SearchWord;