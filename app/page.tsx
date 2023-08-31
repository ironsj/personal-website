import { getPosts } from "@/sanity/sanity-utils";
import Image from "next/image";
import Link from "next/link";

export default async function Home() {
  const posts = await getPosts();
  console.log(posts);

  return (
    <div className="max-w-5xl mx-auto py-20">
      <h1 className="text-7xl font-extrabold">
        Hello I&apos;m{" "}
        <span className="bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 bg-clip-text text-transparent">
          Jake
        </span>
        !
      </h1>
      <p className="mt-3 text-xl text-gray-600"> Hello everyone! </p>
      <h2 className="mt-24 font-bold text-gray-700 text-3xl"> Dummy Posts </h2>
      <div className="mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((post) => (
          <Link
            href={`/posts/${post.slug}`}
            key={post._id}
            className="border-2 border-gray-500 rounded-lg p-1 hover:scale-105 hover:border-blue-500 transition"
          >
            {post.mainImage.image && (
              <Image
                src={post.mainImage.image}
                alt={post.mainImage.alt}
                width={750}
                height={300}
                className="object-cover rounded-lg border border-gray-500"
              />
            )}
            <div className="mt-2 font-extrabold bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 bg-clip-text text-transparent">
              {post.title}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
