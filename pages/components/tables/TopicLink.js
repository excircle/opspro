import Link from "next/link";

export default function TopicLink({ fields }) {
    return (
        <Link href={
            {
                pathname: "topic/[id]",
                query: fields
            }}><a>{fields.documentation}</a></Link>
    )
}