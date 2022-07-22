import { useState, useEffect } from "react";

export default function TopicsList(props) {
    return (
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Documentation</th>
                    <th>Tutorial</th>
                    <th>Launch</th>
                </tr>
            </thead>
            <tbody>
                {props.topics.map(topic => {
                    return (
                        <tr key={topic.id}>
                            <td>{topic.id}</td>
                            <td>{topic.documentation}</td>
                            <td>{topic.tutorial}</td>
                            <td>{topic.launch}</td>
                        </tr>
                    );
                })}
            </tbody>
        </table>
    );
}