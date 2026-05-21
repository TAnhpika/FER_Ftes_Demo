import style from "./styles";

const Header = () => {
    return (
        <header
            // @ts-ignore
            style={style.header}
        >
            <ul style={style.list}>
                <li style={style.listItem}>Home</li>
                <li style={style.listItem}>Contact</li>
                <li style={style.listItem}>About</li>
            </ul>
        </header>
    );
};

export default Header;
