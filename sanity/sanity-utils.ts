import { Post } from "@/types/post";
import { createClient, groq } from "next-sanity";
import config from "./config/client-config";

export async function getPosts(): Promise<Post[]> {
  const posts = await createClient(config).fetch(
    groq`*[_type == "post"] | order(_createdAt desc){
            _id,
            _createdAt,
            title,
            "slug": slug.current,
            publishedAt,
            mainImage {alt, "image": asset->url},
            body,
        }`
  );

  return posts;
}
