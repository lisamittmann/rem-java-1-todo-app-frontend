import Task from "./Task";
import styled from 'styled-components';

const StyledSection = styled.section`
    background-color: ${props => props.done ? "silver" : "white"};
    flex-grow: 1;
    border-style: solid; 
    border-width: 1px; 
    border-radius: 10px;
    margin: 5px; 
    padding: 5px; 
`
;

const StyledDiv = styled.div`
    display: flex; 
    justify-content: center; 
`
;

const StyledH2 = styled.h2`
    font-family: serif; 
`
;

function TaskList({tasks, updateTask}) {

    return (<StyledDiv>
            <StyledSection>
                <StyledH2>Open</StyledH2>
                {tasks.filter(task => task.status === "OPEN").map(task => (<Task
                    key={task.id}
                    id={task.id}
                    description={task.description}
                    status={task.status}
                    updateTask={(updatedTask, doDelete) => updateTask(updatedTask, doDelete)}/>))}
            </StyledSection>

            <StyledSection>
                <StyledH2>In Progress</StyledH2>
                {tasks.filter(task => task.status === "IN_PROGRESS").map(task => (<Task
                    key={task.id}
                    id={task.id}
                    description={task.description}
                    status={task.status}
                    updateTask={(updatedTask, doDelete) => updateTask(updatedTask, doDelete)}/>))}
            </StyledSection>

            <StyledSection done>
                <StyledH2>Done</StyledH2>
                {tasks.filter(task => task.status === "DONE").map(task => (<Task
                    key={task.id}
                    id={task.id}
                    description={task.description}
                    status={task.status}
                    updateTask={(updatedTask, doDelete) => updateTask(updatedTask, doDelete)}/>))}
            </StyledSection>
        </StyledDiv>
    )
}

export default TaskList