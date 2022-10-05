import Head from 'next/head';
import TopicsTable from "./components/tables/TopicTable";
const baseUrl = process.env.NEXT_PUBLIC_API_URL + "/topics";

export default function Home({ topics }) {
  return (
    <>
      <Head>
        <title>Operations Professional Training Site</title>
        <meta property="og:title" content="My page title" key="title" />
      </Head>
      <div className="bg-slate-600 px-36">
        <div className="bg-slate-100">
          <h1 className="text-center text-2xl">Exam Topics</h1>
          <TopicsTable topics={topics} />
        </div>
      </div>
    </>
  )
}

export async function getStaticProps() {
  const res = await fetch(baseUrl)
  const topics = await res.json()

  return {
    props: {
      topics,
    },
  }
}