import { handleError, handleFormResponse } from "./apiUtils";
const baseUrl = process.env.NEXT_PUBLIC_API_URL + "/content";

export function getContent(topic) {
    console.log(JSON.stringify(topic))
    return fetch(baseUrl, {
        method: "PUT",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(topic)
    }).then(handleFormResponse).catch(handleError);
}