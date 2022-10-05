export default function SubtopicsTable({ subtopics }) {
    const trEven = "bg-white text-blue-200";
    const trOdd = "bg-gray-200 text-blue-200";

    return (
        <div>
            <table className="w-half mx-auto">
                <tbody>
                    {subtopics.map((subtopic) => (
                        <tr key={subtopic.id} className={subtopic.id % 2 == 0 ? trEven : trOdd}>
                            <td className="px-6">{subtopic.id}</td>
                            <td className="text-left">{subtopic.title}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}