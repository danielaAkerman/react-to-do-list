import React from "react"
import "./TodosLoading.css"
import { CompleteIcon } from "../TodoIcon/CompleteIcon"
import { DeleteIcon } from "../TodoIcon/DeleteIcon"

function TodosLoading() {
    return (
        <li className="TodoItem TodosLoading">
            <CompleteIcon completed={true} onComplete={null} />
            <span className="loader" ></span>
            <DeleteIcon onDelete={null} />
        </li>
    )
}

export { TodosLoading }