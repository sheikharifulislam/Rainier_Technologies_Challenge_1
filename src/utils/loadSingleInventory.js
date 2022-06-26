import axios from "axios";

async function loadSingleInventory(id) {
    try {
        const response = await axios.get(
            `https://fec-inventory-api.herokuapp.com/inventory-info?product_id=${id}`
        );
        return await response.data[0];
    } catch (error) {
        console.log(error.message);
    }
}

export default loadSingleInventory;
