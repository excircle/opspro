import Head from 'next/head'
import TopicsTable from './components/tables/TopicsTable'

export default function Home() {
  return (
    <>
      <Head>
        <title>Operations Professional Training Site</title>
        <meta property="og:title" content="My page title" key="title" />
      </Head>
      <div className="bg-slate-600 px-36">
        <div className="bg-slate-100">
          <h1 className="text-center text-2xl">Exam Topics</h1>
          <TopicsTable />
        </div>
      </div>
    </>
  )
}
