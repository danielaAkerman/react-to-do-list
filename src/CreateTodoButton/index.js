import React from "react"
import { TodoContext } from "../TodoContext"
import "./CreateTodoButton.css"

function CreateTodoButton() {

    const {
        openModal,
        setOpenModal
    } = React.useContext(TodoContext)

    return (
        <div className="button-create-container">
            <button onClick={(event) => {
                // setOpenModal(!openModal)
                setOpenModal(state => !state)
            }}>
                +
            </button>
        </div>
    )
}

export { CreateTodoButton }