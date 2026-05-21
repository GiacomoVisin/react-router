import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
export default function ProductPage() {
    const { id } = useParams()
    const [item, setCharacter] = useState([])

    const api = `https://fakestoreapi.com/products/${id}`

    useEffect(() => {
        fetch(api)
            .then(res => res.json())
            .then(data => setCharacter(data))
            .catch(err => console.error(err))
    }, [])

    return (
        <div className="container">
            <div className="card center p-3" style={{ height: "800px", width: "500px" }} >
                <img src={item.image} alt={item.description} style={{ width: "300px" }} className="mb-2 center" />
                <p> <strong>Category: </strong>{item.category} </p>
                <p> <strong>Title: </strong>{item.title} </p>
                <p> <strong>Price: </strong> {item.price} $ </p>
                <p> <strong>Description: </strong> {item.description} $ </p>
                <hr />
                <p> <strong>Rating: </strong> {item?.rating?.rate}⭐  <strong>Count: </strong> {item?.rating?.count}</p>
            </div>
        </div>
    )
}