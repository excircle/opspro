import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { getContent } from "../../api/contentApi";

export default function TopicContent() {
    const router = useRouter();
    const props = router.query;

    const [Loading, setLoading] = useState(true);
    const [content, setContent] = useState(null);

    useEffect(() => {
        async function generateData() {
            const response = await getContent({ "uid": props.uid })
            const data = await JSON.parse(response)
            setContent(data[0])
            setLoading(false)
        }
        generateData()
    }, [props])

    if (Loading) {
        return <h1 className="text-center text-2xl">LOADING PAGE</h1>
    }

    return (
        <>
            <h1 className="text-center text-2xl">{props.documentation}</h1>
            <br />
            <h1 className="text-2xl">Documentation</h1>
            <br />
            <p className="font-thin">
                {content.content}
            </p>
        </>
    )
}