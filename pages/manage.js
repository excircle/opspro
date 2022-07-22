import Head from 'next/head'
import TopicsForms from "./components/forms/TopicsForm"

export default function Manage() {
    return (
        <>
            <Head>
                <title>Manage Training Page</title>
                <meta property="og:title" content="Manage Page" key="title" />
            </Head>
            <div className="bg-slate-600 px-36">
                <div className="bg-slate-100">
                    <h1 className="text-center text-2xl">Add Content</h1>
                    <TopicsForms />
                </div>
            </div>
        </>
    )
}