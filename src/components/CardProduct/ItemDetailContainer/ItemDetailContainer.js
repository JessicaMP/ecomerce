import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { getProductById } from '../../../assets/data/mock'
import ItemDetail from '../ItemDetail/ItemDetail'

const ItemDetailContainer = () => {
    const [product, setProduct] = useState()

    const { itemId } = useParams()

    useEffect(() => {
        getProductById(itemId).then(response => {
            setProduct(response)
        }).catch(error => {
            console.log(error)
        })
    }, [itemId])

    return(
        <div className='flex flex-column justify-center items-center'>
            <ItemDetail  {...product} />
            {/* hola */}
        </div>
    )
}

export default ItemDetailContainer