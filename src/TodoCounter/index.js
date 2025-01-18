import "./TodoCounter.css"
// import { loading } from "../App/useLocalStorage"

function TodoCounter({ total, completed }) {

    if (total > 0 && total == completed) {
        return (<h1>Felicitaciones! Pudiste con todo 🩷</h1>)
    // } else if (completed == 0) {
    //     return (<h1>Empeza a completar tus tareas ahora! ✨</h1>)
    } else if (total > 0) {
        return (<h1>Has completado {completed} de {total} ToDos 🍹</h1>)
    } else {
        return (<h1> TODO Machine 🍹</h1>)
    }
}

export { TodoCounter }