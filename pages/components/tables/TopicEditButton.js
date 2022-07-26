import Link from "next/link";

export default function TopicEditButton({ fields }) {
    return (
        <Link href={
            {
                pathname: "edit/[id]",
                query: fields
            }}><a>EDIT</a></Link>
    )
}