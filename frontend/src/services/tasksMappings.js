import axios from "axios";

export function getTasks(){
    return axios.get("/api/todo").then(response => response.data)
}

export function postTask(description) {
    return axios.post("/api/todo", {description: description, status: "OPEN"})
}

export function advanceTask(id, description, status){
    return axios.put("/api/todo/" + id,
        {id: id, description: description, status: status})
}

export function deleteTask(id){
    axios.delete("api/todo/" +id)
}