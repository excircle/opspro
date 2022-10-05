export default function GenericEnginesTable({ engines }) {
    const trEven = "bg-white text-blue-200";
    const trOdd = "bg-gray-200 text-blue-200";

    return (
        <div>
            <table className="w-half mx-auto">
                <tbody>
                    {engines.map((engine) => (
                        <tr key={engine.id} className={engine.id % 2 == 0 ? trEven : trOdd}>
                            <td className="px-6 text-left">{engine.engine}</td>
                            <td className="text-left">{engine.description}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}