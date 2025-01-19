import React from "react";
import { TodoContext } from "../TodoContext";
import "./TodoForm.css"

function TodoForm() {

    const {
        addTodo,
        setOpenModal
    } = React.useContext(TodoContext)
    const [newTodoValue, setNewTodoValue] = React.useState('')

    const onSubmit = (e) => {
        e.preventDefault()
        addTodo(newTodoValue)
        setOpenModal(false)
    }

    const onCancel = (e) => {
        setOpenModal(false)
    }

    const onChange = (e) => {
        setNewTodoValue(e.target.value)
    }

    return (
        <form onSubmit={onSubmit}>
            <label>Escribe tu nuevo TODO</label>
            <textarea placeholder="Hacer proyectos"
                value={newTodoValue}
                onChange={onChange}></textarea>
            <div className="TodoForm-buttonContainer">
                <button className='TodoForm-button TodoForm-button--cancel' type="button" onClick={onCancel}>Cancelar</button>
                <button className='TodoForm-button TodoForm-button--add' type="submit">Añadir</button>
            </div>
        </form>)
}

export { TodoForm }