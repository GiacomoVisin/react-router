import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import ProductPage from "./ProductPage"
export default function Products() {

    const [products, setProducts] = useState([])

    useEffect(() => {
        fetch("https://fakestoreapi.com/products")
            .then((res) => res.json())
            .then((data) => setProducts(data))
            

    }, [])
    return (
        <>
            <h1>Prodotti</h1>

            <div className="container">
                <div className="row">
                    {products.map((item) => (
                        <div className="col col-lg-4 col-md-4 " key={item.id}>
                            <div className="card p-3 mb-3">
                                <img src={item.image} alt={item.description} style={{height: "300px"}} />
                                <p> <strong>Title: </strong>{item.title} </p>
                                <p> <strong>Price: </strong> {item.price} $ </p>
                                <Link className="link" to={`/prodotti/${item.id}`}> More...</Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}