import commonStyles from "../styles/common";
import style from "../styles/content/styles";
// @ts-ignore
const ItemProduct = ({data, id}) => {
    const { name, price, image, description } = data;
    
    return (
        <div
            // @ts-ignore
            style={commonStyles.displayContent}
        >
            <img style={style.image} src={image} alt={name} />
            <p>{name}</p>
            <p>{price}</p>
            <p>{description}</p>
        </div>
    );
};

export default ItemProduct;
