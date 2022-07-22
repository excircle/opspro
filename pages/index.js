const baseUrl = process.env.NEXT_PUBLIC_API_URL + "/topics";
import Link from 'next/link';

export default function Home({ posts }) {
  return (
    <table>
      <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
        <tr>
          <td>Topic</td>
          <td>Edit</td>
        </tr>
      </thead>
      <tbody>
        {posts.map((post) => (
          <tr key={post.id}>
            <td className="font-medium text-blue-600 dark:text-blue-500 hover:underline">{post.documentation}</td>
            <td className="font-medium text-blue-600 dark:text-blue-500 hover:underline"><Link href={{ pathname: "edit/[id]", query: { id: `${post.id}`, launch: `${post.launch}`, } }}><a>EDIT</a></Link></td>
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
  // Call an external API endpoint to get posts.
  // You can use any data fetching library
  const res = await fetch(baseUrl)
  const posts = await res.json()

  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      posts,
    },
  }
}