import { handleResponse, handleError, handleTableResponse, handleFormResponse } from "./apiUtils";
const baseUrl = process.env.NEXT_PUBLIC_API_URL + "/topics";

export function getTopics() {
    return fetch(baseUrl)
        .then(handleTableResponse)
        .catch(handleError);
}

export function addTopic(topic) {
    return fetch(baseUrl, {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(topic)
    }).then(handleFormResponse).catch(handleError);
}