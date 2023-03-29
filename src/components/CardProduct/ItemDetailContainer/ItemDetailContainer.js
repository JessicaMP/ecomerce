import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { getProductById } from '../../../assets/data/mock'
import ItemDetail from '../ItemDetail/ItemDetail'

const ItemDetailContainer = () => {
    const [product, setProduct] = useState()
    const [loading, setLoading] = useState(true)

    const { itemId } = useParams()

    useEffect(() => {
        getProductById(itemId).then(response => {
            setProduct(response)
        }).catch(error => {
            console.log(error)
        }).finally(()=> {
            setLoading(false)
        })
    }, [itemId])

    return(
        <div className='flex flex-column justify-center items-center'>
            {loading? <p>Cargando...</p>:<ItemDetail  {...product} />}
        </div>
    )
}

export default ItemDetailContainer