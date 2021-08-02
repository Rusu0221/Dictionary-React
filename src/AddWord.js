import  React, {useState} from "react";

function AddWord(props) {
    const [message, setMessage] = useState("Add a Word.")
    const [word, setWord] = useState("")

    const getValue = (e) => {
        setWord(e.target.value)    
    }
    const addWords = () => {
        if (props.array.includes(word) === false && word.includes(" ") === false && word !== "") {
            props.array.push(word);
            setMessage("Word is add.")
            setWord("");
        } else {
            setMessage("Add another word.")
        }
        props.array.sort();
    }
    return(
        <div>
            <input type="text" onChange={getValue} />
            <button onClick={addWords}>Add</button>
            <p>{message}</p>
            <h4>All words in Dictionary</h4>
            {props.array.map(txt => <li key={txt}>{txt}</li>)}
        </div>
    );
}

export default AddWord;