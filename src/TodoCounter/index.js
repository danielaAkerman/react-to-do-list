import React from "react"
import "./TodoCounter.css"
import { TodoContext } from "../TodoContext"
// import { loading } from "../App/useLocalStorage"

function TodoCounter() {
    const { totalTodos, completedTodos, loading } = React.useContext(TodoContext)

    if (totalTodos > 0 && totalTodos == completedTodos) {
        return (<h1>Felicitaciones! Pudiste con todo 🩷</h1>)
        // } else if (completedTodos == 0) {
        //     return (<h1>Empeza a completar tus tareas ahora! ✨</h1>)
    } else if (loading) {
        return (<h1>Cargando... 🍹</h1>)
    } else if (totalTodos > 0) {
        return (<h1>Has completado {completedTodos} de {totalTodos} ToDos 🍹</h1>)
    } else {
        return (<h1> TODO Machine 🍹</h1>)
    }
}

export { TodoCounter }