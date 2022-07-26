import TopicEditButton from "./TopicEditButton";

export default function TopicsTable({ topics }) {
    const divStyle = "overflow-x-auto relative shadow-md sm:rounded-lg";
    const tblStyling = "w-full text-sm text-left text-gray-500 dark:text-gray-400";
    const theadStyling = "text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400";
    const thStyling = "py-3 px-6";
    const tdLink = "font-medium text-blue-600 dark:text-blue-500 hover:underline";
    const tdButton = "px-6 inline-flex text-gray-500 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-2 py-1 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700";

    return (
        <div className={divStyle}>
            <table className={tblStyling}>
                <thead className={theadStyling}>
                    <tr>
                        <th className={thStyling}>Topic</th>
                        <th className={thStyling}>Edit</th>
                    </tr>
                </thead>
                <tbody>
                    {topics.map((topic) => (
                        <tr key={topic.id}>
                            <td className={tdLink}>{topic.documentation}</td>
                            <td className={tdButton}><TopicEditButton fields={topic} /></td>
                        </tr>
                    ))}
                </tbody>
            </table >
        </div>
    );
}