import styled from 'styled-components';
import Button from "./Button";
import {advanceTask, deleteTask} from "../services/tasksMappings";

const StyledTask = styled.section`
    border: dashed;
    border-width: 1px;
    border-color: grey; 
    padding-bottom: 15px; 
    border-radius: 10px;
    margin: 15px;  
`
;

function Task({id, description, status, updateTask}) {
    return (<StyledTask>
        <h4>{description}</h4>
        {status !== "DONE" && <Button text={"Advance"} onClick={() => {
            const newStatus = status === "OPEN" ? "IN_PROGRESS" : "DONE"
            advanceTask(id, description, newStatus)
                .then(response => {
                    updateTask(response.data)
                })
        }}/>}

        {status !== "OPEN" && <Button text={"Retreat"} onClick={() => {
            const newStatus = status === "IN_PROGRESS" ? "OPEN" : "IN_PROGRESS"
            advanceTask(id, description, newStatus)
                .then(response => {
                    updateTask(response.data)
                })
        }}/>}

        <Button onClick={() => {
            deleteTask(id)
            updateTask({id: id, description: description, status: status}, true)
        }} text={"Delete"}/>
    </StyledTask>)
}

export default Task