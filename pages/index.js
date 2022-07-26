const baseUrl = process.env.NEXT_PUBLIC_API_URL + "/topics";
import TopicEditButton from './components/tables/TopicEditButton';
import Link from 'next/link';

export default function Home({ topics }) {
  return (
    <table>
      <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 text-center">
        <tr>
          <td>Topic</td>
          <td>Edit</td>
        </tr>
      </thead>
      <tbody>
        {topics.map((topic) => (
          <tr key={topic.id}>
            <td className="font-medium text-blue-600 dark:text-blue-500 hover:underline py-1 px-2">{topic.documentation}</td>
            <td className="font-medium text-blue-600 dark:text-blue-500 hover:underline"><TopicEditButton fields={topic} /></td>
          </tr>
        ))}
      </tbody>
    </table>
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