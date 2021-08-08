import  React, {useState} from "react";

function AddWord(props) {
    const [message, setMessage] = useState("");
    const [word, setWord] = useState("");

    const add = () => {
        if (props.array.includes(word) === false && word.includes(" ") === false && word !== "") {
            props.array.push(word);
            setMessage("Word is add");
        } else {
            setMessage("Add another word");
        }
    }
    props.array.sort();
    return(
        <div className="p-3 mb-2 bg-secondary text-white">
            <h3>Add a word in Dictionary</h3>
            <input type="text" onChange={(e) => {setWord(e.target.value)}}/>
            <button onClick={add}>Add</button>
            <h4>{message}</h4>
            {props.array.map(txt => <li key={txt}>{txt}</li>)}
        </div>
    );
}

export default AddWord;