import React from "react"
import { TodoContext } from "../TodoContext"

const estilosInput = {
    width: "100%",
    maxWidth: '620px',
    padding: 16,
    margin: "24px 20px",
    borderRadius: 24,
    textAlign: "center",
    fontSize: 24,
    display: 'block',
    border: 'none',
    boxShadow: "0px 5px 1000px pink"
}

const estilosDiv = {
    display: "flex",
    justifyContent: "center"
}

function TodoSearch() {
    const { searchValue, setSearchValue, loading } = React.useContext(TodoContext)

    return (
        <div style={estilosDiv}>
            <input
                style={estilosInput}
                placeholder={loading ? "Preparando todo..." : "Buscar..."}
                value={searchValue}
                onChange={(event) => {
                    setSearchValue(event.target.value)
                }}
            />
        </div>
    )
}

export { TodoSearch }