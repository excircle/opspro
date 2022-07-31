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

export function updateTopic(topic) {
    console.log(JSON.stringify(topic))
    return fetch(baseUrl, {
        method: "PUT",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(topic)
    }).then(handleFormResponse).catch(handleError);
}

export function deleteTopic(topic) {
    return fetch(baseUrl, {
        method: "DELETE",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(topic)
    }).then(handleFormResponse).catch(handleError);
}

export function launchTopic(topic) {
    return "ok"
}