import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { BASE_URL } from "../../const";
import "./product.css";
import { fetchApiProductById } from "../../service/product";

const Product = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchProduct = async () => {
        try {
            const response = await fetchApiProductById(id);
            setProduct(response);
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchProduct();
    }, [id]);

    if (loading)
        return <div className="product-loading">Loading product...</div>;
    if (error) return <div className="product-error">Error: {error}</div>;

    return (
        <div className="product-detail">
            <h1 className="product-title">{product.title}</h1>
            <div className="product-content">
                <img
                    src={
                        product.images && product.images[0]
                            ? product.images[0]
                            : ""
                    }
                    alt={product.title}
                    className="product-image"
                />
                <div className="product-info">
                    <p className="product-description">{product.description}</p>
                    <p className="product-price">Price: ${product.price}</p>
                    <p className="product-rating">
                        Rating: {product.rating} / 5
                    </p>
                    <p className="product-stock">In stock: {product.stock}</p>
                </div>
            </div>
        </div>
    );
};

export default Product;
