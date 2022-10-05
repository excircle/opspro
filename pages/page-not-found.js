import Link from "next/link";

export default function NotFound() {
    const pStyle = "font-thin";
    return (
        <div className="text-center">
            <h1 className="text-2xl">Page Not Found</h1>
            <p className={pStyle}>
                We Apologize. This page has not been found.
            </p>
            <p className={pStyle}>
                Please click below to return to the home page.
            </p>
            <br></br>
            <Link href="/"><a>HOME PAGE</a></Link>
        </div>
    )
}