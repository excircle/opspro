import { useRouter } from "next/router";

export default function TopicContent() {
    const router = useRouter();
    const props = router.query;

    return (
        <>
            <h1 className="text-center text-2xl">{props.documentation} Documentation</h1>
            <br />
            <p>
                This is the section where I'll add documentation.
            </p>
        </>
    )
}