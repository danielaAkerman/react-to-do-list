import "./CreateTodoButton.css"

function CreateTodoButton() {
    return (
        <div className="button-create-container">
            <button onClick={(event)=> {
                console.log("le diste click")
                console.log(event)
                console.log(event.target)
                }}>
                +
            </button>
        </div>
    )
}

export { CreateTodoButton }