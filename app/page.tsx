import { getPosts } from "@/sanity/sanity-utils"

export default async function Home() {
  const posts = await getPosts();
  console.log(posts);

  return (
    <div>Testing Posts Here: {posts.map(
      (post) => (
        <div key={post._id}>{post.title}</div>
      )
    )}</div>
  )
};
