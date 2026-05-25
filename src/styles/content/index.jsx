import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { fetchApiProduct } from "../../service/product";
import "./product.css";

const PRODUCTS_PER_PAGE = 5;

const Content = () => {
    const [products, setProducts] = useState([]);
    const [page, setPage] = useState(1);
    const [total, setTotal] = useState(0);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const navigate = useNavigate();
    const handleNavigator = (id) => {
        navigate(`/products/${id}`);
    };
    const loadProducts = async (pageNum) => {
        try {
            const data = await fetchApiProduct(pageNum);
            setProducts(data.products || []);
            setTotal(data.total || 0);
        } catch (err) {
            setError(err.message || "Unexpected error");
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        setLoading(true);
        loadProducts(page);
    }, [page]);

    const MAX_PAGES = 4;
    const totalPages = Math.min(
        Math.ceil(total / PRODUCTS_PER_PAGE),
        MAX_PAGES,
    );

    const handlePrev = () => setPage((p) => Math.max(p - 1, 1));
    const handleNext = () => setPage((p) => Math.min(p + 1, totalPages));

    if (loading)
        return <div className="product-loading">Loading products...</div>;
    if (error) return <div className="product-error">Error: {error}</div>;

    return (
        <div className="product-list-page">
            <h1 className="page-title">All Products</h1>
            <div className="product-grid">
                {products.map((p) => (
                    <div key={p.id} onClick={() => handleNavigator(p.id)}>
                        <img
                            src={p.thumbnail}
                            alt={p.title}
                            className="product-image"
                        />
                        <h3 className="product-title">{p.title}</h3>
                        <p className="product-price">${p.price}</p>
                    </div>
                ))}
            </div>
            <div className="pagination">
                <button
                    onClick={handlePrev}
                    disabled={page === 1}
                    className="page-btn"
                >
                    ‹ Prev
                </button>
                <span className="page-info">
                    Page {page} of {totalPages}
                </span>
                <button
                    onClick={handleNext}
                    disabled={page === totalPages}
                    className="page-btn"
                >
                    Next ›
                </button>
            </div>
        </div>
    );
};

export default Content;
