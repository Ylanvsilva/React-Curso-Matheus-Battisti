const UserDetails = ({ name, job, age}) => {
    return (
        <div>
            <h1>Nome: {name}</h1>
            <h1>Trabalho: {job}</h1>
            <h1>Idade: {age}</h1>
            {age > 18 ? ("Pode dirigir") : ("Nao pode dirigir")}
        </div>
    )
}

export default UserDetails