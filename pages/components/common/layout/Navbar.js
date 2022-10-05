import Link from "next/link"

export default function Navbar() {
    return (
        <>
            <h1 className="text-3xl font-bold underline">ISE OpsPro Trainer</h1>
            <nav>
                <Link href="/">
                    <a>| Home</a>
                </Link> |
                <Link href="/manage">
                    <a> Manage</a>
                </Link> |
                <Link href="/type-component">
                    <a> Type Component</a>
                </Link> |
            </nav>
        </>
    )
}