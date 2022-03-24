import { axiosClient } from "./Link";
const ProAPI = {
    getAll() {
        const url = `/products`;
        return axiosClient.get(url);
    },
    get(id) {
        const url = `/products/${id}`;
        return axiosClient.get(url);
    },
    add(product) {
        const url = `/products`;
        return axiosClient.post(url, product);
    },
    remove(id) {
        const url = `/products/${id}`;
        return axiosClient.delete(url);
    },
    upload(id, data) {
        const url = `/products/${id}`;
        return axiosClient.put(url, data);
    },

};
export default ProAPI;