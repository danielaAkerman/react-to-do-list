import React from "react"

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

function TodoSearch({ searchValue, setSearchValue }) {


    return (
        <div style={estilosDiv}>
            <input
                style={estilosInput}
                placeholder="Cortar Cebolla"
                value={searchValue}
                onChange={(event) => {
                    setSearchValue(event.target.value)
                }}
            />
        </div>
    )
}

export { TodoSearch }