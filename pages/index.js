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

// This function gets called at build time on server-side.
// It won't be called on client-side, so you can even do
// direct database queries.
export async function getStaticProps() {
  // Call an external API endpoint to get topics.
  // You can use any data fetching library
  const res = await fetch(baseUrl)
  const topics = await res.json()

  // By returning { props: { topics } }, the Blog component
  // will receive `topics` as a prop at build time
  return {
    props: {
      topics,
    },
  }
}