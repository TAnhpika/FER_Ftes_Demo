const API_BASE_URL = import.meta.env.VITE_API_URL;

export const fetchApiProduct = async (page) => {
    console.log("API_BASE_URL", API_BASE_URL);
    try {
        const response = await fetch(
            `${API_BASE_URL}?skip=${(page - 1) * 5}&limit=5`,
        );
        const data = await response.json();
        return data;
    } catch (error) {
        console.log("Error fetching API:", error);
    }
};

export const fetchApiProductById = async (id) => {
    try {
        const res = await fetch(`${API_BASE_URL}/${id}`);
        const data = res.json();
        return data;
    } catch (error) {
        console.log("Error fetching API:", error);
    }
};
