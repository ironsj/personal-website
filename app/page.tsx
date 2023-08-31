import { getPosts } from "@/sanity/sanity-utils"

export default async function Home() {
  const posts = await getPosts();

  return (
    <div>Testing Posts Here: {posts.map(
      (post) => (
        <div key={post._id}>
          <h1>{post.title}</h1>
        </div>
      )
    )}</div>
  )
}
