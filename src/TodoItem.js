import "./TodoItem.css"

function TodoItem({ text, completed }) {
    return (
        <li>
            <span className={`icon icon-check ${completed && "icon-check--active"}`}>V</span>
            <p className={`todo-item ${completed && "todo-item-completed"}`}>{text}</p>
            <span className={`icon icon-delete`}>X</span>
        </li>
    )
}

export { TodoItem }

