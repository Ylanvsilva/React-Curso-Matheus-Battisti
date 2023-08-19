const UserDetails = ({ name, job, age }) => {
    return (
        <div>
            <h1>Nome: {name}</h1>
            <h2>Trabalho: {job}</h2>
            <h3>Idade: {age}</h3>
            {age >= 18 ? (<p>Você esta APTO a tirar a carteira</p>) : (<p>Você NÃO pode tirar carteira</p>)}
        </div>
    )
}

export default UserDetails