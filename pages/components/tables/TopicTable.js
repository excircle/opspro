import TopicEditButton from "./TopicEditButton";
import TopicDeleteButton from "./TopicDeleteButton";
import TopicLaunchButton from "./TopicLaunchButton";
import TopicLink from "./TopicLink";
import Link from "next/link";

export default function TopicsTable({ topics }) {
    const thStyle = "p-3 text-sm font-semibold tracking-wide text-left";
    const trEven = "bg-white";
    const trOdd = "bg-gray-200";
    const tdLink = "font-medium text-blue-600 dark:text-blue-500 hover:underline";

    const assignStaticPage = (value) => {
        var page = value.toLowerCase().replace(/ /g, "-")
        switch (page) {
            case "create-working-vault-server-configuration":
                return "/topic/create-working-vault-server-configuration"
            case "monitor-a-vault-environment":
                return "/topic/monitor-a-vault-environment"
            case "employ-the-vault-security-model":
                return "/topic/employ-the-vault-security-model"
            case "build-fault-tolerant-vault-environments":
                return "/topic/build-fault-tolerant-vault-environments"
            case "understand-hsm-integration":
                return "/topic/understand-hsm-integration"
            case "scale-vault-for-performance":
                return "/topic/scale-vault-for-performance"
            case "configure-access-control":
                return "/topic/configure-access-control"
            case "configure-vault-agent":
                return "/topic/configure-vault-agent"
            default:
                return "/page-not-found"
        }
    }

    return (
        <div>
            <table className="w-full">
                <thead className="bg-gray-50 border-b-2 border-gray-200">
                    <tr>
                        <th className={thStyle}>ID</th>
                        <th>Topic</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {topics.map((topic) => (
                        <tr className="text-center" key={topic.id} className={topic.id % 2 == 0 ? trEven : trOdd}>
                            <td>{topic.id}</td>
                            <td className={tdLink}>
                                <Link href={assignStaticPage(topic.documentation)}>
                                    <a>{topic.documentation}</a>
                                </Link>
                            </td>
                            <td><TopicEditButton fields={topic} /></td>
                            <td>Delete</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}