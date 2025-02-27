import { useState } from "react";
/*
export function MyForm() {
    const [inputs, setInputs] = useState({});

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}))
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        // alert(`The name you entered was ${name}`);
        console.log(inputs);
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>Enter your name:
                <input 
                    type="text"
                    name="username"
                    value={inputs.username || ""}
                    // onChange={(e) => {setName(e.target.value)}}
                    onChange={handleChange}
                />
            </label>
            <label>Enter your age:
                <input 
                    type="number"
                    name="age"
                    value={inputs.age || ""}
                    onChange={handleChange}
                />
            </label>
            <input type="submit" />
        </form>
    );
}
*/
export function MyForm() {
    const [textarea, setTextarea] = useState(
        "The content of  a textareas goes in the value attribute"
    );

    const handleChange = (event) => {
        setTextarea(event.target.value)
    }
    return (
        <form>
            <textarea value={textarea} onChange={handleChange} />
        </form>
    );
}