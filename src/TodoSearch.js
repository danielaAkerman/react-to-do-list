const estilosInput = {
    width: "80vw",
    padding: 16,
    margin: "20px auto",
    borderRadius: 32,
    textAlign: "center",
    fontSize: 24,

}

const estilosDiv = {
    display: "flex",
    justifyContent: "center"
}

function TodoSearch() {
    return (
        <div style={estilosDiv}>
            <input style={estilosInput} placeholder="Cortar Cebolla" />
        </div>
    )
}

export { TodoSearch }