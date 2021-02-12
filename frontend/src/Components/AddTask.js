import styled from 'styled-components';
import {useState} from "react";
import {postTask} from "../services/tasksMappings";
import Button from "./Button";


const StyledForm = styled.section`
    text-align: left;
`;

const StyledLabel = styled.label`
    font-family: monospace; 
    margin-left: 2em; 
`
;

function AddTask({onAdd}) {

    const [description, setDescription] = useState("")

    return (<StyledForm>
        <form onSubmit={
            event => {
                event.preventDefault()
                postTask(description).then(response => onAdd(response.data))
                setDescription("")
            }}>
            <StyledLabel>New Task:
                <input value={description} onChange={event => setDescription(event.target.value)}></input>
            </StyledLabel>
            <Button text={"Add task"}/>
        </form>
    </StyledForm>)

}

export default AddTask