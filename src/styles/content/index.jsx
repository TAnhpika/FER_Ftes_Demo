import { fetchApiProduct } from "../../service/product";
import commonStyles from "../common";
import { useEffect, useState } from "react";

const Content = () => {
    const [products, setProducts] = useState([]);
    const [page, setPage] = useState(1);

    const fetchData = async () => {
        const res = await fetchApiProduct(page);
        setProducts(res.products)
    }
    useEffect(() => {
        fetchData(page);
    }, [page]);

    return (
        <div
            // @ts-ignore
            style={commonStyles}
        >
            <div>
                {products?.map((product) => (
                    <div key={product.id}>
                        <img src={product.thumbnail} alt={product.title} />
                        <div>{product.title}</div>
                        <p>{product.description}</p>
                        <p>{product.price}</p>
                    </div>
                ))}
            </div>
            <button onClick={() => setPage(page - 1)} disabled={page === 1}>
                Trang trước
            </button>
            <button onClick={() => setPage(page + 1)}>Trang sau</button>
        </div>
    );
};

export default Content;
