import { CompleteIcon } from "./CompleteIcon"
import { DeleteIcon } from "./DeleteIcon"
import "./TodoItem.css"

function TodoItem({ text, completed, onComplete, onDelete }) {
    return (
        <li>
            <CompleteIcon onClick={() => onComplete()} />
            {/* <span
                className={`icon icon-check ${completed && "icon-check--active"}`}
                onClick={onComplete}
                >V</span> */}
            <p className={`todo-item ${completed && "todo-item-completed"}`}>{text}</p>
            {/* <span className={`icon icon-delete`}
                onClick={onDelete}
                >X</span> */}
            <DeleteIcon onClick={onDelete} />
        </li>
    )
}

export { TodoItem }

