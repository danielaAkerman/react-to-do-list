import React from "react"

const estilosInput = {
    width: "100%",
    padding: 16,
    margin: "24px 20px",
    borderRadius: 24,
    textAlign: "center",
    fontSize: 24,
    display: 'block',
    border: 'none',
    boxShadow: "0px 5px 50px rgba(32, 35, 41, 0.15)"
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
                placeholder="Agrega tu nuevo objetivo"
                value={searchValue}
                onChange={(event) => {
                    setSearchValue(event.target.value)
                }}
            />
        </div>
    )
}

export { TodoSearch }