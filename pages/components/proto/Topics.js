import { useState, useEffect } from "react";
import { getTopics } from "../../../api/topicApi";
import Link from "next/link";

export default function Topics() {
    const [topics, setTopics] = useState([]);

    return (
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                    <th>ID</th>
                    <th>Documentation</th>
                    <th>Tutorial</th>
                    <th>Launch</th>
                </tr>
            </thead>
            <tbody>
                {topics.map(topic => {
                    return (
                        <tr key={topic.id}>
                            <td>{topic.id}</td>
                            <td><a className="font-medium text-blue-600 dark:text-blue-500 hover:underline" href={topic.doc_url}>{topic.documentation}</a></td>
                            <td><a className="font-medium text-blue-600 dark:text-blue-500 hover:underline" href={topic.tutorial_url}>{topic.tutorial}</a></td>
                            <td><a className="font-medium text-blue-600 dark:text-blue-500 hover:underline" href={topic.launch_url}>{topic.launch}</a></td>
                        </tr>
                    );
                })}
            </tbody>
        </table>
    );
}