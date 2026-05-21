import style from "./styles";

const Footer = () => {
    const footer = [
        {
            title: "About Anhpika",
            data: [
                {
                    name: "Contact",
                },
                {
                    name: "About Us",
                },
                {
                    name: "Github",
                },
                {
                    name: "Facebook",
                },
            ],
        },
        {
            title: "Blog",
            data: [
                {
                    name: "Blog 1",
                },
                {
                    name: "Blog 2",
                },
                {
                    name: "Blog 3",
                },
            ],
        },
        {
            title: "Policy",
            data: [
                {
                    name: "Ban quyen",
                },
                {
                    name: " Dieu khoan",
                },
            ],
        },
    ];
    const user = [
        {
            id: 1,
            name: "anh1",
            age: 20,
            top: 1,
        },
        {
            id: 2,
            name: "anh2",
            age: 19,
            top: 2,
        },
        {
            id: 3,
            name: "anh3",
            age: 18,
            top: 3,
        },
        {
            id: 4,
            name: "anh3",
            age: 12,
            top: 4,
        },
    ];
    // @ts-ignore
    return (
        <footer
            // @ts-ignore
            style={style.footer}
        >
                <h3>User</h3>
            <div>
                <ul style={
                    {
                        display:"flex",
                        flexDirection:"row",
                        gap:"10px",
                        listStyleType:"none",
                    }
                }>
                    {user.map((item) => (
                        <div key={item.id}>
                            <li>
                                <p>
                                    {item.name} - {item.age} - top {item.top}
                                </p>
                            </li>
                        </div>
                    ))}
                </ul>
            </div>

            {/* <ul>
                {footer[0].data.map((item, index) => (
                    <li key={index}>
                        <p>{item.name}</p>
                    </li>
                ))}
            </ul> */}
        </footer>
    );
};

export default Footer;

// map dùng để hiện data của BE trong UI
