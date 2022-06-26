import axios from "axios";

async function loadSingleProduct(id) {
    try {
        const response = await axios.get(
            `https://fec-inventory-api.herokuapp.com/product-info/${id}`
        );
        return await response.data;
    } catch (error) {
        console.log(error.message);
    }
}

export default loadSingleProduct;
