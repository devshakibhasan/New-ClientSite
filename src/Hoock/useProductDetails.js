import { useEffect, useState } from "react"

const useProductDetails = productId =>{
    
    const [products, setProduct] = useState({});

    useEffect( () =>{
        fetch(`http://localhost:5000/product/${productId}`)
        .then(res => res.json())
        .then(data => setProduct(data));
    }, [productId]);

    return [products];
}

export default useProductDetails;