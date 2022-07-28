import { deleteTopic } from "../../../api/topicApi";
import { useRouter } from "next/router";

export default function TopicDeleteButton({ fields }) {
    const router = useRouter();

    const handleClick = async (fields) => {
        const res = await deleteTopic(fields);
        console.log(res)
        router.push('/');
    };

    return <button onClick={() => handleClick(fields)} >Delete</button>;
}