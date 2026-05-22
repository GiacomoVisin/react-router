import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import ProductPage from "./ProductPage"
import Card from "./Card"
export default function Products({item}) {

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
                           <Card item={item}/>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}