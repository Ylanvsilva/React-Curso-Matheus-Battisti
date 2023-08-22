import styles from './Cars.module.css'

const Cars = ({ cars }) => {
    return (
        <div className={styles.cars}>
            <h1>{cars.name}</h1>
            <h1>km: {cars.km}</h1>
            <h1>cor: {cars.color}</h1>
        </div>
    )
}

export default Cars