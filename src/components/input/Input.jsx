import styles from './Input.module.css'

export const Input = ({ type, label, name, id, defaultValue }) => {
  return (
    <div className="grid gap-2">
      <label htmlFor={id}>{label}</label>
      <input defaultValue={defaultValue} type={type} name={name} id={id} className={styles.input} />
    </div>
  )
}
