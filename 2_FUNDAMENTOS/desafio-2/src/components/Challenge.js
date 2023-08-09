const Challenge = () => {
    const a = 7
    const b = 7
    
    return (
        <div>
            <h1>Valor A: {a}</h1>
            <h1>Valor B: {b}</h1>
            <button onClick={() => console.log(a + b)}>Soma</button>
        </div>
    )
}

export default Challenge