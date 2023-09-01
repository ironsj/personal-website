import { getPost } from "@/sanity/sanity-utils";
import { PortableText } from "@portabletext/react";
import { codeInput } from "@sanity/code-input";
import Image from "next/image";

type Props = {
  params: { post: string };
};

export default async function Post({ params }: Props) {
  const slug = params.post;
  const post = await getPost(slug);

  return (
    <div>
      <header className="flex items-center justify-between">
        <h1 className="bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 bg-clip-text text-transparent text-5xl font-extrabold drop-shadow">
          {post.title}
        </h1>
        <div className="bg-gray-100 rounded-lg text-gray-500 font-bold py-3 px-4 whitespace-nowrap hover:bg-pink-500 hover:text-pink-100 transition">
          test
        </div>
      </header>

      <div className="text-lg text-gray-700 mt-5">
        <PortableText value={post.body} />
      </div>

      <Image
        src={post.mainImage.image}
        alt={post.mainImage.alt}
        width={1200}
        height={800}
      />
    </div>
  );
}
