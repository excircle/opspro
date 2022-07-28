import { launchTopic } from "../../../api/topicApi";
import { useRouter } from "next/router";

export default function TopicLaunchButton({ fields }) {
    const router = useRouter();

    const handleClick = async (fields) => {
        const res = await launchTopic(fields);
        console.log(res)
        router.push('/');
    };

    return <button onClick={""} >Launch</button>;
}