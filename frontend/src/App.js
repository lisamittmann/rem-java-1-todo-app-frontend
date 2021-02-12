import logo from "./logo.svg";
import "./App.css";
import WelcomeHeadline from "./Components/WelcomeHeadline";
import {getTasks} from "./services/tasksMappings";
import {useState} from "react";
import {useEffect} from "react";
import TaskList from "./Components/TaskList";
import AddTask from "./Components/AddTask";

function App() {
    const [tasks, setTasks] = useState([])

    useEffect(() => {
        loadTasks()
    }, [])


    function loadTasks() {
        getTasks().then(response => setTasks(response))
    }

    return (
        <div className="App">
            <header>
                <WelcomeHeadline/>
            </header>
            <AddTask onAdd={newTask => setTasks([...tasks, newTask])}/>
            <br/>
            <br/>
            <TaskList tasks={tasks} updateTask={(updatedTask, doDelete) => {
                const newTasks = tasks.filter(task => task.id !== updatedTask.id)
                doDelete === true ? setTasks([...newTasks]) : setTasks([...newTasks, updatedTask])
            }}/>
        </div>
    );
}

export default App;
