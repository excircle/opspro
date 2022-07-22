import axios from "axios";

const BASE_URL = process.env.NEXT_PUBLIC_API_URL + "/topics";

// Axios instance for Topic
export default axios.create({
    baseURL: BASE_URL,
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    }
});