import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'

const CartWidget = ({buttonStyle}) => {
    return (
        <div className={buttonStyle}>
            <FontAwesomeIcon icon={faCartShopping} />
        </div>
    )
}

export default CartWidget