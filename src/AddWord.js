import  React, {useState} from "react";

function AddWord(props) {
    const [message, setMessage] = useState("Add a Word.")

    const add = () => {
        if (props.array.includes(props.text) === false && props.text.includes(" ") === false && props.text !== "") {
            props.array.push(props.text);
            setMessage("Word is add");
        } else {
            setMessage("Add another word.");
        }
    }
    return(
        <div>
            <button onClick={add}>Add</button>
            <h4>{message}</h4>
        </div>
    );
}

export default AddWord;