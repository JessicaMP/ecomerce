const Button = ({callback, label, buttonStyle}) => {
    return <button onClick={callback} className={buttonStyle}>{label}</button>
}

export default Button